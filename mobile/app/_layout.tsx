import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Index" options={{ title: "Home" }}   />
      <Stack.Screen name="UploadMachineReadable" options={{ title: "Upload Machine Readable" }}  ></Stack.Screen>
    </Stack>
  );
}
