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
        <Text style={styles.Text}>Convert</Text>
      </TouchableOpacity>

      {/* Button for Upload Machine Readable */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/UploadMachineReadable')}>
        <Image
          source={require("../assets/images/upload-icon.png")} // Replace with your image path
          style={styles.buttonImage}
        />
        <Text style={styles.Text}>Upload</Text>
      </TouchableOpacity>

      {/* Button for Convert Image */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/ScanImage')}>
        <Image
          source={require("../assets/images/imageConvert.png")} // Replace with your image path
          style={styles.icon}
        />
        <Text style={styles.Text}>Convert Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/UploadMachineReadable')}>
        <Image
          source={require("../assets/images/download.png")} // Replace with your image path
          style={styles.icon}
        />
        <Text style={styles.Text}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    paddingTop: 100,

    paddingLeft: 50,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    margin: 10, // Add margin to create space between buttons
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginBottom: 10, // Adjust margin between image and text
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  Text: {
    fontSize: 18,
  },
  icon:{
    width:70,
    height:70,
  }
});

export default Index;
