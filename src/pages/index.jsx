import Hero from "@/sections/Hero/index.js";
import Benefits from "@/sections/Benefits/index.js";
import Reviews from "@/sections/Reviews/index.js";

export const metadata = {
  title: 'Home',
}

export default function () {
  return (
    <>
      <Hero />
      <Benefits />
      <Reviews />
    </>
  )
}
