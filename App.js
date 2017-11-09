import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry,
    NavigatorIOS,
} from 'react-native';

import { Font } from 'expo'
import MyScene from './MyScene';
import Scene2 from './Scene2';

export default class YeaBoi extends Component {
    async componentDidMount() {
        await Font.loadAsync({
            'a': require('./src/fonts/FuturaSHO.otf'),
        });
        this.setState({ isReady: true });
    }
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    title: '',
                    component: MyScene,
                    passProps: {index: 0},
                }}
                style={{flex: 1}}
                renderScene={(route, navigator) => {
                    <MyScene title={route.title} />
                }}
            />
        );
    }

}
