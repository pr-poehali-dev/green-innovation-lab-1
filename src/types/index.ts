import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  items?: string[]
  tag?: string
  showButton?: boolean
  buttonText?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}
