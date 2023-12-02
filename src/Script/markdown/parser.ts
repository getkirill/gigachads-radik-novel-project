import { remark } from "remark";
import Script from "../../Types/Script";
import { Paragraph, Root, RootContent } from "mdast";
import { SayStatement } from "../../Types/Script/SayStatement";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

// todo: use unified
const md = remark()
const mdastToHtml = (children: Root) => toHtml(toHast(children))

export function parseMarkdownToScript(markdown: string): Script {
    const ast = md.parse(markdown)
    console.log({...ast})
    const paragraphs = ast.children.filter(x => x.type == "paragraph").map(x => x as Paragraph)
    return new Script(paragraphs.map(x => {
        console.log(x)
        const name = x.children[0].type == "inlineCode" ? x.children[0].value : null;
        if(x.children[0].type == "inlineCode") x.children.splice(0, 1);
        const whatHeSays = mdastToHtml({type: "root", children: [x]});
        return new SayStatement(name || "", whatHeSays)
    }))
}