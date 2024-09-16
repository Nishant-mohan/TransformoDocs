import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Button for Convert Non-Machine Readable to Readable */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/UploadMachineReadable')}>
        <Image
          source={require("../assets/images/convert-icon.png")} // Replace with your image path
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Convert Non-Machine Readable to Readable</Text>
      </TouchableOpacity>

      {/* Button for Upload Machine Readable */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/UploadMachineReadable')}>
        <Image
          source={require("../assets/images/upload-icon.png")} // Replace with your image path
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Upload Machine Readable</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 300,
    justifyContent: "center",
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Index;
