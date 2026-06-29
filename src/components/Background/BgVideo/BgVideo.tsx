import { useEffect, useRef } from 'react'

const BgVideo = () => {
  const video1El = useRef<HTMLVideoElement>(null)

  const attemptPlay = () => {
    video1El.current?.play().catch((error: unknown) => {
      console.error('Error attempting to play', error)
    })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  return (
    <video className='absolute z-0' loop muted ref={video1El}>
      {/* <source src='https://r-sources.ddns.net/Abstract_Liquids.mkv' type='video/mp4' /> */}
      <source
        src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        type='video/mp4'
      />
      Your browser does not support HTML video.
    </video>
  )
}

export default BgVideo
