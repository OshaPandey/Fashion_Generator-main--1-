import React,{useState} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

import {Top} from './top.png';
import {TopC} from './topc.png';
import {New} from './new.png';
import {NewC} from './newc.png';
import {HomeI} from './home.png';
import {HomeC} from './homec.png';



const BottomBar = (props) => {

    const [Hi, setHi] = useState(1);
    const [Ni, setNi] = useState(0);
    const [Ti, setTi] = useState(0);

    return (
        <View style={{justifyContent:'space-between',height:'30%',flexDirection:'row',padding:'5%',backgroundColor:'white',paddingTop:'2%',width:'90%',alignSelf:'center',borderRadius:40}}>
            <TouchableOpacity style={{padding:'4%'}} onPress={()=>{
                setHi(1);
                setNi(0);
                setTi(0);
                
            }}>
                <Image source={require('./home.png')}  />
                <Image source={require('./homec.png')}  style={{top: Hi==1?'-10%':'50%'}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{padding:'4%'}} onPress={()=>{
                setHi(0);
                setNi(1);
                setTi(0);
                
            }}>
                <Image source={require('./new.png')} />
                <Image source={require('./newc.png')} style={{top: Ni==1?'-10%':'50%'}} />
            </TouchableOpacity>

            <TouchableOpacity style={{padding:'4%'}} onPress={()=>{
                setHi(0);
                setNi(0);
                setTi(1);
                
            }}>
                <Image source={require('./top.png')} />
                <Image source={require('./topc.png')} style={{top: Ti==1?'-10%':'50%' }}/>
            </TouchableOpacity>

        </View>
    );
}



export default BottomBar;
