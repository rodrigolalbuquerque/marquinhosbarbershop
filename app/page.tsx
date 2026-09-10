import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Barbers } from "@/components/sections/Barbers";
import { Inspiration } from "@/components/sections/Inspiration";
import { Club } from "@/components/sections/Club";
import { Locations } from "@/components/sections/Locations";
import { BookingCTA } from "@/components/sections/BookingCTA";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Barbers />
      <Inspiration />
      <Club />
      <Locations />
      <BookingCTA />
    </>
  );
}
