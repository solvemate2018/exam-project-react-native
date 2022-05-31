import * as SecureStore from 'expo-secure-store';
import { FirebaseSignupSuccess } from '../../entities/FirebaseSignupSuccess';
import { User } from '../../entities/User';

export const SIGNUP = 'SIGNUP';
export const REHYDRATE_USER = 'REHYDRATE_USER';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

export const rehydrateUser = (user: User, idToken: string) => {
    return { type: REHYDRATE_USER, payload: { user, idToken } }
}

export const logout = () => {
    SecureStore.deleteItemAsync('idToken');
    SecureStore.deleteItemAsync('user');
    return { type: LOGOUT }
}

export const signup = (email: string, password: string, repeatPassword: string) => {
    return async (dispatch: any, getState: any) => {
        if (password != repeatPassword) {
            alert("The passwords are not matching");
            return;
        }
        let response;
        try {
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYyPSedmBto8IrVSNvXSkYPv3n-PNjgdI';
            const request: RequestInit = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            };
            response = await fetch(url, request);
        }
        catch (error) {
            console.log(error)
        }

        if (response.ok) {
            const data: FirebaseSignupSuccess = await response.json();
            const user = new User(data.email, '', '');

            await SecureStore.setItemAsync('itToken', data.idToken);
            await SecureStore.setItemAsync('user', JSON.stringify(user));

            dispatch({ type: SIGNUP, payload: { user, idToken: data.idToken } })
        }
        else {
            alert("Server error, please try again later")
        }
    }
}


export const login = (email: string, password: string) => {
    return async (dispatch: any, getState: any) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYyPSedmBto8IrVSNvXSkYPv3n-PNjgdI', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        if (response.ok) {
            const data: FirebaseSignupSuccess = await response.json();
            const user = new User(data.email, '', '');

            await SecureStore.setItemAsync('itToken', data.idToken);
            await SecureStore.setItemAsync('user', JSON.stringify(user));

            dispatch({ type: SIGNUP, payload: { user, idToken: data.idToken } })
        }
        else {
            alert("Invalid username and password!")
        }
    }
}