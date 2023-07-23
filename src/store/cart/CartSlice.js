const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        data:[]
    },
    reducers :{
        addItemToCart: (state,action)=>{
            let tempData =state.data
            let isItemsExist = false
            tempData.map(item=>{
                if(item.id == action.payload.id){
                     isItemsExist = true
                     item.qty == ++item.qty
                }
            });
            if(!isItemsExist){
                tempData.push(action.payload);
            }
            state.data = tempData
        },
        reduceItemFromCart: (state,action)=>{
            let tempData =state.data
            tempData.map(item=>{
                if(item.id == action.payload.id){
                         item.qty == --item.qty 
                }
            });
            state.data = tempData
        },
        removeItemFromCart: (state,action)=>{
            let tempData =state.data
            tempData.splice(action.payload,1)
            state.data = tempData
        }


    }
})
export const {addItemToCart,reduceItemFromCart,removeItemFromCart} =CartSlice.actions
export default CartSlice.reducer;