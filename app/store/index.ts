import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UseCurrentStepStoreProps {
  current: number;
  actions: {
    next: () => void;
    setCurrentStep: (step: number) => void;
    previous: () => void;
    resetStep: () => void;
  };
}

const MAX_STEP = 3;
const MIN_STEP = 1;

const useCurrentStepStore = create<UseCurrentStepStoreProps>((set) => ({
  current: 1,
  actions: {
    next: () =>
      set((state) => ({ current: Math.min(state.current + 1, MAX_STEP) })),
    setCurrentStep: (step: number) => set(() => ({ current: step })),
    previous: () =>
      set((state) => ({ current: Math.max(state.current - 1, MIN_STEP) })),
    resetStep: () => set(() => ({ current: 1 })),
  },
}));

export const useCurrentStep = () =>
  useCurrentStepStore((state) => state.current);
export const useCurrentStepAction = () =>
  useCurrentStepStore((state) => state.actions);

interface UseAppointmentStoreProps {
  selectedBranch: {
    name: string;
    id: number;
  };
  selectedPackage: {
    name: string;
    id: number;
  };
  selectedDateTime: string;
  actions: {
    setSelectedBranch: (name: string, id: number) => void;
    setSelectedPackage: (name: string, id: number) => void;
    setSelectedDateTime: (date_time: string) => void;
    clearAppointmentData: () => void;
  };
}

const useAppointmentStore = create<UseAppointmentStoreProps>((set) => ({
  selectedBranch: {
    name: '',
    id: 0,
  },
  selectedPackage: {
    name: '',
    id: 0,
  },
  selectedDateTime: '',
  actions: {
    setSelectedBranch: (name: string, id: number) =>
      set(() => ({
        selectedBranch: {
          name: name,
          id: id,
        },
      })),
    setSelectedPackage: (name: string, id: number) =>
      set(() => ({
        selectedPackage: {
          name: name,
          id: id,
        },
      })),
    setSelectedDateTime: (date_time: string) =>
      set(() => ({ selectedDateTime: date_time })),
    clearAppointmentData: () =>
      set(() => ({
        selectedBranch: {
          name: '',
          id: 0,
        },
        selectedPackage: {
          name: '',
          id: 0,
        },
        selectedDateTime: '',
      })),
  },
}));

export const useAppointment = () => useAppointmentStore((state) => state);
export const useAppointmentActions = () =>
  useAppointmentStore((state) => state.actions);
