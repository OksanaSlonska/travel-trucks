import { fetchCamperById } from "@/lib/api";
import styles from "./CamperDetails.module.css";
import Icon from "@/components/Icon/Icon";
import Image from "next/image";
import type { GalleryItem } from "@/types/camper";
import CamperIhfo from "@/components/CamperInfo/CamperInfo";

export default async function CamperDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let camper;

  try {
    camper = await fetchCamperById(id);
  } catch (err) {
    return <div>Failed to load camper data</div>;
  }

  if (!camper) {
    return <div>Camper not found</div>;
  }
  const { name, rating, location, price, description, reviews } = camper;

  return (
    <div className={styles.container}>
      {/* 1. H1 Title */}
      <h1 className={styles.title}>{name}</h1>

      {/* 2.  + Reviews + Локація */}
      <div className={styles.meta}>
        {rating !== undefined && (
          <div className={styles.rating}>
            <Icon name="icon-Rating" width={16} height={16} />
            <span className={styles.ratingText}>
              {rating.toFixed(1)}({reviews?.length || 0} Reviews)
            </span>
          </div>
        )}
        {location && (
          <div className={styles.location}>
            <Icon name="icon-Vector" width={16} height={16} />
            <span>{location}</span>
          </div>
        )}
      </div>

      {/* 3. Ціна */}
      <div className={styles.price}>€{price.toFixed(2)}</div>

      <div className={styles.gallery}>
        <div className={styles.imagesRow}>
          {camper.gallery.map((img: GalleryItem, index: number) => (
            <Image
              key={index}
              src={img.thumb}
              alt={`${name} image ${index + 1}`}
              width={120}
              height={80}
              className={styles.galleryImage}
            />
          ))}
        </div>
      </div>

      {/* 4. Description */}
      <div className={styles.description}>
        <p>{description}</p>
      </div>

      {/*  Features / Reviews*/}

      <CamperIhfo camper={camper} />
    </div>
  );
}
