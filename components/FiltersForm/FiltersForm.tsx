"use client";

import { useState } from "react";
import {
  vehicleEquipmentFilters,
  vehicleTypeFilters,
  transmissionFilters,
} from "@/constants/filterOptions";
import { useCatalogStore } from "@/lib/stores/useCatalogStore";
import ChipList from "../ChipList/ChipList";
import styles from "./FiltersForm.module.css";
import Icon from "../Icon/Icon";

export default function FiltersForm() {
  const {
    filters,
    setLocation,
    setForm,
    fetchCampers,
    toggleFeature,
    setTransmission,
  } = useCatalogStore();

  const [locationInput, setLocationInput] = useState(filters.location || "");

  const handleSearch = () => {
    setLocation(locationInput);
    fetchCampers(true);
    setLocationInput("");
  };

  return (
    <div className={styles.container}>
      {/* Секція локації */}
      <label className={styles.fieldLabel}>Location</label>
      <div className={styles.section}>
        <div className={styles.inputWrapper}>
          <Icon
            name="icon-Vector"
            width={20}
            height={20}
            className={styles.icon}
          />
          <input
            type="text"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="Country, City"
            className={styles.fieldLocation}
          />
        </div>
      </div>

      <label className={styles.fieldLabel}>Filters</label>

      {/* Секція обладнання + Трансмісія в одному ряду */}
      <div className={styles.section}>
        <label className={styles.chipLabel}>Vehicle equipment</label>
        <div className={styles.filtersLine}></div>
        <ChipList
          chips={[...vehicleEquipmentFilters, ...transmissionFilters]}
          activeKeys={[
            ...filters.features,
            ...(filters.transmission ? [filters.transmission] : []),
          ]}
          onClick={(key) => {
            if (key === "automatic") {
              setTransmission(
                filters.transmission === "automatic" ? null : "automatic"
              );
            } else {
              toggleFeature(key as any);
            }
          }}
          className={styles.filtersChips}
          chipClassName="filter-chip-card"
        />
      </div>

      {/* Секція типу кузова */}
      <div className={styles.section}>
        <label className={styles.chipLabel}>Vehicle type</label>
        <div className={styles.filtersLine}></div>
        <ChipList
          chips={vehicleTypeFilters}
          activeKey={filters.form || null}
          onClick={(key) => setForm(filters.form === key ? null : key)}
          className={styles.filtersChips}
          chipClassName="filter-chip-card"
        />
      </div>

      {/* Кнопка пошуку */}
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
