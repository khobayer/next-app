import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UserPage = async (props: Props) => {
  const searchParams = await props.searchParams;

  const {
    sortOrder
  } = searchParams;

  return (
    <>
      <h1 className="font-extrabold text-2xl mb-3">Users List</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading....</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
