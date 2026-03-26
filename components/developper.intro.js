import { useState, useEffect } from 'react';
import { Bot, Rocket, Users } from 'lucide-react';
import { SectionCard } from './SectionCard';
import { SectionCardContent } from './SectionCardContent';
import { SectionCardIcon } from './SectionCardIcon';
import { SectionIntroTitle } from './SectionIntroTitle';

const Content = () => {
    return <section className="">
        <div className="max-w-6xl px-5 pt-24 pb-12 mx-auto">
            <SectionIntroTitle
                title="CTO"
                content="Executive and hands-on CTO for a financial group spanning <b>6 companies</b>, building products from scratch and scaling the teams and structure behind them.
                    <br />
                    Grew the technology organization from <b>6 to 30 people</b> across quant research, engineering, design, QA, DevOps, and product management.
                    <br />
                    Combine deep technical execution with stakeholder leadership, fundraising support, and a strong focus on <b>agentic AI</b>, trading systems, and web engineering."
            />
            <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-green-100"
                        text="text-green-500"
                        SVG={Rocket} />
                    <SectionCardContent
                        title="Startups"
                        content="Built products from zero in fast-moving startup environments, then adapted quickly as customer feedback, markets, and business priorities changed." />
                </SectionCard>
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-blue-100"
                        text="text-blue-500"
                        SVG={Users} />
                    <SectionCardContent
                        title="Leadership"
                        content={<>Scaled the technology team from <b>6 to 30</b> people across quant research, full-stack engineering, design, QA, DevOps, and product management.</>} />
                </SectionCard>
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-yellow-100"
                        text="text-yellow-500"
                        SVG={Bot} />
                    <SectionCardContent
                        title="Agentic Programming"
                        content="Design agentic workflows, tooling, and review systems that make engineering teams faster, more autonomous, and better aligned with the business." />
                </SectionCard>
            </div >
        </div >
    </section >
}

export default Content
