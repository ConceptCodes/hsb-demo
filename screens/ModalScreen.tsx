import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View  } from 'react-native';
import tw from 'twrnc'

export default function ModalScreen() {
  return (
    <View style={tw``}>
      <Text style={tw``}>Modal</Text>
      <View style={tw``}  />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

