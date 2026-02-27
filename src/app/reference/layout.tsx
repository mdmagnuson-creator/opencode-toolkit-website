import { ReferenceLayout } from "@/components/layout/ReferenceLayout";
import { ReferenceSidebar } from "@/components/reference/ReferenceSidebar";

export default function ReferencePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReferenceLayout sidebar={<ReferenceSidebar />}>
      {children}
    </ReferenceLayout>
  );
}
