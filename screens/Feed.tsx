import { View } from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc';

export default function FeedScreen({ navigation }: RootTabScreenProps<'Feed'>) {
  return (
    <View style={tw`bg-gray-200`}>
      <View style={tw``} />
    </View>
  );
}

