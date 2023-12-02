import {SayStatement} from "../Types/Script/SayStatement.ts";
import Script from "../Types/Script";
import { parseMarkdownToScript } from "./markdown/parser.ts";

export default {
	// "start": new Script([
	// 	new SayStatement("Рита", "Привет"),
	// 	new SayStatement("", "Привет"),
	// 	new SayStatement("Рита", "Привет!"),
	// 	new SayStatement("", "Привет!"),
	// 	new SayStatement("Рита", "Привет?"),
	// 	new SayStatement("", "Привет?"),
	// 	new SayStatement("Рита", "Привет :D"),
	// 	new SayStatement("", "Привет :D"),
	// ])
	"start": parseMarkdownToScript(`\`Рита\` Привет

Привет

\`Рита\` Привет!

Привет!

\`Рита\` Привет?

Привет?

\`Рита\` Привет :D

Привет :D

\`evil Рита\` Не привет >:(
	
:(
`)
}