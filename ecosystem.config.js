module.exports = {
  apps: [
    {
      name: "seju-portfolio",
      script: "pnpm",
      args: "start",
      instance: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
