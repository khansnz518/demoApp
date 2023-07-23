const { createSlice } = require("@reduxjs/toolkit");

const AddAddressSlice = createSlice({
    name : 'addAddress',
    initialState:{
        data:[],
    },
    reducers :{
        addAddress : (state,action)=>{
            const tempData = state.data
            tempData.push(action.payload);
            state.data = tempData
        },
        
    }
})
export  const {addAddress} = AddAddressSlice.actions;
export default AddAddressSlice.reducer;