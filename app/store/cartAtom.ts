import { atom } from "jotai";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  pic: string;
}

// Initialize cartAtom with the correct type
export const cartAtom = atom<CartItem[]>([]);
