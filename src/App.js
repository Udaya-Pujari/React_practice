import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import UseMemo from "./component/useMemo/UseMemo";
import UseCallback from "./component/useCallback/UseCallback";
import Login from "./component/Login/Login";
import UseRef from "./useRef/UseRef";
import PropDrill from "./component/PropDrilling/PropDrill";
import ChildToParent from "./component/ChildToParentDataPass/ChildToParent";
import HigherOrderComp from "./component/HOC/HigherOrderComp";
import Parent from "./component/ContetxtAPI/Parent";
import ParentContext from "./component/UseContetxt/ParentContext";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <UseMemo />,
    },
    {
      path: "/usecallback",
      element: <UseCallback />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/useref",
      element: <UseRef />,
    },
    {
      path: "/propdrill",
      element: <PropDrill />,
    },
    {
      path: "/childtoparent",
      element: <ChildToParent />,
    },
    {
      path: "/hoc",
      element: <HigherOrderComp />,
    },
    {
      path: "/context",
      element: <Parent />,
    },
    {
      path: "/usecontext",
      element: <ParentContext />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
