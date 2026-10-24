import { hydrateSettings, setSettings, settings, watchSettings } from "../../settings.ts";

const button = document.getElementById("enabler")!;
const status = document.getElementById("status")!;

function updateStatus() {
  status.innerText = settings.enabled ? "Enabled" : "Disabled";
}

async function toggleEnabled() {
  return setSettings({ ...settings, enabled: !settings.enabled });
}

function updateButton() {
  if (settings.enabled) {
    button.classList.add("off");
  } else {
    button.classList.remove("off");
  }
}

function handleOnClick() {
  toggleEnabled().then(() => {
    updateStatus();
    updateButton();
  });
}

button.addEventListener("click", handleOnClick);

hydrateSettings()
  .then(() => {
    console.info("Succeed hydrate settings");
    updateStatus();
    updateButton();
    watchSettings();
  })
  .catch((e) => {
    console.info("Succeed hydrate settings");
  });
