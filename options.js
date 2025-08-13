document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get({ hideComments: true, hideShorts: true }, (settings) => {
    document.getElementById('hideComments').checked = settings.hideComments;
    document.getElementById('hideShorts').checked = settings.hideShorts;
  });
});

document.getElementById('save').addEventListener('click', () => {
  const hideComments = document.getElementById('hideComments').checked;
  const hideShorts = document.getElementById('hideShorts').checked;
  chrome.storage.sync.set({ hideComments, hideShorts }, () => {
    alert('Settings saved! Refresh YouTube to apply.');
  });
});