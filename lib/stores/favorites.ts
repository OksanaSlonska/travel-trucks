import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoritesState {
  favorites: string[]; //Зберігаємо тільки ID
  toggleFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],

      toggleFavorite: (id) =>
        set((state) => {
          const isFavorite = state.favorites.includes(id);
          return {
            favorites: isFavorite
              ? state.favorites.filter((favId) => favId !== id) //Видалити
              : [...state.favorites, id], // Додати
          };
        }),
    }),
    {
      name: "favorites-storage", // Унікальне ім'я ключа в LocalStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
