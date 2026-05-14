import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, referrerPolicy, loading, decoding, ...rest } = props

  const srcStr = typeof src === 'string' ? src : ''
  const isRemote = /^https?:\/\//i.test(srcStr)
  const resolvedReferrerPolicy =
    referrerPolicy ?? (isRemote ? 'no-referrer' : undefined)
  const resolvedLoading = loading ?? 'lazy'
  const resolvedDecoding = decoding ?? 'async'

  return didError ? (
    <div
      className={`flex h-full min-h-0 w-full items-center justify-center bg-gray-100 text-center ${className ?? ''}`}
      style={style}
    >
      <img
        src={ERROR_IMG_SRC}
        alt=""
        role="presentation"
        className="h-16 w-16 opacity-40"
        {...rest}
        data-original-url={src}
      />
    </div>
  ) : (
    <img
      {...rest}
      src={src}
      alt={alt}
      className={className}
      style={style}
      referrerPolicy={resolvedReferrerPolicy}
      loading={resolvedLoading}
      decoding={resolvedDecoding}
      onError={handleError}
    />
  )
}
