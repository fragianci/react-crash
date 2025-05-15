import HomePage from "./pages/HomePage";
// import JobListings from "./components/JobListings";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import JobPage from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFound";

const me = "Francesco";
const cars = ["Toyota chr", "Tesla X", "Porche Cayenne"];
let loggedIn = true;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="/jobs-page" element={<JobsPage />}></Route>
      <Route path="/jobs-page/:id" element={<JobPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
// <div className="">
//   <Navbar />
//   <Hero
//     title="Become a React developer"
//     subtitle="For the sake of it"
//   ></Hero>
//   <HomeCards></HomeCards>
//   <JobListings></JobListings>
// </div>
