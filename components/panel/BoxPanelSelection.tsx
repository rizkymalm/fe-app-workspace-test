import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { ButtonIcon } from '../button';

interface Props {
    image: string | StaticImport;
    selected?: boolean;
    onClick?: () => void;
}

const BoxPanelSelection = ({ image, selected = false, onClick }: Props) => {
    return (
        <div
            className={`relative h-25 w-full cursor-pointer rounded-md border-2 border-dashed border-text-dark-muted/50 p-2 hover:bg-text-light-muted/20 active:bg-text-light-muted/20 ${selected && 'bg-text-light-muted/20'}`}
        >
            <div
                className="size-full"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute bottom-0 right-0 size-8">
                <ButtonIcon
                    icon="mdi:add"
                    iconSize={32}
                    type="button"
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default BoxPanelSelection;
