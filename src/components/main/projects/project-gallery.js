import React from 'react'
import ImageGallery from 'react-image-gallery';


const ProjectGallery = ({images}) => {
  return (
    <ImageGallery
      items={images}
      sizes="(max-width: 600px) 480px,800px"
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
    />
  )
}
export default ProjectGallery