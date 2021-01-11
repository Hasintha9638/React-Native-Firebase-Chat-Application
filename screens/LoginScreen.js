import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,TouchableHighlight} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

export default class LoginScreen extends React.Component{
    state={
        name:""
    }
    continue=()=>{
        this.props.navigation.navigate("Chat",{name:this.state.name}) 
    }


    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.circle}></View>
                <View style={{marginTop:64}}>
                        <Image source={require('../assets/chat.png')}
                        style={{width:200,height:200,alignSelf:'center'}}
                        ></Image>                    
                </View>
                <View style={{marginHorizontal:32,marginTop:10}}>
                    <Text 
                    style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>Username
                    </Text>
                    <TextInput style={styles.input} placeholder="Username" onChangeText={name=>{
                        this.setState({name})}}
                        value={this.state.name}
                    ></TextInput>

                    <View style={{alignItems:"flex-end"}}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}>
                        <AntDesign name="rightcircle" size={50} color="#FFA62F" />
                        </TouchableOpacity>

                    </View>
                    
                </View>
            </SafeAreaView>


        );
    }



}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#F4F5F7"
    },
    circle:{
        width:500,
        height:500,
        borderRadius:250,
        backgroundColor:"#FFF",
        position:'absolute',
        left:-120,
        top:-20
    },
    input:{
        fontSize:20,
        padding:5,
        margin:10,
        borderRadius:10,
        borderColor:'#FFA62F',
        paddingStart:20,
        borderWidth:StyleSheet.hairlineWidth,
        fontWeight:'bold',
        
        
    },
    continue:{
        width:100,
        height:100,
        borderRadius:50,
        borderStartColor:'#FFA62F',
        alignItems:'center',
        justifyContent:'center',

    } 
  });