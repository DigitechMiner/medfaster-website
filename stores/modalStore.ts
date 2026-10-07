'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type ModalId = 'get-started' | 'get-app' | 'request-demo';

interface ModalStore {
  activeModal: ModalId | null;
  openModal: (id: ModalId) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>()(
  devtools(
    (set) => ({
      activeModal: null,
      openModal: (id) => set({ activeModal: id }),
      closeModal: () => set({ activeModal: null }),
    }),
    { name: 'ModalStore' }
  )
);
