import { projects } from '../data'
import { Hero } from '../components/home/Hero'
import { PageShell } from '../components/layout/PageShell'
import { Section } from '../components/layout/Section'
import { ProjectCard } from '../components/projects/ProjectCard'
import { ActionLink } from '../components/ui/ActionLink'

/**
 * A summary, not a duplicate. The hero and the two projects with the widest
 * range; everything else has its own page, which keeps this one short enough
 * to actually read to the end.
 */
export function HomePage() {
  const featured = projects.slice(0, 2)

  return (
    <PageShell>
      <Hero />

      <Section id="featured" index="01" title="Selected work">
        <div className="grid gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>

        <div className="mt-8">
          <ActionLink to="/projects" withArrow>
            All projects
          </ActionLink>
        </div>
      </Section>

      <Section id="next" index="02" title="Next">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-lg font-display text-2xl leading-snug text-cream-100">
            Looking for someone who can take a project from database schema to
            deployed interface?
          </p>
          <ActionLink to="/contact" variant="primary" withArrow>
            Get in touch
          </ActionLink>
        </div>
      </Section>
    </PageShell>
  )
}
