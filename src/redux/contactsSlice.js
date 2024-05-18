import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts} from "./contactsOps";


const contactsSlice = createSlice({
  name: "contacts",
   initialState: {
    items: [],
    loading: false,
    error: false,
  },
  
  extraReducers: builder => builder
    .addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
    state.items = action.payload;
    state.loading = false;  
    })
    .addCase(fetchContacts.rejected, (state) => {
      state.error = true;
      state.loading = false;
    })
    .addCase(addContact.pending, (state) => {
      state.loading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state) => {
      state.error = true;
    })
   .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      }),
});


export default contactsSlice.reducer;