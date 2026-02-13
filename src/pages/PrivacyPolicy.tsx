import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import FrameImage from '../assets/Frame.jpg';

interface PrivacyPolicyProps {
    onBack: () => void;
    onNavigate?: (page: string) => void;
}

export function PrivacyPolicy({ onBack, onNavigate }: PrivacyPolicyProps) {
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
                                Privacy Policy for Tinnitus Relief
                            </h1>

                            <p className="text-white/60 mb-8">
                                <strong>Effective Date:</strong> 10th February, 2026<br />
                                <strong>Last Updated:</strong> 10th February, 2026
                            </p>

                            <hr className="border-white/10 my-12" />

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">Introduction</h2>
                                <p>
                                    [COMPANY/DEVELOPER NAME] ("we," "our," or "us") operates the Tinnitus Relief mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
                                </p>
                                <p className="mt-4 font-bold">
                                    By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
                                </p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">1. Information We Collect</h2>
                                <h3 className="text-xl font-bold mb-3">1.1 Information We DO NOT Collect</h3>
                                <p className="mb-4">Tinnitus Relief is designed with your privacy in mind. <span className="font-bold underline">We do not collect, store, or transmit any personal information.</span> Specifically:</p>
                                <ul className="list-none space-y-2 mb-6">
                                    <li>❌ No user accounts or registration required</li>
                                    <li>❌ No personal data (name, email, phone number, etc.)</li>
                                    <li>❌ No location data</li>
                                    <li>❌ No usage analytics or tracking</li>
                                    <li>❌ No device identifiers</li>
                                    <li>❌ No cookies or similar tracking technologies</li>
                                </ul>

                                <h3 className="text-xl font-bold mb-3">1.2 Local Data Storage</h3>
                                <p>The App may store the following data <span className="font-bold">locally on your device only</span>:</p>
                                <ul className="list-disc ml-6 space-y-2 mt-2">
                                    <li>Audio playback preferences (volume levels, selected tracks)</li>
                                    <li>Timer settings</li>
                                    <li>App settings and configurations</li>
                                </ul>
                                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                                    <p className="font-bold mb-2">This data:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Never leaves your device</li>
                                        <li>Is not transmitted to any servers</li>
                                        <li>Is deleted when you uninstall the App</li>
                                        <li>Cannot be accessed by us or any third parties</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">2. Third-Party Services</h2>
                                <h3 className="text-xl font-bold mb-3">2.1 Google Fonts</h3>
                                <p>The App uses Google Fonts to display custom typography. When the App first loads fonts:</p>
                                <ul className="list-disc ml-6 space-y-1 mt-2">
                                    <li>Google may receive your IP address</li>
                                    <li>This is handled by Google's font delivery service</li>
                                    <li>Please refer to <a href="https://policies.google.com/privacy" className="text-[#8FFF20] hover:underline">Google's Privacy Policy</a> for more information</li>
                                </ul>

                                <h3 className="text-xl font-bold mt-6 mb-3">2.2 Audio Files</h3>
                                <p>All audio files are:</p>
                                <ul className="list-disc ml-6 space-y-1 mt-2">
                                    <li>Stored locally within the App</li>
                                    <li>Played entirely offline</li>
                                    <li>Not streamed from external servers</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">3. How We Use Your Information</h2>
                                <p>Since we do not collect any personal information, we do not use, share, or process any user data.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">4. Data Security</h2>
                                <p>While we do not collect personal data, we are committed to ensuring the App is secure:</p>
                                <ul className="list-disc ml-6 space-y-1 mt-2">
                                    <li>All app functionality works offline</li>
                                    <li>No data transmission to external servers (except Google Fonts on initial load)</li>
                                    <li>No third-party analytics or advertising networks</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">5. Children's Privacy</h2>
                                <p>Our App does not knowingly collect information from children under 13 years of age. Since no data is collected, the App is safe for users of all ages. If you believe we have inadvertently collected information from a child, please contact us.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">6. Changes to This Privacy Policy</h2>
                                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by:</p>
                                <ul className="list-disc ml-6 space-y-1 mt-2">
                                    <li>Posting the new Privacy Policy on this page</li>
                                    <li>Updating the "Last Updated" date</li>
                                </ul>
                                <p className="mt-4 font-bold italic underline">You are advised to review this Privacy Policy periodically for any changes.</p>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">7. Your Rights</h2>
                                <p>Depending on your location, you may have certain rights regarding your data:</p>
                                <ul className="list-disc ml-6 space-y-2 mt-2">
                                    <li><span className="font-bold">Right to Access:</span> Since we don't collect data, there is no data to access</li>
                                    <li><span className="font-bold">Right to Deletion:</span> Uninstalling the App removes all local data</li>
                                    <li><span className="font-bold">Right to Object:</span> You may stop using the App at any time</li>
                                    <li><span className="font-bold">GDPR Compliance (EU):</span> We do not process personal data as defined by GDPR</li>
                                    <li><span className="font-bold">CCPA Compliance (California):</span> We do not sell personal information</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">8. International Users</h2>
                                <p>The App can be used worldwide. Since no data is collected or transmitted:</p>
                                <ul className="list-disc ml-6 space-y-1 mt-2">
                                    <li>No cross-border data transfers occur</li>
                                    <li>No data processing in specific jurisdictions</li>
                                    <li>All functionality is local to your device</li>
                                </ul>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">9. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                                <div className="mt-4 p-6 bg-white/5 rounded-lg border border-white/10">
                                    <p className="font-bold text-lg mb-2">[COMPANY/DEVELOPER NAME]</p>
                                    <p>Email: [INSERT EMAIL]</p>
                                    <p>Address: [INSERT ADDRESS]</p>
                                    <p>Website: [INSERT WEBSITE]</p>
                                </div>
                            </section>

                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-[#8FFF20] mb-4">10. Legal Compliance</h2>
                                <p>This App complies with:</p>
                                <ul className="list-disc ml-6 space-y-1 mt-2">
                                    <li>General Data Protection Regulation (GDPR) - EU</li>
                                    <li>California Consumer Privacy Act (CCPA) - USA</li>
                                    <li>Children's Online Privacy Protection Act (COPPA) - USA</li>
                                    <li>App Store and Google Play Store privacy requirements</li>
                                </ul>
                            </section>

                            <div className="mt-20 p-8 bg-[#8FFF20]/10 rounded-2xl border border-[#8FFF20]/20 text-center">
                                <p className="font-bold text-lg text-[#8FFF20]">
                                    Summary: Tinnitus Relief is a privacy-focused app that does not collect, store, or share any personal information. All functionality works offline, and any settings are stored locally on your device only.
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
