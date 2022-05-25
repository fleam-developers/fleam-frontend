import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import AddContent from "../component/AddContent/AddContent";

export default function AddContentPage() {
  const navigate = useNavigate();
  // const { contentName } = useParams();

  // const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.authentication);

  if (loggedUser && !loggedUser.userType) return <Navigate to={"/login"}></Navigate>;
  if (loggedUser && loggedUser.userType === "user") return <Navigate to={"/be-creator"}></Navigate>;

  // useEffect(() => {
  //   dispatch(fetchSelectedMovie(contentName));
  // }, [contentName]);

  return (
    <div>
      <AddContent></AddContent>
    </div>
  );
}
