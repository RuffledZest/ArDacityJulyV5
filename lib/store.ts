"use client"

import { create } from "zustand"

interface Store {
  lenis: any
  setLenis: (lenis: any) => void
  introOut: boolean
  setIntroOut: (introOut: boolean) => void
}

export const useStore = create<Store>((set: (arg0: { lenis?: any; introOut?: any }) => any) => ({
  lenis: null,
  setLenis: (lenis: any) => set({ lenis }),
  introOut: true,
  setIntroOut: (introOut: any) => set({ introOut }),
}))
