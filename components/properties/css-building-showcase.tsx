'use client'

import React from 'react'

type FaceProps = {
  className: string
  style: React.CSSProperties
}

function Face({ className, style }: FaceProps) {
  return <div className={className} style={style} />
}

function TowerBlock({ w, h, d, delayMs }: { w: number; h: number; d: number; delayMs: number }) {
  const halfW = w / 2
  const halfD = d / 2

  return (
    <div
      className="relative animate-block-pulse [transform-style:preserve-3d]"
      style={{
        width: w,
        height: h,
        animationDelay: `${delayMs}ms`,
      }}
    >
      <Face
        className="absolute bg-gradient-to-b from-be-accent/90 to-be-accent-hover/80 border border-white/10"
        style={{ width: w, height: h, transform: `translateZ(${halfD}px)` }}
      />
      <Face
        className="absolute bg-gradient-to-b from-be-accent-hover/50 to-be-surface-deep/90 border border-white/5"
        style={{ width: w, height: h, transform: `rotateY(180deg) translateZ(${halfD}px)` }}
      />
      <Face
        className="absolute bg-gradient-to-b from-be-accent/70 to-be-accent-hover/60"
        style={{
          width: d,
          height: h,
          left: halfW - halfD,
          transform: `rotateY(90deg) translateZ(${halfW}px)`,
        }}
      />
      <Face
        className="absolute bg-gradient-to-b from-be-accent-hover/40 to-be-surface-deep/80"
        style={{
          width: d,
          height: h,
          left: halfW - halfD,
          transform: `rotateY(-90deg) translateZ(${halfW}px)`,
        }}
      />
      <Face
        className="absolute bg-be-accent/90 border border-white/20 shadow-[0_0_20px_rgba(45,212,191,0.35)]"
        style={{
          width: w,
          height: d,
          top: -halfD,
          left: 0,
          transform: `rotateX(90deg) translateZ(${h}px)`,
        }}
      />
    </div>
  )
}

/** Абстрактні вежі — CSS 3D (`preserve-3d`), без зовнішніх embed. */
export function CssBuildingShowcase() {
  return (
    <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-b from-be-surface-deep via-be-surface to-be-surface-deep px-4 py-10">
      <div className="relative h-52 w-64 [perspective:900px]">
        <div className="absolute inset-0 flex items-end justify-center gap-3 [transform-style:preserve-3d] animate-tower-float">
          <TowerBlock w={52} h={90} d={52} delayMs={0} />
          <TowerBlock w={64} h={140} d={64} delayMs={150} />
          <TowerBlock w={48} h={72} d={48} delayMs={300} />
        </div>
        <div
          className="pointer-events-none absolute inset-x-8 bottom-6 h-8 rounded-[100%] bg-be-accent/15 blur-xl"
          style={{ transform: 'rotateX(75deg)' }}
        />
      </div>
    </div>
  )
}
