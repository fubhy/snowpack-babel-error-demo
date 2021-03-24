module.exports = {
  mount: {
    public: { static: true, url: '/' },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-babel',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
  ],
};
