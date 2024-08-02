
import { create } from 'zustand'

const useSocialMediaStore = create((set) => ({
  selectedSocialMedia: [],
  toggleSocialMedia: (socialMedia) =>
    set((state) => ({
      selectedSocialMedia: state.selectedSocialMedia.includes(socialMedia)
        ? state.selectedSocialMedia.filter((item) => item !== socialMedia)
        : [...state.selectedSocialMedia, socialMedia],
    })),
}));

export default useSocialMediaStore;
