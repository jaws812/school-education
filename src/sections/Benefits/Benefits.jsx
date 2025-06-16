import './Benefits.scss'
import Section from "@/layouts/Section/index.js";
import Grid from "@/components/Grid/index.js";
import EducationCard from "@/components/EducationCard/index.js";

const Benefits = (props) => {
  const educationInfoItems = [
    {
      title: 'Holistic Learning Approach',
      description: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
      imgSrc: 'cap',
    },
    {
      title: 'Experienced Educators',
      description: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.\n',
      imgSrc: 'crown',
    },
    {
      title: 'Nurturing Environment',
      description: 'We prioritize safety and provide a warm and caring atmosphere for every child.  ',
      imgSrc: 'mask',
    },
    {
      title: 'Play-Based Learning',
      description: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.',
      imgSrc: 'flag',
    },
    {
      title: 'Individualized Attention',
      description: 'Our small class sizes enable personalized attention, catering to each child\'s unique needs.',
      imgSrc: 'circle',
    },
    {
      title: 'Parent Involvement',
      description: 'We foster a strong parent-school partnership to ensure seamless communication and collaboration.',
      imgSrc: 'people',
    },
  ]

  return (
    <Section
      badge='Children Deserve Bright Future'
      title='Our Benefits'
      description={'With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child\'s future.'}
      titleId='benefits-title'
    >
      <Grid columns={3} rowGapClassName='benefits-row-gap'>
        {educationInfoItems.map((educationInfoItem, index) => (
          <EducationCard {...educationInfoItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Benefits