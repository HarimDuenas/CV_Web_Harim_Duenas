import { education, languages, navRoutes, profile, softSkills } from '../data'
import { PageIntro } from '../components/layout/PageIntro'
import { PageShell } from '../components/layout/PageShell'
import { Section } from '../components/layout/Section'

const route = navRoutes.find((entry) => entry.path === '/about')!

export function AboutPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Background" title="About" description={route.description} />

      <Section id="profile" index="01" title="Profile">
        <p className="max-w-3xl text-lg leading-relaxed text-cream-200">
          {profile.summary}
        </p>
      </Section>

      <Section id="education" index="02" title="Education">
        <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-7 sm:p-8">
          <h3 className="font-display text-2xl text-cream-50">{education.degree}</h3>
          <p className="mt-2 text-cream-200">{education.institution}</p>
          <p className="mt-1 text-cream-600">{education.location}</p>
          <p className="mt-5 font-mono text-sm text-gold-400">{education.status}</p>
        </div>
      </Section>

      <Section id="languages" index="03" title="Languages">
        <ul className="grid gap-4 sm:grid-cols-2">
          {languages.map((language) => (
            <li key={language.name} className="border-l border-ink-700 pl-5">
              <p className="font-display text-lg text-cream-50">
                {language.name}
                <span className="ml-3 font-mono text-sm text-gold-500">
                  {language.level}
                </span>
              </p>
              {language.detail ? (
                <p className="mt-1 text-sm text-cream-600">{language.detail}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="strengths" index="04" title="Strengths">
        <ul className="grid gap-5 sm:grid-cols-2">
          {softSkills.map((skill) => (
            <li
              key={skill.id}
              className="rounded-xl border border-ink-800 bg-ink-900/40 p-6"
            >
              <h3 className="font-display text-lg text-cream-50">{skill.label}</h3>
              {/* The evidence is the point of the section — a strength with no
                  work behind it is just an adjective. */}
              <p className="mt-3 leading-relaxed text-cream-400">{skill.evidence}</p>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  )
}
