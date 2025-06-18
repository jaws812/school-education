import TitleAcademics from "@/sections/TitleAcademics/index.js";
import Features from "@/sections/Features/index.js";
import Learn from "@/sections/Learn/index.js";


export const metadata = {
  title: 'Academics',
}

export default function () {
  return (
    <>
      <TitleAcademics />
      <Features />
      <Learn />
    </>
  )
}
