import { StatusBar } from 'expo-status-bar';
import { Ejercicio4 } from './components/Ejercicio4';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Ejercicio4></Ejercicio4>
      <Text>Hola como estannnn!</Text>
      <Text>Probando!</Text>
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
