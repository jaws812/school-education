import TitleContact from "@/components/TitleContact/index.js";
import Information from "@/sections/StudentInformation/index.js";

export const metadata = {
  title: 'Student Life',
}

export default function () {
  return (
    <>
      <TitleContact />
      <Information />
    </>
  )
}
