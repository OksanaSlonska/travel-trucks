"use client";

import Chip from "../Chip/Chip";
import styles from "./ChipList.module.css";

type ChipListProps = {
  chips: { key: string; label: string; icon?: string }[];
  activeKeys?: string[];
  activeKey?: string | null;
  onClick: (key: string) => void;
  className?: string;
  chipClassName?: string;
};

export default function ChipList({
  chips,
  activeKeys = [],
  activeKey = null,
  onClick,
  className = "",
  chipClassName = "",
}: ChipListProps) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {chips.map((chip) => (
        <li key={chip.key}>
          <Chip
            as="button" // Для фільтрів це завжди інтерактивна кнопка
            label={chip.label}
            iconName={chip.icon}
            active={activeKey === chip.key || activeKeys.includes(chip.key)}
            onClick={() => onClick(chip.key)}
            className={chipClassName}
          />
        </li>
      ))}
    </ul>
  );
}
