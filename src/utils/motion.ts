import type { Variants } from 'framer-motion'

type Direction = 'left' | 'right' | 'up' | 'down'
type TransitionType = 'tween' | 'spring' | 'inertia' | 'keyframes'

const fadeInOffsets: Record<Direction, { x: number; y: number }> = {
  left: { x: 100, y: 0 },
  right: { x: -100, y: 0 },
  up: { x: 0, y: 100 },
  down: { x: 0, y: -100 },
}

const slideInOffsets: Record<Direction, { x: string | number; y: string | number }> = {
  left: { x: '-100%', y: 0 },
  right: { x: '100%', y: 0 },
  up: { x: 0, y: '100%' },
  down: { x: 0, y: '100%' },
}

export const textVariant = (delay?: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const fadeIn = (
  direction: Direction,
  type: TransitionType | undefined,
  delay: number,
  duration: number
): Variants => {
  const offset = fadeInOffsets[direction]
  return {
    hidden: {
      x: offset.x,
      y: offset.y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  }
}

export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween' as const,
        delay: delay,
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  }
}

export const slideIn = (
  direction: Direction,
  type: TransitionType | undefined,
  delay: number,
  duration: number
): Variants => {
  const offset = slideInOffsets[direction]
  return {
    hidden: {
      x: offset.x,
      y: offset.y,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  }
}

export const staggerContainer = (staggerChildren: number, delayChildren?: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
