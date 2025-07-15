import './Events.scss'
import Section from "@/layouts/Section/index.js";
import Grid from "@/components/Grid/index.js";
import LearnCard from "@/components/LearnCard/index.js";

const Events = () => {
  const eventItems = [
    {
      imgSrc: 'src/assets/images/event/sport.jpg',
      title: 'Annual Sports Day',
      description: 'A day filled with friendly competition, team spirit, and sportsmanship.',
    },
    {
      imgSrc: 'src/assets/images/event/festival.jpg',
      title: 'Cultural Festivals',
      description: 'Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.',
    },
    {
      imgSrc: 'src/assets/images/event/art.jpg',
      title: 'Art Exhibitions',
      description: 'Showcasing our students\' artistic talents through exhibitions and displays.',
    },
    {
      imgSrc: 'src/assets/images/event/science.jpg',
      title: 'Science Fair',
      description: 'A platform for budding scientists to present their innovative projects and experiments.',
    },
    {
      imgSrc: 'src/assets/images/event/international.jpg',
      title: 'International Day',
      description: 'A vibrant celebration of our diverse community, embracing cultures from around the world.',
    },
    {
      imgSrc: 'src/assets/images/event/ceremony.jpg',
      title: 'Graduation Ceremony',
      description: 'A significant milestone as our Kindergarten students prepare to embark on their academic journey.',
    },
  ]

  return (
    <Section
      badge='Mission & Visions'
      title='Our Mission & Visions'
      description='We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'
      titleId='mission-title'
    >
      <div className="events">
        <Grid columns={3}>
          {eventItems.map((eventItem, index) => (
            <LearnCard {...eventItem} key={index} />
          ))}
        </Grid>
      </div>
    </Section>
  )
}

export default Events