/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  pwa: {
    manifestOptions: {
      name: 'Animal Crossing: Character Maker',
      short_name: 'AC: Char Maker',
      description: 'Create your animal crossing character! Built with Vue 3',
      background_color: '#eceed6',
      start_url: 'index.html'
    },
    themeColor: '#49dbc6',
    msTileColor: '#49dbc6',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
};
