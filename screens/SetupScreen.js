import { StyleSheet, Dimensions, ScrollView, Image, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { Text, View } from '../components/Themed';
import BdkRn from 'bdk-rn';

export default function SetupScreen({navigation}) {
    const [mnemonic, setMnemonic] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [balance, setBalance] = useState();
    const [wallet, setWallet] = useState();
  	const [syncResponse, setSyncResponse] = useState();

// modify the generateMnenomic method to also set mnemonic as displayText
  const getMnemonic = async () => {
    const {data} = await BdkRn.generateMnemonic({
        length: 12,
        network: 'testnet',
      });
      setMnemonic(JSON.stringify(data));
      setDisplayText(JSON.stringify(data));
    };

    const createWallet = async () => {
        const { data } = await BdkRn.createWallet({
         mnemonic: mnemonic,
         password: 'password',
         network: 'testnet',
       });
       setWallet(data);
       setDisplayText(JSON.stringify(data));
     };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setup</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>

<View style={styles.balanceSection}>
          <Text style={styles.balanceText} selectable>
            {'Balance: '}
          </Text>
          <Text selectable>{balance ? balance : '0'} Sats</Text>
        </View>

        {displayText && (
          <View style={styles.responseSection}>
            <Text style={styles.responseText} selectable>
              Response:
            </Text>
            <Text selectable>{displayText}</Text>
          </View>
        )}

        {/* buttons for method calls */}
        <View style={styles.methodSection}>
          <Button
            title="Generate Mnemonic"
            style={styles.methodButton}
            onPress={getMnemonic}
          />
        </View>

        <Button
            title="Create Wallet"
            style={styles.methodButton}
            onPress={createWallet}
          />
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 40,
    fontWeight: '300',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
