import './Information.scss'
import Section from "@/layouts/Section/index.js";
import Field from "@/components/Field/index.js";
import Button from "@/components/Button/index.js";
import Icon from "@/components/Icon/index.js";

const Information = () => {

  const decorationSrcItems = [
    'facebook', 'twitter', 'linked-in',
  ]

  return (
    <Section
      badge='Contact Form'
      title='Student Information'
      description={'If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs'}
      titleId='information-title'
      id='information'
    >
      <form
        className="information__form"
        action
      >
        <div className="information__actions">
          {decorationSrcItems.map((decorationSrcItem, index) => (
            <div
              className="information__action"
              key={index}
            >
              <Icon
                className='information__action-icon'
                name={decorationSrcItem}
                hasFill
                ariaLabel="information"
              />
            </div>
          ))}
        </div>
        <Field
          className="information__form-cell"
          label="Parent Name"
          placeholder="Alice Hunter"
          isRequired
        />
        <Field
          className="information__form-cell"
          label="Email Address"
          type="email"
          placeholder="example@example.com"
        />
        <Field
          className="information__form-cell"
          label="Phone Number"
          placeholder="(000) 000-00-00"
          inputMode="tel"
          mask="(000) 000-00-00"
          isRequired
        />
        <Field
          className="information__form-cell"
          label="Student Name"
          placeholder="Alex Peter"
          isRequired
        />
        <Field
          className="information__form-cell"
          label="Student Age"
          type="number"
          minValid={'0'}
          maxValid={'16'}
          placeholder="7"
          isRequired
        />
        <Field
          className="information__form-cell"
          label="Program of Intrest"
          placeholder="Art"
        />
        <Field
          className="information__form-cell information__form-cell--wide"
          type="textarea"
          label="Message"
          placeholder="Hello! I have a question..."
        />

        <div className="information__form-cell information__form-cell--wide information__form-cell--actions">
          <Button
            className="information__form-agreement"
            label="Submit"
            type="submit"
          />
        </div>
      </form>
    </Section>
  )
}

export default Information