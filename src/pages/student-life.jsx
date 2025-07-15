import TitleStudentLife from "@/components/TitleStudentLife/index.js";
import Activities from "@/sections/Activities/index.js";
import StudentSupport from "@/sections/StudentSupport/index.js";
import Events from "@/sections/Events/index.js";

export const metadata = {
  title: 'Student Life',
}

export default function () {
  return (
    <>
      <TitleStudentLife />
      <Activities />
      <Events />
      <StudentSupport />
    </>
  )
}
