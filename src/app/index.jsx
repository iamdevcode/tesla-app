import images from '#/images'
import { ListOptions } from '@/components/ui/ListOptions'
import { Status } from '@/components/ui/Status'
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { Image, ScrollView, View } from 'react-native'

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 20 }}
      showsVerticalScrollIndicator={false}
      className="bg-[#161818]"
    >
      <View className="flex-row justify-between">
        <Status />
        <FontAwesome name="user-circle" size={24} color="gray" />
      </View>
      <Image
        source={images.car}
        className="w-full h-[300px]"
        resizeMode="contain"
      />
      <View className="flex-row justify-around pb-8">
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>
      <ListOptions />
    </ScrollView>
  )
}
