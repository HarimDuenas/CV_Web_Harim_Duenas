import { Route, Routes } from 'react-router'
import { RootLayout } from './components/layout/RootLayout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'

/**
 * The five routes advertised in `navRoutes`, wrapped in a pathless layout
 * route so they share one persistent frame. The catch-all sends unknown URLs
 * home rather than leaving a blank page — GitHub Pages serves this same app
 * for any path it does not recognise.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
