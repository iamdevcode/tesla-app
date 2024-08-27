import {
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { Text, View } from 'react-native'

export const ClimateOpions = () => (
  <View className="mt-auto pb-6">
    <Text className="text-white text-base text-center font-bold pb-6">
      Interior 74°F - Exterior 66°F
    </Text>
    <View className="px-8 flex-row items-center justify-between">
      <Fontisto name="power" size={24} color="gray" />
      <View className="flex-row items-center gap-x-6">
        <FontAwesome5 name="angle-left" size={20} color="gray" />
        <Text className="text-4xl text-white">68°</Text>
        <FontAwesome5 name="angle-right" size={20} color="gray" />
      </View>
      <MaterialCommunityIcons name="car-door" size={24} color="gray" />
    </View>
  </View>
)
