import {
    createBrowserRouter,
  } from "react-router-dom";
  import Root from '../pages/Root';
  import Teams from "../pages/Teams";
  import Players from "../pages/Players";
  import Player from "../pages/Player";
  import Team from "../pages/Team";
  import League from "../pages/League";
  import Calendar from "../components/Calendar";

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
          path: "team/:name",
          element: <Team />
        },
        {
          path:"/players",
          element: <Players />

        },
        {
          path: "player/:name",
          element: <Player />
        },
        {
          path: "/league",
          element: <League />
        }
          ]
        }
      ]
  );
  
  export default router;
