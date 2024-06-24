import Mynotes from "@/app/components/Note-component";
import Deletebtn from "@/app/components/delete-btn";
import { prisma } from "@/app/lib/prisma";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  console.log(session);

  const notes = await prisma.note.findMany();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>My Notes</p>
      <div className="grid grid-cols-1 gap-4 w-full">
        {notes.map((note) => (
          <div key={note.id} className="p-4 border border-gray-300 rounded">
            {note.content}
            <Deletebtn id={note.id} />
          </div>
        ))}
      </div>
      <Mynotes />
    </div>
  );
}
