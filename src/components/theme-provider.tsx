"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { Toaster } from "sonner"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function ThemedToaster() {
  const { resolvedTheme } = useTheme()
  return <Toaster closeButton theme={resolvedTheme as "light" | "dark"} />
}


