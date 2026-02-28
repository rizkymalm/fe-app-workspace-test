import React, { useRef } from 'react';
import { Rnd } from 'react-rnd';

import { ButtonIcon } from '../button';

interface PropsResizePosition {
    width?: number;
    height?: number;
    x: number;
    y: number;
}

interface Props {
    children: React.ReactNode;
    size: {
        width: number;
        height: number;
    };
    position: {
        x: number;
        y: number;
    };
    isActive?: boolean;
    handleResPos: (value: PropsResizePosition) => void;
    onRemove: () => void;
}

const DraggableBox = ({
    children,
    size,
    position,
    isActive = false,
    handleResPos,
    onRemove,
}: Props) => {
    const nodeRef = useRef(null);

    const trackSizeNPosition = ({
        width,
        height,
        x,
        y,
    }: PropsResizePosition) => {
        handleResPos({ width, height, x, y });
    };
    return (
        <Rnd
            nodeRef={nodeRef}
            bounds="parent"
            position={position}
            onDragStop={(e, data) => {
                trackSizeNPosition({ x: data.x, y: data.y });
            }}
            onResizeStop={(e, direction, ref, delta, positions) => {
                trackSizeNPosition({
                    width: parseInt(ref.style.width, 10),
                    height: parseInt(ref.style.height, 10),
                    x: positions.x,
                    y: positions.y,
                });
            }}
            size={size}
        >
            <div
                ref={nodeRef}
                className={`size-full rounded-sm [&>.button-selector]:hover:opacity-100 ${isActive && 'border border-dashed border-accent-light/50'}`}
            >
                <div className="button-selector absolute right-0 top-0 size-8 opacity-0">
                    <ButtonIcon
                        icon="mdi:close"
                        iconSize={16}
                        type="button"
                        onClick={onRemove}
                    />
                </div>
                {children}
            </div>
        </Rnd>
    );
};

export default DraggableBox;
