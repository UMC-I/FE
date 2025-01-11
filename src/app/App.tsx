import { GlobalStyle } from "./styles";
import {
  QueryProvider,
  AppThemeProvider,
  AppRouterProvider,
} from "./providers";
import { RankProvider } from "context/RankContext";

function App() {
  return (
    <AppThemeProvider>
      <RankProvider>
        <QueryProvider>
          <GlobalStyle />
          <AppRouterProvider />
        </QueryProvider>
      </RankProvider>
    </AppThemeProvider>
  );
}

export default App;
