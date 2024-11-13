import { useContext } from "react";
import "./ProfileCard.css";
import { AuthContext } from "../auth/AuthContex";
function ProfileCard() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="d-flex flex-column gap-2 align-items-center">
        <img
          src="https://m.media-amazon.com/images/I/5174qT9pRqL._AC_SY450_.jpg"
          className="card-img-top m-0 mb-lg-2 rounded-circle user-img"
          alt="..."
        />

        <p className="text-center d-none d-lg-block fs-5">{user.nombre}</p>
        <p className="text-center d-none d-lg-block">{user.rol.tipo}</p>
      </div>
    </>
  );
}

export default ProfileCard;
