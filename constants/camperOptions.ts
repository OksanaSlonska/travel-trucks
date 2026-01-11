import { Feature } from "@/types/camper";

export const camperOptions: { key: Feature; label: string; icon: string }[] = [
  { key: "AC", label: "AC", icon: "icon-wind" },
  { key: "bathroom", label: "Bathroom", icon: "icon-ph_shower" },
  { key: "kitchen", label: "Kitchen", icon: "icon-kitchen-new" },
  { key: "TV", label: "TV", icon: "icon-tv" },
  { key: "radio", label: "Radio", icon: "icon-ui-radios" },
  {
    key: "refrigerator",
    label: "Refrigerator",
    icon: "icon-solar_fridge",
  },
  { key: "microwave", label: "Microwave", icon: "icon-lucide_microwave" },
  { key: "gas", label: "Gas", icon: "icon-gas" },
  { key: "water", label: "Water", icon: "icon-water" },
];
