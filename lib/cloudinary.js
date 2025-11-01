import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Bridge to existing CommonJS cloudinary/index.js
const { cloudinary, storage } = require('../cloudinary');

export { cloudinary, storage };
