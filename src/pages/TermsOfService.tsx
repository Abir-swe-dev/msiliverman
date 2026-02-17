// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
// import FrameImage from '../assets/Frame.jpg';

// interface TermsOfServiceProps {
// }

// export function TermsOfService({ }: TermsOfServiceProps) {
//     return (
//         <div className="min-h-screen w-full relative overflow-x-hidden bg-[#0E2A1F]">
//             {/* Background Image - Fixed */}
//             <div
//                 className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
//                 style={{
//                     backgroundImage: `url(${FrameImage})`
//                 }}>
//                 <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
//             </div>

//             {/* Content Transition Wrapper */}
//             <div className="relative z-10 w-full animate-in fade-in duration-700">
//                 <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
//                     <Header />

//                     <main className="pt-12 pb-24 max-w-4xl mx-auto">
//                         <Link
//                             to="/"
//                             className="inline-flex items-center text-[#8FFF20] hover:text-[#8FFF20]/80 transition-colors mb-12 font-body font-bold gap-2 group"
//                         >
//                             <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
//                         </Link>

//                         <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
//                             <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4 lowercase tracking-tighter">
//                                 Terms of Service
//                             </h1>
//                             <p className="text-white/40 mb-12 font-body italic text-sm">Last Updated: October 2023</p>

//                             <div className="space-y-12 text-white/80 font-body leading-relaxed">
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">1. Terms</h2>
//                                     <p>
//                                         By accessing the Tinnitus Relief application, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
//                                     </p>
//                                 </section>

//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">2. Use License</h2>
//                                     <p>
//                                         Permission is granted to temporarily download one copy of the materials (information or software) on Tinnitus Relief's application for personal, non-commercial transitory viewing only.
//                                     </p>
//                                 </section>

//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">3. Disclaimer & Health Warning</h2>
//                                     <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl mb-4">
//                                         <p className="text-red-400 font-bold mb-2 uppercase tracking-tight text-xs">⚠️ Medical Disclaimer</p>
//                                         <p className="text-sm italic">
//                                             The content within Tinnitus Relief is for informational and relaxation purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
//                                         </p>
//                                     </div>
//                                     <p>
//                                         The materials on Tinnitus Relief's app are provided on an 'as is' basis. Tinnitus Relief makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
//                                     </p>
//                                 </section>

//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">4. Limitations</h2>
//                                     <p>
//                                         In no event shall Tinnitus Relief or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tinnitus Relief's app.
//                                     </p>
//                                 </section>

//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">5. Accuracy of Materials</h2>
//                                     <p>
//                                         The materials appearing on Tinnitus Relief's app could include technical, typographical, or photographic errors. Tinnitus Relief does not warrant that any of the materials on its app are accurate, complete or current. Tinnitus Relief may make changes to the materials contained on its app at any time without notice.
//                                     </p>
//                                 </section>

//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">6. Links</h2>
//                                     <p>
//                                         Tinnitus Relief has not reviewed all of the sites linked to its app and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tinnitus Relief of the site. Use of any such linked website is at the user's own risk.
//                                     </p>
//                                 </section>

//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">7. Modifications</h2>
//                                     <p>
//                                         Tinnitus Relief may revise these terms of service for its app at any time without notice. By using this app you are agreeing to be bound by the then current version of these terms of service.
//                                     </p>
//                                 </section>

//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">8. Governing Law</h2>
//                                     <p>
//                                         These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
//                                     </p>
//                                 </section>
//                             </div>
//                         </div>
//                     </main>
//                 </div>

//                 <Footer />
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import FrameImage from '../assets/Frame.jpg';

const sections = [
    {
        number: "01",
        title: "Terms",
        content: "By accessing the Tinnitus Relief application, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws."
    },
    {
        number: "02",
        title: "Use License",
        content: "Permission is granted to temporarily download one copy of the materials (information or software) on Tinnitus Relief's application for personal, non-commercial transitory viewing only."
    },
    {
        number: "03",
        title: "Disclaimer & Health Warning",
        content: "The materials on Tinnitus Relief's app are provided on an 'as is' basis. Tinnitus Relief makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        isMedical: true,
    },
    {
        number: "04",
        title: "Limitations",
        content: "In no event shall Tinnitus Relief or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tinnitus Relief's app."
    },
    {
        number: "05",
        title: "Accuracy of Materials",
        content: "The materials appearing on Tinnitus Relief's app could include technical, typographical, or photographic errors. Tinnitus Relief does not warrant that any of the materials on its app are accurate, complete or current. Tinnitus Relief may make changes to the materials contained on its app at any time without notice."
    },
    {
        number: "06",
        title: "Links",
        content: "Tinnitus Relief has not reviewed all of the sites linked to its app and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tinnitus Relief of the site. Use of any such linked website is at the user's own risk."
    },
    {
        number: "07",
        title: "Modifications",
        content: "Tinnitus Relief may revise these terms of service for its app at any time without notice. By using this app you are agreeing to be bound by the then current version of these terms of service."
    },
    {
        number: "08",
        title: "Governing Law",
        content: "These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
    },
];

function SectionItem({ section }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'bg-white/10' : 'bg-white/5 hover:bg-white/8'}`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
            >
                <div className="flex items-center gap-4">
                    <span className="text-[#8FFF20]/40 font-heading font-black text-sm tracking-widest">{section.number}</span>
                    <span className="text-white font-bold font-body leading-snug">{section.title}</span>
                </div>
                <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#8FFF20]/50 flex items-center justify-center text-[#8FFF20] text-lg font-bold transition-all duration-300 ${open ? 'bg-[#8FFF20] text-[#0E2A1F] rotate-45 border-[#8FFF20]' : 'group-hover:border-[#8FFF20]'}`}
                    style={{ lineHeight: 1 }}
                >
                    +
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-5 space-y-4">
                    {section.isMedical && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <p className="text-red-400 font-bold uppercase tracking-tight text-xs mb-2">⚠️ Medical Disclaimer</p>
                            <p className="text-red-300/80 font-body text-sm leading-relaxed italic">
                                The content within Tinnitus Relief is for informational and relaxation purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                            </p>
                        </div>
                    )}
                    <p className="text-white/70 font-body leading-relaxed text-sm">{section.content}</p>
                </div>
            </div>
        </div>
    );
}

export function TermsOfService() {
    return (
        <div className="min-h-screen w-full relative overflow-x-hidden bg-[#0E2A1F]">
            {/* Background Image - Fixed — same as LandingPage */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${FrameImage})` }}
            >
                <div
                    className="absolute top-0 left-0 right-0 h-[300px]"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)'
                    }}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.05)' }} />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full">
                <div className="mx-auto">
                    <Header />

                    {/* Negative margin matching FAQ & Privacy Policy */}
                    <section className="-mt-[300px] lg:-mt-[250px] relative z-20 w-[90%] mx-auto">
                        <main className="lg:px-24 xl:px-40 pb-24">

                            {/* Back link */}
                            <Link
                                to="/"
                                className="inline-flex items-center text-[#8FFF20] hover:text-[#8FFF20]/80 transition-colors mb-10 font-body font-bold gap-2 group"
                            >
                                <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to Home
                            </Link>

                            {/* Page heading */}
                            <div className="mb-12">
                                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white lowercase tracking-tighter leading-none">
                                    terms of<br />
                                    <span className="text-[#8FFF20]">service</span>
                                </h1>
                                <p className="mt-4 text-white/50 font-body text-base max-w-xl">
                                    Last Updated: October 2023 — Please read these terms carefully before using the app.
                                </p>
                            </div>

                            {/* TL;DR summary card */}
                            <div className="mb-10 rounded-2xl border border-[#8FFF20]/20 bg-[#8FFF20]/10 px-8 py-6">
                                <p className="text-[#8FFF20] font-bold font-body leading-relaxed">
                                    TL;DR — By using Tinnitus Relief, you agree to use it for personal purposes only. This app is not a medical device and does not replace professional healthcare advice. Use at your own discretion.
                                </p>
                            </div>

                            {/* Accordion sections */}
                            <div className="max-w-3xl space-y-3">
                                {sections.map((section) => (
                                    <SectionItem key={section.number} section={section} />
                                ))}
                            </div>

                            {/* Contact strip */}
                            <div className="mt-16 max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <p className="text-white font-heading font-black text-2xl lowercase tracking-tighter">Have more questions?</p>
                                    <p className="text-white/50 font-body text-sm mt-1">We're happy to clarify anything.</p>
                                </div>
                                <div className="flex gap-4 flex-wrap">
                                    <a
                                        href="mailto:support@tinnitusrelief.app"
                                        className="px-6 py-3 rounded-full bg-[#8FFF20] text-[#0E2A1F] font-body font-bold text-sm hover:bg-[#8FFF20]/90 transition-colors"
                                    >
                                        support@tinnitusrelief.app
                                    </a>
                                    <Link
                                        to="/privacy-policy"
                                        className="px-6 py-3 rounded-full border border-white/20 text-white font-body font-bold text-sm hover:border-[#8FFF20]/50 transition-colors"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        to="/faq"
                                        className="px-6 py-3 rounded-full border border-white/20 text-white font-body font-bold text-sm hover:border-[#8FFF20]/50 transition-colors"
                                    >
                                        FAQ
                                    </Link>
                                </div>
                            </div>

                        </main>
                    </section>
                </div>

                <Footer />
            </div>
        </div>
    );
}