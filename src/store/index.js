import { create } from "zustand";
import { createUrlSlice } from "./slices/urlSlice";
import { createLoadingSlice } from "./slices/loadingSlice";

export const useAppStore = create()((...a) => ({
  ...createUrlSlice(...a),
  ...createLoadingSlice(...a),
}));
