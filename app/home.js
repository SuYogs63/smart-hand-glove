import { View, Text ,StyleSheet} from 'react-native'
import React,{useState, useEffect} from 'react'
import { db } from '../firebaseConfig'
import {ref, onValue,remove} from "firebase/database"
import { ImageBackground,SafeAreaView, TextInput,Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const home = () => {
  function Logout(){
    router.replace("/")
  }
  var hh='';
    const[todoData,setTodoData]=useState([])
    function dremove(itemID){
        remove(ref(db,'Admin/'+itemID)).then(()=>{
            alert("Removed data");
            router.replace('/home');
        })
        .catch((error)=>{
            alert("Remove Failed: "+ error.message)
        });
    }
    useEffect(()=>{
        const starCountRef=ref(db,'Admin/')
        onValue(starCountRef,(snapshot)=>{
            const data= snapshot.val();
            const newPosts=Object.keys(data).map(key=>({
                id:key,
                ...data[key]
            }));
            console.log(newPosts);
            var data1=newPosts;
            var data2=data1[0];
            console.log(data2.id);
           setTodoData(newPosts);
        });
    },[])
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
          <View style={{height:100}}></View>
      <Text style={{fontSize:23,shadowOpacity:1,shadowColor:'grey'}}>Patient details:</Text>
      <View style={styles.middle}>
      {
      todoData.map((item,index)=>
      {
        return(
            <View key={index} >
                
               
                {item.id !="smarthand" ? (
  <>
  <View style={styles.obj}>
  <Text style={{fontSize:23}}>Name: {item.s1} </Text>
    <Text style={{ fontSize: 23 }}>City: {item.s2} </Text>
    <Text style={{fontSize:23}}>Mobile No: {item.s3} </Text>
    <Text style={{fontSize:23}}>LAST BPM: {item.s4} </Text>
   <View style={styles.bcenter}>
    <Pressable style={styles.button} onPress={() => dremove(item.id)}><Text>remove</Text></Pressable>
      </View> 
      </View>
    
    
  </>
) : null}

                
            
            </View>
        )
      })
      }
      </View>
      <View style={{height:10}}></View>
      
      <View >
      <Pressable style={styles.button} onPress={Logout}>
        <Text style={{fontSize:20}}>Logout</Text>
      </Pressable>
      
      </View>
      </ImageBackground>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      justifyContent:'center',
      alignContent:'center',
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
        
        width:100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "#4FC1E9",
      },
      middle: {
        width:'auto',
        height:550,
        backgroundColor: '#FBEAEB',
        borderColor:'#FBEAEB',
        borderWidth: 2,
        borderRadius:16,
        padding:5
      },
      img: {
        height: screenHeight,
        width: screenWidth,
        
      },
      dd:{
        alignContent:'center',
        justifyContent:'center'
      },
      obj: {
        width:"auto",
        height:"auto",
        backgroundColor: '#E2D1F9',
        borderColor:'#FBEAEB',
        borderWidth: 2,
        borderRadius:10,
        
        
      justifyContent: 'center',
      },
      bcenter:{
        alignItems:'center',
        justifyContent:'center',
        
      }
});
  
export default home