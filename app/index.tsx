import { Text, TouchableOpacity, View } from "react-native";
import {styles} from "../styles/auth.styles";


export default function Index() {
  return (
    <View
      style={styles.container} // styles from CSS
    >
      <Text style={styles.title}>Hello World</Text>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}

