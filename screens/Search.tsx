import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc';

export default function SearchScreen({ navigation }: RootTabScreenProps<'Search'>) {
  return (
    <View style={tw``}>
      <Text style={tw``}>Search</Text>
      <View style={tw``}  />
    </View>
  );
}

