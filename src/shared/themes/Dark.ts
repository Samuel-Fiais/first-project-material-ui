import { createTheme } from '@mui/material'
import { cyan, purple } from '@mui/material/colors'

export const DarkTheme = createTheme({
	palette: {
		primary: {
			main: purple[700],
			dark: purple[800],
			light: purple[500],
			contrastText: '#FFF',
		},
		secondary: {
			main: cyan[700],
			dark: cyan[800],
			light: cyan[500],
			contrastText: '#FFF',
		},
		background: {
			default: '#303134',
			paper: '#202124',
		}
	}
})
