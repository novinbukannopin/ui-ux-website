export interface FeatureProps {
    subtitle: string;
    title: string;
    theme: "biru" | "ijo" | "pinky";
    image: string;
    arrow: string;
    custom?: boolean;
    direction?: "left" | "right";
}

export interface ButtonProps {
    className?: string;
    variant?: "primary" | "secondary" | "tertiary";
    title?: string;
}