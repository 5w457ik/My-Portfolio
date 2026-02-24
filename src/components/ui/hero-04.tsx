import React from "react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection04() {
    return (
        <section className="min-h-screen overflow-hidden relative py-20">
            <div className="mx-auto max-w-7xl relative z-20 px-6">
                <div className="relative">
                    <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider">
                        2,009
                    </p>
                    {/* Single responsive heading — no duplicate needed */}
                    <h1
                        className="z-20 text-primary relative font-bold text-center
                            tracking-tighter
                            text-[clamp(1.8rem,8vw,10rem)]
                            sm:tracking-[-3px]
                            md:tracking-[-8px]
                            xl:tracking-[-1rem]
                            pb-8"
                    >
                        CREATIVE TECHNOLOGIST
                    </h1>
                    <p className="text-2xl sm:text-4xl hidden xl:block absolute -bottom-12 right-0 font-thin tracking-[4px] sm:tracking-[6px]">
                        SWASTIK BHATI
                    </p>
                    <p className="text-2xl sm:text-4xl absolute xl:hidden -bottom-8 sm:-bottom-12 left-0 font-thin tracking-[4px] sm:tracking-[6px]">
                        SWASTIK BHATI
                    </p>
                </div>

                <div className="grid relative">
                    <div className="space-y-8 pt-20 flex gap-6 justify-center">
                        <div className="flex gap-6 bg-secondary w-full max-w-xl h-fit p-6 md:p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
                            <div className="font-semibold text-xl">
                                <div>/ AI/ML DESIGNER</div>
                                <div>/ WEB DESIGN (UX/UI)</div>
                                <div>/ WEB DEVELOPMENT</div>
                            </div>
                            <div className="absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-secondary">
                                <img
                                    src="/portrait.jpg"
                                    alt="Designer portrait"
                                    className="h-100 w-full object-contain grayscale"
                                />
                                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                                    BASED IN INDIA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-secondary">
                        <img
                            src="/portrait.jpg"
                            alt="Designer portrait"
                            className="h-100 w-full object-contain grayscale"
                        />
                        <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                            BASED IN INDIA
                        </div>
                    </div>
                </div>

                <div className="md:mt-40 mt-10">
                    <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
                        I'M EXPERIENCED WEB AND UX/UI DESIGNER,
                        <br />
                        WHO DESIGN MEMORABLE WEB EXPERIENCES
                        <br />
                        IF YOU'RE WORKING ON SOMETHING THAT MATTERS, SOMETHING THAT USES AI TO SOLVE REAL PROBLEMS, I WANT TO BE PART OF IT.
                    </p>
                </div>
                <div className="flex justify-center pt-6">
                    <Button size={"lg"}>Book a call</Button>
                </div>

                <div className="md:flex mt-20 items-end justify-between">
                    <div className="relative">
                        <div className="w-60 h-36 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
                            <img
                                src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg"
                                alt="Portfolio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-60 h-36 absolute left-6 -top-6 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
                            <img
                                src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg"
                                alt="Portfolio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-60 h-36 absolute left-12 -top-12 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
                            <img
                                src="https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg"
                                alt="Portfolio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center md:justify-end gap-2">
                            <span className="text-lg font-medium tracking-wider">
                                RECENT WORK
                            </span>
                            <ArrowDownRight className="size-6" />
                        </div>

                        <div className="mt-3 md:text-right">
                            <h2 className="text-5xl uppercase tracking-[-4px]">
                                Design without Limits
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Selected Projects */}
                <div className="mt-32 relative z-20">
                    <p className="text-sm font-medium tracking-[6px] mb-10">PROJECTS</p>

                    <div className="space-y-16">
                        {/* 01 — NeuralDash */}
                        <div className="group md:flex gap-8 items-start border-t border-border pt-8">
                            <div className="md:w-1/2 overflow-hidden rounded-md mb-6 md:mb-0">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                    alt="NeuralDash — AI Analytics Platform"
                                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-xs font-mono tracking-widest text-primary/50 mb-2">01</p>
                                <h3 className="text-2xl font-bold tracking-tight mb-3">NeuralDash</h3>
                                <p className="text-sm text-primary/60 mb-1">AI Analytics Platform</p>
                                <p className="text-sm leading-relaxed mt-3">
                                    Redesigned an AI-powered analytics tool — making complex ML predictions scannable for non-technical executives. Clean dashboards, plain-language summaries, confidence indicators.
                                </p>
                                <p className="text-xs font-mono mt-4 text-primary/40">
                                    Onboarding time ↓ 40% · Satisfaction 3.1 → 4.6/5
                                </p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Figma</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Framer</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Data Viz</span>
                                </div>
                            </div>
                        </div>

                        {/* 02 — Cortex AI */}
                        <div className="group md:flex gap-8 items-start border-t border-border pt-8">
                            <div className="md:w-1/2 overflow-hidden rounded-md mb-6 md:mb-0">
                                <img
                                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                                    alt="Cortex AI — LLM Chat Interface"
                                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-xs font-mono tracking-widest text-primary/50 mb-2">02</p>
                                <h3 className="text-2xl font-bold tracking-tight mb-3">Cortex AI</h3>
                                <p className="text-sm text-primary/60 mb-1">LLM Chat Interface</p>
                                <p className="text-sm leading-relaxed mt-3">
                                    Enterprise-grade AI assistant interface for B2B SaaS. Structured prompt UX with guardrails, history management, and contextual help baked in.
                                </p>
                                <p className="text-xs font-mono mt-4 text-primary/40">
                                    3× daily active usage within 60 days
                                </p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Figma</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Notion</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Webflow</span>
                                </div>
                            </div>
                        </div>

                        {/* 03 — Luminary Studio */}
                        <div className="group md:flex gap-8 items-start border-t border-border pt-8">
                            <div className="md:w-1/2 overflow-hidden rounded-md mb-6 md:mb-0">
                                <img
                                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
                                    alt="Luminary Studio — Creative Agency Website"
                                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-xs font-mono tracking-widest text-primary/50 mb-2">03</p>
                                <h3 className="text-2xl font-bold tracking-tight mb-3">Luminary Studio</h3>
                                <p className="text-sm text-primary/60 mb-1">Creative Agency Website</p>
                                <p className="text-sm leading-relaxed mt-3">
                                    Full website design and build — pixel-perfect responsive design, scroll-triggered animations, and a custom portfolio filter. Delivered in under 3 weeks.
                                </p>
                                <p className="text-xs font-mono mt-4 text-primary/40">
                                    Inbound inquiries ↑ 65% in first month
                                </p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Figma</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Webflow</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">GSAP</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Lottie</span>
                                </div>
                            </div>
                        </div>

                        {/* 04 — DataFlow */}
                        <div className="group md:flex gap-8 items-start border-t border-border pt-8">
                            <div className="md:w-1/2 overflow-hidden rounded-md mb-6 md:mb-0">
                                <img
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                                    alt="DataFlow — ML Pipeline Visualization"
                                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-xs font-mono tracking-widest text-primary/50 mb-2">04</p>
                                <h3 className="text-2xl font-bold tracking-tight mb-3">DataFlow</h3>
                                <p className="text-sm text-primary/60 mb-1">ML Pipeline Visualization Tool</p>
                                <p className="text-sm leading-relaxed mt-3">
                                    Visual workflow builder for data scientists — drag-and-drop canvas to map, monitor, and debug ML training pipelines. Usable without a manual.
                                </p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Figma</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Miro</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">React</span>
                                </div>
                            </div>
                        </div>

                        {/* 05 — Personal AI Toolkit */}
                        <div className="group md:flex gap-8 items-start border-t border-border pt-8">
                            <div className="md:w-1/2 overflow-hidden rounded-md mb-6 md:mb-0">
                                <img
                                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
                                    alt="Personal AI Toolkit Website"
                                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-xs font-mono tracking-widest text-primary/50 mb-2">05</p>
                                <h3 className="text-2xl font-bold tracking-tight mb-3">AI Toolkit</h3>
                                <p className="text-sm text-primary/60 mb-1">Personal Resource Hub</p>
                                <p className="text-sm leading-relaxed mt-3">
                                    Curated, beautifully designed resource hub for designers integrating AI tools into their workflow. Clean UI, fast load times, zero fluff.
                                </p>
                                <p className="text-xs font-mono mt-4 text-primary/40">
                                    🚧 In active development — launching soon
                                </p>
                                <div className="flex gap-2 mt-4 flex-wrap">
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">React</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">Tailwind</span>
                                    <span className="text-xs bg-secondary px-3 py-1 rounded-full">AI Tools</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid background — light */}
            <div
                className="absolute block dark:hidden inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
                        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                    maskImage: `
                        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                    `,
                    WebkitMaskImage: `
                        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                    `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />

            {/* Grid background — dark */}
            <div
                className="absolute hidden dark:block inset-0 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #404040 1px, transparent 1px),
                        linear-gradient(to bottom, #404040 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                    maskImage: `
                        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                    `,
                    WebkitMaskImage: `
                        repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
                        repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
                        radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
                    `,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </section>
    );
}
