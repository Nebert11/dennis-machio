import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { WorkPage } from '@/pages/WorkPage';
import { StoryPage } from '@/pages/StoryPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { CompaniesPage } from '@/pages/CompaniesPage';
import { ContactPage } from '@/pages/ContactPage';
import { CaseStudyPage } from '@/components/CaseStudy';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/work/:id"
          element={<CaseStudyPage />}
        />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/story" element={<StoryPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
