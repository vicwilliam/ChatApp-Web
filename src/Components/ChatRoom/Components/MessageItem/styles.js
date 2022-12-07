import styled from "@emotion/styled";

export const Container = styled.div`
  background: wheat;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-flow: column;
  ${({isMessageFromCurrentUser}) => isMessageFromCurrentUser ? `
    background: cyan;
    ` : `background: wheat;`}
`;