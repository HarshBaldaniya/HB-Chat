import Button from "@/components/ui/Button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  return <pre className="w-4">{JSON.stringify(session)}</pre>;
};

export default page;
