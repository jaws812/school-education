import './Learn.scss'

import LearnCard from "@/components/LearnCard/index.js";
import Section from "@/layouts/Section/index.js";
import Grid from "@/components/Grid/index.js";

const Learn = () => {
  const learnItems = [
    {
      imgSrc: 'src/assets/images/learn/arts.jpg',
      title: 'Language Arts',
      description: 'Reading, writing, storytelling, and communication skills.',
    },
    {
      imgSrc: 'src/assets/images/learn/mathematics.jpg',
      title: 'Mathematics',
      description: 'Number sense, basic operations, problem-solving, and logic.',
    },
    {
      imgSrc: 'src/assets/images/learn/science.jpg',
      title: 'Science',
      description: 'Exploring the natural world through hands-on experiments and investigations.',
    },
    {
      imgSrc: 'src/assets/images/learn/social.jpg',
      title: 'Social Studies',
      description: 'Cultivating an understanding of diverse cultures and communities.',
    },
    {
      imgSrc: 'src/assets/images/learn/crafts.jpg',
      title: 'Arts and Crafts',
      description: 'Encouraging creativity through various art forms and crafts.',
    },
    {
      imgSrc: 'src/assets/images/learn/physical.jpg',
      title: 'Physical Education',
      description: 'Promoting physical fitness, coordination, and teamwork.',
    },
  ]

  return (
    <Section
      badge='Mission & Visions'
      title='Our Mission & Visions'
      description='We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'
      titleId='mission-title'
    >
      <Grid columns={3}>
        {learnItems.map((learnItem, index) => (
          <LearnCard {...learnItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Learn