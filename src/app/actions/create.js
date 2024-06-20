"use server";

import { client } from "@/lib/db";
import { redirect } from "next/navigation";

export async function createBook(formData) {
  if (!client.isOpen) {
    console.log(
      "\n!!!!!!!!!!!!!! Redis client is not connected !!!!!!!!!!!!!!\n"
    );
    return { error: "Redis client is not connected" };
  }

  const { title, rating, author, blurb } = Object.fromEntries(formData);

  // create book id
  const id = Math.floor(Math.random() * 1000000); // don't use in prod

  // save new hash for the book
  await client.hSet(`book:${id}`, { title, rating, author, blurb });

  redirect("/");
}
