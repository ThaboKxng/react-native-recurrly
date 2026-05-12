import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SansSemiBold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    SansBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    SansMedium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    SansRegular: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    SansLight: require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    SansExtraBold: require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
