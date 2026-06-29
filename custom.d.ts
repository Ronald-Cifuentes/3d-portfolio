/// <reference types="vite/client" />

// SVG as URL (default import)
declare module '*.svg' {
  const src: string
  export default src
}

// SVG as React component (?react suffix for vite-plugin-svgr 5.x)
declare module '*.svg?react' {
  import type { FC, SVGProps } from 'react'
  const ReactComponent: FC<SVGProps<SVGSVGElement>>
  export default ReactComponent
}

// Image assets
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.mp4' {
  const src: string
  export default src
}

// CSS modules and side-effect imports
declare module '*.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.styl' {
  const classes: { readonly [key: string]: string }
  export default classes
}

// Third-party CSS imports
declare module 'font-awesome/css/font-awesome.min.css'
declare module 'react-vertical-timeline-component/style.min.css'
