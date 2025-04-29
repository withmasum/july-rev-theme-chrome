const wallpapers = [
    'images/wallpaper1.png',
   
  ];
  
  function setTodayWallpaper() {
    const today = new Date();
    const index = today.getDate() % wallpapers.length;
    chrome.storage.local.set({ wallpaper: wallpapers[index] });
  }
  
  // Run when extension loads
  setTodayWallpaper();
  
  // Update every 24 hours
  chrome.alarms.create('updateWallpaper', { periodInMinutes: 1440 });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'updateWallpaper') {
      setTodayWallpaper();
    }
  });
  