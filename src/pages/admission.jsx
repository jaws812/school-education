import TitleAdmissions from "@/sections/TitleAdmissions/index.js";
import Process from "@/sections/Process/index.js";

export const metadata = {
  title: 'Admission',
}

export default function () {
  return (
    <>
      <TitleAdmissions />
      <Process />
    </>
  )
}
