module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: ['jest-canvas-mock'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!(html2canvas)/)'],
  watchPathIgnorePatterns: ['node_modules'],
  snapshotSerializers: ['jest-serializer-vue'],
  coverageDirectory: './coverage',
  coverageReporters: ['text']
};
