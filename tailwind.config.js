// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            gradient: {
              from: '#8B5CF6', // purple-600
              to: '#2563EB', // blue-600
            },
          },
          background: {
            gradient: {
              from: '#FDF2F8', // pink-50
              to: '#EFF6FF', // blue-50
            },
          },
          text: {
            body: '#4B5563', // gray-600
          },
        },
      },
    },
    plugins: [],
  }
  