import TitleAdmissions from "@/components/TitleAdmissions/index.js";
import Structure from "@/sections/Structure/index.js";
import Process from "@/sections/Process/index.js";

export const metadata = {
  title: 'Admission',
}

export default function () {
  return (
    <>
      <TitleAdmissions />
      <Process />
      <Structure />
    </>
  )
}
