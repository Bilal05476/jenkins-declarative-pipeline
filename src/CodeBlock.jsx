import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ desc, code, text, img, indx }) => {
  return (
    <div className="codeblock">
      <strong>💡 Step {indx + 1}</strong>
      <p>{desc}</p>
      {code && (
        <div style={{ marginBottom: "1rem" }}>
          <p>👨🏻‍💻 {text}</p>
          <SyntaxHighlighter
            language={"cmd"}
            wrapLongLines={true}
            style={stackoverflowDark}
            customStyle={{
              borderRadius: "5px",
              boxShadow: "0.2rem 0.2rem 0.5rem #333",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
      {img.length > 0 && (
        <div>
          {img.map((item) => (
            <div className="imagecontainer">
              <img src={item.src} alt={item.alt} />
              <br />
              <small>📷 {item.alt}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
