import { hydrateSettings, settings, watchSettings } from "../settings.ts";

function replaceURL(old: URL, id: string) {
  const newUrl = new URL(old);
  newUrl.pathname = "/watch";
  newUrl.search = `?v=${id}`;

  queueMicrotask(() => {
    location.replace(newUrl);
  });
}

function handleURLChange(currentUrl: URL) {
  const paths = currentUrl.pathname.split("/").slice(1);
  const id = paths[1];

  if (paths[0] === "shorts" && id) {
    replaceURL(currentUrl, id);
  }
}

export default defineContentScript({
  matches: ["*://*.youtube.com/*"],
  async main(context) {
    hydrateSettings();
    watchSettings();

    context.addEventListener(window, "wxt:locationchange", (event) => {
      if (settings.enabled) {
        handleURLChange(event.newUrl);
      }
    });

    // trigger for the first time
    if (settings.enabled) {
      handleURLChange(new URL(location.href));
    }
  },
});
