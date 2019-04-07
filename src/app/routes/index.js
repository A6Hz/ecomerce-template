import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../components/authenticated-route";
import UnauthenticatedRoute from "../components/unauthenticated-route";
import Loadable from "react-loadable";

import NotFound from "./static/notFound";

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ "./homepage"),
  loading: () => null,
  modules: ["homepage"]
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ "./dashboard"),
  loading: () => null,
  modules: ["dashboard"]
});

const Logout = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ "./logout"),
  loading: () => null,
  modules: ["logout"]
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ "./profile"),
  loading: () => null,
  modules: ["profile"]
});

{
  /*Routes For Extra Pages*/
}
const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./static/about-us"),
  loading: () => null,
  modules: ["about"]
});

const lookbook = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./static/lookbook"),
  loading: () => null,
  modules: ["about"]
});

const login = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./static/login"),
  loading: () => null,
  modules: ["about"]
});

const register = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./static/register"),
  loading: () => null,
  modules: ["about"]
});

const search = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./static/search"),
  loading: () => null,
  modules: ["about"]
});

const collection = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./static/collection"),
  loading: () => null,
  modules: ["about"]
});

const forgetPassword = Loadable({
  loader: () =>
    import(/* webpackChunkName: "about" */ "./static/forgetPassword"),
  loading: () => null,
  modules: ["about"]
});

const contact = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./static/contact"),
  loading: () => null,
  modules: ["about"]
});

const faq = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./static/faq"),
  loading: () => null,
  modules: ["about"]
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />

    <Route exact path="/profile/:id" component={Profile} />

    <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />

    <AuthenticatedRoute exact path="/logout" component={Logout} />

    {/*Routes For Extra Pages*/}
    <Route exact path="/pages/about-us" component={About} />
    <Route exact path="/pages/lookbook" component={lookbook} />
    <Route exact path="/pages/login" component={login} />
    <Route exact path="/pages/register" component={register} />
    <Route exact path="/pages/search" component={search} />
    <Route exact path="/pages/collection" component={collection} />
    <Route exact path="/pages/forget-password" component={forgetPassword} />
    <Route exact path="/pages/contact" component={contact} />
    <Route exact path="/pages/faq" component={faq} />

    <Route component={NotFound} />
  </Switch>
);
