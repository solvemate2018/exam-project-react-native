import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../App';
import FeedItem from '../../components/FeedItem';
import { fetchAll } from '../../stores/actions/event.actions';

export default function HomeScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    let events: any;
    events = useSelector((state: RootState) => state.event.events)

    function readPersistedEventInfo(events) {
        if (events.length > 0) {
            setData(events);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (data.length == 0) {
            dispatch(fetchAll());
            readPersistedEventInfo(events);
        }
    }, [dispatch, events])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {isLoading ? (
                    <Text style={styles.loading}>Still loading</Text>
                ) : (
                    data.map((event) => {
                        return (
                            <FeedItem key={event.name} event={event} />
                        );
                    })
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        paddingTop: StatusBar.currentHeight - 40,

    },
    loading: {
        fontSize: 40
    }
})