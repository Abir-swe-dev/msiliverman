import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import FrameImage from '../assets/Frame.jpg';

export function FAQ() {
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

            {/* Content Layer */}
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
                            <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-8 lowercase tracking-tighter">
                                Frequently Asked Questions
                            </h1>

                            <div className="space-y-16 text-white/80 font-body leading-relaxed">
                                {/* General Questions */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">General Questions</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q1: What is Tinnitus Relief?</h3>
                                            <p>A: Tinnitus Relief is a mobile app designed to help manage tinnitus symptoms through sound therapy. The app provides a variety of soothing sounds and white noise tracks that can help mask tinnitus sounds and provide relief.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q2: How does sound therapy help with tinnitus?</h3>
                                            <p>A: Sound therapy works by providing external sounds that can mask or distract from the ringing, buzzing, or other sounds caused by tinnitus. This can help reduce the perceived intensity of tinnitus and make it less bothersome over time.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q3: Is this app a cure for tinnitus?</h3>
                                            <p>A: No. Tinnitus Relief is a management tool, not a cure. While it may help reduce symptoms and provide comfort, it does not treat the underlying causes of tinnitus. Always consult with a healthcare professional for medical advice.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Using the App */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Using the App</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q4: What sound options are available?</h3>
                                            <p className="mb-2">A: The app includes various nature sounds and therapeutic audio tracks:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>White Noise (Standard & WAV formats)</li>
                                                <li>Rain (Light & Medium intensity)</li>
                                                <li>Storm (Light & Active)</li>
                                                <li>River & Stream</li>
                                                <li>Wind</li>
                                                <li>Crickets</li>
                                                <li>Ocean Ambient Audio (OAA & OAC)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q5: How do I adjust the volume?</h3>
                                            <p className="mb-2">A: There are two ways to control volume:</p>
                                            <ol className="list-decimal list-inside space-y-1 ml-4 opacity-90">
                                                <li>Vertical slider on the right side of the screen - drag up or down</li>
                                                <li>Dot volume meter at the bottom - tap or drag to select the desired level</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q6: Can I play sounds continuously?</h3>
                                            <p className="mb-2">A: Yes! You have two playback modes:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Continuous Mode: Sounds play indefinitely until you stop them</li>
                                                <li>Timer Mode: Set a timer (5, 10, 15, 30, 45, or 60 minutes) and the sound will automatically stop</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q7: How do I set a timer?</h3>
                                            <p className="mb-2">A:</p>
                                            <ol className="list-decimal list-inside space-y-1 ml-4 opacity-90">
                                                <li>Tap the "TIMER" button at the top of the screen</li>
                                                <li>Select your desired duration from the timer modal</li>
                                                <li>Tap "START TIMER"</li>
                                                <li>The sound will play for the selected duration and then stop automatically</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q8: Can I use the app while doing other activities?</h3>
                                            <p>A: Yes! The app can play in the background, allowing you to use other apps, lock your phone, or let it run while you sleep.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Technical Questions */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Technical Questions</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q9: Does the app require an internet connection?</h3>
                                            <p>A: No. All sounds are stored locally on your device, so the app works completely offline. No internet connection is required after installation.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q10: Does the app collect my personal data?</h3>
                                            <p>A: No. Tinnitus Relief does not collect, store, or share any personal information. The app works entirely on your device with no external data transmission. See our Privacy Policy for more details.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q11: Why do I need to grant audio permissions?</h3>
                                            <p>A: The app needs permission to access your device's audio output to play the therapeutic sounds. No recordings or data collection occurs.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q12: Does the app work offline?</h3>
                                            <p>A: Yes! Once installed, the app works completely offline. All sounds are pre-loaded and stored on your device.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q13: How much storage does the app require?</h3>
                                            <p>A: The app requires approximately [50-100 MB] of storage space for the application and all audio files.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Device & Compatibility */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Device & Compatibility</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q14: Which devices are supported?</h3>
                                            <p className="mb-2">A: Tinnitus Relief works on:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Android: Version 5.0 (Lollipop) and above</li>
                                                <li>iOS: Version 11.0 and above</li>
                                                <li>Smartphones and tablets</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q15: Can I use the app with headphones or earbuds?</h3>
                                            <p className="mb-2">A: Yes! The app works with all standard audio output devices including:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Wired headphones/earbuds</li>
                                                <li>Bluetooth headphones</li>
                                                <li>Device speakers</li>
                                                <li>External speakers</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q16: Will the app drain my battery?</h3>
                                            <p>A: The app is optimized for battery efficiency. However, playing audio continuously for extended periods will use battery power. Using the timer feature can help conserve battery life.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Best Practices */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Best Practices</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q17: How should I use the app for best results?</h3>
                                            <p className="mb-2">A:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Start with a low volume and gradually adjust to a comfortable level</li>
                                                <li>Experiment with different sounds to find what works best for you</li>
                                                <li>Use consistently - regular use may provide better long-term relief</li>
                                                <li>Consider using the timer feature at bedtime</li>
                                                <li>Don't play sounds too loudly - they should mask, not overwhelm</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q18: What volume level should I use?</h3>
                                            <p>A: The sound should be played at a comfortable level - loud enough to provide masking but not so loud that it's uncomfortable or could damage hearing. As a general rule, set it just below the level where you can clearly hear your tinnitus.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q19: How long should I use the app each session?</h3>
                                            <p>A: This varies by individual. Some people use it for short periods during the day, while others use it continuously or at night while sleeping. Start with shorter sessions and adjust based on what helps you.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q20: Can I use the app while sleeping?</h3>
                                            <p>A: Yes! Many users find the app helpful for sleep. Use the timer feature to have sounds play for a set duration, or use continuous mode if you prefer sound throughout the night.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Troubleshooting */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Troubleshooting</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q21: The app isn't playing any sound. What should I do?</h3>
                                            <p className="mb-2">A:</p>
                                            <ol className="list-decimal list-inside space-y-1 ml-4 opacity-90">
                                                <li>Check that your device volume is turned up</li>
                                                <li>Ensure the in-app volume slider is not at minimum</li>
                                                <li>Verify that headphones/Bluetooth devices are properly connected</li>
                                                <li>Try selecting a different sound track</li>
                                                <li>Restart the app</li>
                                                <li>Check if other apps can play audio</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q22: The sound is crackling or distorted. Why?</h3>
                                            <p className="mb-2">A:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Lower the volume - distortion often occurs at very high volumes</li>
                                                <li>Check your headphones/speakers for issues</li>
                                                <li>Close other apps that might be using audio</li>
                                                <li>Restart the app</li>
                                                <li>Ensure your device has sufficient free storage</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q23: The timer isn't working properly. What can I do?</h3>
                                            <p className="mb-2">A:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Make sure you tapped "START TIMER" after selecting the duration</li>
                                                <li>Check that your device's battery saver mode isn't interfering</li>
                                                <li>Ensure the app has necessary permissions</li>
                                                <li>Try restarting the app</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q24: The app keeps stopping when I lock my phone. Help!</h3>
                                            <p className="mb-2">A:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Check your device's battery optimization settings</li>
                                                <li>Allow the app to run in the background</li>
                                                <li>Disable battery saver for this app (Android)</li>
                                                <li>On iOS, ensure Background App Refresh is enabled</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* Account & Subscription */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Account & Subscription</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q25: Do I need to create an account?</h3>
                                            <p>A: No account is required. Simply download and start using the app immediately.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q26: Is the app free?</h3>
                                            <p>A: Yes, completely free with no ads or in-app purchases.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q27: Are there any in-app purchases?</h3>
                                            <p>A: Currently, all features are included with no additional purchases required.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Support & Feedback */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Support & Feedback</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q28: How do I report a bug or issue?</h3>
                                            <p className="mb-2">A: Please contact us at <span className="text-[#8FFF20] font-bold">support@tinnitusrelief.app</span> with:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Description of the issue</li>
                                                <li>Device model and OS version</li>
                                                <li>Steps to reproduce the problem</li>
                                                <li>Screenshots (if applicable)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q29: How can I request a new feature or sound?</h3>
                                            <p>A: We love hearing from our users! Send your suggestions to <span className="text-[#8FFF20] font-bold">feedback@tinnitusrelief.app</span>. We carefully consider all feedback for future updates.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q30: Where can I leave a review?</h3>
                                            <p className="mb-2">A: If you find the app helpful, please consider leaving a review on:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Google Play Store (Android)</li>
                                                <li>Apple App Store (iOS)</li>
                                            </ul>
                                            <p className="mt-2">Your feedback helps us improve and helps others discover the app!</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Safety & Health */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Safety & Health</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q31: Are there any safety concerns I should know about?</h3>
                                            <p className="mb-2">A:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>Never use at excessively high volumes - this can damage hearing</li>
                                                <li>If you experience pain, discomfort, or worsening symptoms, stop using the app and consult a healthcare professional</li>
                                                <li>This app is not a substitute for professional medical advice</li>
                                                <li>Always consult with an audiologist or ENT specialist for persistent tinnitus</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q32: Can children use this app?</h3>
                                            <p>A: While the app is generally safe, we recommend adult supervision for children. Ensure volume levels are safe and appropriate.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Privacy & Security */}
                                <section>
                                    <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Privacy & Security</h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q33: Where can I read the Privacy Policy?</h3>
                                            <p className="mb-2">A: You can access our Privacy Policy:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>In the app: Tap the settings icon → "Privacy Policy"</li>
                                                <li>Online: <Link to="/privacy-policy" className="text-[#8FFF20] hover:underline">Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">Q34: Where can I read the Terms & Conditions?</h3>
                                            <p className="mb-2">A: You can access our Terms & Conditions:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
                                                <li>In the app: Tap the settings icon → "Terms & Conditions"</li>
                                                <li>Online: <Link to="/terms-of-service" className="text-[#8FFF20] hover:underline">Terms of Service</Link></li>
                                            </ul>
                                        </div>
                                    </div>
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
