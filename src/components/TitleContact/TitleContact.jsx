import './TitleContact.scss'
import Banner from "@/layouts/Banner/index.js";


const TitleContact = () => {


  return (
    <Banner
      badge='Contact Us'
      title='Feel Free To Connect With Us'
      description={'We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods'}
      actions={true}
    />
  )
}

export default TitleContact