'use client';
import BoxPanelSelection from '@/components/panel/BoxPanelSelection';
import { chairPanel } from '@/constants/desk';
import { PropsPanel } from '@/constants/types';
import { checkValueExists } from '@/lib/helpers';
import { Reducers } from '@/redux/types';
import { useDispatch, useSelector } from 'react-redux';

const PanelChair = () => {
    const dispatch = useDispatch();
    const workspaceState = useSelector((state: Reducers) => state.workspace);
    const handleSelectPanel = ({
        id,
        name,
        image,
        width,
        height,
        pos,
    }: PropsPanel) => {
        let data: any[] = workspaceState?.editor?.data || [];
        const check = checkValueExists(data, 'id', id);
        if (!check) {
            data.push({
                id: id,
                name: name,
                image: image,
                width: width,
                height: height,
                pos: pos,
            });
            dispatch<any>({
                type: 'WORKSPACE_EDITOR_SUCCESS',
                payload: data,
            });
        }
    };
    return (
        <div className="grid w-full max-w-full grid-cols-2 gap-6 overflow-hidden">
            {chairPanel.map((item: PropsPanel, index: number) => (
                <BoxPanelSelection
                    image={item.image}
                    name={item.name}
                    key={item.name}
                    onClick={() => {
                        handleSelectPanel(chairPanel[index]);
                    }}
                />
            ))}
        </div>
    );
};

export default PanelChair;
