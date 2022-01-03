import { Text, View, Button } from 'react-native';
import { useState } from 'react'
import { RootTabScreenProps } from '../types';
import tw from 'twrnc';

export default function BetModal({ navigation }: RootTabScreenProps<'Modal'>) {
    return (
        <View style={tw`flex items-center justify-center`}>
          <Text style={tw`text-3xl`}>This is a modal!</Text>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
      );
  };

