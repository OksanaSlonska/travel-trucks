type Props = {
  name: string;
  width?: number;
  height?: number;
  className?: string;
  color?: string;
};

export default function Icon({
  name,
  width = 24,
  height = 24,
  className,
  color,
}: Props) {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/sprite/icons.svg#${name}`} fill={color} />
    </svg>
  );
}
