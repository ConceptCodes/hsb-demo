import { TouchableOpacity, Text, View } from 'react-native';
import { RootStackScreenProps } from '../types';
import tw from 'twrnc'

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={tw``}>
      <Text style={tw``}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={tw``}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

