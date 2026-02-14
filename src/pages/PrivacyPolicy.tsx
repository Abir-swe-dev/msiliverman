import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import FrameImage from '../assets/Frame.jpg';

interface PrivacyPolicyProps {
}

export function PrivacyPolicy({ }: PrivacyPolicyProps) {
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
                                Privacy Policy
                            </h1>
                            <p className="text-white/40 mb-12 font-body italic text-sm">Last Updated: October 2023</p>

                            <div className="space-y-12 text-white/80 font-body leading-relaxed">
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">1. Introduction</h2>
                                    <p>
                                        At Tinnitus Relief, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">2. Data Collection</h2>
                                    <h3 className="text-white font-bold mb-2">Non-Personal Content</h3>
                                    <p className="mb-4">
                                        The Tinnitus Relief app is designed to function entirely offline. We do not collect, store, or transmit any personal data such as your name, email address, or location.
                                    </p>
                                    <h3 className="text-white font-bold mb-2">Usage Information</h3>
                                    <p>
                                        Any settings or preferences you adjust within the app (such as sound levels or favorite sounds) are stored locally on your device and are never shared with us or any third party.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">3. Local Storage</h2>
                                    <p>
                                        The app uses local storage on your mobile device to save your configuration and playback preferences. This data remains on your device and is deleted if you uninstall the application.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">4. Third-Party Services</h2>
                                    <p>
                                        We do not use any third-party analytics, tracking, or advertising services that collect data from our users.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">5. Children's Privacy</h2>
                                    <p>
                                        Tinnitus Relief does not knowingly collect information from children under the age of 13. Since we do not collect any user information, our app is safe for all ages in terms of data privacy.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">6. Changes to This Policy</h2>
                                    <p>
                                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the application. You are advised to review this Privacy Policy periodically for any changes.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-4 uppercase tracking-widest text-sm">7. Contact Us</h2>
                                    <p>
                                        If you have any questions about this Privacy Policy, please contact us at:
                                        <br />
                                        <span className="text-[#8FFF20] font-bold">privacy@tinnitusrelief.app</span>
                                    </p>
                                </section>
                            </div>

                            <div className="mt-20 p-8 bg-[#8FFF20]/10 rounded-2xl border border-[#8FFF20]/20 text-center">
                                <p className="font-bold text-lg text-[#8FFF20]">
                                    Summary: Tinnitus Relief is a privacy-focused app that does not collect, store, or share any personal information. All functionality works offline, and any settings are stored locally on your device only.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>

                <Footer />
            </div>
        </div>
    );
}
