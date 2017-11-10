import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  AppRegistry
} from 'react-native';
import Images from './src/images/index'



export default class App extends React.Component {
  render() {





    return (


      <View style={localStyles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bouncesZoom={true}
        style={localStyles.scroll}>

          <Text style={localStyles.header}>HypeBerry Top Picks</Text>

            <Image style={localStyles.shoes}
            source={Images.shoes}>
            </Image>

            <Text style={localStyles.piratetext}>Yeezy 350 Pirate Black</Text>

            <Image style={localStyles.v2}
            source={Images.v2}></Image>

            <Text style={localStyles.breds}>Yeezy 350 V2 Black Reds</Text>


            <Image style={localStyles.beluga}
            source={Images.beluga}></Image>

            <Text style={localStyles.belugatext}>Yeezy 350 V2 Beluga</Text>

            <Image style={localStyles.hightop}
            source={Images.hightop}></Image>

            <Text style={localStyles.hightoptext}>Yeezy 750 Chocolate</Text>

        </ScrollView>

     <Image style={localStyles.logo}
      source={Images.adidas}></Image>

      </View>


    );
  }
}



const localStyles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',


  },

  header:{
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'#A0A0A0',
    marginTop:25,
  },


  shoes:{
  justifyContent:'center',
  width:300,
  height:200,
  margin:5,
  marginTop:20,
  borderRadius:20,
  borderColor:'#A0A0A0',
  },

  v2:{
  height:300,
  width:300,
  margin:5,
  borderRadius:20,
  },

  beluga:{
  height:300,
  width:300,
  margin:5,
  borderRadius:20,
  },

  hightop:{
  height:300,
  width:300,
  margin:5,
  borderRadius:20,
  },


  scroll:{
    width:380,
  },

  piratetext:{
    marginLeft:10,
    textAlign:'center',
  },

  breds:{
    marginLeft:10,
    textAlign:'center',
  },

  belugatext:{
    marginLeft:10,
    textAlign:'center',
  },

  hightoptext:{
    marginLeft:10,
    textAlign:'center',
    marginBottom:5,

  },

  logo:{
    height:710,
    width:120,
    flexDirection: 'row',
    marginTop:25,
    marginRight:-12,
  },

  },

);
