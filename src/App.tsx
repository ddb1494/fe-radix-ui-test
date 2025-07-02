import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Theme, Box } from "@radix-ui/themes";
import { store } from "./store";
import { useAppSelector } from "./store/hooks";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Activity from "./pages/Activity";
import NotificationSettings from "./pages/NotificationSettings";
import Pricing from "./pages/Pricing";
import Todo from "./pages/Todo";
import Header from "./components/sections/Header";
import "./App.css";
import "@radix-ui/themes/styles.css";

function AppContent() {
  const { resolvedTheme } = useAppSelector((state) => state.theme);

  return (
    <Theme appearance={resolvedTheme}>
      <Router>
        <Box style={{ minHeight: "100vh" }}>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/notifications" element={<NotificationSettings />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </main>
        </Box>
      </Router>
    </Theme>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
