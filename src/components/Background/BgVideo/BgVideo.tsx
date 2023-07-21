import { FC, useEffect, useRef } from 'react'
import { Video } from './BgVideo.styled'
import { BgVideoProps } from './interfaces'

const BgVideo: FC<BgVideoProps> = ({ dataTestId = 'bg-video' }) => {
  const video1El = useRef<HTMLVideoElement>(null)

  const attemptPlay = () => {
    video1El &&
      video1El.current &&
      video1El.current
        .play()
        .then(() => {
          console.log('Success video background')
        })
        .catch(error => {
          console.error('Error attempting to play', error)
        })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  return (
    <Video data-testid={dataTestId} loop muted ref={video1El}>
      <source
        src='https://cdn-r.s3.us-east-2.amazonaws.com/Abstract_Liquids.mkv'
        type='video/mp4'
      />
      Your browser does not support HTML video.
    </Video>
  )
}

export default BgVideo
