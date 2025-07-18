import './Gallery.scss'
import Section from "@/layouts/Section/index.js";
import TabsNavigation
  from "@/components/Tabs/components/TabsNavigation/index.js";
import Tabs from "@/components/Tabs/index.js";
import GalleryCard from "@/components/GalleryCard/index.js";
import galleryGroups from "@/sections/Gallery/galleryGroups.js";

const Gallery = () => {
  const tabsTitle = 'gallery-tabs'
  const tabsNavigationId = 'gallery-tabs-navigation'

  return (
    <Section
      badge='Our Gallery'
      title='Our Rooms Gallery'
      description={'Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.'}
      titleId='gallery-title'
      id='gallery'
      rowGapToTabs='row-gap-to-tabs'
    >
      <TabsNavigation
        id={tabsNavigationId}
        items={galleryGroups}
        title={tabsTitle}
      />
      <Tabs
        className="gallery container"
        navigationTargetElementId={tabsNavigationId}
        title="gallery"
        items={galleryGroups.map((galleryGroup) => ({
          isActive: galleryGroup.isActive,
          title: galleryGroup.title,
          children: (
            <div
              className="gallery__group"
            >
              {galleryGroup.items.map((galleryItem, index) => {
                const {title, description, infoItems} = galleryItem

                return (
                  <div
                    className='gallery__wrapper'
                    key={index}
                  >
                    <GalleryCard
                      title={title}
                      description={description}
                      images={infoItems}
                    />
                  </div>
                )
              })}
            </div>
          )
        }))}
      />

    </Section>
  )
}

export default Gallery