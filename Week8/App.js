import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        <Text style={{fontWeight: 'bold', marginTop: 20,}}>Eric Bardelosa Atoc</Text>
        <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 5,}}>20 years old from <Text style={{fontWeight: 'bold'}}>Caloocan City</Text>, Currently studying IT at <Text style={{color: 'red'}}>Global Reciprocal Colleges</Text></Text>
      </View>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        <Text style={{fontWeight: 'bold', marginTop: 20,}}>Sysarch</Text>
        <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 5,}}>I am currently a student with a determination about learning everything that involves IT. My ambition in life is to become a <Text style={{color: 'red'}}>Web Developer</Text> and make a good impression for my family. On my Sysarch subject, i was struggling to help my groupmates for various tasks but somehow i manage to overcome my skills and excell along with them.</Text>
        <Text style={{flex: 1, marginTop: 10, fontWeight: 'bold', marginTop: 20,}}>My skills that learn are the following:</Text>
        <Text style={{flex: 1, marginTop: 10,}}>HTML and CSS</Text>
        <Text style={{flex: 1, marginTop: 10,}}>Web layout (Frontend)</Text>
        <Text style={{flex: 1, marginTop: 10,}}>JavasCript</Text>
        <Text style={{flex: 1, marginTop: 10,}}>Python</Text>
      </View>
    </ScrollView>
  );
};

export default App;
