import images from '#/images'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, Text, TouchableOpacity } from 'react-native'

export default function App() {
  return (
    <LinearGradient
      style={{
        flex: 1,
        paddingVertical: 80,
        paddingHorizontal: 12
      }}
      colors={['#000', '#021526', '#E90074']}
      locations={[0, 0.2, 0.9]}
      end={{ x: -0.6, y: 1.8 }}
    >
      <Image
        source={images.tesla_logo_big}
        style={{
          width: 300,
          height: 300,
          marginHorizontal: 'auto'
        }}
      />
      <TouchableOpacity className="mt-auto">
        <Text className="text-center text-lg text-white">
          Already have an account?
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}
