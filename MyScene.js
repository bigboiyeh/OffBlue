import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import { Font } from 'expo';
import Scene2 from './Scene2';
import images from './src/images';

class MyScene extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isReady: false,
        }
        this._onForward = this._onForward.bind(this);
    }
    // async componentDidMount() {
    //     await Font.loadAsync({
    //         'a': require('./src/fonts/FuturaSHO.otf'),
    //     });
    //     this.setState({ isReady: true });
    // }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage}
                    source = {images.supreme}>
                </Image>
                <View style={styles.mask}>
                    <Text style={styles.title}>
                        HypeBerry
                    </Text>
                    {/* <Button
                        onPress={this._onForward}
                        title="Enter the Hype"
                    > */}
                    <View style={styles.button}>
                        <Text style={this.state.isReady && styles.entry}>
                            Entry
                        </Text>
                    </View>
                    {/* </Button> */}
                    <Text style={styles.description}>
                        Feel the hype, be the hype
                    </Text>
                </View>


            </View>

        )
    }


    _onForward() {
        this.props.navigator.push({
            component: Scene2,
            title: 'Scene 2',
        });
    }
}

export default MyScene;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    mask: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        position: 'absolute',
        flex: 1,
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        padding: 0,
        margin: 0,
    },
    entry: {
        color: 'rgb(500, 500, 500)',
        fontSize: 40,
        fontFamily: 'a',
    },
    title: {
        flex: 2,
        textAlign: 'center',
        margin: 'auto',
        paddingTop: 100,
        fontSize: 60,
        color: 'rgb(200, 200, 200)',
        padding: 40,
        fontFamily: 'Gill Sans',
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: '#DB3023',
        justifyContent: 'center',
    },
    butt: {
        width: 200,
        height: 60,
        backgroundColor: '#DB3023',
    },
    description: {
        flex: 1,
        textAlign: 'center',
        margin: 'auto',
        paddingTop: 100,
        fontSize: 20,
        color: 'rgb(200, 200, 200)',
        fontFamily: 'Gill Sans',
    }
})
