import './Features.scss'
import Grid from "@/components/Grid/index.js";
import EducationCard from "@/components/EducationCard/index.js";
import Section from "@/layouts/Section/index.js";


const Features = () => {
  const featuresItems = [
    {
      imgSrc: 'book',
      title: 'Thematic Learning',
      description: 'Our curriculum is centered around engaging themes that capture children\'s imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant. ',
    },
    {
      imgSrc: 'graph',
      title: 'STEAM Education',
      description: 'We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.',
    },
    {
      imgSrc: 'puzzle',
      title: 'Language Immersion',
      description: 'Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness. ',
    },
    {
      imgSrc: 'pen',
      title: 'Art and Creativity',
      description: 'Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.',
    },
    {
      imgSrc: 'sun',
      title: 'Outdoor Education',
      description: 'Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.',
    },
    {
      imgSrc: 'star',
      title: 'Play-Based Learning',
      description: 'Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.',
    },

  ]

  return (
    <Section
      badge='Our Features'
      title='Our Special Features'
      description={'Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'}
      titleId='feature-title'
      id='special-features'
    >
      <Grid rowGapClassName='feature-row-gap' columns={3}>
        {featuresItems.map((featureItem, index) => (
          <EducationCard {...featureItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Features