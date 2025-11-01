import * as maptilerClient from '@maptiler/client';

const KEY = process.env.MAPTILER_API_KEY;
if (!KEY) {
  console.warn('MAPTILER_API_KEY not set; geocoding will fail.');
}

// Configure the client if config exists
if (maptilerClient.config) {
  maptilerClient.config.apiKey = KEY || '';
}

export async function geocodeForward(query) {
  if (!query) return null;
  if (!KEY) return null;
  try {
    const res = await maptilerClient.geocoding.forward(query, { limit: 1 });
    if (!res || !Array.isArray(res.features) || res.features.length === 0) return null;
    return res.features[0].geometry;
  } catch (e) {
    console.error('Geocoding error:', e);
    return null;
  }
}
