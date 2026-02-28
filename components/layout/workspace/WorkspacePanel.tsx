'use client';

import { useState } from 'react';

import { TabContent, TabGrid } from '@/components/tabs';

import PanelAccessories from './panels/PanelAccessories';
import PanelChair from './panels/PanelChair';
import PanelDesk from './panels/PanelDesk';
import PanelLayout from './panels/PanelLayout';
import PanelMonitor from './panels/PanelMonitor';

const tabOption = ['Layout', 'Desk', 'Chair', 'Monitor', 'Accecories'];

const WorkspacePanel = () => {
    const [content, setContent] = useState(0);
    return (
        <div className="h-screen min-h-screen w-70 border-r border-text-dark-muted/30 bg-bg-light-1 dark:border-text-dark-muted/30 dark:bg-dark-1">
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
                        <PanelMonitor />
                    </TabContent>
                    <TabContent value={content} index={4}>
                        <PanelAccessories />
                    </TabContent>
                </div>
            </div>
        </div>
    );
};

export default WorkspacePanel;
