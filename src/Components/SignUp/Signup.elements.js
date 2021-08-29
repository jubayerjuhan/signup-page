import styled from "styled-components"
import bgImage from "../../Image/bg-intro-desktop.png"

export const SignupBody = styled.div`
  background-image: url(${bgImage});
  background-color: var(--primary-red);
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 960px) {
    background-repeat: repeat;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  height: 100%;
`
export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6rem;
  gap: 1rem;
  flex-basis: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin: 2rem 2rem;
    text-align: center;
  }
`

export const TextSection = styled.div`
  color: #fff;
  flex-basis: 50%;
`
export const TextTitle = styled.h1`
  font-size: 2.3rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 1rem;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`

export const TextPara = styled.p`
  font-size: .8rem;
`

export const FormSection = styled.div`
  flex-basis: 50%;
`

