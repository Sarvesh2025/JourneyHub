import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Reuse existing CommonJS Mongoose models inside Next (ESM)
const Campground = require('../models/campground');
const Review = require('../models/review');
const User = require('../models/user');

export { Campground, Review, User };
