import './Reviews.scss'
import Section from "@/layouts/Section/index.js";
import ReviewsCard from "@/components/ReviewsCard/index.js";
import Slider from "@/components/Slider/index.js";
import ButtonSlider from "@/components/ButtonSlider/index.js";

const Reviews = () => {

  const reviewItems = [
    {
      srcImg: 'src/assets/images/people/avatar.jpg',
      title: 'Jennifer B',
      description: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!',
      ratingValue: 5,
    },
    {
      srcImg: 'src/assets/images/people/avatar.jpg',
      title: 'David K',
      description: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.',
      ratingValue: 5,
    },
    {
      srcImg: 'src/assets/images/people/avatar.jpg',
      title: 'Emily L',
      description: `My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.`,
      ratingValue: 5,
    },
    {
      srcImg: 'src/assets/images/people/avatar.jpg',
      title: 'Emily L',
      description: `My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.`,
      ratingValue: 5,
    },
    {
      srcImg: 'src/assets/images/people/avatar.jpg',
      title: 'Emily L',
      description: `My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.`,
      ratingValue: 5,
    },
    {
      srcImg: 'src/assets/images/people/avatar.jpg',
      title: 'Emily L',
      description: `My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.`,
      ratingValue: 5,
    },
  ]

  return (
    <Section
      badge='Their Happy Words 🤗'
      title='Our Testimonials'
      description='Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.'
      titleId='reviews-title'
      flex='flex'
      id='testimonials'
      extraAttrs={{
        'data-js-slider': ''
      }}
    >
      <ButtonSlider
        hasFill
        label='Previous slide'
        leftSideButton={true}
        hiddenOnMobile
        extraAttrs={{
          'data-js-slider-previous-button': ''
        }}
      />
      <Slider
        sliderParams={{
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
          breakpoints: {
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            481: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 30,
            },
            1024: {

              spaceBetween: 40,
              allowTouchMove: false,
              // такое правило действует от 1024 до 1441
            },
            1441: {
              spaceBetween: 50,
              allowTouchMove: false,
            }
          }

        }}
      >
        {reviewItems.map((reviewItem, index) => (
          <ReviewsCard {...reviewItem} key={index} />
        ))}
      </Slider>
      <ButtonSlider
        hasFill
        label='Next slide'
        leftSideButton={false}
        hiddenOnMobile
        extraAttrs={{
          'data-js-slider-next-button': ''
        }}
      />
      <div className="reviews-contaner">
        <ButtonSlider
          classNameIcon='reviews__icon'
          hasFill
          label='Previous slide'
          leftSideButton={true}
          extraAttrs={{
            'data-js-slider-previous-button-mobile': ''
          }}
        />
        <ButtonSlider
          classNameIcon='reviews__icon'
          hasFill
          label='Next slide'
          leftSideButton={false}
          extraAttrs={{
            'data-js-slider-next-button-mobile': ''
          }}
        />
      </div>

    </Section>
  )
}

export default Reviews