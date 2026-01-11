import { create } from "zustand";
import { Camper, Feature } from "@/types/camper";
import { fetchCampersApi } from "../api";

type CatalogFilters = {
  location: string;
  form: string | null; // 'panelTruck', 'fullyIntegrated', 'alcove'
  features: Feature[]; // ['AC', 'kitchen', 'TV', 'bathroom', etc.]
  transmission: "automatic" | null; // 'automatic' или null
};

type CatalogState = {
  filters: CatalogFilters;
  campers: Camper[];
  page: number;
  limit: number;
  hasMore: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  setLocation: (loc: string) => void;
  setForm: (form: string | null) => void;
  toggleFeature: (feature: Feature) => void;
  setTransmission: (t: "automatic" | null) => void;

  fetchCampers: (reset?: boolean) => Promise<void>;
  loadMore: () => Promise<void>;
};

export const useCatalogStore = create<CatalogState>((set, get) => ({
  // Початковий стан
  filters: {
    location: "",
    form: null,
    features: [],
    transmission: null,
  },
  campers: [],
  page: 1,
  limit: 4,
  hasMore: true,
  isLoading: false,
  error: null,

  // Сетери для фільтрів
  setLocation: (loc) =>
    set((state) => ({ filters: { ...state.filters, location: loc } })),

  setForm: (form) => set((state) => ({ filters: { ...state.filters, form } })),

  toggleFeature: (feature) =>
    set((state) => {
      const features = state.filters.features.includes(feature)
        ? state.filters.features.filter((f) => f !== feature)
        : [...state.filters.features, feature];
      return { filters: { ...state.filters, features } };
    }),

  setTransmission: (t) =>
    set((state) => ({ filters: { ...state.filters, transmission: t } })),

  // Основна функція завантаження
  fetchCampers: async (reset = false) => {
    const { filters, campers, limit, page } = get();

    const currentPage = reset ? 1 : page;

    set({
      isLoading: true,
      error: null,
      campers: reset ? [] : campers,
    });

    try {
      const data = await fetchCampersApi({
        location: filters.location || undefined,
        form: filters.form || undefined,
        transmission: filters.transmission || undefined,

        features: filters.features,

        page: currentPage,
        limit,
      });

      const hasMoreData = data.length === limit;

      set((state) => ({
        campers: reset ? data : [...state.campers, ...data],
        hasMore: hasMoreData,
        page: currentPage + 1,
      }));
    } catch (error) {
      console.error("Error fetching campers:", error);
      set({ error: "Failed to fetch campers. Please try again." });
    } finally {
      set({ isLoading: false });
    }
  },

  loadMore: async () => {
    await get().fetchCampers(false);
  },
}));
