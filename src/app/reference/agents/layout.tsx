import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agents Reference | yo, go",
  description: "Browse all 64 AI agents in yo, go. 4 primary agents orchestrate work while 60 sub-agents handle specialized tasks like code review, testing, and development.",
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
