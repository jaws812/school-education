import './Mission.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section/index.js";
import Grid from "@/components/Grid/index.js";
import MissionCard from "@/components/MissionCard/index.js";

const Mission = (props) => {
  const {
    className,
  } = props

  const missionItems = [
    {
      title: 'Vision',
      description: 'At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.',
      srcImg: 'src/assets/images/mission/rock.png',
    },
    {
      title: 'Mission',
      description: 'Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.\n',
      srcImg: 'src/assets/images/mission/glass.png',
    },
  ]

  return (
    <Section
      badge='Mission & Visions'
      title='Our Mission & Visions'
      description='We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'
      titleId='mission-title'
    >
      <Grid columns={2}>
        {missionItems.map((missionItem, index) => (
          <MissionCard
            {...missionItem}
            key={index}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Mission