// Load environment variables FIRST - at the very top
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const compression = require('compression');

const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const { config } = require('./config/config');

// Import all routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const educationRoutes = require('./routes/educationRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const courseRoutes = require('./routes/courseRoutes');
const hackathonRoutes = require('./routes/hackathonRoutes');
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const aiRoutes = require('./routes/aiRoutes');

// Initialize Express app
const app = express();

// ============================================
// MIDDLEWARE SETUP
// ============================================

// Security middleware - Set security HTTP headers
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));

// Compression middleware - Compress responses
app.use(compression());

// CORS middleware - Enable Cross-Origin Resource Sharing
app.use(cors({
  origin: config.frontendUrl,
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parser middleware - Parse JSON and URL-encoded data
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// HTTP request logger middleware (development only)
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Rate limiting middleware - Protect against brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes.',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many requests from this IP, please try again after 15 minutes.',
    });
  },
});

// Apply rate limiting to all API routes
app.use('/api', limiter);

// Trust proxy (for deployment behind reverse proxy)
app.set('trust proxy', 1);

// ============================================
// API ROUTES
// ============================================

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to CareerForge API',
    version: '1.0.0',
    documentation: '/api',
    health: '/health',
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  res.status(200).json({
    success: true,
    message: 'Server is healthy and running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.nodeEnv,
    database: dbStatus,
    memory: {
      total: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)}MB`,
      used: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
    },
  });
});

// API documentation endpoint
app.get('/api', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'CareerForge API Documentation',
    version: '1.0.0',
    baseUrl: '/api',
    documentation: 'https://docs.careerforge.com',
    endpoints: {
      authentication: {
        register: {
          method: 'POST',
          path: '/api/auth/register',
          description: 'Register a new user',
          public: true,
        },
        login: {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Login user',
          public: true,
        },
        googleAuth: {
          method: 'POST',
          path: '/api/auth/google',
          description: 'Google OAuth authentication',
          public: true,
        },
        githubAuth: {
          method: 'POST',
          path: '/api/auth/github',
          description: 'GitHub OAuth authentication',
          public: true,
        },
        getMe: {
          method: 'GET',
          path: '/api/auth/me',
          description: 'Get current user',
          protected: true,
        },
        updatePassword: {
          method: 'PUT',
          path: '/api/auth/update-password',
          description: 'Update user password',
          protected: true,
        },
      },
      users: {
        getProfile: {
          method: 'GET',
          path: '/api/users/profile',
          description: 'Get user profile',
          protected: true,
        },
        updateProfile: {
          method: 'PUT',
          path: '/api/users/profile',
          description: 'Update user profile',
          protected: true,
        },
        getCompleteProfile: {
          method: 'GET',
          path: '/api/users/complete-profile',
          description: 'Get complete profile with all data',
          protected: true,
        },
        deleteAccount: {
          method: 'DELETE',
          path: '/api/users/account',
          description: 'Delete user account',
          protected: true,
        },
      },
      education: {
        getAll: {
          method: 'GET',
          path: '/api/education',
          description: 'Get all education entries',
          protected: true,
        },
        getOne: {
          method: 'GET',
          path: '/api/education/:id',
          description: 'Get single education entry',
          protected: true,
        },
        create: {
          method: 'POST',
          path: '/api/education',
          description: 'Create education entry',
          protected: true,
        },
        update: {
          method: 'PUT',
          path: '/api/education/:id',
          description: 'Update education entry',
          protected: true,
        },
        delete: {
          method: 'DELETE',
          path: '/api/education/:id',
          description: 'Delete education entry',
          protected: true,
        },
        bulkDelete: {
          method: 'DELETE',
          path: '/api/education/bulk',
          description: 'Bulk delete education entries',
          protected: true,
        },
      },
      experience: {
        getAll: {
          method: 'GET',
          path: '/api/experience',
          description: 'Get all experiences',
          protected: true,
        },
        create: {
          method: 'POST',
          path: '/api/experience',
          description: 'Create experience',
          protected: true,
        },
        update: {
          method: 'PUT',
          path: '/api/experience/:id',
          description: 'Update experience',
          protected: true,
        },
        delete: {
          method: 'DELETE',
          path: '/api/experience/:id',
          description: 'Delete experience',
          protected: true,
        },
      },
      internships: {
        getAll: {
          method: 'GET',
          path: '/api/internships',
          description: 'Get all internships',
          protected: true,
        },
        create: {
          method: 'POST',
          path: '/api/internships',
          description: 'Create internship',
          protected: true,
        },
        update: {
          method: 'PUT',
          path: '/api/internships/:id',
          description: 'Update internship',
          protected: true,
        },
        delete: {
          method: 'DELETE',
          path: '/api/internships/:id',
          description: 'Delete internship',
          protected: true,
        },
      },
      courses: {
        getAll: {
          method: 'GET',
          path: '/api/courses',
          description: 'Get all courses',
          protected: true,
        },
        create: {
          method: 'POST',
          path: '/api/courses',
          description: 'Create course',
          protected: true,
        },
        update: {
          method: 'PUT',
          path: '/api/courses/:id',
          description: 'Update course',
          protected: true,
        },
        delete: {
          method: 'DELETE',
          path: '/api/courses/:id',
          description: 'Delete course',
          protected: true,
        },
      },
      hackathons: {
        getAll: {
          method: 'GET',
          path: '/api/hackathons',
          description: 'Get all hackathons',
          protected: true,
        },
        create: {
          method: 'POST',
          path: '/api/hackathons',
          description: 'Create hackathon',
          protected: true,
        },
        update: {
          method: 'PUT',
          path: '/api/hackathons/:id',
          description: 'Update hackathon',
          protected: true,
        },
        delete: {
          method: 'DELETE',
          path: '/api/hackathons/:id',
          description: 'Delete hackathon',
          protected: true,
        },
      },
      projects: {
        getAll: {
          method: 'GET',
          path: '/api/projects',
          description: 'Get all projects',
          protected: true,
        },
        getOne: {
          method: 'GET',
          path: '/api/projects/:id',
          description: 'Get single project',
          protected: true,
        },
        create: {
          method: 'POST',
          path: '/api/projects',
          description: 'Create project',
          protected: true,
        },
        update: {
          method: 'PUT',
          path: '/api/projects/:id',
          description: 'Update project',
          protected: true,
        },
        delete: {
          method: 'DELETE',
          path: '/api/projects/:id',
          description: 'Delete project',
          protected: true,
        },
        importGithub: {
          method: 'POST',
          path: '/api/projects/import-github',
          description: 'Import projects from GitHub',
          protected: true,
        },
        stats: {
          method: 'GET',
          path: '/api/projects/stats',
          description: 'Get project statistics',
          protected: true,
        },
      },
      skills: {
        getAll: {
          method: 'GET',
          path: '/api/skills',
          description: 'Get all skills',
          protected: true,
        },
        create: {
          method: 'POST',
          path: '/api/skills',
          description: 'Create skill',
          protected: true,
        },
        update: {
          method: 'PUT',
          path: '/api/skills/:id',
          description: 'Update skill',
          protected: true,
        },
        delete: {
          method: 'DELETE',
          path: '/api/skills/:id',
          description: 'Delete skill',
          protected: true,
        },
      },
      resume: {
        get: {
          method: 'GET',
          path: '/api/resume',
          description: 'Get resume',
          protected: true,
        },
        update: {
          method: 'PUT',
          path: '/api/resume',
          description: 'Update resume',
          protected: true,
        },
        getComplete: {
          method: 'GET',
          path: '/api/resume/complete',
          description: 'Get complete resume with all data',
          protected: true,
        },
        incrementViews: {
          method: 'POST',
          path: '/api/resume/increment-views',
          description: 'Increment resume views',
          protected: true,
        },
      },
      ai: {
        generateSummary: {
          method: 'POST',
          path: '/api/ai/generate-summary',
          description: 'Generate AI-powered resume summary',
          protected: true,
        },
        enhanceDescription: {
          method: 'POST',
          path: '/api/ai/enhance-description',
          description: 'Enhance project description using AI',
          protected: true,
        },
      },
    },
  });
});

// Mount API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/hackathons', hackathonRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/ai', aiRoutes);

// ============================================
// ERROR HANDLING
// ============================================

// 404 Not Found handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

// ============================================
// PROCESS ERROR HANDLERS
// ============================================

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log('❌ UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  console.error(err);
  
  // Close server gracefully
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('❌ UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  console.error(err);
  
  process.exit(1);
});

// Graceful shutdown on SIGTERM
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully...');
  
  if (server) {
    server.close(() => {
      console.log('💥 Process terminated!');
    });
  } else {
    process.exit(0);
  }
});

// Graceful shutdown on SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log('\n👋 SIGINT RECEIVED. Shutting down gracefully...');
  
  if (server) {
    server.close(() => {
      console.log('💥 Process terminated!');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

// ============================================
// START SERVER
// ============================================

const PORT = config.port || 5000;
let server;

// Connect to database and start server
const startServer = async () => {
  try {
    console.log('🔄 Connecting to database...');
    await connectDB();
    
    server = app.listen(PORT, () => {
      console.log('\n' + '='.repeat(60));
      console.log('🚀 CareerForge API Server Started Successfully!');
      console.log('='.repeat(60));
      console.log(`📍 Environment: ${config.nodeEnv.toUpperCase()}`);
      console.log(`🔗 Server URL: http://localhost:${PORT}`);
      console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
      console.log(`❤️  Health Check: http://localhost:${PORT}/health`);
      console.log(`🌐 Frontend URL: ${config.frontendUrl}`);
      console.log(`📊 Database: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'}`);
      console.log(`🔑 OpenAI API Key: ${process.env.OPENAI_API_KEY ? 'Set' : 'NOT SET - AI features will not work'}`);
      console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
      console.log('='.repeat(60) + '\n');
      
      // Log available routes in development
      if (config.nodeEnv === 'development') {
        console.log('📋 Available Routes:');
        console.log('  - GET    /');
        console.log('  - GET    /health');
        console.log('  - GET    /api');
        console.log('  - POST   /api/auth/register');
        console.log('  - POST   /api/auth/login');
        console.log('  - GET    /api/auth/me');
        console.log('  - GET    /api/users/profile');
        console.log('  - GET    /api/education');
        console.log('  - GET    /api/experience');
        console.log('  - GET    /api/projects');
        console.log('  - GET    /api/resume/complete');
        console.log('  - POST   /api/ai/generate-summary');
        console.log('  ... and more (see /api for full documentation)\n');
      }
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer();

module.exports = app;