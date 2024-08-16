import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AllMeetUps } from "./pages/AllMeetUps/AllMeetUps";
import { NewMeetUp } from "./pages/NewMeetUp/NewMeetUp";
import Favorites from "./pages/Favorites/Favorites";
import { NotFound } from "./pages/NotFound/NotFound";
import Layout from "./layout/Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUps />} />
        <Route path="/new-meetup" element={<NewMeetUp />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
