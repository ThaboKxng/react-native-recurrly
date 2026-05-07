import { Redirect } from "expo-router";

export default function Index() {
  // Eventually, you'll put logic here to check for a login token.
  // For now, this forces the app to jump straight to your tabs...
  return <Redirect href="/(tabs)" />;
}
