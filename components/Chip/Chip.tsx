import Icon from "../Icon/Icon";
import styles from "./Chip.module.css";

type ChipProps = {
  label: string;
  iconName?: string;
  active?: boolean;
  color?: string;

  onClick?: () => void;
  className?: string;
};

export default function Chip({
  label,
  iconName,
  active,
  onClick,
  className = "",
}: ChipProps) {
  const finalClassName = className
    ? `${className} ${active ? "active" : ""}`
    : styles.chip;
  return (
    <button type="button" onClick={onClick} className={finalClassName}>
      {iconName && <Icon name={iconName} className="icon" />}
      {label}
    </button>
  );
}
