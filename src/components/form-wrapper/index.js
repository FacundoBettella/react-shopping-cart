import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 30px auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FormWrapper = ({ children, handleSubmit }) => {
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>{children}</Form>
    </Wrapper>
  );
};
