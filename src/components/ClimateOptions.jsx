import {
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { Text, View } from 'react-native'

export const ClimateOpions = () => {
  return (
    <View className="w-full mt-auto pb-10">
      <Text className="text-center font-bold pb-6" style={{ color: 'gray' }}>
        Interior 74°F - Exterior 66°F
      </Text>
      <View className="px-5 flex-row items-center justify-between">
        <View className="gap-1 items-center">
          <Fontisto name="power" size={24} color="gray" />
          <Text className="text-primary font-bold">On</Text>
        </View>
        <View className="flex-row items-center gap-x-6">
          <FontAwesome5 name="angle-left" size={20} color="gray" />
          <Text className="text-4xl text-white">68°</Text>
          <FontAwesome5 name="angle-right" size={20} color="gray" />
        </View>
        <View className="gap-1 items-center">
          <MaterialCommunityIcons name="car-door" size={26} color="gray" />
          <Text className="text-primary font-bold">Vent</Text>
        </View>
      </View>
    </View>
  )
}
