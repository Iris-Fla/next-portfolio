"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "#fef3e7",
          "--normal-text": "var(--color-lime-900)",
          "--normal-border": "var(--color-lime-700)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
