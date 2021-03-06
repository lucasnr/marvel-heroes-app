import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		text: {
			primary: string;
			secondary: string;
		};
		colors: {
			primary: string;
		};
	}
}
