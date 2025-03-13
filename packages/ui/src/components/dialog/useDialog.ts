import { create } from 'zustand';

interface IDialogPayload {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface DialogState {
  isOpen: boolean;
  title: string;
  description: string;
  content: React.ReactNode;
  openDialog: (payload: IDialogPayload) => void;
  closeDialog: () => void;
}

export const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  title: '',
  description: '',
  content: null,
  openDialog: (payload) => set({ isOpen: true, ...payload }),
  closeDialog: () => {
    set({ isOpen: false, title: '', description: '', content: null });
  },
}));
