import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const URLGeneratorScreen = () => {
  const [inputLink, setInputLink] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleCreateLink = () => {
    // Dummy link generation logic
    setGeneratedLink(`${inputLink}?ref=affiliate123`);
  };

  const handleModifyLink = () => {
    // Dummy link modification logic
    setGeneratedLink(`${inputLink}?ref=affiliate123&mod=true`);
  };

  const handleCopyLink = () => {
    // Dummy copy logic
    console.log('Link copied:', generatedLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Link</Text>
      <Text style={styles.subtitle}>Generate your personal Affiliate link</Text>

      <TextInput
        style={styles.input}
        placeholder="Paste the product link here"
        value={inputLink}
        onChangeText={setInputLink}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCreateLink}>
          <Text style={styles.buttonText}>Create Link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleModifyLink}>
          <Text style={styles.buttonText}>Modify Link</Text>
        </TouchableOpacity>
      </View>

      {generatedLink !== '' && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputText}>{generatedLink}</Text>
          <TouchableOpacity onPress={handleCopyLink}>
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </View>
      )}

      <TextInput
        style={styles.messageInput}
        placeholder="Custom message (this will be sent along with your affiliate link)"
        placeholderTextColor="gray"
        value={customMessage}
        onChangeText={setCustomMessage}
      />

     
        <View style={styles.channelRow}>
          <Text style={styles.channelText}>Telegram Channels</Text>
          <TouchableOpacity>
            <Text style={styles.addChannel}>Add Channels</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.channelRow}>
          <Text style={styles.channelText}>Discord Channels</Text>
          <TouchableOpacity>
            <Text style={styles.addChannel}>Add Channels</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.channelRow}>
          <Text style={styles.channelText}>Whattsapp Channels</Text>
          <TouchableOpacity>
            <Text style={styles.addChannel}>Add Channels</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20, color: 'gray' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, marginBottom: 15, fontSize: 16 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  button: { backgroundColor: '#253A3D', padding: 10, borderRadius: 10, width: '45%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  outputContainer: { backgroundColor: '#f9f9f9', padding: 10, borderRadius: 10, marginBottom: 15 },
  outputText: { fontSize: 16, color: '#333' },
  copyText: { color: 'blue', marginTop: 5, textAlign: 'right' },
  messageInput: { borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, fontSize: 16, marginBottom: 20 },
  channelRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  channelText: { fontSize: 18, fontWeight: 'bold' },
  addChannel: { color: 'blue', fontSize: 16 },
});

export default URLGeneratorScreen;
