import './Process.scss'
import Section from "@/layouts/Section/index.js";
import ProcessCard from "@/components/ProcessCard/index.js";
import Grid from "@/components/Grid/index.js";

const Process = () => {

  const processItems = [
    {
      title: 'Inquiry',
      description: `Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.`,
    },
    {
      title: 'School Tour',
      description: 'Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.',
    },
    {
      title: 'Application Form',
      description: 'Complete the application form and provide the required documents, including your child\'s birth certificate, medical records, and any previous academic records (if applicable).',
    },
    {
      title: 'Parent Interview',
      description: 'We value parent engagement, and a meeting with our admissions team allows us to understand your child\'s needs and ensure Little Learners Academy aligns with your family\'s expectations.',
    },
    {
      title: 'Student Assessment',
      description: 'For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.',
    },
    {
      title: 'Acceptance',
      description: 'Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.'
    },
  ]

  return (
    <Section
      badge='Process'
      title='Admission Process'
      description={'Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school'}
      titleId='process-title'
    >
      <Grid columns={3} rowGapClassName='process-gap'>
        {processItems.map(({title, description}, index) => {
          const counter = (index + 1).toString().padStart(2, '0');
          return (
            <ProcessCard
              title={title}
              description={description}
              number={counter}
              key={index}
            />
          )
        })}
      </Grid>
    </Section>
  )
}

export default Process