import TitleOverview from "@/sections/TitleOverview/index.js";
import Mission from "@/sections/Mission/index.js";
import Awards from "@/sections/Awards/index.js";
import Story from "@/sections/Story/index.js";
import Team from "@/sections/Team/index.js";

export const metadata = {
  title: 'About',
}

export default function () {
  return (
    <>
      <TitleOverview />
      <Mission />
      <Awards />
      <Story />
      <Team />
    </>
  )
}
