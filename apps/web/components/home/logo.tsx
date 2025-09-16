'use client'

import { logoFont } from '@/app/fonts'

export default function Logo() {
  return (
    <h1 className={`${logoFont.className} text-3xl text-gray-300 font-bold mt-3`}>
      POLYCLOUD
    </h1>
  )
}
