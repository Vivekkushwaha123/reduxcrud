import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
          user.email = action.payload.email;
          user.phoneNumber = action.payload.phoneNumber;
          user.gender = action.payload.gender;
          user.isEligible = action.payload.isEligible;
          user.isEditing = action.payload.isEditing;
        }
      });
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = crudSlice.actions;
export default crudSlice.reducer;
