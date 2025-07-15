import './Activities.scss'
import Section from "@/layouts/Section/index.js";
import EducationCard from "@/components/EducationCard/index.js";
import Grid from "@/components/Grid/index.js";

const Activities = () => {

  const activitiesInfoItems = [
    {
      title: 'Sports and Athletics',
      description: 'Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.',
      imgSrc: '2x',
    },
    {
      title: 'Art and Creativity',
      description: 'Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.',
      imgSrc: 'pen',
    },
    {
      title: 'Music and Performing Arts',
      description: 'Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.',
      imgSrc: 'music',
    },
    {
      title: 'Language Clubs',
      description: 'Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.',
      imgSrc: 'puzzle',
    },
    {
      title: 'Science Club',
      description: 'The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning. ',
      imgSrc: 'chemistry',
    },
    {
      title: 'Cooking and Culinary Arts',
      description: 'Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals. ',
      imgSrc: 'stars',
    },
  ]

  return (
    <Section
      badge='Our Features'
      title='Extracurricular Activities'
      description={'At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including'}
      titleId='activities-title'
    >
      <Grid
        columns={3}
        rowGapClassName='benefits-row-gap'
      >
        {activitiesInfoItems.map((activityInfoItem, index) => (
          <EducationCard {...activityInfoItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Activities