import { StatusBar } from 'expo-status-bar';
import react, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const TextApp = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.textinput} onChangeText={(text) => setText(text)} value={text} placeholder='Ingrese su texto' />
      <Text style={styles.textWord}>Texto Ingresado: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  textWord: {
    fontSize: 16,
  },
  textinput: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default TextApp;