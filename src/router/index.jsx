import { createBrowserRouter, Navigate, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Movie from "../atomic/pages/movie/movie";

// import Anime from "../atomic/pages/anime/anime";

// ?lazy load
const Movie = lazy(() => import("../atomic/pages/movie/movie"));
const Anime = lazy(() => import("../atomic/pages/anime/anime"));
export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<h1>Hello World</h1>
				<Link to="movie">Movie</Link>
				<Link to="anime">Anime</Link>
			</div>
		),
	},
	{
		path: "about",
		element: <div>About</div>,
	},
	{
		path: "movie",
		element: (
			// suspen doi page tai xong r moisw sd de render
			// fallback render tam thoi khi page chua tai xong
			<Suspense fallback={<>Loadding...</>}>
				<Movie />
			</Suspense>
		),
	},
	{
		path: "tv-series",
		element: <div>tv-series</div>,
	},
	{
		path: "anime",
		element: (
			<Suspense>
				<Anime />
			</Suspense>
		),
	},
	{
		path: "*",
		// element: <div>Not Found</div>,
		element: <Navigate to={"/"} replace={true} />,
	},
]);
