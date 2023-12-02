import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import {Provider} from "react-redux";
import store from "./Store";
import { parseMarkdownToScript } from "./Script/markdown/parser";
import script from './Script'

console.log(parseMarkdownToScript(`
\`r\` Hi!

\`h\` Hello!
`))
console.log(script)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
);
