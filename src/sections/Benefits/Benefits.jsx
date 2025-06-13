import './Benefits.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section/index.js";

const Benefits = (props) => {
  const {
    className,
  } = props

  return (
    <Section
      badge='Children Deserve Bright Future'
      title='Our Benefits'
      description={'With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child\'s future.'}
      titleId='benefits-title'
    >

    </Section>
  )
}

export default Benefits