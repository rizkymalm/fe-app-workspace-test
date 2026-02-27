'use client';
import { TabContent, TabGrid } from '@/components/tabs';
import { useState } from 'react';
import PanelDesk from './panels/PanelDesk';
import PanelLayout from './panels/PanelLayout';
import PanelAccessories from './panels/PanelAccessories';
import PanelChair from './panels/PanelChair';

const tabOption = ['Layout', 'Desk', 'Chair', 'Accecories'];

const WorkspacePanel = () => {
    const [content, setContent] = useState(0);
    return (
        <div className="absolute inset-y-0 left-0 m-auto h-screen min-h-screen w-72.5 border-r-2 border-accent-light bg-bg-light-1 dark:border-accent-dark dark:bg-dark-1">
            <div className="w-full p-2">
                <TabGrid
                    options={tabOption}
                    onChange={index => {
                        setContent(index);
                    }}
                />
                <div className="mt-4 w-full">
                    <TabContent value={content} index={0}>
                        <PanelLayout />
                    </TabContent>
                    <TabContent value={content} index={1}>
                        <PanelDesk />
                    </TabContent>
                    <TabContent value={content} index={2}>
                        <PanelChair />
                    </TabContent>
                    <TabContent value={content} index={3}>
                        <PanelAccessories />
                    </TabContent>
                </div>
            </div>
        </div>
    );
};

export default WorkspacePanel;
