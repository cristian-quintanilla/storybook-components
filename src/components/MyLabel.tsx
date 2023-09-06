import './MyLabel.css';

interface Props {
  /**
   * Text to display in the label
   */
  label: string;

  /**
   * Size of the label
   */
  size?: 'normal' | 'h3' | 'h2' | 'h1';

  /**
   * Capitalize the label
   */
  allCaps?: boolean;

  /**
   * Color of the label
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Custom color of the label
   */
  fontColor?: string;
}

export const MyLabel = ({ allCaps = false, color, fontColor, label, size = 'normal' }: Props) => {
  return (
    <span
      style={{ color: fontColor }}
      className={`label ${size} ${color}`}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  );
}
