import {
    createBrowserRouter,
  } from "react-router-dom";
  import Root from '../pages/Root';
  import Teams from "../pages/Teams";
  import Players from "../pages/Players";
  import Player from "../pages/Player";
  import Team from "../pages/Team";
  import League from "../pages/League";
  import Valori from "../pages/Valori";
  import Stats from "../pages/Stats";
  import Calciomercato from "../pages/Calciomercato";
  import Regolamento from "../pages/Regolamento";
  import Homepage from "../pages/Homepage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Homepage />
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
        },
        {
          path: "/valori",
          element: <Valori />
        },
        {
          path: "/stats",
          element: <Stats />
        },
        {
          path: "/calciomercato",
          element: <Calciomercato />
        },
        {
          path: "/regolamento",
          element: <Regolamento />
        }
          ]
        }
      ]
  );
  
  export default router;
