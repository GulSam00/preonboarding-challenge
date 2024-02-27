import { List } from "./components";

import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <List />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  place-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
