"use client";
import { addNote } from "@/app/actions/actions";
import { useActionState } from "react";

export default function Mynotes() {
  const intialState = "";
  const [error, formaction, isPending] = useActionState(addNote, intialState);
  return (
    <div>
      <form action={formaction}>
        <input
          type="text"
          placeholder="Add note ..."
          name="content"
          className="text-slate-800 w-full p-2 my-2 border border-gray-300 rounded"
        />
        <button className="w-full p-2 my-2 border border-gray-300 rounded">
          {isPending ? "Saving note ..." : "Save"}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
