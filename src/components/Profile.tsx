"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function Profile() {
  const session = useSession();
    if(session.data?.user){

        return <div>User Sign In</div>;
    }
    return <div>User Sign Out</div>;
}
