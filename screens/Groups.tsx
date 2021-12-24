import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc';

export default function GroupsScreen({ navigation }: RootTabScreenProps<'Groups'>) {
  return (
    <View style={tw``}>
      <Text style={tw``}>Groups</Text>
      <View style={tw``} />
    </View>
  );
}

