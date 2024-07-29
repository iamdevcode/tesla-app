import images from '#/images'
import { ClimateOpions } from '@/components/ClimateOptions'
import { FontAwesome5 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, TouchableOpacity, View } from 'react-native'

export default function ClimateScreen() {
  const { back } = useRouter()
  return (
    <View
      style={{ padding: 20, paddingTop: 30 }}
      className="relative flex-1 bg-[#161818]"
    >
      <Image source={images.climate} style={{ width: '100%', height: '65%' }} />
      <TouchableOpacity
        onPress={() => back()}
        style={{ backgroundColor: 'gray' }}
        className="absolute z-10 justify-center items-center rounded-md top-16 left-5 w-[35px] h-[35px]"
      >
        <FontAwesome5 name="angle-left" size={24} color="#fff" />
      </TouchableOpacity>
      <ClimateOpions />
    </View>
  )
}
