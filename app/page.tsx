"use client";
import Hero from "@/components/common/Hero";
import HomeSections from "@/components/common/HomePageSections";
import ResearchSection from "@/components/common/ResearchAreas";

export default function Home() {
	return (
		<>
			<Hero />
			<ResearchSection />
			<HomeSections />
		</>
	);
}
