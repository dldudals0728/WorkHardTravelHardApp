import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* TouchableOpacity: 누르는 event를 listen할 준비가 된 view. Opacity(투명도)는, 누를 때 투명해지는 애니메이션이 있다는 뜻! */}
        {/* Pressable: new! more props */}
        <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        {/* TouchableHighlight: TouchableOpacity와 다르게, 눌렸을 때 background에 효과를 준다. */}
        {/* TouchableWithoutFeedback: 어떤 애니메이션도 없음. */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            console.log("pressed!");
          }}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    // paddingHorizontal: css문법이 아니고, react native에서 제공하는 기능!
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
});
