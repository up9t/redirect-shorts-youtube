const SETTINGS_KEY = "local:settings";

export interface Settings {
  enabled: boolean;
}

const defaultSettings: Readonly<Settings> = {
  enabled: true,
};

export function loadSettings() {
  return storage.getItem(SETTINGS_KEY, { fallback: defaultSettings });
}

export async function setSettings(settings: Settings) {
  await storage.setItem(SETTINGS_KEY, settings);
  await loadSettings();
}

/**
 * Should call `hydrateSettings` first
 */
export const settings: Readonly<Settings> = { ...defaultSettings };

/**
 * Should be called before using `settings`
 */
export async function hydrateSettings() {
  const load = await loadSettings();
  Object.assign(settings, load);
}

/**
 * Call this function if you want the `settings` variable to be automatically changed
 * when the value on the storage changed.
 */
export function watchSettings() {
  return storage.watch<Settings>(SETTINGS_KEY, (value) => {
    if (value !== null) {
      Object.assign(settings, value);
    }
  });
}
