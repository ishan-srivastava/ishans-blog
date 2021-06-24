import React from "react";
import "./BlogsList.scss";
import { TextInput } from "grommet";
import { For } from "react-extras";
import BlogCard from "../BlogCard/BlogCard";
import { Blogs } from "../../constants";

const BlogsList: React.FC = () => (
  <div className="w-full flex flex-col justify-start items-start space-y-5">
    <div className={"flex w-full flex-row justify-between items-center "}>
      <p className={"font-semibold text-2xl"}>All blogs 🚀</p>
      <div className={"w-1/3"}>
        <TextInput
          className={"text-sm shadow-none w-full"}
          placeholder="Search for tags, topics, content."
        />
      </div>
    </div>
    <div
      className={
        "flex w-full max-w-full grid xxl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 row-gap-20 grid-flow-row"
      }
    >
      <For
        of={Blogs}
        render={(item, index) => <BlogCard key={index} blog={item} />}
      />
    </div>
  </div>
);

export default BlogsList;
