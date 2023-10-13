import React from "react"
import { Navigate } from "react-router-dom"
// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
// Dashboard
import Dashboard from "../pages/Dashboard/index"
import AddCategory from "pages/Settings/Add-Category"
import AddInfluencer from "pages/Influencer/add-influencer"
import InfluencerList from "pages/Influencer/influencer-list"
import Upload from "pages/Influencer/upload"
const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/settings/add-category", component: <AddCategory /> },
  { path: "/influencer/add-influencer", component: <AddInfluencer /> },
  { path: "/influencer/influencer-list", component: <InfluencerList /> },
  { path: "/influencer/add-Images-Vedio/:profileId", component: <Upload /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
]
const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
]

export { authProtectedRoutes, publicRoutes }
