"use client";

import { deleteNote } from "@/app/actions/actions";
import { useActionState } from "react";

export default function Deletebtn({ id }) {
  const [status, formaction, isPending] = useActionState(deleteNote);
  // console.log("status", status);
  return (
    <div>
      <form action={formaction}>
        <button type="submit" className=" border border-gray-300 rounded">
          {isPending ? "Deleting..." : "Delete"}
        </button>
      </form>
    </div>
  );
}
