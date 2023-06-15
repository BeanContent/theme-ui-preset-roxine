import React from "react";

const MemberCard = ({ props }) => {
  return (
    <div className="members__card">
      <div className="members__card-header">Image</div>
      <div className="members__card-block">content</div>
    </div>
  );
};

const Members = ({ data }) => {
//   const { image, pos, fullName, des } = data;
  return (
    <section className="members">
      <MemberCard />
    </section>
  );
};

export default Members;
