import React, { useEffect, useState } from 'react';

const ArrowDownIcon = ({ color = "#fff57e" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: 8 }}>
    <path d="M12 16L6 10H18L12 16Z" fill={color}/>
  </svg>
);

const PWAInstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [noPromptReason, setNoPromptReason] = useState("");

  useEffect(() => {
    // Listen for beforeinstallprompt event
    const handler = (e) => {
      console.log('[PWAInstallButton] beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e);
      setNoPromptReason("");
    };
    window.addEventListener('beforeinstallprompt', handler);

    // Listen for appinstalled event
    const installedHandler = () => {
      console.log('[PWAInstallButton] appinstalled event fired');
      setIsInstalled(true);
    };
    window.addEventListener('appinstalled', installedHandler);

    // Check if already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true);
      setNoPromptReason('App is already installed.');
    } else {
      // If after a short delay, no beforeinstallprompt event, show a message
      setTimeout(() => {
        if (!deferredPrompt && !isInstalled) {
          let reason = 'Install prompt not available. ';
          if (window.location.protocol !== 'https:') {
            reason += 'App must be served over HTTPS or localhost. ';
          }
          reason += 'Check manifest and service worker registration. ';
          setNoPromptReason(reason);
        }
      }, 2000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, [deferredPrompt, isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.log('[PWAInstallButton] No deferredPrompt available');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`[PWAInstallButton] User choice: ${outcome}`);
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  if (isInstalled) return null;

  return (
    <>
      {deferredPrompt && !isInstalled && (
        <button className="pwa-install-btn top-right" onClick={handleInstallClick}>
          <ArrowDownIcon color="#fff57e" /> Install App
        </button>
      )}
      {!deferredPrompt && noPromptReason && !isInstalled && (
        <div
          className="pwa-install-unavailable"
          style={{ position: "fixed", top: 16, right: 16, zIndex: 9999, background: "rgba(255,245,126,0.95)", color: "#26ccc2", padding: "10px 18px", borderRadius: 8, fontWeight: 500, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        >
          <span role="img" aria-label="info">ℹ️</span> {noPromptReason}
        </div>
      )}
    </>
  );
};

export default PWAInstallButton;
