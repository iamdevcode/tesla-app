import { list_options } from '#/constants/uidata/list_options'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, TouchableOpacity } from 'react-native'

export const ListOptions = () =>
  list_options.map(({ title, icon, href }, i) => (
    <Link key={i} href={href || ''} asChild>
      <TouchableOpacity className="flex-row items-center pb-6">
        <MaterialCommunityIcons name={icon} size={24} color="gray" />
        <Text className="text-white text-lg font-bold ml-3">{title}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: 'auto' }}
        />
      </TouchableOpacity>
    </Link>
  ))
