/** @type {import('next').NextConfig} */
const nextConfig = {
  // redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/auth/login', // Replace with the desired destination path
  //       permanent: false, // Set to true for permanent redirection
  //     },
  //   ];
  // },
  redirects: async () => {
      return [
        {
          source: '/',
          destination: '/auth/login', // Replace with the desired destination path
          permanent: false, // Set to true for permanent redirection
        },
      ];
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig 

