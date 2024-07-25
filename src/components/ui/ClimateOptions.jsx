import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'

export const ClimateOpions = () => (
  <View className="px-5 flex-row items-center justify-between">
    <View className="gap-1 items-center">
      <Fontisto name="power" size={24} color="gray" />
      <Text className="text-primary font-bold">On</Text>
    </View>
    <View></View>
    <View className="gap-1 items-center">
      <MaterialCommunityIcons name="car-door" size={26} color="gray" />
      <Text className="text-primary font-bold">Vent</Text>
    </View>
  </View>
)
