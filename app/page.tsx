'use client';
import DashboardLayout from '@/components/layout/DashboardLayout';
import WorkspacePanel from '@/components/layout/workspace/WorkspacePanel';
import WorkspacePreview from '@/components/layout/workspace/WorkspacePreview';
import WorkspaceSummary from '@/components/layout/workspace/WorkspaceSummary';
import { postVisitors } from '@/redux/actions/visitors';
import { useEffect, useState } from 'react';

export default function Home() {
    const [createVisitor, setCreateVisitor] = useState(false);
    useEffect(() => {
        async function postDataVisitors() {
            if (!createVisitor) {
                await postVisitors({
                    data: {
                        url: 'next-gmbh',
                        page: 'home',
                    },
                    callback: () => {
                        setCreateVisitor(true);
                    },
                });
            }
        }
        postDataVisitors();
    }, [createVisitor]);
    return (
        <DashboardLayout>
            <div className="container mx-auto min-h-screen w-full max-w-full">
                <div className="flex min-h-screen w-full items-center justify-center overflow-auto text-text-light-primary dark:text-text-dark-primary">
                    <WorkspacePanel />
                    <WorkspacePreview />
                    <WorkspaceSummary />
                </div>
            </div>
        </DashboardLayout>
    );
}
