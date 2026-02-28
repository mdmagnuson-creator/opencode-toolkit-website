import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OnThisPageNav } from "@/components/OnThisPageNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memo: in claude we trust",
  description: "A meditation on the shift from knowledge-constrained to context-constrained software development, and the dissolution of software as we know it.",
  openGraph: {
    title: "Memo: in claude we trust | yo, go",
    description: "A meditation on the shift from knowledge-constrained to context-constrained software development, and the dissolution of software as we know it.",
    images: ["/og/memo.png"],
  },
};

const PAGE_SECTIONS = [
  { id: "from-knowledge-constrained-to-context-constrained", label: "From Knowledge-Constrained to Context-Constrained" },
  { id: "context-collapse", label: "Context Collapse" },
  { id: "ambient-context", label: "Ambient Context" },
  { id: "software-dissolves", label: "Software Dissolves" },
  { id: "the-current-window", label: "The Current Window" },
  { id: "attribution", label: "Attribution" },
];

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="not-prose my-10 border-l-4 border-blue-500 py-4 pl-6 dark:border-blue-400">
      <p className="text-xl font-medium italic text-neutral-700 sm:text-2xl dark:text-neutral-300">
        &ldquo;{children}&rdquo;
      </p>
    </aside>
  );
}

export default function MemoPage() {
  return (
    <main className="min-h-screen">
      {/* On This Page Navigation - Desktop only at top level */}
      <div className="hidden lg:block">
        <OnThisPageNav sections={PAGE_SECTIONS} />
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl dark:text-neutral-50">
            Memo
          </h1>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            February 2026
          </p>
          <p className="mt-2 text-sm italic text-neutral-500 dark:text-neutral-500">
            in claude we trust
          </p>
        </div>
      </section>

      {/* Content wrapper - contains sticky nav and article */}
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          {/* On This Page Navigation - Mobile sticky */}
          <div className="lg:hidden">
            <OnThisPageNav sections={PAGE_SECTIONS} />
          </div>

          {/* Main Content */}
          <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-tight prose-p:leading-7 prose-a:text-blue-600 dark:prose-a:text-blue-400">
            <h2 id="from-knowledge-constrained-to-context-constrained">
              From Knowledge-Constrained to Context-Constrained
            </h2>
            <p>
              Up until now, building software required knowing how to build software. The constraint was knowledge: understanding languages, frameworks, patterns, and the accumulated wisdom of decades of engineering practice. Those who possessed this knowledge created; those who didn&apos;t requested and waited.
            </p>
            <p>
              That constraint has evaporated. The machines now possess the knowledge. They understand languages, frameworks, and patterns far more comprehensively than any individual ever could. What they lack is context: the specific circumstances, requirements, history, and intent that define what should be built. The cutting edge of software development has shifted from knowing how to build to knowing how to convey what should be built.
            </p>
            <p>
              This shift does not diminish the importance of intent. Quite the opposite. When anyone can build anything, the question of what to build becomes paramount. Valuable software still requires valuable intent, a clear understanding of problems worth solving and solutions worth implementing. The constraint has moved, but constraint remains.
            </p>

            <h2 id="context-collapse">Context Collapse</h2>
            <p>
              The current moment demands significant effort to provide context. Codebases must be understood, conventions documented, architectures explained. Skilled practitioners bridge the gap between machine capability and specific need by constructing elaborate context (toolkits, prompts, workflows) that translate organizational reality into machine-comprehensible instruction.
            </p>
            <p>
              This burden is temporary. Models grow more capable of inferring context from sparse signals. They learn to navigate unfamiliar codebases, infer conventions from examples, and understand organizational patterns from limited exposure. The context that today requires careful curation will soon be gathered automatically.
            </p>
            <p>
              When context becomes trivial to provide, the economics of software change fundamentally. A user encountering friction in their workflow will be able to request modifications (new features, integrations, adaptations) without risking the stability of existing functionality. The traditional build-versus-buy decision, which weighs the cost of custom development against the compromises of existing solutions, collapses. Custom software becomes as accessible as configuration.
            </p>

            <PullQuote>
              The build vs. buy decision just collapsed to zero
            </PullQuote>

            <h2 id="ambient-context">Ambient Context</h2>
            <p>
              Beyond explicit context lies ambient context: the vast ocean of signals that machines will eventually perceive without being told. Calendars, communications, behavioral patterns, organizational structures, historical decisions, and their outcomes. The sum total of digital existence, continuously observed and understood.
            </p>
            <p>
              Machines operating with ambient context will understand the ramifications of intent better than the humans expressing it. They will recognize when a requested feature conflicts with existing workflows, when a solution creates downstream problems, when an apparent need masks a deeper issue. The gap between what people ask for and what they actually need, a gap that skilled practitioners have always navigated, will be closed by machines that understand both.
            </p>
            <p>
              This trajectory leads somewhere uncomfortable for current notions of agency. When machines understand context more completely than humans can articulate it, when they can predict consequences more accurately than humans can imagine them, the question of who decides what software should exist becomes less clear. Decision-making authority naturally flows toward comprehension.
            </p>

            <h2 id="software-dissolves">Software Dissolves</h2>
            <p>
              The logical endpoint of these trends is the dissolution of software as a distinct category of artifact. User interfaces, carefully designed to present information and gather input, become unnecessary when machines already possess the context that interfaces exist to collect. The painstaking work of UX design (understanding user needs, crafting intuitive flows, iterating toward clarity) becomes automated generation of whatever presentation layer a specific moment requires.
            </p>
            <p>
              No interface designed by humans will be more efficient than a personal agent that already knows what a user needs and can act on their behalf. The app, the dashboard, the form: these are all mechanisms for bridging a gap between human intent and machine action. When that gap closes, the bridges become irrelevant.
            </p>
            <p>
              Software creation, as currently understood, has no value proposition in this future. The skills, tools, and practices that define the profession today are oriented around a constraint (context) that will not persist. The work of translating human intent into machine action, which has employed millions and generated trillions in value, approaches obsolescence.
            </p>

            <PullQuote>
              Software as we know, build and understand it will dissolve
            </PullQuote>

            <h2 id="the-current-window">The Current Window</h2>
            <p>
              This trajectory explains why toolkits exist in this particular moment. The destination may be clear, but the path still requires navigation. Context remains the constraint, and providing it effectively remains difficult. The gap between machine capability and practical application is still wide enough that bridging it creates value.
            </p>
            <p>
              There is meaningful work to be done while the window remains open. Systems can be built, problems can be solved, and value can be created, all within a paradigm that has an expiration date but has not yet expired. Understanding where things are headed does not require abandoning the present.
            </p>
            <p>
              The window will close. Context will become ambient. Software will dissolve. But today is not that day, and there is still building to be done.
            </p>
          </article>

          {/* Attribution */}
          <aside id="attribution" className="mt-16 mb-16 border-t border-neutral-200 pt-8 dark:border-neutral-800">
            <p className="text-sm italic text-neutral-500 dark:text-neutral-400">
              This memo generated by Claude Opus 4.5 from my single prompt:
            </p>
            <blockquote className="mt-4 border-l-2 border-neutral-300 pl-4 text-sm text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
              I want to add a memo to the website, this will be at /memo. You can author it based on the following. We are now in a world that is not constrained by knowledge but constrained by context. Right now the cutting edge is giving enough context to a machine to understand your intent and build software. This means the you must still have intent that ends up being valuable in order to create valuable software. We will soon be in a world where the context required right now will be diminished to the point that the typical user of a piece of software can ask for something new and it will be created in such a way that it solves their problem without breaking things. Not long after we will find ourselves living with machines in our lives that have more context about us than we could dare to type or speak to it, where it understands the ramifications of our intent better than we do, and where ultimately we grant it the decision making over what software would be the most valuable for our situation. Which leads us to a point where the software has fully dissolved, UIs are not something you imagine, design and create, they are the presentation layer that the machine has devised as the most likely way to get you to provide it the information in needs in order to accomplish your goals. It won&apos;t be long before we find ourselves in a world where there really is no value proposition in software creation as we understand it today. Mix in a few things like, &ldquo;the build vs buy decision just collapsed to zero&rdquo; and &ldquo;there is no UI you can design that would be more efficient than your personal agent just answering on your behalf.&rdquo;
            </blockquote>
            <p className="mt-6 text-xs text-neutral-400 dark:text-neutral-500">
              ...plus some minor human edits.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
