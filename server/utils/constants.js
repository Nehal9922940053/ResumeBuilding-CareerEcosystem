export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
};

// Employment Types
export const EMPLOYMENT_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship',
];

// Skill Categories
export const SKILL_CATEGORIES = [
  'Programming',
  'Framework',
  'Database',
  'Tool',
  'Soft Skill',
  'Language',
  'Other',
];

// Proficiency Levels
export const PROFICIENCY_LEVELS = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert',
];

// Course Platforms
export const COURSE_PLATFORMS = [
  'Coursera',
  'Udemy',
  'edX',
  'LinkedIn Learning',
  'Pluralsight',
  'Udacity',
  'Khan Academy',
  'freeCodeCamp',
  'Codecademy',
  'DataCamp',
  'Other',
];

// Internship Platforms
export const INTERNSHIP_PLATFORMS = [
  'Company',
  'InternShala',
  'LinkedIn',
  'Indeed',
  'Glassdoor',
  'AngelList',
  'Other',
];

// Hackathon Positions
export const HACKATHON_POSITIONS = [
  'Winner',
  'Runner-up',
  'Finalist',
  'Participant',
];

// Project Categories
export const PROJECT_CATEGORIES = [
  'Web',
  'Mobile',
  'Desktop',
  'AI/ML',
  'Data Science',
  'Blockchain',
  'IoT',
  'DevOps',
  'Cloud',
  'Game Development',
  'Security',
  'Other',
];

// Resume Templates
export const RESUME_TEMPLATES = [
  'professional',
  'creative',
  'minimal',
  'modern',
  'classic',
];

// User Roles
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  MODERATOR: 'moderator',
};

// Education Degrees
export const DEGREE_TYPES = [
  'High School',
  'Associate Degree',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'Doctorate (PhD)',
  'Professional Degree',
  'Certification',
  'Diploma',
];

// Programming Languages
export const PROGRAMMING_LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'C#',
  'Ruby',
  'PHP',
  'Swift',
  'Kotlin',
  'Go',
  'Rust',
  'Scala',
  'R',
  'SQL',
  'HTML',
  'CSS',
];

// Frameworks
export const FRAMEWORKS = [
  'React',
  'Angular',
  'Vue.js',
  'Node.js',
  'Express.js',
  'Django',
  'Flask',
  'Spring Boot',
  'Laravel',
  'Ruby on Rails',
  'ASP.NET',
  'Next.js',
  'Nuxt.js',
  'Gatsby',
  'Svelte',
];

// Databases
export const DATABASES = [
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'SQLite',
  'Redis',
  'Oracle',
  'Microsoft SQL Server',
  'Cassandra',
  'Firebase',
  'DynamoDB',
  'Elasticsearch',
];

// Cloud Platforms
export const CLOUD_PLATFORMS = [
  'AWS',
  'Google Cloud',
  'Microsoft Azure',
  'Heroku',
  'DigitalOcean',
  'Netlify',
  'Vercel',
  'Railway',
  'Render',
];

// DevOps Tools
export const DEVOPS_TOOLS = [
  'Docker',
  'Kubernetes',
  'Jenkins',
  'GitLab CI/CD',
  'GitHub Actions',
  'CircleCI',
  'Travis CI',
  'Terraform',
  'Ansible',
];

// Version Control
export const VERSION_CONTROL = [
  'Git',
  'GitHub',
  'GitLab',
  'Bitbucket',
  'SVN',
];

// Date Formats
export const DATE_FORMATS = {
  FULL: 'MMMM DD, YYYY',
  SHORT: 'MM/DD/YYYY',
  MONTH_YEAR: 'MMMM YYYY',
  ISO: 'YYYY-MM-DD',
};

// Pagination Defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

// File Upload Limits
export const FILE_LIMITS = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
};

// Validation Rules
export const VALIDATION_RULES = {
  MIN_PASSWORD_LENGTH: 6,
  MAX_PASSWORD_LENGTH: 128,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MAX_BIO_LENGTH: 500,
  MAX_DESCRIPTION_LENGTH: 2000,
  MAX_TITLE_LENGTH: 200,
};

// Error Messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'You are not authorized to perform this action',
  NOT_FOUND: 'Resource not found',
  VALIDATION_ERROR: 'Validation error',
  SERVER_ERROR: 'Internal server error',
  DUPLICATE_ENTRY: 'This entry already exists',
  INVALID_CREDENTIALS: 'Invalid email or password',
  TOKEN_EXPIRED: 'Your session has expired. Please login again',
  MISSING_FIELDS: 'Please provide all required fields',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CREATED: 'Resource created successfully',
  UPDATED: 'Resource updated successfully',
  DELETED: 'Resource deleted successfully',
  LOGIN_SUCCESS: 'Login successful',
  REGISTER_SUCCESS: 'Registration successful',
  LOGOUT_SUCCESS: 'Logout successful',
};

// API Rate Limiting
export const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 100,
};

// Token Expiry
export const TOKEN_EXPIRY = {
  ACCESS_TOKEN: '1d',
  REFRESH_TOKEN: '30d',
  RESET_PASSWORD_TOKEN: '1h',
  VERIFICATION_TOKEN: '24h',
};

// Regex Patterns
export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  PHONE: /^\+?[\d\s\-\(\)]+$/,
  GITHUB_URL: /^https?:\/\/(www\.)?github\.com\/[\w-]+$/,
  LINKEDIN_URL: /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+$/,
};

// Default Values
export const DEFAULTS = {
  PROFILE_IMAGE: '/assets/default-avatar.png',
  RESUME_TEMPLATE: 'professional',
  THEME_COLOR: '#2563eb',
  FONT_FAMILY: 'Inter',
};

// Time Constants
export const TIME = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
  WEEK: 7 * 24 * 60 * 60 * 1000,
  MONTH: 30 * 24 * 60 * 60 * 1000,
  YEAR: 365 * 24 * 60 * 60 * 1000,
};

// Environment
export const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  TEST: 'test',
  STAGING: 'staging',
};
