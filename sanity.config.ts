import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schema";

export default defineConfig({
  name: "default",
  title: "adistg-therapy",
  projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_SANITY_DATASET,
  plugins: [deskTool(), visionTool()],
  schema,
});
