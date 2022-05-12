import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Form, Input } from "reactstrap";
import { Collapse } from "react-collapse";
import { Alert, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewComment } from "../../stores/CommentList";
import { useParams } from "react-router-dom";

import "./CommentSend.scss";
export default function CommentSend() {
  const { contentName } = useParams();
  const [questionList, setQuestionList] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("Test User");
  const [commentText, setCommentText] = useState("");
  const [trigger, setTrigger] = useState("");
  const [alert, setAlert] = useState("");

  const toggle = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  // const { selectedMovie } = useSelector((state) => state.movies);

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    
    const commentData = {
      username: username,
      text: commentText
    };
    //dispatch(addNewComment({contentName, commentData}))
    e.preventDefault();
    // dispatch(addNewComment(contentName));
    // const config = {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("token"),
    //   },
    // };
    // if (new Date() > new Date(props.event.startDate)) {
    //   const data = {
    //     questionText: questionText,
    //   };

    //   if (props.userRole === "user") {
    //     axios
    //       .post(`/user/${props.user}/eventQuestions/${props.event.name}`, data, config)
    //       .then((res) => {
    //         setMessage(res.data.message);
    //         setTrigger(!trigger);
    //         setQuestionText("");
    //         setIsOpen(false);
    //         if (res.data.messageType === "SUCCESS") {
    //           setAlert("successQuestion");
    //         } else {
    //           setAlert("errorQuestion");
    //         }
    //         setTimeout(() => {
    //           setAlert("");
    //           setMessage("");
    //         }, 2000);
    //       })

    //       .catch((err) => console.log(err));
    //   }
    // } else {
    //   console.log("error");
    //   setAlert("errorQuestion");
    //   setTimeout(() => {
    //     setAlert("");
    //   }, 2000);
    // }
  };

  const writeComment = () => {
    return (
      <Form className="myForm">
        <div className="inputContainer">
          {/* <Label htmlFor="questionText" className={styles.icon}>
              Name
            </Label> */}
          <Input
            type="textarea"
            name="commentText"
            value={commentText}
            id="commentText"
            className="inputTextArea"
            required
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <div className="buttonPosition">
          <Button className="sendButton" onClick={handleSubmit}>
            {"Send Comment >"}
          </Button>
        </div>

        {alert === "errorComment" ? (
          <div style={{ display: "flex" }}>
            <Alert style={{ margin: "10px 0px", width: "100%" }} severity="error">
              Before the start date, you can not ask a comment.
            </Alert>
          </div>
        ) : null}
        {/* {showAlert()} */}
      </Form>
    );
  };

  return (
    <div>
      <div className="titleBox">
        <h1>User Comments</h1>
        {/* {"1" === "user" ? (
            <Button
              color="secondary"
              className="styles"
              //onClick={() => history.push(`/eventQuestions/${props.event.name}`)}
            >
              Go To Event Poll
            </Button>
          ) : (
            <Button
              color="secondary"
              className="askQuestionButton"
              //onClick={() => history.push(`/eventQuestions/${props.event.name}`)}
            >
              Go To Event Questions
            </Button>
          )} */}

        {"user" === "user" ? (
          <Button className="commentButton" onClick={toggle}>
            Ask Question
          </Button>
        ) : null}
      </div>
      <hr className="hrComment" />
      <Collapse isOpened={isOpen}>{writeComment()}</Collapse>
    </div>
  );
}
