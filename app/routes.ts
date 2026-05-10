import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/MainLayout.tsx", [
    route("/", "routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/features", "routes/features.tsx"),
    route("/contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
