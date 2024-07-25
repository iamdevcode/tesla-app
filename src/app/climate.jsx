import images from '#/images'
import { ClimateOpions } from '@/components/ui/ClimateOptions'
import { Image, Text, View } from 'react-native'

export default function ClimateScreen() {
  return (
    <View
      style={{ padding: 20, paddingTop: 0 }}
      className="relative flex-1 bg-[#161818]"
    >
      <Image source={images.climate} style={{ width: '100%', height: 500 }} />
      <View className="bottom-0 left-[20px] absolute w-full pb-8">
        <Text className="text-center font-bold pb-6" style={{ color: 'gray' }}>
          Interior 74°F - Exterior 66°F
        </Text>
        <ClimateOpions />
      </View>
    </View>
  )
}
