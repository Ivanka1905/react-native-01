import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, my first project!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//    TouchableWithoutFeedback, // імпорт компонента обгортки
//   Keyboard, // імпорт компонента клавіатури
//   // KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// export default function App() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");

//   const nameHandler = (text) => setName(text);
//   const passwordHandler = (text) => setPassword(text);

//   const onLogin = () => {
//     Alert.alert("Credentials", `${name} + ${password}`);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <KeyboardAwareScrollView behavior={Platform.OS == "ios" ? "padding" : "height"}>
//       <View style={styles.container}>
//         {/* <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         > */}
//           <TextInput
//             value={name}
//             onChangeText={nameHandler}
//             placeholder="Username"
//             style={styles.input}
//           />
//           <TextInput
//             value={password}
//             onChangeText={passwordHandler}
//             placeholder="Password"
//             secureTextEntry={true}
//             style={styles.input}
//           />
//           <Button title={"Login"} style={styles.input} onPress={onLogin} />
//         {/* </KeyboardAvoidingView> */}
//       </View></KeyboardAwareScrollView>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1",
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10,
//   },
// });