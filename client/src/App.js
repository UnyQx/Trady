import axios from "axios";
import { useCookies } from "react-cookie";
import {
	createBrowserRouter,
	RouterProvider,
	useNavigate,
} from "react-router-dom";
import RootLayout from "./Pages/RootLayout/RootLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: "",
		children: [
			{
				path: "my-parties",
				element: <h1>PARTIES</h1>,
			},
			{
				path: "settings",
				element: <h1>Settings</h1>,
			},
		],
	},
]);

function App() {
	const [cookies] = useCookies(null);

	axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
	axios.defaults.headers = {
		Authorization: cookies["AuthToken"],
		"Content-Type": "application/json",
	};

	return <RouterProvider router={router} ></RouterProvider>;
}

export default App;
