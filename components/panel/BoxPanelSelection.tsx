import Image, { StaticImageData } from 'next/image';

interface Props {
    name: any;
    image: StaticImageData;
    selected?: boolean;
}

const BoxPanelSelection = ({ name, image, selected = false }: Props) => {
    return (
        <div
            className={`cursor-pointer rounded-md border-2 border-dashed border-text-dark-muted/50 hover:bg-text-light-muted/20 active:bg-text-light-muted/20 ${selected && 'bg-text-light-muted/20'}`}
        >
            <Image src={image} alt={name} aria-label={name} />
        </div>
    );
};

export default BoxPanelSelection;
