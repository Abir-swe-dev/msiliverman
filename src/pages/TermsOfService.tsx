import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import FrameImage from '../assets/Frame.jpg';

interface TermsOfServiceProps {
    onBack: () => void;
    onNavigate?: (page: string) => void;
}

export function TermsOfService({ onBack, onNavigate }: TermsOfServiceProps) {
    return (
        <div className="min-h-screen w-full relative overflow-x-hidden bg-[#0E2A1F]">
            {/* Background Image - Fixed */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                    backgroundImage: `url(${FrameImage})`
                }}
            />

            {/* Main Content Container */}
            <div className="relative z-10 w-full">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20">
                    <Header />

                    <main className="max-w-4xl pt-20">
                        <button
                            onClick={onBack}
                            className="mb-12 flex items-center gap-2 text-[#8FFF20] hover:text-white transition-colors uppercase tracking-widest text-sm font-bold"
                        >
                            ← Back to Home
                        </button>

                        <div className="prose prose-invert max-w-none font-body text-white/90">
                            <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                                Terms and Conditions for Tinnitus Relief
                            </h1>

                            <p className="text-white/60 mb-8">
                                <strong>Effective Date:</strong> 10th February, 2026<br />
                                <strong>Last Updated:</strong> 10th February, 2026
                            </p>

                            <hr className="border-white/10 my-12" />

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">Agreement to Terms</h2>
                                <p>
                                    By downloading, installing, or using the Tinnitus Relief mobile application (the "App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App.
                                </p>
                                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                    <p><strong>Developer:</strong> [COMPANY/DEVELOPER NAME] ("we," "us," "our")</p>
                                    <p><strong>App Name:</strong> Tinnitus Relief</p>
                                    <p><strong>Platform:</strong> Available on iOS (Apple App Store) and Android (Google Play Store)</p>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">1. License Grant</h2>
                                <h3 className="text-xl font-bold mb-3">1.1 Limited License</h3>
                                <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
                                <ul className="list-disc ml-6 space-y-1 mt-2">
                                    <li>Download and install the App on your personal mobile device(s)</li>
                                    <li>Use the App for personal, non-commercial purposes</li>
                                </ul>

                                <h3 className="text-xl font-bold mt-6 mb-3">1.2 Restrictions</h3>
                                <p>You may NOT:</p>
                                <ul className="list-none space-y-2 mt-2">
                                    <li>❌ Copy, modify, or create derivative works of the App</li>
                                    <li>❌ Reverse engineer, decompile, or disassemble the App</li>
                                    <li>❌ Rent, lease, sell, or sublicense the App</li>
                                    <li>❌ Remove or alter any proprietary notices or labels</li>
                                    <li>❌ Use the App for any illegal or unauthorized purpose</li>
                                    <li>❌ Redistribute the audio files or app content</li>
                                </ul>
                            </section>

                            <section className="mb-12 p-8 bg-red-500/10 rounded-2xl border border-red-500/20">
                                <h2 className="text-2xl font-bold text-red-500 mb-4 uppercase tracking-wider">2. Medical Disclaimer</h2>
                                <h3 className="text-xl font-bold mb-3 italic">2.1 Not Medical Advice</h3>
                                <p className="font-bold mb-4">IMPORTANT: The Tinnitus Relief App is designed for relaxation and sound therapy purposes only. It is NOT:</p>
                                <ul className="list-none space-y-2 mb-6">
                                    <li>❌ A medical device</li>
                                    <li>❌ A substitute for professional medical advice, diagnosis, or treatment</li>
                                    <li>❌ Intended to cure, treat, or prevent any medical condition</li>
                                    <li>❌ FDA-approved or medically certified</li>
                                </ul>

                                <h3 className="text-xl font-bold mb-3 italic">2.2 Consult Healthcare Professionals</h3>
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Always seek the advice of a qualified healthcare provider for any medical questions or conditions</li>
                                    <li>Never disregard professional medical advice because of something you have experienced with this App</li>
                                    <li>If you have severe tinnitus or hearing problems, consult an audiologist or ENT specialist</li>
                                </ul>

                                <h3 className="text-xl font-bold mt-6 mb-3 italic">2.3 Use at Your Own Risk</h3>
                                <p>You acknowledge that results may vary from person to person, and the App may not provide relief for your specific condition. You use the App at your own risk and discretion.</p>
                            </section>

                            <section className="mb-12 p-8 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                                <h2 className="text-2xl font-bold text-orange-400 mb-4 uppercase tracking-wider">3. Audio Safety</h2>
                                <h3 className="text-xl font-bold mb-3 italic">⚠️ 3.1 Volume Warning</h3>
                                <ul className="list-disc ml-6 space-y-2 font-bold text-orange-200">
                                    <li>Start with LOW volume settings</li>
                                    <li>Gradually increase volume to a comfortable level</li>
                                    <li>NEVER use excessive volume, especially with headphones</li>
                                    <li>Prolonged exposure to loud sounds can cause hearing damage</li>
                                    <li>Take regular breaks when using the App</li>
                                </ul>

                                <h3 className="text-xl font-bold mt-6 mb-3 italic">3.2 Headphone Use</h3>
                                <p>When using headphones or earbuds, use the lowest effective volume and limit continuous listening time. If you experience pain, discomfort, or ringing in your ears, STOP immediately.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">4. Intellectual Property</h2>
                                <p>All content in the App, including audio files, graphics, text, code, and custom fonts (Kallisto), is owned by [COMPANY/DEVELOPER NAME] or our licensors.</p>
                                <p className="mt-4">The audio files are licensed for personal use within the App only, NOT for extraction or commercial use.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">5. User Conduct</h2>
                                <p>You agree to use the App only for lawful purposes and respect intellectual property rights. You must not attempt to hack or interfere with the App's security or other users' enjoyment.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">6. Pricing and Payments</h2>
                                <p className="font-bold mb-2">[Please select appropriate option:]</p>
                                <p>The App's pricing model and refund policies are handled by the respective app stores (Apple App Store and Google Play Store).</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">7. Updates and Modifications</h2>
                                <p>We reserve the right to release updates, modify features, or discontinue support for older versions at any time without special obligation.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">8. Disclaimer of Warranties</h2>
                                <p className="font-bold">THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</p>
                                <p className="mt-2">We do not guarantee that the App will meet your specific requirements or be uninterrupted and error-free.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">9. Limitation of Liability</h2>
                                <p>To the maximum extent permitted by law, our total liability is limited to the amount paid for the App or $10 USD.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">10. Indemnification</h2>
                                <p>You agree to indemnify us against any claims arising from your use of the App or violation of these Terms.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">11. Platform Terms</h2>
                                <p>Your use is also subject to the Terms of Service of the platform from which you downloaded the App (Apple App Store or Google Play Store).</p>
                            </section>

                            <section className="mb-12 text-center p-12 bg-white/5 rounded-3xl border border-white/10">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-6">Contact & Legal</h2>
                                <p className="mb-8">For questions or legal inquiries, please contact us at [INSERT EMAIL].</p>
                                <div className="flex flex-col md:flex-row justify-center gap-4 text-sm font-bold uppercase tracking-widest">
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">GDPR Compliant</div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">CCPA Compliant</div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">COPPA Compliant</div>
                                </div>
                            </section>

                            <div className="mt-20 p-8 bg-[#8FFF20]/10 rounded-2xl border border-[#8FFF20]/20 text-center">
                                <p className="font-bold text-lg text-[#8FFF20]">
                                    BY USING THE TINNITUS RELIEF APP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>

                <Footer onNavigate={onNavigate} />
            </div>
        </div>
    );
}
