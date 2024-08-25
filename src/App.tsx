import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Landing />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
