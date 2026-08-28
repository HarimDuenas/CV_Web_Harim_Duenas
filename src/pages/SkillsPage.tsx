import { navRoutes, skillGroups } from '../data'
import { PageIntro } from '../components/layout/PageIntro'
import { PageShell } from '../components/layout/PageShell'
import { Section } from '../components/layout/Section'
import { Tag } from '../components/ui/Tag'

const route = navRoutes.find((entry) => entry.path === '/skills')!

export function SkillsPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Toolkit" title="Skills" description={route.description} />

      <Section id="technical" index="01" title="Technical">
        <dl className="divide-y divide-ink-800/80">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <dt className="font-display text-lg text-cream-50">{group.label}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      {/* Quiet variant: eight rows of gold pills would turn the
                          accent into wallpaper and stop meaning anything. */}
                      <Tag variant="quiet">{item}</Tag>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </PageShell>
  )
}
