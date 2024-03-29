import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      { path: "watch", element: <WatchPage /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
};

export default App;
