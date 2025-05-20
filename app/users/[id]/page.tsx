import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}
const UserDetailPage = ({ params: { id } }: Props) => {
  if (parseInt(id) > 10) notFound();
  
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
