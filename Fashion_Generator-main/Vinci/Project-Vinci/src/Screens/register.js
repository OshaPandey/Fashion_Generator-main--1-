import React from 'react';
import { useState } from 'react';
import {View, StyleSheet,Text,TextInput,Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native';
import {Email} from './email.png'
import Toast from 'react-native-simple-toast';




const Register = ({navigation}) => {
    const details=[
        {
            email:"amal",
            password:"2304"
        },
        {
            email:'john',
            password:'2002'
        },
    ]
    const [gender, setGender] = useState('Male');
    
    const [text, onChangeText] = React.useState(null);
    const [name, setName] = useState('');

    const [pass, onChangePass] = React.useState(null);
    const [mulSize, setmulSize] = useState(1);
    const [mulSize1, setmulSize1] = useState(1);
    const [mulSize2, setmulSize2] = useState(1);

    const genderHandler=() =>{
        if(gender=='Male'){
            setGender('Female')
        }
        else{
            setGender('Male')
        }
    }
    const registerHandler = () => {
        setmulSize(1);
        setmulSize1(1);
        setmulSize2(1);
        

    }

    const focusScaler1 = () => {
        setmulSize(1.1);
        setmulSize1(1);
        setmulSize2(1);
    }

    const focusScaler2 = () => {
        setmulSize(1);
        setmulSize1(1.1);
        setmulSize2(1);
    }

    const focusScaler3 = () => {
        setmulSize(1);
        setmulSize1(1);
        setmulSize2(1.1);
    }
    async function loginHanler() {
        setmulSize(1);
        setmulSize1(1);
        var p=0;
        var i=0;
        var code=0
        
        console.log("hello")
        if(text && pass &&name){
            console.log("data good")
        }
        else{
            return;
        }
        const response = await fetch("https://randomfashiongeneratorapi.herokuapp.com/register", {
                                                                                                method: 'POST',
                                                                                                headers: {
                                                                                                'Accept': 'application/json',
                                                                                                'Content-Type': 'application/json'
                                                                                                },
                                                                                                body: `{
                                                                                                    "username":"${name}",
                                                                                                    "password":"${pass}",
                                                                                                    "number":"9876453627",
                                                                                                    "email":"${text}"
                                                                                                }`,
                                                                                                });

                        
                        response.json().then(data => {
                        console.log(data);
                        });
        if(response.Approval_code==1){
            navigation.navigate('Home')
        }
        else{
            console.log("mail Exists")
            Toast.show('Mail Already Exists');
            
        }
        




    }

    return (
        <View>

            <View style={{height:'80%',aspectRatio:1,top:'20%',left:"-65%",backgroundColor:'#66BFBF',transform:[{rotate:"45deg"}]}}>
                <View style={{height:'70%',aspectRatio:1,backgroundColor:'white',left:'10%',top:"20%"}}>
                </View>
            </View>

            <View style={{position:'absolute',left:'15%',height:'70%',width:'90%',justifyContent:'center',top:'10%'}}>
        

            <TextInput
            style={{height:'12%',width:'80%',elevation:5,top:'27%',backgroundColor:'white',
            borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,padding:'2%',transform:[{scale:mulSize2}]}}
            onChangeText={setName}
            placeholder="Name"
            value={name} 
            onPressIn={focusScaler3}
            />

            <TextInput
            style={{height:'12%',width:'80%',elevation:5,top:'30%',backgroundColor:'white',
            borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,padding:'2%',transform:[{scale:mulSize}]}}
            onChangeText={onChangeText}
            placeholder="Email"
            value={text} 
            inlineImageLeft="Email"
            onPressIn={focusScaler1}
            />
                
            <TextInput
            style={{height:'12%',width:'80%',elevation:5,top:'25%',backgroundColor:'white',marginTop:'10%',
            borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,padding:'2%',transform:[{scale:mulSize1}]}}
            onChangeText={onChangePass}
            placeholder="Password"
            value={pass} 
            secureTextEntry={true}
            inlineImageLeft="Email"
            onPressIn={focusScaler2}
            />

            <View style={{top:'25%',flexDirection:'row',width:'80%',alignItems:'center',height:'30%'}}>

                <TouchableOpacity style={{width:'100%', height:'40%',backgroundColor:gender=='Male'?'#B1E1FF':'#F65A83',alignItems:'center',
                borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10  ,
                padding:10,
                elevation:20,borderColor:'#66BFBF',borderWidth:1
                }}
                onPress={genderHandler}
                >
                <Text style={{fontSize:20,color:'white'}}>{gender}</Text>
                </TouchableOpacity>
            </View>

            
            <TouchableOpacity style={{top:'15%',height:'15%',width:'80%',backgroundColor:'#F87474',elevation:10,alignItems:'center',
            borderBottomLeftRadius:100,borderBottomRightRadius:100,borderTopLeftRadius:100,borderTopRightRadius:100
            }}
            onPress={()=>loginHanler()}
            >
                <Text style={{fontSize:20,color:'white',top:'30%'}}>Register</Text>
            </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Register;
