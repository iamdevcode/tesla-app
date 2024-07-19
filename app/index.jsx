import { Status } from '@/components/Status'
import images from '@/picture'
import { FontAwesome } from '@expo/vector-icons'
import { Image, View } from 'react-native'

export default function HomePage() {
  return (
    <View className="flex-1 gap-y-2 bg-[#161818] p-6">
      <View className="flex-row justify-between">
        <Status />
        <FontAwesome name="user-circle" size={24} color="#eee" />
      </View>
      <Image
        source={images.car}
        className="w-full h-[500px]"
        resizeMode="contain"
      />
    </View>
  )
}
