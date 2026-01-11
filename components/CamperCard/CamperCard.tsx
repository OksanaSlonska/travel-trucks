"use client";

import Image from "next/image";
import Icon from "../Icon/Icon";
import Chip from "../Chip/Chip";
import { Feature } from "@/types/camper";
import { camperOptions } from "@/constants/camperOptions";
import styles from "./CamperCard.module.css";
import Link from "next/link";
import { useFavoritesStore } from "@/lib/stores/favorites";

type Props = {
  id: string;
  name: string;
  price: number;
  thumb?: string;
  location?: string;
  rating?: number;
  reviewsCount?: number;
  description?: string;
  features?: Feature[];
  index?: number;
};

export default function CamperCard({
  id,
  name,
  price,
  location,
  rating,
  reviewsCount,
  description,
  thumb,
  features = [],
}: Props) {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(id);

  const activeOptions = camperOptions.filter((opt) =>
    features.includes(opt.key)
  );

  return (
    <li className={styles.card}>
      {/* Зображення */}
      {thumb && (
        <Image
          src={thumb}
          alt={name}
          width={292}
          height={320}
          className={styles.thumb}
        />
      )}

      <div className={styles.info}>
        {/*Заголовок та ціна*/}
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.headerRight}>
            <p className={styles.price}>€{price.toFixed(2)}</p>
            <button
              className={styles.favorites}
              onClick={() => toggleFavorite(id)}
              aria-label="Add to favorites"
            >
              <span className={styles.iconWrapper}>
                <Icon name={isFavorite ? "icon-heart2" : "icon-heart"} />
              </span>
            </button>
          </div>
        </div>

        {/* Локація та рейтинг */}
        <div className={styles.meta}>
          {rating !== undefined && reviewsCount !== undefined && (
            <div className={styles.reviews}>
              <Icon name="icon-Rating" />
              <span>
                {rating.toFixed(1)} ({reviewsCount} Reviews)
              </span>
            </div>
          )}
          {location && (
            <div className={styles.location}>
              <Icon name="icon-Vector" /> <span>{location}</span>
            </div>
          )}
        </div>

        {/* Опис */}
        <p className={styles.description}>{description}</p>

        {/* Чіпси */}
        {activeOptions.length > 0 && (
          <div className={styles.chipsWrapper}>
            {activeOptions.map((opt) => (
              <Chip key={opt.key} label={opt.label} iconName={opt.icon} />
            ))}
          </div>
        )}

        <Link href={`/catalog/${id}`} className={styles.showMore}>
          Show more
        </Link>
      </div>
    </li>
  );
}
