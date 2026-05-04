import { create } from "zustand";
import { toast } from "sonner";
import axios from "axios";

export const usePackages = create((set) => ({
    packages: [],
    packagesLoading: false,
    packagesAddLoading: false,
    packagesEditLoading: false,


    // Fetch Packages
    fetchPackages: async () => {
        try {
            set({ packagesLoading: true });
            const response = await axios.get(
                `${import.meta.env.VITE_SOME_URL}/api/packages`
            );
            set({
                packages: response.data,
                packagesLoading: false,
            });
        } catch (error) {
            console.log(error);
            set({ packagesLoading: false });
        }
    },

}));