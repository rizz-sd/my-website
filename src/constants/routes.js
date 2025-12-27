// Centralized route definitions for easy management and extensibility
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CERTIFICATIONS: '/certifications',
  CONTACT: '/contact',
  NOT_FOUND: '*'
};

// Navigation items configuration
export const NAVIGATION_ITEMS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About Me', path: ROUTES.ABOUT },
  { label: 'Projects', path: ROUTES.PROJECTS },
  { label: 'Certifications', path: ROUTES.CERTIFICATIONS },
  { label: 'Contact', path: ROUTES.CONTACT }
];
