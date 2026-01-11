import CardsList from "@/components/CardsList/CardsList";

import styles from "./CatalogPage.module.css";
import FiltersForm from "@/components/FiltersForm/FiltersForm";

export default function CatalogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.catalogPage}>
        <aside className={styles.filters}>
          <FiltersForm />
        </aside>
        <div className={styles.cards}>
          <CardsList />
        </div>
      </div>
    </div>
  );
}
