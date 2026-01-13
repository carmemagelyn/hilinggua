import React, { useEffect, useState } from 'react';

const ArrowDownIcon = ({ color = "#fff57e" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: 8 }}>
    <path d="M12 16L6 10H18L12 16Z" fill={color}/>
  </svg>
);

const PWAInstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Listen for beforeinstallprompt event
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    // Listen for appinstalled event
    const installedHandler = () => {
      setIsInstalled(true);
    };
    window.addEventListener('appinstalled', installedHandler);

    // Check if already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    }
  };

  if (isInstalled || !deferredPrompt) return null;

  return (
    <button className="pwa-install-btn top-right" onClick={handleInstallClick}>
      <ArrowDownIcon color="#fff57e" /> Install App
    </button>
  );
};

export default PWAInstallButton;
