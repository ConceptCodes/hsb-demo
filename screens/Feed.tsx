import React from 'react'
import { View, ScrollView, Text, Image, TextInput } from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from 'twrnc';
import FeedCard from '../components/FeedCard'


export default function FeedScreen({ navigation }: RootTabScreenProps<'Feed'>) {

  const [searchTerm, onChangeText] = React.useState("");

  return (
    <View style={tw`bg-gray-200 h-full`}>
      <View style={tw`flex-col bg-gray-900 p-5`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-white text-xl font-bold`}>HandShake Bets</Text>
          <Image style={tw`rounded-full w-10 h-10`} source={{ uri: "https://source.unsplash.com/100x100/?portrait"}} />
        </View>
        <Text style={tw`text-sm pt-10 text-white`}>Hello, USERNAME</Text>
        <Text style={tw`text-lg text-white font-bold pb-10`}>Let's place some bets</Text>
        <TextInput
          style={tw`rounded-lg bg-gray-300 w-full h-10 p-3`}
          onChangeText={onChangeText}
          placeholder="Search Bets"
          value={searchTerm}
        />
      </View>
      <ScrollView style={tw`flex-col p-5 -translate-y-40`}>
        <FeedCard title="Abstracto#1234" creator="concept" bidPrice={12.3} image="https://via.placeholder.com/200" />
        <FeedCard title="Abstracto#4321" creator="concept" bidPrice={10} image="https://via.placeholder.com/200" />
      </ScrollView>
    </View>
  );
}

