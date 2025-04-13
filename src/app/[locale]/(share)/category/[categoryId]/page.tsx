import React from "react";

type Props = {};

const Page = ({ params }: Props) => {
  const { categoryId } = params;
  console.log("categoryId", categoryId);
  return <div>Page</div>;
};

export default Page;
