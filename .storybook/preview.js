import GlobalStyles from '../src/styles/global'

export const decoratos = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
