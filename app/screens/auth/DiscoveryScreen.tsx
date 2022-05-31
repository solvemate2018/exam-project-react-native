import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Searchbar } from 'react-native-paper';
import DiscoveryCategory from '../../components/DiscoveryCategory';

export default function DiscoveryScreen() {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <Searchbar style={styles.searchBar}
                        inputStyle={styles.searchBarText}
                        placeholder="Search for events, posts and more"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        iconColor="#32305D"
                    />
                </View>
                <DiscoveryCategory name={"events"} imageUrl={"https://files.guidedanmark.org/files/382/382_5476.jpg"} color="#6c1f6b" />
                <DiscoveryCategory name={"student organisations"} imageUrl={"https://www.cphbusiness.dk/media/80275/irina-dicusara_3052_690.jpg?width=690&height=460"} color="#323056" />
                <DiscoveryCategory name={"posts"} imageUrl={"https://st.depositphotos.com/1032463/1373/i/950/depositphotos_13732950-stock-photo-background-of-old-vintage-newspapers.jpg"} color="#28866c" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        height: "90%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    searchBar: {
        width: "90%",
        borderRadius: 10,
        alignSelf: "center"
    },
    searchBarText: {
        fontSize: 13,
    },
    searchBarContainer: {
        height: 80
    }
})