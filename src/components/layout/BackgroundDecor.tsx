/**
 * Two fixed decorative layers behind everything: a warm glow anchored near the
 * top of the viewport, and film grain over the whole surface.
 *
 * Fixed rather than absolute so the glow stays put while the page scrolls —
 * it behaves like light falling on the page instead of an element travelling
 * with the content. Hidden from assistive tech and inert to the pointer.
 */
export function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-ink-950">
      <div className="absolute -top-64 left-1/2 h-[42rem] w-[68rem] -translate-x-1/2 rounded-full bg-gold-500/7 blur-[140px]" />
      <div className="bg-grain absolute inset-0 opacity-[0.04]" />
    </div>
  )
}
