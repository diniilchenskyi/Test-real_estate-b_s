'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/properties-data'

type PropertyCardProps = {
  property: Property
  /** `tilt` — perspective + hover (сторінка Properties); `flat` — статична картка (головна). */
  variant?: 'flat' | 'tilt'
}

function PropertyCardInner({ property, variant }: { property: Property; variant: 'flat' | 'tilt' }) {
  return (
    <Card
      className={cn(
        'overflow-hidden bg-gray-700/50 border border-gray-600 transition-colors',
        variant === 'tilt' && 'group-[.property-card-tilt]:group-hover:border-be-accent/40'
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          width={400}
          height={200}
          className={cn(
            'w-full h-full object-cover',
            variant === 'tilt' && 'transition-transform duration-700 group-[.property-card-tilt]:group-hover:scale-105'
          )}
        />
        {variant === 'tilt' && (
          <div className="absolute inset-0 bg-gradient-to-t from-be-surface-deep/80 to-transparent opacity-80 pointer-events-none" />
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-white">{property.title}</h3>
        <p className="text-sm text-gray-300 mt-1">{property.location}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-be-accent font-bold">${property.price.toLocaleString()}</span>
          <span className="text-be-success">Expected ROI: {property.roi}%</span>
        </div>
        <Link href={`/property/${property.id}`} className="block mt-4">
          <Button className="w-full bg-be-accent hover:bg-be-accent-hover text-be-surface-deep font-semibold">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export function PropertyCard({ property, variant = 'flat' }: PropertyCardProps) {
  if (variant === 'tilt') {
    return (
      <div className="property-card-tilt group [perspective:1100px]">
        <div
          className={cn(
            'transform-gpu transition-all duration-500 ease-out will-change-transform',
            'group-hover:[transform:rotateX(5deg)_rotateY(-10deg)_translateZ(16px)]',
            'group-hover:shadow-[0_28px_56px_-12px_rgba(45,212,191,0.25)]'
          )}
        >
          <PropertyCardInner property={property} variant="tilt" />
        </div>
      </div>
    )
  }

  return <PropertyCardInner property={property} variant="flat" />
}
