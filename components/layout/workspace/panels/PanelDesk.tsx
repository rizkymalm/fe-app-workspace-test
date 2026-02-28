'use client';

import { useDispatch, useSelector } from 'react-redux';

import BoxPanelSelection from '@/components/panel/BoxPanelSelection';
import { deskPanel } from '@/constants/desk';
import type { PropsPanel } from '@/constants/types';
import { checkValueExists } from '@/lib/helpers';
import type { Reducers } from '@/redux/types';

const PanelDesk = () => {
    const dispatch = useDispatch();
    const workspaceState = useSelector((state: Reducers) => state.workspace);
    const handleSelectPanel = ({
        id,
        name,
        image,
        width,
        height,
        type,
        pos,
    }: PropsPanel) => {
        const data: any[] = workspaceState?.editor?.data || [];
        const check = checkValueExists(data, 'id', id);
        if (!check) {
            data.push({
                id,
                name,
                image,
                width,
                height,
                type,
                pos,
            });
            dispatch<any>({
                type: 'WORKSPACE_EDITOR_SUCCESS',
                payload: data,
            });
        }
    };
    return (
        <div className="grid w-full max-w-full grid-cols-2 gap-6 overflow-hidden">
            {deskPanel.map((item: PropsPanel, index: number) => (
                <BoxPanelSelection
                    image={item.image}
                    key={item.name}
                    onClick={() => {
                        handleSelectPanel(deskPanel[index]);
                    }}
                />
            ))}
        </div>
    );
};

export default PanelDesk;
