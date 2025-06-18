import './Team.scss'
import Section from "@/layouts/Section/index.js";
import TeamCard from "@/components/TeamCard/index.js";
import Grid from "@/components/Grid/index.js";

const Team = () => {

  const teamItems = [
    {
      imgSrc: 'src/assets/images/team/sarah.jpg',
      name: 'Ms. Sarah Anderson',
      title: 'Qualification:Bachelor\'s Degree in Early Childhood Education',
      description: 'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.',
    },
    {
      imgSrc: 'src/assets/images/team/david.jpg',
      name: 'Mr. David Roberts',
      title: 'Qualification: Master\'s Degree in Elementary Education',
      description: 'With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.',
    },
    {
      imgSrc: 'src/assets/images/team/emily.jpg',
      name: 'Ms. Emily Hernandez',
      title: 'Qualification: Diploma in Child Psychology',
      description: 'Ms. Emily\'s expertise in child psychology enables her to understand each child\'s unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.',
    },
    {
      imgSrc: 'src/assets/images/team/michael.jpg',
      name: 'Mr. Michael Turner',
      title: 'Qualification: Bachelor\'s Degree in Physical Education',
      description: 'Mr. Michael\'s passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.',
    },
    {
      imgSrc: 'src/assets/images/team/jessica.jpg',
      name: 'Ms. Jessica Lee',
      title: 'Qualification: Master\'s Degree in Special Education',
      description: 'Ms. Jessica\'s specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.',
    },
    {
      imgSrc: 'src/assets/images/team/william.jpg',
      name: 'Mr. William Parker',
      title: 'Qualification: Bachelor\'s Degree in Fine Arts',
      description: 'Mr. William\'s background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.',
    },
  ]

  return (
    <Section
      badge='Our Teachers With Experties'
      title='Our Team Members'
      description='At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.'
      titleId='team-title'
    >
      <Grid columns={2}>
        {teamItems.map((teamItem, index) => (
          <TeamCard {...teamItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Team