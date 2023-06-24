"use client"

import Button from "@/components/ui/Button";
import { db } from "@/lib/db";
import { signOut } from "next-auth/react";

export default async function Home() {
  return <button onClick={() => signOut}>Sign Out succ...</button>
}
