import './MyLabel.css';
export interface Props {
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
export declare const MyLabel: ({ allCaps, color, fontColor, label, size }: Props) => import("react/jsx-runtime").JSX.Element;
