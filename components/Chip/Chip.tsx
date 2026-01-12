import Icon from "../Icon/Icon";
import styles from "./Chip.module.css";

type ChipProps = {
  label: string;
  iconName?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  as?: "button" | "li" | "div";
};

export default function Chip({
  label,
  iconName,
  active,
  onClick,
  className = "",
  as: Component = "div",
}: ChipProps) {
  const finalClassName =
    `${styles.chip} ${active ? styles.active : ""} ${className}`.trim();

  return (
    <Component
      onClick={onClick}
      className={finalClassName}
      {...(Component === "button" ? { type: "button" } : {})}
    >
      {iconName && <Icon name={iconName} className={styles.icon} />}
      <span>{label}</span>
    </Component>
  );
}
