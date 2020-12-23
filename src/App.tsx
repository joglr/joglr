import { useEffect, useState } from "react";
import styled from "styled-components";
import { linkify } from "./util";

const Root = styled.div`
  box-sizing: border-box;
  display: grid;
  padding: 32px;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  a {
    color: inherit;
  }
`;

const Code = styled.code`
  white-space: pre-wrap;
`;

function App() {
  const readme = linkify(useReadme());

  return (
    <Root>
      <Code>
        <div
          dangerouslySetInnerHTML={{
            __html: readme,
          }}
        ></div>
      </Code>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {"🚀"}
      </div>
    </Root>
  );
}

function useReadme(): string {
  const [readme, setReadme] = useState<string>("");
  useEffect(() => {
    let canceled = false;

    async function get() {
      const response = await fetch(
        "https://raw.githubusercontent.com/joglr/joglr/master/README.md"
      );
      const result = await response.text();
      if (!canceled) setReadme(result);
    }
    get();

    return () => {
      canceled = true;
    };
  });
  return readme;
}

export default App;
