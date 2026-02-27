'use client';

import { ButtonPrimary } from '@/components/button';
import DraggableBox from '@/components/feature/DraggableBox';
import { PropsPanel } from '@/constants/types';
import { Reducers } from '@/redux/types';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
    const handleUpdateSize = (width: number, height: number, index: number) => {
        let updatedPanel: PropsPanel[] = [...panel];

        updatedPanel[index] = {
            ...updatedPanel[index],
            width: width,
            height: height,
        };
        setPanel(updatedPanel);
    };
    const handleUpdatePosition = (x: number, y: number, index: number) => {
        let updatedPanel: PropsPanel[] = [...panel];

        updatedPanel[index] = {
            ...updatedPanel[index],
            pos: {
                x,
                y,
            },
        };
        setPanel(updatedPanel);
    };
    const handleSaveUpdated = () => {
        dispatch<any>({
            type: 'WORKSPACE_EDITOR_SUCCESS',
            payload: panel,
        });
    };
    const handleRemovePanel = (indexToRemove: number) => {
        const data = panel;
        data.splice(indexToRemove, 1);
        dispatch<any>({
            type: 'WORKSPACE_EDITOR_SUCCESS',
            payload: data,
        });
    };
    return (
        <div className="no-scrollbar ml-67.5 flex min-h-screen w-full max-w-[1150px] items-center justify-center bg-bg-light-3 py-2 pl-6 dark:bg-bg-dark-3">
            <div className="relative h-125 w-180 p-2">
                <div className="h-full w-full rounded-lg border-2 border-accent-light/30 bg-bg-light-1 dark:bg-dark-1">
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
                                handleResize={value => {
                                    handleUpdateSize(
                                        value.width,
                                        value.height,
                                        index
                                    );
                                    setIsMove(true);
                                }}
                                handlePosition={value => {
                                    handleUpdatePosition(
                                        value.x,
                                        value.y,
                                        index
                                    );
                                    setIsMove(true);
                                }}
                                onRemove={() => {
                                    handleRemovePanel(index);
                                }}
                            >
                                <div
                                    className={`h-full w-full`}
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: 'cover',
                                    }}
                                    onMouseDown={() => setIsActive(index)}
                                    onClick={() => setIsActive(index)}
                                ></div>
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
                    icon='mdi:content-save'
                />
            </div>
        </div>
    );
};

export default WorkspacePreview;
