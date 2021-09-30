
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';





const Stack = createNativeStackNavigator();

const MyStack = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home Board"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Emergence List" component={EmergenceListScreen} />
        <Stack.Screen name="Work List" component={WorkListScreen} />
        <Stack.Screen name="Life List" component={LifeListScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (

<View style={styles.top}>

      <View style={styles.homescreenHead1}>

        <Button
          title="Go to emergence list"
          onPress={() =>
            navigation.navigate('Emergence List')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />




        </View>


        <View style={styles.homescreenHead2}>

          <Button
            title="Go to work list"
            onPress={() =>
              navigation.navigate('Work List')
                 // we're passing a parameter name:'Jane' to the Profile component!
            }
          />
          <Button
            title="Go to life list"
            onPress={() =>
              navigation.navigate('Life List')
                 // we're passing a parameter name:'Jane' to the Profile component!
            }
          />


          </View>
</View>

  );
};

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}

const EmergenceListScreen = ({ navigation, route }) => {
[etext1,setetext1] = React.useState(0);
[etext2,setetext2] = React.useState(0);
  return(
<View style={{flex:5}}>
<View style={styles.emergenceTitle}>
  <Text style={styles.emergenceTitleText}>
  This is the emergence list
  </Text>
  </View>
  <View style={styles.emergenceBody}>


  <View style={{flex:1,backgroundColor:'blue'}}>
  <Text style={{fontSize:40}}>
     The first thing = {etext1}
  </Text>
  <Text style={{fontSize:40}}>
     The Second thing = {etext2}
  </Text>
  <TextInput

        placeholder="etext1"
        onChangeText={etext1 => {setetext1(etext1)}}
        //1 paramater does not need () => {}
    />
  <TextInput

        placeholder="etext2"
        onChangeText={etext2 => {setetext2(etext2)}}
        //1 paramater does not need () => {}
    />
  </View>
  <View style={{flex:1,backgroundColor:'green'}}>
  <Image source={{uri:'https://images.app.goo.gl/f4gamBGFfgjDFSPF7'}}
       style={{width:'100%',height:'100%'}}/>
  </View>


  </View>


</View>
)

};

const WorkListScreen = ({ navigation, route }) => {
  [wtext1,setwtext1] = React.useState(0);
  [wtext2,setwtext2] = React.useState(0);
  return(
<View style={{flex:5}}>
<View style={styles.workTitle}>
  <Text style={styles.workTitleText}>
  This is the Work list
  </Text>
  </View>
  <View style={styles.workBody}>


  <View style={{flex:1,backgroundColor:'white'}}>
  <Text style={{fontSize:40}}>
     The first thing = {wtext1}
  </Text>
  <Text style={{fontSize:40}}>
     The Second thing = {wtext2}
  </Text>
  <TextInput

        placeholder="wtext1"
        onChangeText={wtext1 => {setwtext1(wtext1)}}
        //1 paramater does not need () => {}
    />
  <TextInput

        placeholder="wtext2"
        onChangeText={wtext2 => {setwtext2(wtext2)}}
        //1 paramater does not need () => {}
    />

  </View>
  <View style={{flex:1,backgroundColor:'lightyellow'}}>
    <Image
      style={{width: '100%', height: '100%'}}
      source={{uri:'https://images.app.goo.gl/FLc8uf4xYT3Agaqy6'}}/>
  </View>


  </View>


</View>
)
};

const LifeListScreen = ({ navigation, route }) => {
  [ltext1,setltext1] = React.useState(0);
  [ltext2,setltext2] = React.useState(0);
  return(
<View style={{flex:5}}>
<View style={styles.lifeTitle}>
  <Text style={styles.lifeTitleText}>
  This is the life list
  </Text>
  </View>
  <View style={styles.lifeBody}>


  <View style={{flex:1,backgroundColor:'lightblue'}}>
  <Text style={{fontSize:40}}>
     The first thing = {ltext1}
  </Text>
  <Text style={{fontSize:40}}>
     The Second thing = {ltext2}
  </Text>
  <TextInput

        placeholder="ltext1"
        onChangeText={ltext1 => {setltext1(ltext1)}}
        //1 paramater does not need () => {}
    />
  <TextInput

        placeholder="ltext2"
        onChangeText={ltext2 => {setltext2(ltext2)}}
        //1 paramater does not need () => {}
    />

  </View>
  <View style={{flex:1,backgroundColor:'lightgreen'}}>

  </View>


  </View>


</View>
)
};

const styles = StyleSheet.create({
  homescreenHead2: { flexDirection: 'row',
      flex:6,
                 margin:"105px",
                 border:"thick solid black",
                 padding:'10px',
                 justifyContent: 'space-around',
                 alignItems:'center',
                 backgroundColor:'lightgreen'
               },
               homescreenHead1: { flexDirection: 'row',
                   flex:6,
                              margin:"105px",
                              border:"thick solid black",
                              padding:'10px',
                              justifyContent: 'space-around',
                              alignItems:'center',
                              backgroundColor:'red'
                            },
            homebox:{
              flex:1,
              flexDirection:'row',
              backgroundColor:'lightgreen',

            },
            top:{
              flexDirection:'column',

            },
            emergenceTitleText:{
              fontSize:40,
              color:'red',


            },
            emergenceTitle:{
              flex:1,
              backgroundColor:'orange',
              alignItems:'center',


            },
            emergenceBody:{
              flex:4,
              backgroundColor:'yellow',
              // alignItems:'center',
              flexDirection:'row',


            },
            workTitleText:{
              fontSize:40,
              color:'green',


            },
            workTitle:{
              flex:1,
              backgroundColor:'yellow',
              alignItems:'center',


            },
            workBody:{
              flex:4,
              backgroundColor:'yellow',
              // alignItems:'center',
              flexDirection:'row',


            },
            lifeTitleText:{
              fontSize:40,
              color:'black',


            },
            lifeTitle:{
              flex:1,
              backgroundColor:'pink',
              alignItems:'center',


            },
            lifeBody:{
              flex:4,
              backgroundColor:'green',
              // alignItems:'center',
              flexDirection:'row',


            },



});
export default MyStack;
