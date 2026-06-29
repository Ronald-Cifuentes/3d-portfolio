/* eslint-disable */
/**
 * Test mock for framer-motion.
 *
 * framer-motion's `motion.*` components and scroll/viewport features don't run
 * meaningfully under jsdom, and some animation-only props (e.g. `whileInView`)
 * leak onto the real DOM element there, producing React "unknown prop" console
 * errors. This mock renders plain DOM elements and strips the animation-only
 * props so the component tree renders identically without the noise.
 */
import { createElement, forwardRef } from 'react'

const FRAMER_ONLY_PROPS = new Set([
  'variants',
  'initial',
  'animate',
  'exit',
  'transition',
  'custom',
  'inherit',
  'whileHover',
  'whileTap',
  'whileFocus',
  'whileInView',
  'whileDrag',
  'viewport',
  'layout',
  'layoutId',
  'layoutScroll',
  'layoutDependency',
  'layoutRoot',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'dragControls',
  'dragListener',
  'dragSnapToOrigin',
  'dragTransition',
  'dragDirectionLock',
  'dragPropagation',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDrag',
  'onDragStart',
  'onDragEnd',
  'onDirectionLock',
  'onHoverStart',
  'onHoverEnd',
  'onTap',
  'onTapStart',
  'onTapCancel',
  'onPan',
  'onPanStart',
  'onPanEnd',
  'onViewportEnter',
  'onViewportLeave',
  'transformTemplate',
])

const stripFramerProps = (props: any): any => {
  const out: any = {}
  for (const key of Object.keys(props)) {
    if (!FRAMER_ONLY_PROPS.has(key)) out[key] = props[key]
  }
  return out
}

const componentCache: any = {}

export const motion: any = new Proxy(
  {},
  {
    get: (_target, tag: string) => {
      if (!componentCache[tag]) {
        componentCache[tag] = forwardRef(function MotionMock({ children, ...rest }: any, ref: any) {
          return createElement(tag, { ...stripFramerProps(rest), ref }, children)
        })
      }
      return componentCache[tag]
    },
  }
)

export const AnimatePresence = ({ children }: any) => children
