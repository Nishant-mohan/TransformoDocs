import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const UploadMachineReadable = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'], // PDF and DOCX types
      });
      
      if (result.type === 'success') {
        setSelectedFile(result);
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select PDF/DOCX File" onPress={handleFilePick} />

      {selectedFile && (
        <View style={styles.fileInfo}>
          <Text>Selected File:</Text>
          <Text>File Name: {selectedFile.name}</Text>
          <Text>Type: {selectedFile.mimeType}</Text>
          <Text>Size: {selectedFile.size} bytes</Text>
          <Text>URI: {selectedFile.uri}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  fileInfo: {
    marginTop: 20,
  },
});

export default UploadMachineReadable;
