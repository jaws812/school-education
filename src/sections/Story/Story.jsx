import './Story.scss'
import Section from "@/layouts/Section/index.js";
import DateCard from "@/components/DateCard/index.js";

const Story = (props) => {
  const {
    className,
  } = props

  const helpItems = [
    {
      year: '2023',
      title: 'Resilience and Future Horizons',
      description: 'Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.',
    },
    {
      year: '2017',
      title: 'Innovation and Technology',
      description: 'Innovation became the driving force behind our kindergarten\'s progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.',
    },
    {
      year: '2012',
      title: 'Expansion and Recognition',
      description: 'These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.',
    },
    {
      year: '2005',
      title: 'Inception and Growth',
      description: 'Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.',
    },

  ]


  return (
    <Section
      badge='Our Progressive Journey'
      title='Our History'
      description={'Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment'}
      titleId='story-title'
    >
      <div className="story">
        <ul className="story__list">
          {helpItems.map(({year, title, description}, index) => (
            <li
              className="story__item"
              key={index}
            >
              <DateCard
                year={year}
              />
              <div className="story__item-body">
                <h3 className="story__item-title h4">{title}</h3>
                <div className="story__item-description">{description}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Story