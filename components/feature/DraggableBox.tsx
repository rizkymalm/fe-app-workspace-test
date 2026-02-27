import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { Rnd } from 'react-rnd';

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
}

const DraggableBox = ({
    children,
    size,
    position,
    isActive = false,
    handleResize,
    handlePosition,
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
                className={`h-full w-full rounded-sm ${isActive && 'border border-dashed border-accent-light/50'}`}
            >
                {children}
            </div>
        </Rnd>
    );
};

export default DraggableBox;
