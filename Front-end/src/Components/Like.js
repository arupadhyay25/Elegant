import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Icon } from "@chakra-ui/react";
import { useState } from "react";

export const Like = () => {
  let [like, setlike] = useState(false);
  let handlelike = () => {
    setlike(!like);
  };
  return (
    <span>
      {like ? (
        <Icon fontSize={22} onClick={handlelike} as={FcLike} />
      ) : (
        <Icon fontSize={20} onClick={handlelike} as={FcLikePlaceholder} />
      )}
    </span>
  );
};
