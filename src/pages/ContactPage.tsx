import { contactMethods, navRoutes } from '../data'
import { PageIntro } from '../components/layout/PageIntro'
import { PageShell } from '../components/layout/PageShell'
import { PageTitle } from '../components/layout/PageTitle'
import { Section } from '../components/layout/Section'
import { ActionLink } from '../components/ui/ActionLink'
import { Icon, type IconName } from '../components/ui/Icon'

const route = navRoutes.find((entry) => entry.path === '/contact')!

/** Both mail entries share the envelope; everything else maps one to one. */
const iconFor: Record<string, IconName> = {
  location: 'location',
  phone: 'phone',
  email: 'email',
  'email-alt': 'email',
  github: 'github',
  website: 'website',
}

export function ContactPage() {
  return (
    <PageShell>
      <PageTitle page="Contact" />


      <PageIntro eyebrow="Say hello" title="Contact" description={route.description} />

      <Section id="channels" index="01" title="Get in touch">
        <ul className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => {
            const body = (
              <>
                <span className="mt-0.5 text-gold-500">
                  <Icon name={iconFor[method.id] ?? 'website'} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="tracking-title block font-mono text-[0.65rem] uppercase text-cream-600">
                    {method.label}
                  </span>
                  <span className="mt-1 block truncate text-cream-100">
                    {method.display ?? method.value}
                  </span>
                </span>
              </>
            )

            const shell =
              'flex items-start gap-4 rounded-xl border border-ink-800 bg-ink-900/40 p-5'

            return (
              <li key={method.id}>
                {method.href ? (
                  <a
                    href={method.href}
                    // Only the two off-site links open in a new tab; mailto and
                    // tel should stay in place and hand off to the OS.
                    {...(method.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                    className={`${shell} transition-colors duration-200 hover:border-gold-600/40`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={shell}>{body}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Section>

      <Section id="resume" index="02" title="Résumé">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-ink-800 bg-ink-900/50 p-7 sm:p-8">
          <div>
            <h3 className="font-display text-xl text-cream-50">
              The same CV, as a PDF
            </h3>
            <p className="mt-2 max-w-md text-cream-400">
              One page, print-ready, in English — for anyone who would rather
              keep a copy than a bookmark.
            </p>
          </div>
          {/* Served straight from /public, so it is a real file the browser can
              download rather than something the app has to generate. */}
          <ActionLink to="/Harim_Duenas_CV.pdf" variant="primary" external withArrow>
            Download PDF
          </ActionLink>
        </div>
      </Section>
    </PageShell>
  )
}
