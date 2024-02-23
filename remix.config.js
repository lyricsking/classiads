/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("", "home/layout.tsx", () => {
        route("", 'home/index.tsx', { index: true })
      });
      route("projects", "projects/layout.tsx", () => {
        route("", 'projects/index.tsx', { index: true}),
        route(":projectId", 'projects/project.tsx')
      });
    });
  },
};
