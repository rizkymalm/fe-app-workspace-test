import { ButtonIcon } from '../button';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
    name: any;
    image: string | StaticImport;
    selected?: boolean;
    onClick?: () => void;
}

const BoxPanelSelection = ({
    name,
    image,
    selected = false,
    onClick,
    ...props
}: Props) => {
    return (
        <div
            className={`relative cursor-pointer rounded-md border-2 w-full h-31 border-dashed border-text-dark-muted/50 hover:bg-text-light-muted/20 active:bg-text-light-muted/20 ${selected && 'bg-text-light-muted/20'}`}
        >
            <div className='w-full h-full' style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover'
            }}></div>
            <div className="absolute bottom-0 right-0 h-8 w-8">
                <ButtonIcon icon="mdi:add" iconSize={32} type="button" onClick={onClick} />
            </div>
        </div>
    );
};

export default BoxPanelSelection;
