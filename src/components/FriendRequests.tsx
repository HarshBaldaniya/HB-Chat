"use client"

import { FC, useState } from "react";

interface FriendRequestsProps {}

const FriendRequests: FC<FriendRequestsProps> = ({}) => {
  const [friendRequests, setFriendRequests] = useState<IncomingFriendRequest[]>(
    incomingFriendRequests
  );
  return <div>FriendRequests</div>;
};

export default FriendRequests;
