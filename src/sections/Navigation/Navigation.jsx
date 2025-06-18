import './Navigation.scss'
import Section from "@/layouts/Section/index.js";
import NavigationCard from "@/components/NavigationCard/index.js";
import Grid from "@/components/Grid/index.js";

const Navigation = () => {

  const navigationItems = [
    {
      title: 'About Us',
      description: 'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education. ',
      pathLink: './about',
    },
    {
      title: 'Academics',
      description: 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.',
      pathLink: './academics',
    },
    {
      title: 'Student Life',
      description: 'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.',
      pathLink: './life',
    },
    {
      title: 'Admissions',
      description: 'Learn about our Enrollment Process and how to secure your child\'s place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces. ',
      pathLink: './admissions',
    },

  ]

  return (
    <Section
      titleId='navigation-title'
      badge='Explore More'
      title='Navigate through our Pages'
      description={`Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school`}
    >
      <Grid
        columns={2}
      >
        {navigationItems.map((navigationItem, index) => (
          <NavigationCard {...navigationItem} key={index} />
        ))}
      </Grid>
    </Section>
  )
}

export default Navigation