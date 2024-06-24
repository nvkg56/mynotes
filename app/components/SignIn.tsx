import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      className="flex flex-col items-center justify-center p-5 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        type="submit"
      >
        Signin with GitHub
      </button>
    </form>
  );
}
