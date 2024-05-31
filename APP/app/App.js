import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

 export default function App ()  {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.text1}>Hello, Devs</Text>
          <Text style={styles.text2}>14 tasks today</Text>
        </View>
        <View style={styles.container4}>
          <View style={styles.container5}>
            <Image style={styles.image1}source={require('../assets/images/person.png')}/>
            </View>
        </View>
       </View>
        <View style={styles.stage}>
        <View style={styles.stage1}>
          <View style={styles.stage2}>
            <Image style={styles.image2}source={require('../assets/images/Vector.png')}/>
            <Text style={styles.text3}>Search</Text>
            </View>
          </View>
          <View style={styles.stage3}><Image style={styles.image3}source={require('../assets/images/Filter.png')}/></View>
       </View>
    </View>
  )
 }


 const styles = StyleSheet.create({
container:{
  backgroundColor:'#F7F0E8',
  flex:1,
},
 container2:{
  width:359,
  height:52,
  
  left:20,
  marginTop:52,
  flexDirection:'row',
  justifyContent:'space-between',
 },
 text1:{
  fontSize:32,
  fontWeight:'700',
  lineHeight:38.4,
 },
 text2:{
  fontSize:12,
  fontWeight:500,
  lineHeight:14.4,
},
container4:{
  width:50,
  height:52,
 
},
container5:{
  width:50,
  height:50,
  backgroundColor:'white',
  borderRadius:17,
},
image1:{
  width:46,
  height: 45,
},
stage:{
  width:353,
  height:49,
  borderRadius:'1',
  left:20,
  marginTop:45,  
  flexDirection:'row',
 justifyContent:'space-between',
},
stage1:{
  width:280,
  height:48,
  borderRadius:'14',
  backgroundColor:'white',
  
  
},
stage2:{
  width:82,
  height:24,
 
  marginTop:12,
  marginLeft:8,
  flexDirection:'row',
  justifyContent:'space-between',
},
image2:{
  width:16,
  height:16,
  backgroundColor:' #000000',
  marginTop:4,
  marginLeft:3.97,
},
text3:{
  marginTop:4,
  marginRight:4,
}
})