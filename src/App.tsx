import { Provider } from "react-redux";
import { List } from "./components";
import { store } from "./store/store";

import styled from "styled-components";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <List />
      </AppContainer>
    </Provider>
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
