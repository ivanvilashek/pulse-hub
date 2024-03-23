'use client'

import { useCallback, useEffect } from 'react'

type NativeImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export type UseImageProps = {
  src?: string | null
  onLoad?: NativeImageProps['onLoad']
  onError?: NativeImageProps['onError']
}

type ImageEvent = React.SyntheticEvent<HTMLImageElement, Event>

export const useImage = ({ src, onLoad, onError }: UseImageProps) => {
  const load = useCallback(() => {
    if (!src) return

    const img = new Image()
    img.src = src

    img.onload = (event) => {
      onLoad?.(event as unknown as ImageEvent)
    }

    img.onerror = (error) => {
      onError?.(error as unknown as ImageEvent)
    }
  }, [src, onLoad, onError])

  useEffect(() => {
    if (src) {
      load()
    }
  }, [load, src])
}
