export default {
  apps: [
    {
      name: "appointment api",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
