import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

// __dirname is available in Storybook's esbuild-register (CJS) context
// Three levels up from apps/storybook/.storybook/ → monorepo root → packages/ui/src
const uiSrc = path.resolve(__dirname, "../../../packages/ui/src");

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // Dynamic import keeps @tailwindcss/vite in the ESM domain (Vite context)
    // rather than requiring it synchronously through esbuild-register.
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          // Mirror packages/ui/tsconfig.json paths so Vite resolves @/* imports
          "@/lib": path.resolve(uiSrc, "lib"),
          "@/hooks": path.resolve(uiSrc, "hooks"),
          "@/components": path.resolve(uiSrc, "components"),
        },
      },
    });
  },
};

export default config;
