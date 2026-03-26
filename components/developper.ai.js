import { SectionCard } from './SectionCard';
import { SectionCardContent } from './SectionCardContent';
import { SectionCardIcon } from './SectionCardIcon';
import { SectionIntroTitle } from './SectionIntroTitle';

const Workflow = () => (
  <svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 7h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 17h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 7l3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 17l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 12v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Agents = () => (
  <svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="5" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="19" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
    <path d="M10 9.5 6.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 9.5 17.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 19h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Systems = () => (
  <svg className="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <rect x="8.5" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <path d="M10 7.5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17.5 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6.5 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Content = () => {
  return (
    <section className="scroll-mt-8" id="ai">
      <div className="max-w-6xl px-5 pt-24 pb-12 mx-auto">
        <SectionIntroTitle
          title="Agentic AI"
          content="I design AI systems that improve how technical organizations operate, not just how individual developers code. My work combines agent design, prompt engineering, review workflows, and systems integration to make engineering teams faster, more autonomous, and more reliable at scale."
        />
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
          <SectionCard>
            <SectionCardIcon
              bg="bg-green-100"
              text="text-green-500"
              SVG={Workflow}
            />
            <SectionCardContent
              title="AI Transformation"
              content="Led organization-wide AI adoption across a 30-person technical team by introducing practical workflows, internal standards, and tooling that changed day-to-day execution. The result was materially faster delivery, better code quality, and lower technical debt without sacrificing human judgment."
            />
          </SectionCard>
          <SectionCard>
            <SectionCardIcon
              bg="bg-blue-100"
              text="text-blue-500"
              SVG={Agents}
            />
            <SectionCardContent
              title="Agent Workflows"
              content="Built remote coding agents that could take well-structured tickets, generate technical design documents, implement features, run tests, and prepare pull requests. I also designed multi-agent review systems where specialized agents handled design validation, security, performance, and code quality before human approval."
            />
          </SectionCard>
          <SectionCard>
            <SectionCardIcon
              bg="bg-yellow-100"
              text="text-yellow-500"
              SVG={Systems}
            />
            <SectionCardContent
              title="AI Systems"
              content="Created custom MCP servers and operational integrations that connected AI tools to real company workflows, including engineering, project management, communication analysis, and technical documentation. The focus was always the same: put AI inside the operating system of the company, not on the sidelines."
            />
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default Content;
