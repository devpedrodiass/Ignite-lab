import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex flex-1">
        <Video></Video>
        <Sidebar></Sidebar>
      </main>
    </div>
  );
}

export default Event;
