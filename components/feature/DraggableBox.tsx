import { Icon } from '@iconify/react';
import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { Rnd } from 'react-rnd';
import { ButtonIcon } from '../button';

interface PropsResize {
    width: number;
    height: number;
}
interface PropsPosition {
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
    handleResize: (value: PropsResize) => void;
    handlePosition: (value: PropsPosition) => void;
    onRemove: () => void;
}

const DraggableBox = ({
    children,
    size,
    position,
    isActive = false,
    handleResize,
    handlePosition,
    onRemove,
}: Props) => {
    const nodeRef = useRef(null);
    const trackPos = (data: any) => {
        handlePosition({ x: data.x, y: data.y });
    };
    const trackSize = ({
        width,
        height,
    }: {
        width: number;
        height: number;
    }) => {
        handleResize({ width: width, height: height });
    };
    return (
        <Rnd
            nodeRef={nodeRef}
            bounds="parent"
            position={position}
            onDragStop={(e, data) => trackPos(data)}
            onResizeStop={(e, direction, ref, delta, position) => {
                trackSize({
                    width: parseInt(ref.style.width),
                    height: parseInt(ref.style.height),
                });
            }}
            size={size}
        >
            <div
                ref={nodeRef}
                className={`h-full w-full rounded-sm [&>.button-selector]:hover:opacity-100 ${isActive && 'border border-dashed border-accent-light/50'}`}
            >
                <div className="absolute right-0 top-0 h-8 w-8 button-selector opacity-0">
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
