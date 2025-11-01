"use client";
import { useEffect, useRef } from 'react';

function ensureMaptilerLoaded() {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.maptilersdk) return resolve(window.maptilersdk);
    const cssId = 'maptiler-sdk-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.maptiler.com/maptiler-sdk-js/latest/maptiler-sdk.css';
      document.head.appendChild(link);
    }
    const scriptId = 'maptiler-sdk-script';
    if (document.getElementById(scriptId)) {
      const check = () => (window.maptilersdk ? resolve(window.maptilersdk) : setTimeout(check, 50));
      return check();
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://cdn.maptiler.com/maptiler-sdk-js/latest/maptiler-sdk.umd.min.js';
    script.onload = () => {
      if (window.maptilersdk) resolve(window.maptilersdk);
      else reject(new Error('Maptiler SDK failed to load'));
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default function MapView({ coordinates, title, location }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!coordinates || coordinates.length !== 2) return;
    let map;
    let marker;
    let popup;
    ensureMaptilerLoaded().then((sdk) => {
      sdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_KEY || process.env.MAPTILER_API_KEY || '';
      map = new sdk.Map({
        container: ref.current,
        style: sdk.MapStyle.BRIGHT,
        center: coordinates,
        zoom: 7
      });
      marker = new sdk.Marker().setLngLat(coordinates);
      if (title || location) {
        popup = new sdk.Popup({ offset: 25 }).setHTML(`<h6>${title ?? ''}</h6><p>${location ?? ''}</p>`);
        marker.setPopup(popup);
      }
      marker.addTo(map);
    });
    return () => {
      try { if (popup) popup.remove(); } catch {}
      try { if (marker) marker.remove(); } catch {}
      try { if (map) map.remove(); } catch {}
    };
  }, [coordinates, title, location]);

  return <div ref={ref} style={{ width: '100%', height: 360, borderRadius: 8, border: '1px solid #eee' }} />;
}
