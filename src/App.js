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
import Card from "./component/ComponentComposition/Card";
import PropParent from "./component/Props/PropParent";
import UseState from "./component/USeState/UseState";
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
    {
      path: "/componetcomposition",
      element: (
        <Card
          header="This is card Header"
          body="This is card body"
          footer="This is card footer"
        />
      ),
    },
    {
      path: "/props",
      element: <PropParent />,
    },
    {
      path: "/usestate",
      element: <UseState />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
