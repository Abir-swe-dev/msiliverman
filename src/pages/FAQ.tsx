// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
// import FrameImage from '../assets/Frame.jpg';

// export function FAQ() {
//     return (
//         <div className="min-h-screen w-full relative overflow-x-hidden bg-[#0E2A1F] ">
//             {/* Background Image - Fixed */}
//             <div
//                 className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
//                 style={{
//                     backgroundImage: `url(${FrameImage})`
//                 }}>
//                 <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
//             </div>

//             {/* Content Layer */}
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
//                             <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-8 lowercase tracking-tighter">
//                                 Frequently Asked Questions
//                             </h1>

//                             <div className="space-y-16 text-white/80 font-body leading-relaxed">
//                                 {/* General Questions */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">General Questions</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q1: What is Tinnitus Relief?</h3>
//                                             <p>A: Tinnitus Relief is a mobile app designed to help manage tinnitus symptoms through sound therapy. The app provides a variety of soothing sounds and white noise tracks that can help mask tinnitus sounds and provide relief.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q2: How does sound therapy help with tinnitus?</h3>
//                                             <p>A: Sound therapy works by providing external sounds that can mask or distract from the ringing, buzzing, or other sounds caused by tinnitus. This can help reduce the perceived intensity of tinnitus and make it less bothersome over time.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q3: Is this app a cure for tinnitus?</h3>
//                                             <p>A: No. Tinnitus Relief is a management tool, not a cure. While it may help reduce symptoms and provide comfort, it does not treat the underlying causes of tinnitus. Always consult with a healthcare professional for medical advice.</p>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Using the App */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Using the App</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q4: What sound options are available?</h3>
//                                             <p className="mb-2">A: The app includes various nature sounds and therapeutic audio tracks:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>White Noise (Standard & WAV formats)</li>
//                                                 <li>Rain (Light & Medium intensity)</li>
//                                                 <li>Storm (Light & Active)</li>
//                                                 <li>River & Stream</li>
//                                                 <li>Wind</li>
//                                                 <li>Crickets</li>
//                                                 <li>Ocean Ambient Audio (OAA & OAC)</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q5: How do I adjust the volume?</h3>
//                                             <p className="mb-2">A: There are two ways to control volume:</p>
//                                             <ol className="list-decimal list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Vertical slider on the right side of the screen - drag up or down</li>
//                                                 <li>Dot volume meter at the bottom - tap or drag to select the desired level</li>
//                                             </ol>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q6: Can I play sounds continuously?</h3>
//                                             <p className="mb-2">A: Yes! You have two playback modes:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Continuous Mode: Sounds play indefinitely until you stop them</li>
//                                                 <li>Timer Mode: Set a timer (5, 10, 15, 30, 45, or 60 minutes) and the sound will automatically stop</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q7: How do I set a timer?</h3>
//                                             <p className="mb-2">A:</p>
//                                             <ol className="list-decimal list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Tap the "TIMER" button at the top of the screen</li>
//                                                 <li>Select your desired duration from the timer modal</li>
//                                                 <li>Tap "START TIMER"</li>
//                                                 <li>The sound will play for the selected duration and then stop automatically</li>
//                                             </ol>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q8: Can I use the app while doing other activities?</h3>
//                                             <p>A: Yes! The app can play in the background, allowing you to use other apps, lock your phone, or let it run while you sleep.</p>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Technical Questions */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Technical Questions</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q9: Does the app require an internet connection?</h3>
//                                             <p>A: No. All sounds are stored locally on your device, so the app works completely offline. No internet connection is required after installation.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q10: Does the app collect my personal data?</h3>
//                                             <p>A: No. Tinnitus Relief does not collect, store, or share any personal information. The app works entirely on your device with no external data transmission. See our Privacy Policy for more details.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q11: Why do I need to grant audio permissions?</h3>
//                                             <p>A: The app needs permission to access your device's audio output to play the therapeutic sounds. No recordings or data collection occurs.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q12: Does the app work offline?</h3>
//                                             <p>A: Yes! Once installed, the app works completely offline. All sounds are pre-loaded and stored on your device.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q13: How much storage does the app require?</h3>
//                                             <p>A: The app requires approximately [50-100 MB] of storage space for the application and all audio files.</p>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Device & Compatibility */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Device & Compatibility</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q14: Which devices are supported?</h3>
//                                             <p className="mb-2">A: Tinnitus Relief works on:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Android: Version 5.0 (Lollipop) and above</li>
//                                                 <li>iOS: Version 11.0 and above</li>
//                                                 <li>Smartphones and tablets</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q15: Can I use the app with headphones or earbuds?</h3>
//                                             <p className="mb-2">A: Yes! The app works with all standard audio output devices including:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Wired headphones/earbuds</li>
//                                                 <li>Bluetooth headphones</li>
//                                                 <li>Device speakers</li>
//                                                 <li>External speakers</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q16: Will the app drain my battery?</h3>
//                                             <p>A: The app is optimized for battery efficiency. However, playing audio continuously for extended periods will use battery power. Using the timer feature can help conserve battery life.</p>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Best Practices */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Best Practices</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q17: How should I use the app for best results?</h3>
//                                             <p className="mb-2">A:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Start with a low volume and gradually adjust to a comfortable level</li>
//                                                 <li>Experiment with different sounds to find what works best for you</li>
//                                                 <li>Use consistently - regular use may provide better long-term relief</li>
//                                                 <li>Consider using the timer feature at bedtime</li>
//                                                 <li>Don't play sounds too loudly - they should mask, not overwhelm</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q18: What volume level should I use?</h3>
//                                             <p>A: The sound should be played at a comfortable level - loud enough to provide masking but not so loud that it's uncomfortable or could damage hearing. As a general rule, set it just below the level where you can clearly hear your tinnitus.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q19: How long should I use the app each session?</h3>
//                                             <p>A: This varies by individual. Some people use it for short periods during the day, while others use it continuously or at night while sleeping. Start with shorter sessions and adjust based on what helps you.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q20: Can I use the app while sleeping?</h3>
//                                             <p>A: Yes! Many users find the app helpful for sleep. Use the timer feature to have sounds play for a set duration, or use continuous mode if you prefer sound throughout the night.</p>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Troubleshooting */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Troubleshooting</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q21: The app isn't playing any sound. What should I do?</h3>
//                                             <p className="mb-2">A:</p>
//                                             <ol className="list-decimal list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Check that your device volume is turned up</li>
//                                                 <li>Ensure the in-app volume slider is not at minimum</li>
//                                                 <li>Verify that headphones/Bluetooth devices are properly connected</li>
//                                                 <li>Try selecting a different sound track</li>
//                                                 <li>Restart the app</li>
//                                                 <li>Check if other apps can play audio</li>
//                                             </ol>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q22: The sound is crackling or distorted. Why?</h3>
//                                             <p className="mb-2">A:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Lower the volume - distortion often occurs at very high volumes</li>
//                                                 <li>Check your headphones/speakers for issues</li>
//                                                 <li>Close other apps that might be using audio</li>
//                                                 <li>Restart the app</li>
//                                                 <li>Ensure your device has sufficient free storage</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q23: The timer isn't working properly. What can I do?</h3>
//                                             <p className="mb-2">A:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Make sure you tapped "START TIMER" after selecting the duration</li>
//                                                 <li>Check that your device's battery saver mode isn't interfering</li>
//                                                 <li>Ensure the app has necessary permissions</li>
//                                                 <li>Try restarting the app</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q24: The app keeps stopping when I lock my phone. Help!</h3>
//                                             <p className="mb-2">A:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Check your device's battery optimization settings</li>
//                                                 <li>Allow the app to run in the background</li>
//                                                 <li>Disable battery saver for this app (Android)</li>
//                                                 <li>On iOS, ensure Background App Refresh is enabled</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Account & Subscription */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Account & Subscription</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q25: Do I need to create an account?</h3>
//                                             <p>A: No account is required. Simply download and start using the app immediately.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q26: Is the app free?</h3>
//                                             <p>A: Yes, completely free with no ads or in-app purchases.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q27: Are there any in-app purchases?</h3>
//                                             <p>A: Currently, all features are included with no additional purchases required.</p>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Support & Feedback */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Support & Feedback</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q28: How do I report a bug or issue?</h3>
//                                             <p className="mb-2">A: Please contact us at <span className="text-[#8FFF20] font-bold">support@tinnitusrelief.app</span> with:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Description of the issue</li>
//                                                 <li>Device model and OS version</li>
//                                                 <li>Steps to reproduce the problem</li>
//                                                 <li>Screenshots (if applicable)</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q29: How can I request a new feature or sound?</h3>
//                                             <p>A: We love hearing from our users! Send your suggestions to <span className="text-[#8FFF20] font-bold">feedback@tinnitusrelief.app</span>. We carefully consider all feedback for future updates.</p>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q30: Where can I leave a review?</h3>
//                                             <p className="mb-2">A: If you find the app helpful, please consider leaving a review on:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Google Play Store (Android)</li>
//                                                 <li>Apple App Store (iOS)</li>
//                                             </ul>
//                                             <p className="mt-2">Your feedback helps us improve and helps others discover the app!</p>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Safety & Health */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Safety & Health</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q31: Are there any safety concerns I should know about?</h3>
//                                             <p className="mb-2">A:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>Never use at excessively high volumes - this can damage hearing</li>
//                                                 <li>If you experience pain, discomfort, or worsening symptoms, stop using the app and consult a healthcare professional</li>
//                                                 <li>This app is not a substitute for professional medical advice</li>
//                                                 <li>Always consult with an audiologist or ENT specialist for persistent tinnitus</li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q32: Can children use this app?</h3>
//                                             <p>A: While the app is generally safe, we recommend adult supervision for children. Ensure volume levels are safe and appropriate.</p>
//                                         </div>
//                                     </div>
//                                 </section>

//                                 {/* Privacy & Security */}
//                                 <section>
//                                     <h2 className="text-xl font-bold text-[#8FFF20] mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Privacy & Security</h2>
//                                     <div className="space-y-8">
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q33: Where can I read the Privacy Policy?</h3>
//                                             <p className="mb-2">A: You can access our Privacy Policy:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>In the app: Tap the settings icon → "Privacy Policy"</li>
//                                                 <li>Online: <Link to="/privacy-policy" className="text-[#8FFF20] hover:underline">Privacy Policy</Link></li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-white font-bold mb-2">Q34: Where can I read the Terms & Conditions?</h3>
//                                             <p className="mb-2">A: You can access our Terms & Conditions:</p>
//                                             <ul className="list-disc list-inside space-y-1 ml-4 opacity-90">
//                                                 <li>In the app: Tap the settings icon → "Terms & Conditions"</li>
//                                                 <li>Online: <Link to="/terms-of-service" className="text-[#8FFF20] hover:underline">Terms of Service</Link></li>
//                                             </ul>
//                                         </div>
//                                     </div>
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

const faqSections = [
    {
        title: "General Questions",
        items: [
            { q: "What is Tinnitus Relief?", a: "Tinnitus Relief is a mobile app designed to help manage tinnitus symptoms through sound therapy. The app provides a variety of soothing sounds and white noise tracks that can help mask tinnitus sounds and provide relief." },
            { q: "How does sound therapy help with tinnitus?", a: "Sound therapy works by providing external sounds that can mask or distract from the ringing, buzzing, or other sounds caused by tinnitus. This can help reduce the perceived intensity of tinnitus and make it less bothersome over time." },
            { q: "Is this app a cure for tinnitus?", a: "No. Tinnitus Relief is a management tool, not a cure. While it may help reduce symptoms and provide comfort, it does not treat the underlying causes of tinnitus. Always consult with a healthcare professional for medical advice." },
        ]
    },
    {
        title: "Using the App",
        items: [
            { q: "What sound options are available?", a: "The app includes White Noise (Standard & WAV), Rain (Light & Medium), Storm (Light & Active), River & Stream, Wind, Crickets, and Ocean Ambient Audio — all designed to provide effective tinnitus masking." },
            { q: "How do I adjust the volume?", a: "Use the vertical slider on the right side of the screen (drag up or down), or use the dot volume meter at the bottom — tap or drag to select your desired level." },
            { q: "Can I play sounds continuously?", a: "Yes! Choose Continuous Mode for indefinite playback, or Timer Mode to automatically stop after 5, 10, 15, 30, 45, or 60 minutes." },
            { q: "Can I use the app while doing other activities?", a: "Yes! The app plays in the background, so you can use other apps, lock your phone, or let it run while you sleep." },
        ]
    },
    {
        title: "Technical Questions",
        items: [
            { q: "Does the app require an internet connection?", a: "No. All sounds are stored locally on your device, so the app works completely offline after installation." },
            { q: "Does the app collect my personal data?", a: "No. Tinnitus Relief does not collect, store, or share any personal information. The app works entirely on your device with no external data transmission." },
            { q: "How much storage does the app require?", a: "The app requires approximately 50–100 MB of storage space for the application and all audio files." },
        ]
    },
    {
        title: "Device & Compatibility",
        items: [
            { q: "Which devices are supported?", a: "Tinnitus Relief works on Android 5.0 (Lollipop) and above, iOS 11.0 and above, on both smartphones and tablets." },
            { q: "Can I use the app with headphones?", a: "Yes! The app works with wired headphones/earbuds, Bluetooth headphones, device speakers, and external speakers." },
            { q: "Will the app drain my battery?", a: "The app is optimized for battery efficiency. Using the timer feature can help conserve battery life when playing for extended periods." },
        ]
    },
    {
        title: "Best Practices",
        items: [
            { q: "How should I use the app for best results?", a: "Start at low volume and gradually adjust. Experiment with different sounds to find what works for you. Consistent regular use tends to provide better long-term relief. Don't play sounds too loudly — they should mask, not overwhelm." },
            { q: "What volume level should I use?", a: "Set the volume just below the level where you can clearly hear your tinnitus. It should be comfortable — loud enough to provide masking but not so loud it's uncomfortable." },
            { q: "Can I use the app while sleeping?", a: "Yes! Many users find it helpful for sleep. Use the timer to set a duration, or continuous mode if you prefer sound throughout the night." },
        ]
    },
    {
        title: "Account & Subscription",
        items: [
            { q: "Do I need to create an account?", a: "No account required. Simply download and start using the app immediately." },
            { q: "Is the app free?", a: "Yes, completely free with no ads or in-app purchases." },
            { q: "Are there any in-app purchases?", a: "Currently, all features are included with no additional purchases required." },
        ]
    },
    {
        title: "Support & Feedback",
        items: [
            { q: "How do I report a bug or issue?", a: "Please contact us at support@tinnitusrelief.app with a description of the issue, your device model and OS version, steps to reproduce the problem, and screenshots if applicable." },
            { q: "How can I request a new feature or sound?", a: "We love hearing from our users! Send your suggestions to feedback@tinnitusrelief.app. We carefully consider all feedback for future updates." },
        ]
    },
    {
        title: "Safety & Health",
        items: [
            { q: "Are there any safety concerns I should know about?", a: "Never use at excessively high volumes — this can damage hearing. If you experience pain, discomfort, or worsening symptoms, stop using the app and consult a healthcare professional. This app is not a substitute for professional medical advice." },
            { q: "Can children use this app?", a: "While the app is generally safe, we recommend adult supervision for children. Ensure volume levels are safe and appropriate." },
        ]
    },
];

function AccordionItem({ q, a, index }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'bg-white/10' : 'bg-white/5 hover:bg-white/8'}`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
            >
                <span className="text-white font-bold font-body leading-snug">{q}</span>
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
                <p className="px-6 pb-5 text-white/70 font-body leading-relaxed text-sm">{a}</p>
            </div>
        </div>
    );
}

export function FAQ() {
    return (
        <div className="min-h-screen w-full relative overflow-x-hidden bg-[#0E2A1F]">
            {/* Background Image - Fixed — same as LandingPage */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${FrameImage})` }}
            >
                {/* Top gradient for header/nav section */}
                <div
                    className="absolute top-0 left-0 right-0 h-[300px]"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)'
                    }}
                />
                {/* Very light overlay */}
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.05)' }} />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full">
                <div className="mx-auto">
                    <Header />

                    {/* Negative margin to mirror landing page hero section pull-up */}
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
                                    frequently<br />
                                    <span className="text-[#8FFF20]">asked</span> questions
                                </h1>
                                <p className="mt-4 text-white/50 font-body text-base max-w-xl">
                                    Everything you need to know about Tinnitus Relief — from setup to sound therapy best practices.
                                </p>
                            </div>

                            {/* FAQ Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {faqSections.map((section) => (
                                    <div key={section.title}>
                                        <h2 className="text-xs font-bold text-[#8FFF20] uppercase tracking-[0.25em] mb-4 font-body">
                                            {section.title}
                                        </h2>
                                        <div className="space-y-3">
                                            {section.items.map((item, i) => (
                                                <AccordionItem key={i} q={item.q} a={item.a} index={i} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact strip */}
                            <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <p className="text-white font-heading font-black text-2xl lowercase tracking-tighter">Still have questions?</p>
                                    <p className="text-white/50 font-body text-sm mt-1">Our team is happy to help.</p>
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
                                        to="/terms-of-service"
                                        className="px-6 py-3 rounded-full border border-white/20 text-white font-body font-bold text-sm hover:border-[#8FFF20]/50 transition-colors"
                                    >
                                        Terms of Service
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