import {
    createBrowserRouter,
  } from "react-router-dom";
  import Root from '../pages/Root';
  import Teams from "../pages/Teams";
  import Players from "../pages/Players";
  import Player from "../pages/Player";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Root />
        },
        {
          path:"/teams",
          element: <Teams />
        },
        {
          path:"/players",
          element: <Players />

        },
        {
          path: "player/:name",
          element: <Player />
        }
          ]
        }
      ]
  );
  
  export default router;
