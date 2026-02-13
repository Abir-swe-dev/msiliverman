import React from 'react';
import {
    GlassButton,
    HeroWave,
    Headline,
    BodyText,
    GlassCard,
    NeonLine,
    StarRating,
    BulletList,
} from './DesignSystem';

/**
 * Example usage of the Tinnitus Relief Design System components
 * This file demonstrates how to use the reusable components
 */

export function DesignSystemExample() {
    return (
        <div className="min-h-screen bg-forestDark text-softWhite p-8">

            {/* Hero Wave Divider Example */}
            <section className="relative mb-16">
                <HeroWave className="absolute top-0" fillColor="#1f3a2b" />
                <div className="pt-32">
                    <Headline variant="hero">
                        750 Million people suffer from ringing in the ears.
                    </Headline>
                    <BodyText className="mt-4">
                        Are <span className="font-semibold">you</span> one of them?
                    </BodyText>
                </div>
            </section>

            {/* Glass Buttons Example */}
            <section className="mb-16">
                <Headline variant="section" className="mb-6">
                    Glass Button Variants
                </Headline>
                <div className="flex flex-wrap gap-4">
                    <GlassButton variant="neon" size="lg">
                        Try it for 7 days — FREE
                    </GlassButton>
                    <GlassButton variant="gold" size="md">
                        Get Started
                    </GlassButton>
                    <GlassButton variant="blue" size="sm">
                        Learn More
                    </GlassButton>
                </div>
            </section>

            {/* Typography Examples */}
            <section className="mb-16">
                <Headline variant="section" className="mb-6">
                    Typography Hierarchy
                </Headline>
                <div className="space-y-4">
                    <Headline variant="hero">
                        Hero Headline (Montserrat Semibold)
                    </Headline>
                    <Headline variant="section">
                        Section Headline (Montserrat Semibold)
                    </Headline>
                    <Headline variant="subsection">
                        Subsection Headline (Montserrat Normal)
                    </Headline>
                    <BodyText variant="primary" size="lg">
                        Primary body text - Large (Open Sans)
                    </BodyText>
                    <BodyText variant="secondary" size="base">
                        Secondary body text - Base (Open Sans)
                    </BodyText>
                    <BodyText variant="muted" size="sm">
                        Muted body text - Small (Open Sans)
                    </BodyText>
                </div>
            </section>

            {/* Glass Card Example */}
            <section className="mb-16">
                <Headline variant="section" className="mb-6">
                    Glass Card Components
                </Headline>
                <div className="grid md:grid-cols-3 gap-6">
                    <GlassCard borderColor="neon">
                        <Headline variant="subsection" className="mb-3">
                            Neon Border
                        </Headline>
                        <BodyText size="sm">
                            Frosted glass card with neon green border accent.
                        </BodyText>
                    </GlassCard>

                    <GlassCard borderColor="white">
                        <Headline variant="subsection" className="mb-3">
                            White Border
                        </Headline>
                        <BodyText size="sm">
                            Frosted glass card with subtle white border.
                        </BodyText>
                    </GlassCard>

                    <GlassCard borderColor="none">
                        <Headline variant="subsection" className="mb-3">
                            No Border
                        </Headline>
                        <BodyText size="sm">
                            Frosted glass card without border styling.
                        </BodyText>
                    </GlassCard>
                </div>
            </section>

            {/* Neon Line Example */}
            <section className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                    <Headline variant="section">
                        take a listen:
                    </Headline>
                    <NeonLine color="neon" width="w-32" />
                </div>
                <div className="flex items-center gap-4">
                    <Headline variant="subsection" className="text-gold">
                        TRY IT FOR 7 days:: FREE
                    </Headline>
                    <NeonLine color="gold" width="w-16" />
                </div>
            </section>

            {/* Star Rating Example */}
            <section className="mb-16">
                <Headline variant="section" className="mb-6">
                    Star Ratings
                </Headline>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <StarRating rating={5} />
                        <BodyText size="sm">5 out of 5 stars</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                        <StarRating rating={4} />
                        <BodyText size="sm">4 out of 5 stars</BodyText>
                    </div>
                    <div className="flex items-center gap-3">
                        <StarRating rating={3} />
                        <BodyText size="sm">3 out of 5 stars</BodyText>
                    </div>
                </div>
            </section>

            {/* Bullet List Example */}
            <section className="mb-16">
                <Headline variant="section" className="mb-6">
                    Bullet Lists
                </Headline>
                <BodyText className="mb-4" size="sm">
                    as you turn up the volume, you will likely notice:
                </BodyText>
                <BulletList
                    markerColor="white"
                    items={[
                        'the ringing disappears',
                        'uncanny realism: full immersion to the environment',
                        'deep relaxation',
                    ]}
                />
            </section>

            {/* Color Palette Reference */}
            <section className="mb-16">
                <Headline variant="section" className="mb-6">
                    Color Palette
                </Headline>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="h-20 bg-forestDark rounded-lg border border-white/20" />
                        <BodyText size="xs">forestDark</BodyText>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 bg-forestMid rounded-lg border border-white/20" />
                        <BodyText size="xs">forestMid</BodyText>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 bg-mistGreen rounded-lg border border-white/20" />
                        <BodyText size="xs">mistGreen</BodyText>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 bg-softFog rounded-lg border border-white/20" />
                        <BodyText size="xs">softFog</BodyText>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 bg-neonGreen rounded-lg border border-white/20" />
                        <BodyText size="xs">neonGreen</BodyText>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 bg-electricBlue rounded-lg border border-white/20" />
                        <BodyText size="xs">electricBlue</BodyText>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 bg-softWhite rounded-lg border border-white/20" />
                        <BodyText size="xs">softWhite</BodyText>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 bg-gold rounded-lg border border-white/20" />
                        <BodyText size="xs">gold</BodyText>
                    </div>
                </div>
            </section>

            {/* Complete Example Section */}
            <section>
                <Headline variant="section" className="mb-6">
                    Complete Example: Hero Section
                </Headline>
                <GlassCard borderColor="neon" className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-4">
                        <Headline variant="subsection" className="text-neonGreen lowercase">
                            take a listen:
                        </Headline>
                        <NeonLine color="neon" width="w-24" />
                    </div>

                    <BodyText size="xs" className="text-neonGreen mb-6 lowercase">
                        ( best in headphones or ear buds )
                    </BodyText>

                    <BodyText size="sm" className="mb-4 lowercase">
                        as you turn up the volume, you will likely notice:
                    </BodyText>

                    <BulletList
                        markerColor="white"
                        items={[
                            'the ringing disappears',
                            'uncanny realism: full immersion to the environment',
                            'deep relaxation',
                        ]}
                        className="mb-6"
                    />

                    <div className="flex items-center gap-4 mb-6">
                        <Headline variant="subsection" className="text-gold uppercase">
                            TRY IT FOR 7 days:: FREE
                        </Headline>
                        <NeonLine color="gold" width="w-16" />
                    </div>

                    <GlassButton variant="neon" size="lg">
                        Start Your Free Trial
                    </GlassButton>
                </GlassCard>
            </section>

        </div>
    );
}
