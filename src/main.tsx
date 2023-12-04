import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import {Provider} from "react-redux";
import store from "./Store";
import script from './Script'
import { textToMarkdown } from "./Script/markdown/parser";

console.log(textToMarkdown.process(`
+++
layout = "solar-system"
+++

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
