// Hide elements based on user settings
function hideElements(settings) {
  if (settings.hideComments) {
    document.querySelectorAll(`
      #comments,
      ytd-comments,
      ytd-comment-thread-renderer,
      ytd-comments-header-renderer,
      ytd-reel-comments-panel,
      ytd-shorts-engagement-panel
    `).forEach(el => el.style.display = "none");
  }

  if (settings.hideShorts) {
    document.querySelectorAll(`
      ytd-rich-shelf-renderer[is-shorts],
      ytd-reel-shelf-renderer,
      ytd-rich-grid-slim-media,
      ytd-reel-item-renderer,
      ytd-mini-guide-entry-renderer[aria-label*="Shorts"],
      #shorts-container,
      #shorts-player
    `).forEach(el => el.style.display = "none");
  }
}

// Load settings and apply
chrome.storage.sync.get({ hideComments: true, hideShorts: true }, (settings) => {
  hideElements(settings);
  // Watch for dynamic content changes
  const observer = new MutationObserver(() => hideElements(settings));
  observer.observe(document.body, { childList: true, subtree: true });
});