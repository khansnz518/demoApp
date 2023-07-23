import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Reminder from '../screens/Reminder';
import ProductDetail from '../components/screens/ProductDetail';
import Cart from '../components/screens/Cart';
import Checkout from '../components/screens/Checkout';
import Address from '../components/screens/Address';
import AddAddress from '../components/screens/AddAddress';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown : false
    }}>
      <Stack.Screen name="Home" component={Home}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Reminder" component={Reminder} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
    </Stack.Navigator>

  );
  
  }
export default MyStack ;