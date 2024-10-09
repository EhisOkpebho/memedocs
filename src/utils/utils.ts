import {useSelector} from "react-redux";

export const cs = (...classes: any[]) => classes.filter(Boolean).join(' ')

export const useGetMe = () =>  useSelector((state: any) => state.user.user)
