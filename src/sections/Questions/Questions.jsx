import './Questions.scss'
import Section from "@/layouts/Section/index.js";
import AccordionGroup from "@/components/AccordionGroup/index.js";
import Accordion from "@/components/Accordion/index.js";

const Questions = () => {

  const questionItems = [
    'What are the school hours at Little Learners Academy?',
    'Is there a uniform policy for students?',
    'What extracurricular activities are available for students?',
    'What extracurricular activities are available for students?',
    'How do you handle food allergies and dietary restrictions?',
    'What is the teacher-to-student ratio at Little Learners Academy?',
    'How do you handle discipline and behavior management?',
    'How do I apply for admission to Little Learners Academy?',
  ]

  return (
    <Section
      badge='Solutions For The Doubts'
      title='Frequently Asked Questions'
      description={`Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.`}
      titleId='questions-title'
      id='faq'
    >
      <AccordionGroup columns={2}>
        {questionItems.map((question, index) => (
          <Accordion
            title={question}
            isOpen={index === 0}
            name='questions'
            id={`question-${index}`}
            key={index}
          >
            <p>Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section
    >
  )
}

export default Questions