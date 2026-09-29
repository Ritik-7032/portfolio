import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { BackgroundGlows } from './components/layout/BackgroundGlows';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/ui/Navbar';
import { ResumeModal } from './components/ui/ResumeModal';
import { Preloader } from './components/sections/Preloader';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { BeyondCodeSection } from './components/sections/BeyondCodeSection';
import { CodingProfileSection } from './components/sections/CodingProfileSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export function App() {
  useSmoothScroll();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Track active section for navbar indicator
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'achievements',
      'passions',
      'coding',
      'contact'
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      {/* 1. Cinematic Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Custom Trailing Glowing Cursor */}
      <CustomCursor />

      {/* 3. Ambient Dynamic Lighting & Noise Overlay */}
      <BackgroundGlows />

      {/* 4. Glassmorphism Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        onResumeOpen={() => setIsResumeOpen(true)} 
      />

      {/* 5. Interactive Full-Screen Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* 6. Main Portfolio Content Sections */}
      <main className="relative z-10">
        <HeroSection onResumeOpen={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <BeyondCodeSection />
        <CodingProfileSection />
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default App;
