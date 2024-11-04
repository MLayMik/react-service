// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'react-dom/no-missing-button-type': 'off',
  },
})
