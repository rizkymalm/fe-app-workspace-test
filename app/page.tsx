import DashboardLayout from "@/components/layout/DashboardLayout";
import WorkspacePanel from "@/components/layout/workspace/WorkspacePanel";
import WorkspacePreview from "@/components/layout/workspace/WorkspacePreview";
import WorkspaceSummary from "@/components/layout/workspace/WorkspaceSummary";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="container mx-auto min-h-screen w-full max-w-full">
        <div className="min-h-screen w-full overflow-auto items-center justify-center flex text-text-light-primary dark:text-text-dark-primary">
          <WorkspacePanel />
          <WorkspacePreview />
          <WorkspaceSummary />
        </div>
      </div>
    </DashboardLayout>
  );
}
