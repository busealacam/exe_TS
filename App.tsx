import { StyleSheet, Text, View } from 'react-native';

const name: string = "Alice";
const age: number = 30;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello my name is {name} and l am {age} years old</Text>
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
