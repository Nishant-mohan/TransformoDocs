import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }}   />
      <Stack.Screen name="UploadMachineReadable" options={{ title: "Upload Machine Readable" }}  ></Stack.Screen>
      <Stack.Screen name="ScanImage" options={{ title: "Convert Image" }}  ></Stack.Screen>

    </Stack>
  );
}
