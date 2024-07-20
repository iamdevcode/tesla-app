import seed from '@/seed'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export const ListOptions = () => (
  <View className="pt-8">
    {seed.list_options.map(({ name, iconName, href }, i) => (
      <Link key={i} href={!href ? '' : href} asChild>
        <TouchableOpacity className="flex-row items-center pb-6">
          <MaterialCommunityIcons name={iconName} size={26} color="gray" />
          <Text className="text-primary text-lg font-bold ml-3">{name}</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={26}
            color="gray"
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>
      </Link>
    ))}
  </View>
)
