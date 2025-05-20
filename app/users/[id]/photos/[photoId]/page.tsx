import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const Photopage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotoPage {id} {photoId}
    </div>
  );
};

export default Photopage;
