import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Reminder from '../screens/Reminder';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
        // headerShown : false
    }}>
      <Stack.Screen name="Home" component={Home}
      options={{headerShown:false}}
      // options={{
      //   headerLeft: () => (
      //     <Button
      //       title="Menu"
      //       size={24}
      //       color="black"
      //       style={{ marginLeft: 10 }}
      //       onPress={() => {
      //         // Handle the back button press event
      //       }}
      //     />
      //   ),
      // }} 
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Reminder" component={Reminder} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>

  );
  
  }
export default MyStack ;