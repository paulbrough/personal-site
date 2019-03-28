import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

// moragaTheme.baseFontSize = "16px"
// moragaTheme.bodyWeight = "400"
// moragaTheme.headerWeight = "300"
// moragaTheme.bodyColor = "#222222"
// console.log(moragaTheme)
moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'h2,h3': {
        marginBottom: rhythm(1 / 2),
    }
})

const typography = new Typography(moragaTheme)



export const { scale, rhythm, options } = typography
export default typography