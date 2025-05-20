import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text style={heading}>Hello {name}</Text>
            <Link href="http://localhost:3000">https://next-app.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
