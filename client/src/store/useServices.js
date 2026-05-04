import { create } from "zustand";
import axios from "axios";

export const useServices = create((set) => ({
    services: [],
    ServiceLoading: false,


    // Get All Services
    FetchServices: async () => {
        try {
            set({ servicesLoading: true });
            const response = await axios.get(
                `${import.meta.env.VITE_SOME_URL}/api/services`
            );
            set({
                services: response.data,
                servicesLoading: false,
            });
        } catch (error) {
            console.log(error);
            set({ servicesLoading: false });
        }
    },



}));