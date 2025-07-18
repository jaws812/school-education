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
      title='What Students Learn'
      description='At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include'
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