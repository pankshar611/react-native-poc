import React, { FC } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Header from './header.component';

const styles = StyleSheet.create({
    homescreen: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        width: 200,
        margin: 5,
        color: "#fff"
    }
});

const Home: FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} title="Home" />
            <View style={styles.homescreen}>
                <View style={styles.button}>
                    <Button color="#2196F3" title="Devices" onPress={() => navigation.push('Devices')} />
                </View>
                <View style={styles.button}>
                    <Button color="#2196F3" title="Drives" onPress={() => navigation.push('Drives')} />
                </View>
            </View>
        </>
    );
};

export default Home;