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
    <View style={tw`flex-col`}>
        <Image style={tw`w-full rounded-t-xl h-[200px]`} source={{ uri: image}} />
        <View style={tw`bg-white p-3 rounded-b-xl`}>
            <Text style={tw`text-lg text-gray-900 font-medium`}>{title}</Text>
            <Text style={tw`text-gray-500 text-sm`}>by {creator}</Text>
            <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-gray-900 font-bold`}>${bidPrice}</Text>
                <Pressable style={tw`bg-gray-900 p-3 rounded-full`}>
                    <Text style={tw`text-white`}>Place a bid</Text>
                </Pressable>
            </View>
        </View>
    </View>
  );
};

export default FeedCard;