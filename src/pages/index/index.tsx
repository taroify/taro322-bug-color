import {Button, View} from '@tarojs/components'
import {useState} from 'react'

export default function Index() {
  const [color, setColor] = useState<string | undefined>("#ee0a24")

  return (
    <View>
      <View style={{color}}>Color</View>
      <Button onClick={() => setColor(undefined)}>change</Button>
    </View>
  );
}
