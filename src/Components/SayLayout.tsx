import './SayLayout.scss'
import {LayoutProps} from "../Types/Props.ts";
import {SayStatement} from "../Types/Script/SayStatement.ts";

function SayLayout({onClick, scriptable}: LayoutProps) {
	let buttons = [{
		icon: "",
		action: () => {
		},
	}]
	let say = scriptable as SayStatement

	return (
		<div className="say" onClick={() => onClick("0")}>
			<img src="/Rita.png" alt="" className="img center"/>
			<div className="phrase">
				{say.author && (say.author.name != undefined && say.author.name != "") && <div className="author">
					{say.author.name}
				</div>}
				<div className="text">
					{say.expression}
				</div>
				<div className="buttons">
					{buttons.map(b => <div className="button" key={b.icon}>{b.icon}</div>)}
				</div>
			</div>
		</div>
	)
}

export default SayLayout