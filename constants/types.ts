export interface PropsPanel {
    id: string;
    name: string;
    image: string;
    width: number;
    height: number;
    type?: 'desk' | 'layout' | 'accessories' | 'monitor' | 'chair' | undefined;
    pos: {
        x: number;
        y: number;
    };
}
