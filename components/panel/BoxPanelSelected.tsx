import { ButtonIcon } from '../button';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
    image: string | StaticImport;
    selected?: boolean;
    onDelete?: () => void;
    onClickUp?: () => void;
    onClickDown?: () => void;
}

const BoxPanelSelected = ({
    image,
    selected = false,
    onDelete,
    onClickUp,
    onClickDown,
}: Props) => {
    return (
        <div
            className={`relative h-28 w-full cursor-pointer rounded-md border-2 border-dashed border-text-dark-muted/50 p-2 hover:bg-text-light-muted/20 active:bg-text-light-muted/20 ${selected && 'bg-text-light-muted/20'}`}
        >
            <div
                className="h-full w-full"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute bottom-0 right-0 top-1 h-full w-8 flex-col">
                <ButtonIcon
                    icon="mdi:close"
                    iconSize={20}
                    type="button"
                    onClick={onDelete}
                />
                <ButtonIcon
                    icon="mdi:arrow-up"
                    iconSize={20}
                    type="button"
                    onClick={onClickUp}
                />
                <ButtonIcon
                    icon="mdi:arrow-down"
                    iconSize={20}
                    type="button"
                    onClick={onClickDown}
                />
            </div>
        </div>
    );
};

export default BoxPanelSelected;
