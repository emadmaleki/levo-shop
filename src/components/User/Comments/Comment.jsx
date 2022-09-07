import React from "react";

const Comment = ({comment}) => {
  return (
      <section className="fdc-item">
        <section className="fdc-item-header">
          <p className="fdc-user">{comment.userName}</p>
          <span className="fdc-date">{comment.created_at}</span>
        </section>
        <p className="fdc-body">
        {comment.desc}
        </p>
      </section>
  );
};

export default Comment;
