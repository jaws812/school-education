import './Awards.scss'
import Section from "@/layouts/Section/index.js";
import EducationCard from "@/components/EducationCard/index.js";
import Slider from "@/components/Slider/index.js";
import ButtonSlider from "@/components/ButtonSlider/index.js";

const Awards = () => {
  const educationInfoItems = [
    {
      title: 'Outstanding Early Childhood Education Awar',
      description: 'Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy\'s commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.',
      imgSrc: 'pie',
    },
    {
      title: 'Innovative STEAM Education Award',
      description: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.',
      imgSrc: 'graph',
    },
    {
      title: 'Environmental Stewardship Award',
      description: 'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.  ',
      imgSrc: '2x',
    },
    {
      title: 'Outstanding Early Childhood Education Awar Second',
      description: 'Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy\'s commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.',
      imgSrc: 'pie',
    },
    {
      title: 'Innovative STEAM Education Award Second',
      description: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.',
      imgSrc: 'graph',
    },
    {
      title: 'Environmental Stewardship Award Second',
      description: 'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.  ',
      imgSrc: '2x',
    },
  ]

  return (
    <Section
      badge='Our Achievements'
      title='Our Awards and Recognitions'
      description={'Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team\'s relentless efforts in creating an exceptional learning environment for our students.'}
      titleId='awards-title'
      flex='flex-column'
      extraAttrs={{
        'data-js-slider-body': ''
      }}
    >

      <Slider
        sliderParams={{
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40,
          breakpoints: {
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 30,
              allowTouchMove: false,
              // такое правило действует от 1024 до 1441
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            }
          }

        }}
      >
        {educationInfoItems.map((educationInfoItem, index) => (
          <EducationCard {...educationInfoItem} key={index} />
        ))}
      </Slider>
      <div className="awards__extra">
        <p>8 More Awards</p>
        <div className="awards__extra-buttons">
          <ButtonSlider
            classNameIcon='awards__icon'
            hasFill
            label='Previous slide'
            leftSideButton={true}
            extraAttrs={{
              'data-js-slider-previous-button': ''
            }}
          />
          <ButtonSlider
            classNameIcon='awards__icon'
            hasFill
            label='Next slide'
            leftSideButton={false}
            extraAttrs={{
              'data-js-slider-next-button': ''
            }}
          />
        </div>
      </div>
    </Section>
  )
}

export default Awards