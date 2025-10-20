//  const config = {
//   port: process.env.PORT || 5000,
//   nodeEnv: process.env.NODE_ENV || 'development',
//   jwtSecret: process.env.JWT_SECRET,
//   jwtExpire: process.env.JWT_EXPIRE || '30d',
//   mongodbUri: process.env.MONGODB_URI,
//   openaiApiKey: process.env.OPENAI_API_KEY,
//   githubClientId: process.env.GITHUB_CLIENT_ID,
//   githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
//   googleClientId: process.env.GOOGLE_CLIENT_ID,
//   googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
// };

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/careerforge',
  jwtSecret: process.env.JWT_SECRET || 'your-fallback-jwt-secret-change-in-production',
  jwtExpire: process.env.JWT_EXPIRE || '30d',
  openaiApiKey: process.env.OPENAI_API_KEY,
  githubClientId: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
};

// Validate required environment variables
if (!config.openaiApiKey) {
  console.warn('⚠️  OPENAI_API_KEY is not set - AI features will not work');
}

if (!config.jwtSecret || config.jwtSecret === 'your-fallback-jwt-secret-change-in-production') {
  console.warn('⚠️  JWT_SECRET is not set or using default - insecure for production');
}

module.exports = { config };