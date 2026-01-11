"use client";

import { useEffect, useRef } from "react";
import { useCatalogStore } from "@/lib/stores/useCatalogStore";
import { FEATURES_LIST } from "@/constants/features";
import CamperCard from "../CamperCard/CamperCard";
import styles from "./CardsList.module.css";
import Loader from "../Loader/Loader";

export default function CardsList() {
  const { campers, isLoading, fetchCampers, loadMore, hasMore } =
    useCatalogStore();

  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    fetchCampers(true);
  }, [fetchCampers]);

  if (isLoading && campers.length === 0) {
    return <Loader />;
  }

  if (!isLoading && campers.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3 className={styles.emptyTitle}>No campers found 🚚</h3>
        <p className={styles.emptyText}>
          We couldn't find any campers matching your search. Try removing some
          filters.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ul className={styles.cardsList}>
        {campers.map(
          ({
            id,
            name,
            price,
            rating,
            location,
            description,
            gallery,
            reviews,
            ...rest
          }) => {
            const activeFeatures = FEATURES_LIST.filter(
              (key) => rest[key] || (rest as any)[key]
            );

            const thumb = gallery?.[0]?.thumb ?? "/placeholder.png";
            const reviewsCount = reviews?.length ?? 0;

            return (
              <CamperCard
                key={id}
                id={id}
                name={name}
                price={price}
                thumb={thumb}
                location={location}
                rating={rating}
                reviewsCount={reviewsCount}
                description={description}
                features={activeFeatures}
              />
            );
          }
        )}
      </ul>

      {hasMore && campers.length > 0 && (
        <div className={styles.loadMoreWrapper}>
          <button
            onClick={loadMore}
            disabled={isLoading}
            className={styles.loadMoreBtn}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
