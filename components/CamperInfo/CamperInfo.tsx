"use client";

import { useState } from "react";

import { Camper } from "@/types/camper";
import FeaturesPanel from "../FeaturesPanel/FeaturesPanel";
import ReviewsPanel from "../ReviewsPanel/ReviewsPanel";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./CamperInfo.module.css";

type Props = {
  camper: Camper;
};

export default function CamperTabs({ camper }: Props) {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsHeader}>
        <button
          className={activeTab === "features" ? styles.activeTab : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>

        <button
          className={activeTab === "reviews" ? styles.activeTab : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={styles.tabsContent}>
        {/* Ліва колонка */}
        <div className={styles.leftColumn}>
          {activeTab === "features" && <FeaturesPanel camper={camper} />}
          {activeTab === "reviews" && <ReviewsPanel reviews={camper.reviews} />}
        </div>

        {/* Права колонка */}
        <div className={styles.rightColumn}>
          <BookingForm camperId={camper.id} />
        </div>
      </div>
    </div>
  );
}
