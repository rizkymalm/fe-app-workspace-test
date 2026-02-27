import DashboardLayout from "@/components/layout/DashboardLayout";
import WorkspacePanel from "@/components/layout/workspace/WorkspacePanel";
import WorkspacePreview from "@/components/layout/workspace/WorkspacePreview";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="container mx-auto min-h-screen w-full max-w-full">
        <div className="min-h-screen w-full overflow-auto items-center justify-center text-text-light-primary dark:text-text-dark-primary">
          <WorkspacePanel />
          <WorkspacePreview />
        </div>
      </div>
    </DashboardLayout>
  );
}
