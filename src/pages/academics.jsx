import TitleAcademics from "@/components/TitleAcademics/index.js";
import Features from "@/sections/Features/index.js";
import Learn from "@/sections/Learn/index.js";
import Gallery from "@/sections/Gallery/index.js";


export const metadata = {
  title: 'Academics',
}

export default function () {
  return (
    <>
      <TitleAcademics />
      <Features />
      <Learn />
      {/*<Gallery />*/}
    </>
  )
}
