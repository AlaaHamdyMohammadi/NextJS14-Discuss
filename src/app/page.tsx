import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex">
      <form action={actions.signIn}>
        <Button type="submit">signIn</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">signOut</Button>
      </form>
      {/* {session?.user ? <h1>{JSON.stringify(session.user)}</h1> : <h1>Sign In</h1>} */}
      <Profile/>
    </div>
  );
}
