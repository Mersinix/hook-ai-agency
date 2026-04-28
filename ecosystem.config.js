module.exports = {
  apps: [
    {
      name: "hook-api",
      cwd: ".",
      script: "npm",
      args: "run start:api",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
    {
      name: "hook-web",
      cwd: ".",
      script: "npm",
      args: "run start:web",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
        HOSTNAME: "0.0.0.0",
        NEXT_PUBLIC_API_URL: "/api",
      },
    },
  ],
};
