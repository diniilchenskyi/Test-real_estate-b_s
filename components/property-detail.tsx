'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { FractionalOwnershipSlider } from '@/components/fractional-ownership-slider'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getPropertyById } from '@/lib/properties-data'
import { PageSection } from '@/components/layout/page-section'

interface PropertyDetailProps {
  id: string
}

export function PropertyDetail({ id }: PropertyDetailProps) {
  const router = useRouter()
  const property = getPropertyById(id)

  if (!property) {
    return (
      <div className="min-h-screen bg-be-surface-deep text-gray-100 p-8">
        <h1 className="text-2xl font-bold text-white">Property not found</h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-be-surface-deep text-gray-100">
      <PageSection className="py-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-be-accent hover:text-be-accent-hover mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Properties
        </button>
        
        <Card className="overflow-hidden bg-gray-700/50 border-gray-600">
          <div className="relative h-96">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{property.title}</h1>
            <p className="text-xl text-gray-300 mb-4">{property.location}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-300">Price</h3>
                <p className="text-2xl font-bold text-be-accent">${property.price.toLocaleString()}</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-300">Expected ROI</h3>
                <p className="text-2xl font-bold text-be-success">{property.roi}%</p>
              </div>
            </div>

            <FractionalOwnershipSlider
              tokenPrice={100}
              totalTokens={property.price / 100}
              cryptoSymbol="ETH"
              cryptoPrice={2000}
            />

            <Button className="w-full mt-6 bg-be-accent hover:bg-be-accent-hover text-be-surface-deep font-semibold">
              Invest Now
            </Button>
          </CardContent>
        </Card>
      </PageSection>
    </div>
  )
} 