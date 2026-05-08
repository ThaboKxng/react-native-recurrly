import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center p-5 justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary px-4 py-2">
        <Text className="text-white">Go to Onboarding</Text>
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary px-4 py-2"
      >
        <Text className="text-white">Go to Sign In</Text>
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary px-4 py-2"
      >
        <Text className="text-white">Go to Sign Up</Text>
      </Link>
      <Link
        href="/(tabs)/subscriptions"
        className="mt-4 rounded bg-primary px-4 py-2"
      >
        <Text className="text-white">Go to Subscriptions</Text>
      </Link>
      <Link href={{ pathname: "/subscriptions/[id]", params: { id: "thabo" } }}>
        <Text className="text-white">View Subscription Details</Text>
      </Link>
    </SafeAreaView>
  );
}
