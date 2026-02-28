'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BoxPanelSelected from '@/components/panel/BoxPanelSelected';
import type { PropsPanel } from '@/constants/types';
import { moveDown, moveUp } from '@/lib/helpers';
import type { Reducers } from '@/redux/types';

const WorkspaceSummary = () => {
    const dispatch = useDispatch();
    const workspaceState = useSelector((state: Reducers) => state.workspace);
    const [selectedPanel, setSelectedPanel] = useState<PropsPanel[]>([]);
    useEffect(() => {
        if (workspaceState?.editor?.data) {
            setSelectedPanel(workspaceState?.editor?.data);
        }
    }, [workspaceState?.editor?.data]);

    const handleRemovePanel = (indexToRemove: number) => {
        const data = selectedPanel;
        data.splice(indexToRemove, 1);
        dispatch<any>({
            type: 'WORKSPACE_EDITOR_SUCCESS',
            payload: data,
        });
    };

    const handleUp = (index: number) => {
        const data = selectedPanel;
        const moveToUp = moveDown(data, index);
        dispatch<any>({
            type: 'WORKSPACE_EDITOR_SUCCESS',
            payload: moveToUp,
        });
    };

    const handleDown = (index: number) => {
        const data = selectedPanel;
        const moveToDown = moveUp(data, index);
        dispatch<any>({
            type: 'WORKSPACE_EDITOR_SUCCESS',
            payload: moveToDown,
        });
    };

    return (
        <div className="h-screen min-h-screen w-65 border-l border-text-dark-muted/30 bg-bg-light-1 px-4 pt-10 dark:border-text-dark-muted/30 dark:bg-dark-1">
            <h2 className="text-xl font-bold">Your Item</h2>
            <div className="no-scrollbar max-h-[90%] w-full max-w-full overflow-auto">
                <div className="flex w-full max-w-full flex-col-reverse gap-4 pt-6">
                    {selectedPanel.map((item: PropsPanel, index: number) => (
                        <BoxPanelSelected
                            image={item.image}
                            key={item.name}
                            onDelete={() => {
                                handleRemovePanel(index);
                            }}
                            onClickUp={() => {
                                handleUp(index);
                            }}
                            onClickDown={() => {
                                handleDown(index);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkspaceSummary;
