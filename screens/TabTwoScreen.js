import { Alert, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { Input, Button } from '@ui-kitten/components';
import { EvilIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function TabTwoScreen({navigation}) {
  const [to, setTo] = useState('')
  const [from, setFrom] = useState('')
  const [btc, setBtc] = useState('')
  const [usd, setUsd] = useState('')
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   navigation.navigate('Modal')
  //   })

  function send(){
    Alert.alert('sent!')
  }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>Contribute</Text>

     <View style={styles.view}>
      <MaterialIcons color='#fff' size={25} name='send'/>
     <Input
        style={styles.input}
        size='large'
        placeholder='bc1...'
        value={to}
        onChangeText={nextValue => setTo(nextValue)}
      />
      </View>
      <View style={styles.view}>
      <MaterialIcons style={{transform:([{rotate: '180deg'}])}} color='#fff' size={25} name='send'/>
       <Input
        style={styles.input}
        size='large'
        placeholder='Your Bitcoin Address'
        value={from}
        onChangeText={nextValue => setFrom(nextValue)}
      />
      </View>
      <View style={styles.view}>
      <FontAwesome5 color='#fff' size={25} name='bitcoin'/>
       <Input
        style={styles.input}
        size='large'
        placeholder='Amount in BTC'
        value={btc}
        onChangeText={nextValue => setBtc(nextValue)}
      />
      </View>
      <View style={styles.view}>
      <FontAwesome5 color='#fff' size={25} name='hand-holding-usd'/>
       <Input
        style={styles.input}
        size='large'
        placeholder='Amount in USD'
        value={usd}
        onChangeText={nextValue => setUsd(nextValue)}
      />
      </View>
       <Button style={styles.button} status='primary' size='giant' onPress={()=>send()}>
      Send
    </Button>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 40,
    fontWeight: '300',
    margin: Dimensions.get('screen').width*0.05
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input:{
    paddingBottom: 5,
    width: Dimensions.get('screen').width*0.85,
    marginLeft: 10
  },
  view:{
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
