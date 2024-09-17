import { View ,Text,StyleSheet} from "react-native";
const ScanImage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>hello</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
        
    },
    text:{
        fontSize:30,
        color:"white"
    }
});


export default ScanImage
