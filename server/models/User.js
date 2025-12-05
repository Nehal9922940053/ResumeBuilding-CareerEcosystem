// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: [true, 'Please provide your full name'],
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Please provide your email'],
//     unique: true,
//     lowercase: true,
//     match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
//   },
//   password: {
//     type: String,
//     required: function() {
//       return !this.googleId && !this.githubId;
//     },
//     minlength: 6,
//     select: false,
//   },
//   googleId: {
//     type: String,
//     unique: true,
//     sparse: true,
//   },
//   githubId: {
//     type: String,
//     unique: true,
//     sparse: true,
//   },
//   githubUsername: String,
//   profileImage: String,
//   phone: String,
//   location: String,
//   website: String,
//   linkedin: String,
//   github: String,
//   bio: String,
//   role: {
//     type: String,
//     enum: ['user', 'admin'],
//     default: 'user',
//   },
//   isVerified: {
//     type: Boolean,
//     default: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Hash password before saving
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// // Compare password
// userSchema.methods.comparePassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // Update timestamp
// userSchema.pre('save', function(next) {
//   this.updatedAt = Date.now();
//   next();
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  password: {
    type: String,
    // Password is only required for non-OAuth users
    required: function() {
      return !this.googleId && !this.githubId;
    },
    minlength: [6, 'Password must be at least 6 characters'],
    select: false, // Don't return password in queries by default
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true, // Allows null values while maintaining uniqueness
  },
  githubId: {
    type: String,
    unique: true,
    sparse: true,
  },
  githubUsername: {
    type: String,
    sparse: true,
  },
  profileImage: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  website: {
    type: String,
    default: null,
  },
  linkedin: {
    type: String,
    default: null,
  },
  github: {
    type: String,
    default: null,
  },
  bio: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordExpire: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
});

// Hash password before saving (only if password is modified and exists)
userSchema.pre('save', async function(next) {
  // Skip if password is not modified or doesn't exist (OAuth users)
  if (!this.isModified('password') || !this.password) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(enteredPassword) {
  // If user doesn't have a password (OAuth user), return false
  if (!this.password) {
    return false;
  }
  
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    return false;
  }
};

// Method to check if user is OAuth user
userSchema.methods.isOAuthUser = function() {
  return !!(this.googleId || this.githubId);
};

// Method to check if user has password set
userSchema.methods.hasPassword = function() {
  return !!this.password;
};

// Method to get public profile (excluding sensitive data)
userSchema.methods.getPublicProfile = function() {
  return {
    id: this._id,
    fullName: this.fullName,
    email: this.email,
    profileImage: this.profileImage,
    role: this.role,
    phone: this.phone,
    location: this.location,
    website: this.website,
    linkedin: this.linkedin,
    github: this.github,
    bio: this.bio,
    isVerified: this.isVerified,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

// Index for faster queries
userSchema.index({ email: 1 });
userSchema.index({ googleId: 1 });
userSchema.index({ githubId: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;