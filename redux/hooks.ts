import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
