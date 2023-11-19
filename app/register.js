import { KeyboardAvoidingView, Pressable, Text } from 'react-native';
import React, {useState} from 'react';
import { Link, router } from 'expo-router';
import { ImageBackground, StyleSheet, View, SafeAreaView, TextInput,Dimensions } from 'react-native';
import { Auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword} from 'firebase/auth';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function Page() {
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const aUth=Auth;
    function signup(){
        createUserWithEmailAndPassword(aUth, userName, pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Successfuly Registered")
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Failed to Regiester");
            console.log(userCredential)
          });
    }
  return (
    <SafeAreaView style={{flex:1}}>
  <View style={styles.container}>
  <ImageBackground
        source={{
          uri: 
'https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_52683-66173.jpg?w=1060&t=st=1696236869~exp=1696237469~hmac=7ed855f8bc6b001bdb609dc5229195fe0c5575860fd08272d7a7ba5b102b00b6',
        }}
        resizeMode="cover"
        style={styles.img}>
    <View style={styles.middle}>
    <Text style={{fontSize:24}}>Register</Text>
    <Text style={{fontSize:4}}> </Text>
    <View>
    <Text style={{fontSize:20}}>Enter ID:</Text>
    <KeyboardAvoidingView behavior='padding'>
    <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'UserName'}
          style={styles.input}
        />
    <Text style={{fontSize:20,textAlign:"left"}}>Password</Text>
    <TextInput
    secureTextEntry={true}
          value={pass}
          onChangeText={(pass) => setPass(pass)}
          placeholder={'pass'}
          style={styles.input}
          
        />
        </KeyboardAvoidingView>
    <Text></Text>
    
    <Pressable style={styles.button}  onPress={signup}>
      <Text style={{color:"white"}}>Register</Text>
    </Pressable>
    
    <Text></Text>
    <Link href='/' asChild>
    <Pressable style={styles.button}>
      <Text style={{color:"white"}}>Go Back to Login</Text>
    </Pressable>
    </Link>
    </View>
    </View>
    </ImageBackground>
    </View>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#4FC1E9",
      },
      middle: {
        width:300,
        height:400,
        backgroundColor: 'beige',
        borderColor:'beige',
        borderWidth: 2,
        borderRadius:20,
        alignItems: 'center',
      justifyContent: 'center',
      },
      img: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  