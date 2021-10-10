import { useContext, createContext } from "react";

export const itemsContext = createContext();

export default function useItemContext() {
  return useContext(itemsContext);
}
