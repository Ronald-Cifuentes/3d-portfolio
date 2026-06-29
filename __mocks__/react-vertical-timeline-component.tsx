import { FC, ReactNode } from 'react'

interface VerticalTimelineProps {
  children?: ReactNode
}

interface VerticalTimelineElementProps {
  children?: ReactNode
  'data-testid'?: string
  date?: string
  iconStyle?: Record<string, string>
  icon?: ReactNode
  contentStyle?: Record<string, string>
  contentArrowStyle?: Record<string, string>
}

export const VerticalTimeline: FC<VerticalTimelineProps> = ({ children }) => {
  return <div data-testid='vertical-timeline'>{children}</div>
}

export const VerticalTimelineElement: FC<VerticalTimelineElementProps> = ({
  children,
  'data-testid': dataTestId,
  icon,
}) => {
  // Render only valid DOM: the library-specific props (iconStyle, contentStyle,
  // contentArrowStyle, date) are intentionally dropped so they don't leak onto
  // the DOM element and trigger React "unknown prop" warnings.
  return (
    <div data-testid={dataTestId}>
      {icon}
      {children}
    </div>
  )
}
