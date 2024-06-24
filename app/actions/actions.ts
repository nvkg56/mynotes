"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";

export async function addNote(previousState, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const content = formData.get("content") as string;
    // if (!content) return;
    await prisma.note.create({ data: { content } });
    revalidatePath("/");
    return "Note added successfully!";
  } catch (error) {
    return "Failed to add note!";
  }
}

export async function deleteNote(previousState, id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    await prisma.note.delete({ where: { id: id } });
    revalidatePath("/");
    return "Note deleted successfully!";
  } catch (error) {
    return "Failed to delete note!";
  }
}
