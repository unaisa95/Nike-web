



import SHOES from "@/components/cardData";
import GearUp from "@/components/CardData2";
import CategoriesGrid from "@/components/Categories";
import FeaturedSection from "@/components/FeaturedSection";
import FeaturedSection2 from "@/components/FeaturedSection2";
import Hero from "@/components/Hero";
import FeaturedSection3 from "@/components/FeaturedSection3";


export default function Home() {
  return (
    <div>

     <Hero/>
     <FeaturedSection />
     <FeaturedSection2 />
     <FeaturedSection3 />
     <SHOES />
     <GearUp />
     <CategoriesGrid />
    </div>
  )}