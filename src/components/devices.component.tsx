import React, { FC, useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, SectionList, Image, NativeModules  } from 'react-native';
import Header from './header.component';
import { DevicesData } from '../data/mockData';

const Item: FC<{ data: any }> = ({ data }) => {
    return (<View style={styles.item}>
        <Image style={styles.deviceIcons} source={data.imgSrc} />
        <Text style={styles.title}>{data.name}</Text>
    </View>)
};

const Devices: FC<{ navigation: any }> = ({ navigation }) => {

    const [devices, setDevices] = useState([]);
    const getDrivers = async() => {
        var result = await NativeModules.RNReaderModule.getDrivers();
        var splitted = result.split(/\r?\n/);
        setDevices(splitted);
        return splitted;
    };

    useEffect(() => {
        getDrivers();
    }, []);
    return (
        <>{console.log("devices", devices)}
            <Header navigation={navigation} title="Devices" />
            <View style={styles.buttonStyle}>
                <Button title="< back" onPress={() => navigation.push('Home')} />
            </View>
            <View style={styles.sectionStyle}>
                <SectionList
                    sections={DevicesData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item data={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: "#000",
        width: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 16
    },
    header: {
        fontSize: 20,
    },
    sectionStyle: {
        padding: 20
    },
    deviceIcons: {
        width: 30,
        height: 30
    },
    buttonStyle: {
        width: 100,
        alignSelf: 'flex-end',
        padding: 10
    }
});

export default Devices;