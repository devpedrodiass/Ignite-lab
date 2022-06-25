import { StringValueNode } from "graphql";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug}></Video>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <strong className="text-2xl animate-pulse ">
              Oops! Select a video 😋
            </strong>
          </div>
        )}
        <Sidebar></Sidebar>
      </main>
    </div>
  );
}

export default Event;
