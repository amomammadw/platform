import { create } from 'zustand';

interface DialogState {
  isOpen: boolean;
  title: string;
  description: string;
  content: React.ReactNode;
  openDialog: (
    title: string,
    description: string,
    content: React.ReactNode
  ) => void;
  closeDialog: () => void;
}

export const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  title: '',
  description: '',
  content: null,
  openDialog: (title, description, content) =>
    set({ isOpen: true, title, description, content }),
  closeDialog: () =>
    set({ isOpen: false, title: '', description: '', content: null }),
}));
