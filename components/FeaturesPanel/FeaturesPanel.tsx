import { camperOptions } from "@/constants/camperOptions";
import Chip from "../Chip/Chip";
import { Camper } from "@/types/camper";
import styles from "./FeaturesPanel.module.css";
type Props = {
  camper: Camper;
};

export default function FeaturesPanel({ camper }: Props) {
  return (
    <div className={styles.featuresContainer}>
      {/* Chips */}
      <ul className={styles.chipsWrapper}>
        {camperOptions.map((opt) =>
          camper[opt.key] ? (
            <Chip
              key={opt.key}
              label={opt.label}
              iconName={opt.icon}
              as="li"
              className={styles.detailsChip}
            />
          ) : null
        )}
      </ul>

      <h3 className={styles.detailsTitle}>Vehicle details</h3>

      {/* Details */}
      <h3 className={styles.detailsTitle}>Vehicle details</h3>

      <div className={styles.divider} />

      <div className={styles.details}>
        <p>
          <strong>Transmission:</strong> {camper.transmission}
        </p>
        <p>
          <strong>Engine:</strong> {camper.engine}
        </p>
        <p>
          <strong>Form:</strong> {camper.form}
        </p>
        <p>
          <strong>Length:</strong> {camper.length}
        </p>
        <p>
          <strong>Width:</strong> {camper.width}
        </p>
        <p>
          <strong>Height:</strong> {camper.height}
        </p>
        <p>
          <strong>Tank:</strong> {camper.tank}
        </p>
        <p>
          <strong>Consumption:</strong> {camper.consumption}
        </p>
      </div>
    </div>
  );
}
