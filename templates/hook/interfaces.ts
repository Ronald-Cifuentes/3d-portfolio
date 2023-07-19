export interface InUseTemplateName {
  dataTestId?: string
}

export interface OutUseTemplateName {
  dataTestId?: string
  increment: () => void
  count: number
}

export type UseTemplateName = (params?: InUseTemplateName) => OutUseTemplateName
