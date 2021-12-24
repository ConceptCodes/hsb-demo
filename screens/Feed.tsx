import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc';

export default function FeedScreen({ navigation }: RootTabScreenProps<'Feed'>) {
  return (
    <View style={tw``}>
      <Text style={tw``}>Feed</Text>
      <View style={tw``} />
    </View>
  );
}

