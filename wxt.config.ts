import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src/",
  outDir: "dist/",
  manifest: {
    name: "Redirect Shorts on Youtube",
    // permissions: ["webNavigation"],
    browser_specific_settings: {
      gecko: {
        id: "redirect-shorts-youtube@up9t.com",
        data_collection_permissions: {
          required: ["none"], 
        }
      },
    }
  }
});
