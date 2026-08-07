export default defineContentScript({
  matches: ['*://*.youtube.com/*'],
  main() {
    function replaceURL(){
      const old = new URL(location.href);
      const paths = old.pathname.split("/").slice(1);
      const id = paths[1];

      if (paths[0] === "shorts" && id) {
        const newUrl = new URL(old)
        newUrl.pathname = "/watch";
        newUrl.search = `?v=${id}`;
        console.log("replacing url with a new one: ", newUrl);
        location.replace(newUrl)
      }
    }

    replaceURL();

    addEventListener("yt-navigate-start", () => {
      replaceURL();
    })
    addEventListener("yt-navigate-finish", () => {
      replaceURL();
    })
  },
});
