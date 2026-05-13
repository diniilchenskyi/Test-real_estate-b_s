'use client'

import React from 'react'
import { properties } from '@/lib/properties-data'
import { PropertyCard } from '@/components/properties/property-card'
import { CssBuildingShowcase } from '@/components/properties/css-building-showcase'
import { PageSection } from '@/components/layout/page-section'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-be-surface-deep text-gray-100">
      <PageSection className="py-12">
        <h1 className="text-3xl font-bold mb-2 text-white tracking-tight">Available Properties</h1>
        <p className="text-gray-400 mb-10 max-w-2xl">
          CSS 3D skyline preview, then hover any card for a perspective tilt before opening details.
        </p>

        <section className="mb-14 rounded-2xl border border-white/10 bg-be-surface/80 overflow-hidden shadow-[0_0_0_1px_rgba(45,212,191,0.08)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-5 py-4 border-b border-white/10 bg-be-surface-muted">
            <div>
              <h2 className="text-lg font-semibold text-white">3D showcase</h2>
              <p className="text-sm text-gray-400">
                Lightweight CSS 3D towers — stylized preview for high-rise listings (no third-party WebGL embed).
              </p>
            </div>
            <span className="text-xs uppercase tracking-wider text-be-accent font-medium">CSS · preserve-3d</span>
          </div>
          <CssBuildingShowcase />
        </section>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} variant="tilt" />
          ))}
        </div>
      </PageSection>
    </div>
  )
}
