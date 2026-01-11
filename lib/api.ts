import axios from "axios";
import { Camper, Feature } from "@/types/camper";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

interface FetchParams {
  location?: string;
  form?: string;
  transmission?: "automatic";
  features?: Feature[];
  page?: number;
  limit?: number;
}

export const fetchCampersApi = async ({
  location,
  form,
  transmission,
  features,
  page = 1,
  limit = 4,
}: FetchParams): Promise<Camper[]> => {
  const params: Record<string, string | number | boolean> = {
    page,
    limit,
  };

  if (location?.trim()) params.location = location;
  if (form) params.form = form;

  if (transmission || features?.includes("automatic" as any)) {
    params.transmission = "automatic";
  }

  features?.forEach((feature) => {
    if ((feature as string) !== "automatic") {
      params[feature] = true;
    }
  });

  try {
    const res = await api.get("/campers", { params });
    return res.data.items || res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCamperById = async (id: string) => {
  const { data } = await api.get(`/campers/${id}`);
  return data;
};
