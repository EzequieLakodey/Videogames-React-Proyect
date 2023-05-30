// React
import { useState, useEffect } from 'react'

const useResizeImage = (initialWidth, initialHeight, aspectRatio) => {
  const [dimensions, setDimension] = useState({
    width: initialWidth,
    height: initialHeight,
  })

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      let newWidth = initialWidth
      let newHeight = newWidth / aspectRatio

      if (newHeight > screenHeight) {
        newHeight = initialHeight
        newWidth = newHeight * aspectRatio
      }

      setDimension({ width: newWidth, height: newHeight })
    }

    window.addEventListener('resize', updateDimensions)
    updateDimensions()

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [initialWidth, initialHeight, aspectRatio])

  return dimensions
}

export default useResizeImage
