import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Story } from "@/types/storyTypes";

interface StoriesState {
  stories: Story[];
}

const initialState: StoriesState = {
  stories: [],
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload;
    },
  },
});

export const { setStories } = storiesSlice.actions;

export default storiesSlice.reducer;
