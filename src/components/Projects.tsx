import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/ProjectsStyles.css';

import iphonePhoto1 from '../assets/iphone_photo1.svg';
import iphonePhoto2 from '../assets/iphone_photo2.svg';
import visualizeLogo from '../assets/VisualizeLogo.svg';
import visualizeModalCover from '../assets/VisualizeBackground.svg';

import motionLabPhoto1 from '../assets/MotionLab_Photo1.svg';
import motionLabPhoto2 from '../assets/MotionLab_Photo2.svg';

import employeePhoto1 from '../assets/EmployeeSystem_Photo1.png';
import employeePhoto2 from '../assets/EmployeeSystem_Photo2.png';

import mathcraftPhoto1 from '../assets/MathCraft_Photo1.png';
import mathcraftPhoto2 from '../assets/MathCraft_Photo2.png';

type Project = {
  title: string;
  period: string;
  description: string;
  longDescription: string;
  features?: { title: string; description: string }[];
  tags: string[];
  imageUrl?: string;
  cardImageUrl?: string;
  logoUrl?: string;
  mobileVideo?: string;
  gallery?: string[];
  href?: string;
  showcaseType?: 'mobile' | 'tablet' | 'desktop';
};

const PROJECTS: Project[] = [
  {
    title: 'MathCraft',
    period: 'Jul 2026 — Present',
    description:
      'An AI-powered full-stack web platform for streamlining mathematical content creation for secondary mathematics educators.',
    longDescription:
      'Developed during a Mitacs Globalink Research Internship at McGill University, with an additional month-long extension to continue development of the project. MathCraft streamlines educational content creation for secondary mathematics teachers by integrating Large Language Models with mathematical verification engines. The platform supports end-to-end workflows for generating, reviewing, editing, and refining problems, with LaTeX formatting and automated document export.',
    features: [
      {
        title: 'AI Problem Generation',
        description:
          'Uses Google Gemini to generate tailored mathematical problems and instructional materials based on teacher-defined pedagogical needs.',
      },
      {
        title: 'Mathematical Verification',
        description:
          'Integrates SymPy and Wolfram to verify AI-generated solutions, expressions, and formulas.',
      },
      {
        title: 'Native LaTeX Rendering',
        description:
          'Supports mathematical notation throughout the platform using KaTeX.',
      },
      {
        title: 'Automated Document Exports',
        description:
          'Exports finalized problem sets and answer keys as editable .docx files for classroom use.',
      },
      {
        title: 'Interactive Review Workflows',
        description:
          'Provides tools for educators to review, edit, and refine generated content before finalizing it.',
      },
      {
        title: 'Scalable Architecture',
        description:
          'Built with a Django and Supabase backend and a React and TypeScript frontend.',
      },
    ],
    tags: ['Django', 'React', 'TypeScript', 'Supabase', 'Python', 'LLMs'],
    href: 'https://github.com/CREATE-Lab-McGill/GenAI_26',
    gallery: [
      'https://res.cloudinary.com/ukynoggq/video/upload/v1790486706/MathCraft_VideoGenerator.mp4',
      mathcraftPhoto1,
      mathcraftPhoto2,
      'https://res.cloudinary.com/ukynoggq/video/upload/v1790487225/MathCraft_VideoResult.mp4',
    ],
    showcaseType: 'desktop',
  },
  {
    title: 'Visualize (Oracle Collaboration)',
    period: 'Feb 2026 — Jun 2026',
    description:
      'A collaborative iOS platform for AI-powered data visualization, developed in collaboration with Oracle.',
    longDescription:
      'Worked as iOS Tech Lead on an 11-person team in collaboration with Oracle. Contributed to the development of the platform’s core features, including authentication, team creation, data visualization generation, and app-wide navigation using a Coordinator pattern.',
    features: [
      {
        title: 'Secure Authentication',
        description:
          'Implemented an email and password authentication flow with secure session handling.',
      },
      {
        title: 'Personal & Shared Feeds',
        description:
          'Supported separate views for personal visualizations and visualizations shared with the team.',
      },
      {
        title: 'CSV & XLSX Uploads',
        description:
          'Enabled users to upload datasets and generate visualizations from their files.',
      },
      {
        title: 'AI Chart Recommendations',
        description:
          'Generated chart-type recommendations based on the structure of uploaded datasets.',
      },
      {
        title: '8 Interactive Chart Types',
        description:
          'Supported interactive charts with zooming, panning, and tooltips for data exploration.',
      },
      {
        title: 'Snipping Tool',
        description:
          'Added tools to crop and annotate sections of visualizations for sharing.',
      },
      {
        title: 'Collaborative Threads',
        description:
          'Enabled users to comment directly on visualizations and discuss findings with their team.',
      },
      {
        title: 'Notifications & Themes',
        description:
          'Added a notification center and customizable themes for the application.',
      },
    ],
    tags: ['SwiftUI', 'Swift', 'Firebase'],
    href: 'https://github.com/libiazflores/visualize-ios',
    cardImageUrl: visualizeLogo,
    logoUrl: visualizeModalCover,
    mobileVideo: 'https://res.cloudinary.com/ukynoggq/video/upload/v1790486714/Visualize_Video.mp4',
    gallery: [iphonePhoto1, iphonePhoto2, iphonePhoto1],
    showcaseType: 'mobile',
  },
  {
    title: 'MotionLab',
    period: 'Feb 2025 — Dec 2025',
    description:
      'A full-stack interactive physics simulator designed to make learning more hands-on and engaging.',
    longDescription:
      'Worked as part of a development team, leading frontend development and team coordination for this platform. The project received the "Best Software Prototype" award at Expo Ingenierías. The platform uses gamified features such as team lobbies and competitive leaderboards, while providing instructors with performance analytics and data visualization tools.',
    features: [
      {
        title: 'Interactive Physics Simulation',
        description:
          'Allows students to run real-time car simulations by adjusting variables such as mass and engine power.',
      },
      {
        title: 'Custom Session Lobbies',
        description:
          'Supports organized student sessions through personalized lobbies with unique access codes.',
      },
      {
        title: 'Performance Analytics Dashboard',
        description:
          'Displays individual and group performance metrics, including success rates, completion times, and scores.',
      },
      {
        title: 'Role-Based Interfaces',
        description:
          'Provides dedicated interfaces for students and instructors based on their respective workflows.',
      },
      {
        title: 'Live Progress Monitoring',
        description:
          'Tracks student activity, simulation results, and engagement metrics during sessions.',
      },
      {
        title: 'Configurable Constraints',
        description:
          'Allows instructors to adjust simulation parameters according to specific learning objectives.',
      },
    ],
    tags: [
      'React',
      'Bootstrap',
      'Tailwind CSS',
      'Express',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
    ],
    href: 'https://github.com/libiazflores/motionlab-fullstack',
    gallery: [
      'https://res.cloudinary.com/ukynoggq/video/upload/v1790486700/MotionLab_VideoStudent.mp4',
      motionLabPhoto1,
      motionLabPhoto2,
      'https://res.cloudinary.com/ukynoggq/video/upload/v1790486698/MotionLab_VideoTeacher.mp4',
    ],
    showcaseType: 'tablet',
  },
  {
    title: 'Employee Records Management System',
    period: 'Sep 2025 — Dec 2025',
    description:
      'A scalable, secure web-based HR platform developed to replace physical employee files for a public children’s hospital.',
    longDescription:
      'Worked as part of a development team to build the frontend of a secure HR platform serving approximately 1,400 employees. The project received 1st Place for Best Project at Expo Ingenierías. Built with React, TypeScript, and Tailwind CSS, the platform consumes REST APIs for employee ID validation, document uploads, and OCR integration to streamline administrative processes.',
    features: [
      {
        title: 'Automated OCR Integration',
        description:
          'Supports text extraction from scanned documents and images for faster data entry.',
      },
      {
        title: 'Secure NAS Storage',
        description:
          'Supports validated file uploads and secure retrieval of sensitive employee documents.',
      },
      {
        title: 'Advanced Authentication & 2FA',
        description:
          'Includes two-factor authentication, automatic account lockouts, and JWT-based session management.',
      },
      {
        title: 'Granular Role-Based Access',
        description:
          'Separates permissions and platform access between Administrator and Collaborator roles.',
      },
      {
        title: 'Automated Audit Logging',
        description:
          'Tracks changes to employee records and uploaded documents for improved traceability.',
      },
      {
        title: 'Document Approval Workflows',
        description:
          'Allows administrators to review, approve, or reject uploaded documents.',
      },
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    href: 'https://github.com/libiazflores/hies-frontend',
    gallery: [
      'https://res.cloudinary.com/ukynoggq/video/upload/v1790486677/EmployeeSystem_VideoAdmin.mp4',
      employeePhoto1,
      employeePhoto2,
      'https://res.cloudinary.com/ukynoggq/video/upload/v1790486658/EmployeeSystem_VideoPersonal.mp4',
    ],
    showcaseType: 'desktop',
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 500);
  };

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <section
      className="projects"
      id="projects"
      style={{ zIndex: selectedProject ? 999 : 1 }}
    >
      <div className="projects-header">
        <h2 className="section-title">Experience & Projects</h2>
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <div className="projects-footer">
        <button
          className="see-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'See More Projects'}
        </button>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleClose}>
          <div
            className={`modal-content ${isClosing ? 'is-closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={handleClose}>
              ×
            </button>

            <div className="modal-body">
              <span className="modal-period">
                {selectedProject.period}
              </span>

              <h3 className="modal-project-title">
                {selectedProject.title}
              </h3>

              <div className="project-tags">
                {selectedProject.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="modal-description">
                {selectedProject.longDescription}
              </p>

              {selectedProject.showcaseType === 'mobile' &&
                (selectedProject.mobileVideo || selectedProject.gallery) && (
                  <div className="modal-showcase mobile-showcase">
                    {selectedProject.gallery?.[0] && (
                      <div className="showcase-item showcase-side showcase-left">
                        <img
                          src={selectedProject.gallery[0]}
                          alt="screenshot 1"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {selectedProject.mobileVideo && (
                      <div className="showcase-item showcase-video">
                        <video
                          src={selectedProject.mobileVideo}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    )}

                    {selectedProject.gallery?.[1] && (
                      <div className="showcase-item showcase-side showcase-right">
                        <img
                          src={selectedProject.gallery[1]}
                          alt="screenshot 2"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                )}

              {selectedProject.showcaseType === 'tablet' &&
                selectedProject.gallery &&
                selectedProject.gallery.length > 0 && (
                  <div className="modal-showcase tablet-showcase">
                    {selectedProject.gallery.map((mediaUrl, index) => {
                      const isVideo = mediaUrl
                        .toLowerCase()
                        .endsWith('.mp4');

                      return (
                        <div
                          className="tablet-showcase-item"
                          key={index}
                        >
                          {isVideo ? (
                            <video
                              src={mediaUrl}
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                          ) : (
                            <img
                              src={mediaUrl}
                              alt={`${selectedProject.title} media ${index}`}
                              loading="lazy"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

              {selectedProject.showcaseType === 'desktop' &&
                selectedProject.gallery &&
                selectedProject.gallery.length > 0 && (
                  <div className="modal-showcase desktop-showcase">
                    {selectedProject.gallery.map((mediaUrl, index) => {
                      const isVideo = mediaUrl
                        .toLowerCase()
                        .endsWith('.mp4');

                      return (
                        <div
                          className="desktop-window"
                          key={index}
                        >
                          <div className="desktop-window-header">
                            <span className="dot dot-close"></span>
                            <span className="dot dot-min"></span>
                            <span className="dot dot-max"></span>
                          </div>

                          <div className="desktop-window-body">
                            {isVideo ? (
                              <video
                                src={mediaUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                              />
                            ) : (
                              <img
                                src={mediaUrl}
                                alt={`${selectedProject.title} media ${index}`}
                                loading="lazy"
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

              {selectedProject.features && (
                <div className="modal-features">
                  <h4>Key Features</h4>

                  <div className="features-grid">
                    {selectedProject.features.map((feat, i) => (
                      <div className="feature-item" key={i}>
                        <span className="feature-title">
                          {feat.title}
                        </span>

                        <span className="feature-description">
                          {feat.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.href && (
                <div className="modal-footer-action">
                  <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-link-btn"
                  >
                    View On GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

