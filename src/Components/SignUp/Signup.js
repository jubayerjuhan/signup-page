import React from 'react';
import { FormSection, SectionContainer, SectionWrapper, SignupBody, TextPara, TextSection, TextTitle } from "./Signup.elements";

const Signup = () => {
  return (
    <>
      <SignupBody>
        <SectionWrapper>
          <SectionContainer>
            <TextSection>
              <TextTitle>Learn to code by watching others</TextTitle>
              <TextPara>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</TextPara>
            </TextSection>
            <FormSection>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci perferendis hic, blanditiis similique voluptates, aliquid explicabo incidunt sit ipsam labore voluptatibus, suscipit nostrum voluptas neque facere cumque autem quidem officiis.</p>
            </FormSection>
          </SectionContainer>
        </SectionWrapper>
      </SignupBody>
    </>
  );
};

export default Signup;