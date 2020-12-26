import { useState, useEffect } from 'react';
import { SectionCard } from './SectionCard';
import { SectionCardContent } from './SectionCardContent';
import { SectionCardIcon } from './SectionCardIcon';
import { SectionIntroTitle } from './SectionIntroTitle';

const Content = () => {
    return <section class="">
        <div class="max-w-6xl mx-auto px-5 pb-12 pt-24">
            <SectionIntroTitle
                title="Web Development"
                content="I am a Senior Front-End developper, with over <b>10 years</b> of experience building tons of web apps from scratch.
                    <br />
                    My journey started with backbone.js, then I migrated to Angular 1, and eventually I adpoted React.js in which I am quite proficient and at ease."
            />
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-green-100"
                        text="text-green-500"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    <SectionCardContent
                        title="Web Design"
                        content="Give taste 😍 color to applications, I do it to make sites attractive 🎨. Designing websites was a natural requirement in most projects since they had a startup nature." />
                </SectionCard>
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-blue-100"
                        text="text-blue-500"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    <SectionCardContent
                        title="Web Development"
                        content="I always loved building apps from scratch, shipping them, then updating them with continuous feedback based on users feedback." />
                </SectionCard>
                <SectionCard>
                    <SectionCardIcon
                        bg="bg-yellow-100"
                        text="text-yellow-500"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    <SectionCardContent
                        title="Tech Lead"
                        content="My startup experience helped me naturally grow into leading teams of engineers, and bridging the gap between them, design, and business members." />
                </SectionCard>
            </div >
        </div >
    </section >
}

export default Content