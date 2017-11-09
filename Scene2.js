import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import MyScene from './MyScene';

class Scene2 extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', margin: 'auto'}}>Yea boi! Ryan the best boi.</Text>
                <Button
                    onPress={this._onForward}
                    title="Tap me to load the previous scene"
                />
            </View>

        )
    }

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }

    _onForward() {
        this.props.navigator.push({
            component: MyScene,
            title: 'My Initial Scene',
        });
    }
}

export default Scene2;
