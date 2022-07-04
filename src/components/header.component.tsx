import React, { FC } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#2196F3',
        flexDirection: 'row',
        padding: 20
    },
    titleStyle: {
        flex: 1,
        textAlign: 'center',
        color: '#fff'
    }
});

const Header: FC<{ navigation: any, title: string }> = ({ navigation, title }) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    );
};

export default Header;