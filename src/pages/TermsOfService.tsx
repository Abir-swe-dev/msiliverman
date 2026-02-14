import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import FrameImage from '../assets/Frame.jpg';

interface TermsOfServiceProps {
}

export function TermsOfService({ }: TermsOfServiceProps) {
    return (
        <div className="min-h-screen w-full relative overflow-x-hidden bg-[#0E2A1F]">
            {/* Background Image - Fixed */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${FrameImage})`
                }}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            {/* Content Transition Wrapper */}
            <div className="relative z-10 w-full animate-in fade-in duration-700">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                    <Header />

                    <main className="pt-12 pb-24 max-w-4xl mx-auto">
                        <Link
                            to="/"
                            className="inline-flex items-center text-[#8FFF20] hover:text-[#8FFF20]/80 transition-colors mb-12 font-body font-bold gap-2 group"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                        </Link>

                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                            <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4 lowercase tracking-tighter">
                                Terms of Service
                            </h1>
                            <p className="text-white/40 mb-12 font-body italic text-sm">Last Updated: October 2023</p>

                            <div className="space-y-12 text-white/80 font-body leading-relaxed">
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">1. Terms</h2>
                                    <p>
                                        By accessing the Tinnitus Relief application, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">2. Use License</h2>
                                    <p>
                                        Permission is granted to temporarily download one copy of the materials (information or software) on Tinnitus Relief's application for personal, non-commercial transitory viewing only.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">3. Disclaimer & Health Warning</h2>
                                    <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl mb-4">
                                        <p className="text-red-400 font-bold mb-2 uppercase tracking-tight text-xs">⚠️ Medical Disclaimer</p>
                                        <p className="text-sm italic">
                                            The content within Tinnitus Relief is for informational and relaxation purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                                        </p>
                                    </div>
                                    <p>
                                        The materials on Tinnitus Relief's app are provided on an 'as is' basis. Tinnitus Relief makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">4. Limitations</h2>
                                    <p>
                                        In no event shall Tinnitus Relief or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tinnitus Relief's app.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">5. Accuracy of Materials</h2>
                                    <p>
                                        The materials appearing on Tinnitus Relief's app could include technical, typographical, or photographic errors. Tinnitus Relief does not warrant that any of the materials on its app are accurate, complete or current. Tinnitus Relief may make changes to the materials contained on its app at any time without notice.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">6. Links</h2>
                                    <p>
                                        Tinnitus Relief has not reviewed all of the sites linked to its app and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tinnitus Relief of the site. Use of any such linked website is at the user's own risk.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">7. Modifications</h2>
                                    <p>
                                        Tinnitus Relief may revise these terms of service for its app at any time without notice. By using this app you are agreeing to be bound by the then current version of these terms of service.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">8. Governing Law</h2>
                                    <p>
                                        These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </main>
                </div>

                <Footer />
            </div>
        </div>
    );
}
