'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ButtonPrimary } from '@/components/button';
import DraggableBox from '@/components/feature/DraggableBox';
import type { PropsPanel } from '@/constants/types';
import type { Reducers } from '@/redux/types';

interface PropsSizePosition {
    width: number | undefined;
    height: number | undefined;
    x: number;
    y: number;
    index: number;
}

const WorkspacePreview = () => {
    const dispatch = useDispatch();
    const [isMove, setIsMove] = useState(false);
    const [isActive, setIsActive] = useState(-1);
    const workspaceState = useSelector((state: Reducers) => state.workspace);
    const [panel, setPanel] = useState<PropsPanel[]>([]);
    useEffect(() => {
        if (workspaceState?.editor?.data) {
            setPanel(workspaceState?.editor?.data);
        }
    }, [workspaceState?.editor?.data]);
    const handleSaveUpdated = () => {
        dispatch<any>({
            type: 'WORKSPACE_EDITOR_SUCCESS',
            payload: panel,
        });
        setIsMove(false);
    };
    const handleRemovePanel = (indexToRemove: number) => {
        const data = panel;
        data.splice(indexToRemove, 1);
        dispatch<any>({
            type: 'WORKSPACE_EDITOR_SUCCESS',
            payload: data,
        });
    };
    const handleUpdateSizeNPosition = ({
        width,
        height,
        x,
        y,
        index,
    }: PropsSizePosition) => {
        const updatedPanel: PropsPanel[] = [...panel];

        updatedPanel[index] = {
            ...updatedPanel[index],
            width: width || updatedPanel[index].width,
            height: height || updatedPanel[index].height,
            pos: {
                x,
                y,
            },
        };
        setPanel(updatedPanel);
    };
    return (
        <div className="no-scrollbar relative flex min-h-screen w-full max-w-[1150px] flex-1 items-center justify-center bg-bg-light-3 py-2 dark:bg-bg-dark-3">
            <div className="relative h-125 w-180 flex-col gap-5 p-2">
                <div className="size-full rounded-lg border-2 border-accent-light/30 bg-bg-light-1 dark:bg-dark-1">
                    {panel &&
                        panel.map((item: PropsPanel, index: number) => (
                            <DraggableBox
                                key={item.name}
                                size={{
                                    width: item.width,
                                    height: item.height,
                                }}
                                position={{
                                    x: item.pos.x,
                                    y: item.pos.y,
                                }}
                                isActive={index === isActive}
                                handleResPos={value => {
                                    handleUpdateSizeNPosition({
                                        width: value.width,
                                        height: value.height,
                                        x: value.x,
                                        y: value.y,
                                        index,
                                    });
                                    setIsMove(true);
                                }}
                                onRemove={() => {
                                    handleRemovePanel(index);
                                }}
                            >
                                <div
                                    className="size-full"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}
                                    onMouseDown={() => setIsActive(index)}
                                    onClick={() => setIsActive(index)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label="rndobject"
                                />
                            </DraggableBox>
                        ))}
                </div>
                <ButtonPrimary
                    text="Save Updated"
                    size="md"
                    variant="contained"
                    type="button"
                    onClick={handleSaveUpdated}
                    disabled={!isMove}
                    icon="mdi:content-save"
                />
            </div>
        </div>
    );
};

export default WorkspacePreview;
