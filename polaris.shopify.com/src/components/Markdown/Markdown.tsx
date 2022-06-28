import ReactMarkdown from "react-markdown";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import React from "react";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import classNames from "classnames";
import { slugify } from "../../utils/various";
import { MarkdownFile } from "../../types";

import QuickStartGuide from "../QuickStartGuide";

interface Props {
  text: string;
  skipH1?: boolean;
  frontMatter?: MarkdownFile["frontMatter"];
}

function Markdown({ text, skipH1, frontMatter }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { tablePipeAlign: true }]]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => {
          return skipH1 ? <></> : <h1>{children}</h1>;
        },
        h2: ({ children }) => {
          if (children.length === 1 && typeof children[0] === "string") {
            return <h2 id={slugify(children[0])}>{children}</h2>;
          } else {
            return <h2>{children}</h2>;
          }
        },
        h3: ({ children }) => {
          if (children.length === 1 && typeof children[0] === "string") {
            return <h3 id={slugify(children[0])}>{children}</h3>;
          } else {
            return <h3>{children}</h3>;
          }
        },
        code: ({ node, inline, className, children, ...props }) =>
          inline ? (
            <code>{children}</code>
          ) : (
            // Prism auto-wraps code blocks in <pre> and <code> tags
            <span
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  String(children),
                  Prism.languages.javascript,
                  "javasript"
                ),
              }}
            ></span>
          ),
        table: ({ children }) => {
          return frontMatter && frontMatter.quickGuide ? (
            <QuickStartGuide data={frontMatter.quickGuide} />
          ) : (
            <table>{children}</table>
          );
        },
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

export default Markdown;
