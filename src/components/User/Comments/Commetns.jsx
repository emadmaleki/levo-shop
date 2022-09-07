import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import {
  AddComment,
  fetchComments,
} from "../../../redux/actions/MobileActions/MobileActions";
import { msgbox } from "../../../utils/helpers";
import Comment from "./Comment";

const Comments = ({ mobileId }) => {
  const [commentBody, setCommentBody] = useState("");
  let dispatch = useDispatch();
  let { mobileComments } = useSelector((state) => state);
    const [commentLoad, setCommentLoad] = useState(false);
  useEffect(() => {
    dispatch(fetchComments(mobileId));
    setCommentLoad(true);
  }, [mobileId,commentLoad]);

  let handleComment = () => {
    if (commentBody.trim("/") != "") {
      dispatch(AddComment(mobileId, commentBody));
      setCommentLoad(false);
      setCommentBody('');
    } else {
      msgbox("Please enter your comment!", "warning");
      return false;
    }
  };

  return (
    <section className="fd-comments st3">
      <Row>
        <Col sm="12" md="6" lg="6">
          <h1 className="fdc-title">Comments</h1>
          <p className="fdc-subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            nam cumque ipsum fuga molestiae ipsam illum dolores corrupti a,
            minus aliquam fugiat vitae tempora, doloribus nemo? Unde dolores
            doloribus enim magnam veritatis totam perferendis a alias. Placeat
            voluptate consequuntur aspernatur blanditiis delectus voluptatum
            suscipit consequatur modi doloremque ipsum. Consequatur, eaque.
          </p>
        </Col>
        <Col sm="12" md="6" lg="6">
          <section className="fdc-form">
            <textarea
              name=""
              id=""
              placeholder="enter your comment ..."
              className="fdc-inp"
              onInput={(e) => setCommentBody(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
            <button className="fdc-submit" onClick={() => handleComment()}>
              send
            </button>
          </section>
        </Col>
      </Row>
      <section className="fdc-items st2">
        {commentLoad ? mobileComments?.comments?.map((cm) => (
          <Comment comment={cm} key={cm.id} />
        )) : ''}
      </section>
    </section>
  );
};

export default Comments;
