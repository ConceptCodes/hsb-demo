import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc'

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) {
  return (
    <View style={tw``}>
      <Text style={tw``}>Profile</Text>
      <View style={tw``}  />
    </View>
  );
}
