"use client";

import Chip from "../Chip/Chip";

interface ChipListProps {
  chips: { key: string; label: string; icon?: string }[];
  activeKey?: string | null;
  activeKeys?: string[];
  onClick: (key: string) => void;
  className?: string;
  chipClassName?: string;
}

export default function ChipList({
  chips,
  activeKey,
  activeKeys,
  onClick,
  className,
  chipClassName,
}: ChipListProps) {
  return (
    <div className={className}>
      {chips.map((item) => {
        const isActive = activeKeys
          ? activeKeys.includes(item.key)
          : activeKey === item.key;

        return (
          <Chip
            key={item.key}
            label={item.label}
            iconName={item.icon}
            active={isActive}
            onClick={() => onClick(item.key)}
            className={chipClassName}
          />
        );
      })}
    </div>
  );
}
