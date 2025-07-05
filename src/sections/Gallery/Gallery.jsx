import './Gallery.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section/index.js";
import TabsNavigation
  from "@/components/Tabs/components/TabsNavigation/index.js";
import Tabs from "@/components/Tabs/index.js";
import Grid from "@/components/Grid/index.js";
import GalleryCard from "@/components/GalleryCard/index.js";

const Gallery = () => {
  const tabsTitle = 'gallery-tabs'
  const tabsNavigationId = 'gallery-tabs-navigation'

  const galleryGroups = [
    {
      title: 'All',
      isActive: true,
    },
    {
      title: 'Classrooms',
      isActive: true,
      items: [
        {
          titlePanel: 'Classrooms1',
          description: 'Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.',
          srcImgItems: ['src/assets/images/learn/arts.jpg', 'src/assets/images/learn/crafts.jpg', 'src/assets/images/learn/mathematics.jpg', 'src/assets/images/learn/physical.jpg', 'src/assets/images/learn/science.jpg', 'src/assets/images/learn/social.jpg',],
        },
      ],
    },
    {
      title: 'Library',
      isActive: true,
      items: [
        {
          titlePanel: 'Library',
          description: 'Our expansive library is a treasure trove of books, fostering a love for reading and supporting students\' literacy development.',
          srcImgItems: ['src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg',],
        },
      ],
    },
    {
      title: 'Science Lab',
      isActive: true,
      items: [
        {
          titlePanel: 'Science Lab',
          description: 'Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.',
          srcImgItems: ['src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg',],
        },
      ],
    },
    {
      title: 'Computer Lab',
      isActive: true,
      items: [
        {
          titlePanel: 'Computer Lab',
          description: 'Equipped with age-appropriate technology, the computer lab enhances students\' digital literacy and computational skills',
          srcImgItems: ['src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg',],
        },
      ],
    },
    {
      title: 'Garden and Nature Area',
      isActive: true,
      items: [
        {
          titlePanel: 'Garden and Nature Area',
          description: 'Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.',
          srcImgItems: ['src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg', 'src/assets/images/learn/arts.jpg',],
        },
      ],
    },

  ]

  return (
    <Section
      badge='Our Gallery'
      title='Our Rooms Gallery'
      description={'Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.'}
      titleId='gallery-title'
      extraAttrs={{
        'data-js-slider-body': '',
      }}
    >
      <div className="gallery">
        <TabsNavigation
          id={tabsNavigationId}
          title={tabsTitle}
          items={galleryGroups}
        />
        <Tabs
          title={tabsTitle}
          items={
            galleryGroups.map((galleryGroup) => ({
              title: galleryGroup.title,
              isActive: galleryGroup.isActive,
              children: (
                <Grid columns={1}>
                  {galleryGroup.items && galleryGroup.items.length > 0 && (
                    galleryGroup.items.map((galleryItem, index) => {
                      return (
                        <GalleryCard
                          {...galleryItem}
                          key={index}
                        />
                      )
                    })
                  )
                  }
                </Grid>
              ),
            }))
          }
        />
      </div>

    </Section>
  )
}

export default Gallery