import * as SecureStore from 'expo-secure-store';
import { Event } from '../../entities/Event';
import eventsJson from '../../data/events.json';
export const FETCHALL = 'FETCHALL';

export const fetchAll = () => {
    return async (dispatch: any, getState: any) => {
        let events = []
        eventsJson.events.forEach(item => {
            let event = new Event(item.name, new Date(item.dateTime), item.location, item.category, item.pictureUrl);
            events.push(event)
        });
        await dispatch({ type: FETCHALL, payload: { events: events } })
    }
}