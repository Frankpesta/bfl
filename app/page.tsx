"use client";
import Hero from "@/components/common/Hero";
import HeroSection from "@/components/home-cta";
import InsightsPartnersSection from "@/components/home-insights";
import ServicesSection from "@/components/home-services";

export default function Home() {
	return (
		<>
			<Hero />
			<ServicesSection />
			<HeroSection />
			{/* <InsightsPartnersSection /> */}
		</>
	);
}
