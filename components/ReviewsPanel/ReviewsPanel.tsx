import Icon from "../Icon/Icon";
import { Review } from "@/types/camper";
import styles from "./ReviewsPanel.module.css";

type Props = {
  reviews: Review[];
};

export default function ReviewsPanel({ reviews }: Props) {
  if (reviews.length === 0) return <p>No reviews yet</p>;

  return (
    <div className={styles.reviews}>
      {reviews.map((rev, idx) => (
        <div key={idx} className={styles.reviewCard}>
          {/* header */}
          <div className={styles.header}>
            <div className={styles.avatar}>{rev.reviewer_name[0]}</div>

            <div className={styles.meta}>
              <p className={styles.name}>{rev.reviewer_name}</p>

              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="icon-Rating-1"
                    width={16}
                    height={16}
                    className={
                      i < Math.round(rev.reviewer_rating)
                        ? styles.starActive
                        : styles.star
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* comment */}
          <p className={styles.comment}>{rev.comment}</p>
        </div>
      ))}
    </div>
  );
}
