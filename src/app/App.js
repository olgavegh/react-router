import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {" "}
      {/* root route */}
      <Route path="about" element={<About />} /> {/* nested route */}
      <Route path="sign-up" element={<SignUp />} /> {/* nested route */}
      <Route path="articles" element={<Articles />} /> {/* nested route */}
      <Route path="categories" element={<Categories />}>
        <Route path=":name" element={<Category />} /> {/* nested route */}
      </Route>
      {/* nested route */}
      <Route path="profile" element={<Profile />}>
        <Route path="edit" element={<EditProfileForm />} /> {/* nested route */}
      </Route>
      <Route path="articles/:title" element={<Article />} />
      <Route path="authors/:name" element={<Author />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
