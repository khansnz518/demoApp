import {configureStore} from '@reduxjs/toolkit';
import ReminderSlice from './Reminder/ReminderSlice';
import ProductReducer from './Product/ProductSlice';
import WishListReducer from './wishList/wishListSlice';
import CartReducer from './cart/CartSlice';
import AddAddressReducer from  './Address/AddressSlice'

export default configureStore({
  reducer: {
    reminder: ReminderSlice,
    products: ProductReducer,
    wishList: WishListReducer,
    cart: CartReducer,
    addAddress: AddAddressReducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
