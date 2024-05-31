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
       <View style={styles.category }>
        <Text style={styles.text4}>Categories</Text>
       </View>
       <View style={styles.exercise}>
        <View style={styles.exercise1}>
          <Text style={styles.text5}>Exercise</Text>
          <Text style={styles.text6}>12 Tasks</Text>
          <Image style={styles.image4}source={require('../assets/images/young woman working online.png')}/>
        </View>
        <View style={styles.exercise2}>
          <Text style={styles.text7}>Study</Text>
          <Text style={styles.text8}>12 Tasks</Text>
          <Image style={styles.image5}source={require('../assets/images/young woman working at desk.png')}/>
        </View>
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
},
category:{
  marginTop:17,
  marginLeft:20
},
text4:{
  fontSize:20,
  fontWeight:700,
  lineHeight:24,
},
exercise:{
  width:396,
  height:192,
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:17,
},
exercise1:{
  width:186,
  height:192,
  borderRadius:15,
  backgroundColor: '#FBF9F7',
  marginLeft:20,
},
text5:{
  fontWeight:700,
  fontSize:16,
  lineHeight:19.2,
  top:10,
  left:12,
},
text6:{
  fontSize:12,
  fontWeight:400,
  lineHeight:14.4,
  top:9,
  left:12,
},
image4:{
  width:151,
  height:132,
  top:5,
  left:14,
},
exercise2:{
  width:186,
  height:192,
  borderRadius:15,
  backgroundColor:'white',
},
text7:{
  fontSize:16,
  fontWeight:700,
  lineHeight:19.2,
  top:10,
  left:12,
},
text8:{
    fontSize:12,
    fontWeight:400,
    lineHeight:14.4,
    top:9,
    left:12,
},
image5:{
  width:151,
  height:132,
  top:9,
  left:33,
},
})