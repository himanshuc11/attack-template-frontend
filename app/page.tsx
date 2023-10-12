"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut, signIn } from "next-auth/react";
import Todo from "@/components/custom/Todo";

const todoProps = {
  text: "Build Animated strike",
  isCompleted: false,
  id: "uuid",
};

export default function Home() {
  const { data: session } = useSession();

  // if (session && session.user) {
  //   return (
  //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //       <Button variant={"destructive"} onClick={() => signOut()}>
  //         Sign Out
  //       </Button>
  //     </main>
  //   );
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Todo {...todoProps} />
      <Button onClick={() => signIn()}>Sign In</Button>
    </main>
  );
}
