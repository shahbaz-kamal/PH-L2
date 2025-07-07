import type { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./store";


export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
