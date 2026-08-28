import { navRoutes, projects, sideProjects } from '../data'
import { PageIntro } from '../components/layout/PageIntro'
import { PageShell } from '../components/layout/PageShell'
import { PageTitle } from '../components/layout/PageTitle'
import { Section } from '../components/layout/Section'
import { ProjectCard } from '../components/projects/ProjectCard'

const route = navRoutes.find((entry) => entry.path === '/projects')!

export function ProjectsPage() {
  return (
    <PageShell>
      <PageTitle page="Projects" />


      <PageIntro eyebrow="Work" title="Projects" description={route.description} />

      <Section id="featured" index="01" title="Featured">
        <div className="grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section id="side-projects" index="02" title="Also built">
        <ul className="grid gap-4 sm:grid-cols-2">
          {sideProjects.map((project) => (
            <li
              key={project.id}
              className="rounded-xl border border-ink-800 bg-ink-900/40 p-6"
            >
              <h3 className="font-display text-lg text-cream-50">{project.name}</h3>
              <p className="mt-2 leading-relaxed text-cream-400">{project.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  )
}
