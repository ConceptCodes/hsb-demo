import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import tw from 'twrnc'

export type Props = {
  title: string;
  creator: string;
  image: string;
  bidPrice: number;
};

const FeedCard: React.FC<Props> = ({
    title,
    creator,
    image,
    bidPrice
}) => {

  return (
    <View style={tw`flex-col pb-10`}>
        <Image style={tw`w-full rounded-t-xl h-[200px]`} source={{ uri: image}} />
        <View style={tw`flex-row justify-start z-30 -space-x-2`}>
          <Image style={tw`w-4 rounded-full h-4`} source={{ uri: 'https://source.unsplash.com/100x100/?portrait'}} />
          <Image style={tw`w-4 rounded-full h-4`} source={{ uri: 'https://source.unsplash.com/100x100/?portrait'}} />
          <Image style={tw`w-4 rounded-full h-4`} source={{ uri: 'https://source.unsplash.com/100x100/?portrait'}} />
        </View>
        <View style={tw`bg-white p-3 rounded-b-xl`}>
            <Text style={tw`text-xl text-gray-900 font-bold`}>{title}</Text>
            <Text style={tw`text-gray-500 text-sm`}>by {creator}</Text>
            <View style={tw`flex-row pt-5 items-center justify-between`}>
                <Text style={tw`text-gray-900 font-bold`}>{bidPrice} <span style={tw`text-gray-400`}>SHAKES</span></Text>
                <Pressable style={tw`bg-gray-900 p-3 rounded-full`}>
                    <Text style={tw`text-white font-medium`}>Place a bid</Text>
                </Pressable>
            </View>
        </View>
    </View>
  );
};

export default FeedCard;