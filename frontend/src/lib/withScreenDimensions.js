import { useState, useEffect } from 'react'

export default function withScreenDimensions(WrappedComponent) {
  const Screen = (props) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const updateWindowDimensions = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    useEffect(() => {
      updateWindowDimensions()
      window.addEventListener('resize', updateWindowDimensions)

      return () => {
        window.removeEventListener('resize', updateWindowDimensions)
      }
    }, [])

    return <WrappedComponent {...props} dimensions={{ width, height }} />
  }

  return Screen
}
