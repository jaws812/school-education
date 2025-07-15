import './StudentSupport.scss'
import Grid from "@/components/Grid/index.js";
import EducationCard from "@/components/EducationCard/index.js";
import Section from "@/layouts/Section/index.js";

const StudentSupport = () => {

  const studentInfoItems = [
    {
      title: 'Counseling',
      description: 'Professional counselors offer guidance and support to students, addressing their emotional and social well-being.',
      imgSrc: 'lamp',
    },
    {
      title: 'Learning Support',
      description: 'Our educators provide additional assistance to students who may require extra support in their academic journey.',
      imgSrc: 'book',
    },
    {
      title: 'Parent-Teacher Collaboration',
      description: 'We foster a strong partnership with parents to ensure seamless communication and mutual support in a child\'s development.',
      imgSrc: 'group',
    },
  ]


  return (
    <Section
      badge='Our Achievements'
      title='Student Support'
      description={'At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include'}
      titleId='student-support-title'
    >
      <Grid
        columns={3}
        rowGapClassName='benefits-row-gap'
      >
        {studentInfoItems.map((studentInfoItem, index) => (
          <EducationCard {...studentInfoItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default StudentSupport