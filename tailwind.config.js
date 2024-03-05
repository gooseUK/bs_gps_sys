module.exports = {
  purge: [
    './apps/**/*.html',
    './assets/**/*.js',
    './assets/**/*.vue',
    './templates/**/*.html',
  ],
  safelist: ['alert-success', 'alert-info', 'alert-error', 'alert-warning'],
  theme: {
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
      colors: {
        bgColor: '#16161A',
        sidebarBorder: '#30303A',
        primary: '#EB7736',
        inactiveText: '#949494',
        chatBg: '#3F3F47',
        myChatBg: '#575764',
        messageBoxBg: '#212123',
        messageBoxBorder: '#3F3F47',
        profileBg: '#1B1B1F',
        profileBorder: '#6B6B71',
        badgeBg: '#632F12',
        badgeText: '#EB7736',
        brandOrange: '#EB7736',
        twitterBlue: '#1DA1F2',
      },
    },
    container: {
      center: true,
      // padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
