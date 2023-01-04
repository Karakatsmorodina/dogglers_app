import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const MainStack = createNativeStackNavigator();
import Splash from "../screens/Splash";
import MainScreen from "../screens/MainScreen";
const MainNav = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <MainStack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="mainscreen"
          component={MainScreen}
          options={{ title: "Dogglers" }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default MainNav;
