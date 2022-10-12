import React from "react";
import { useLoaderData } from "react-router-dom";
import SingalTopic from "./SingalTopic";

const Topics = () => {
  const quizs = useLoaderData();
  const topicData = quizs.data;
  return (
    <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-10 md:py-10 md:px-10 lg:px-32 text-gray-900">
          <img
            src="https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-3/4 drop-shadow-2xl rounded-lg"
            alt=""
          />
          <h1 className="text-4xl font-bold leading-none sm:text-5xl xl:max-w-3xl mt-7 text-gray-800">
            Welcome To Mega Quiz Ground
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Best Quiz Platform For Programming Hero. The Best Quiz Website for Web Developers.
          </p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8">
            {topicData.map((topic) => (
              <SingalTopic key={topic.id} topic={topic}></SingalTopic>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
