const getUserTheme = () => {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const userTheme = userPrefersDark ? 'dark' : 'light'

  return { userTheme }
}

export default getUserTheme
