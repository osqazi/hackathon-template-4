import { atom } from "jotai";

interface CartItem {
  id: string;  
}

// Initialize cartAtom with the correct type
export const cartAtom = atom<CartItem[]>([]);
