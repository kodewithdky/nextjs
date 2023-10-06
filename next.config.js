/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/user",
        destination: "/",
        permanent: false,
      },
      {
        source: "/user/:usrId",
        destination: "/",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
