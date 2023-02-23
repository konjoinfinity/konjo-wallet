import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import QRCode from 'react-native-qrcode-svg';
import { EvilIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recieve</Text>
      <FontAwesome5 color='#fff' size={40} name='bitcoin'/>
    <QRCode
      value="bc1qgyujae80frg0n508gwts08j0m69edfuhrhefep"
      logo={{uri: base64Logo}}
      size={Dimensions.get('screen').width*0.7}
      logoBackgroundColor='transparent'
    />
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
