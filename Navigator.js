import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "./screens/GetStarted";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import Continue from "./screens/Continue";
import HomePage from "./screens/HomePage";
import Chats from "./screens/chats";
import Profile from "./screens/Profile";
import Upload from "./screens/Upload";
import Settings from "./screens/Settings";
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="getstarted" component={GetStarted} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      <Stack.Screen name="continue" component={Continue} />
      <Stack.Screen name="homepage" component={HomePage} />
      <Stack.Screen name="chats" component={Chats} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="upload" component={Upload} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
}
