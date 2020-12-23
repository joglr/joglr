import { useEffect, useState } from "react";
import styled from "styled-components";
import { linkify } from "./util";

const Root = styled.div`
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

const ContactInfo = styled.div`
  text-align: center;
`;

const Link = styled.a`
  display: block;
  color: inherit;
`;

const Code = styled.code`
  white-space: pre-wrap;
`;

function App() {
  const readme = linkify(useReadme());

  return (
    <Root>
      {/* <ContactInfo>
        <Link href="mailto:hello@joglr.dev">hello@joglr.dev</Link>
        <Link href="https://github.com/joglr">github.com/joglr</Link>
      </ContactInfo> */}

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
