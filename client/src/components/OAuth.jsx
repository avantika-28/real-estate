import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice";

export default function OAuth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAuth = async () => {
    try {
      const provider = await new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth,provider)
      const res = await fetch("/api/auth/google",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      })
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/")
    } catch (error) {
      console.log("Not able to sign in with google",error)
    }
  };
  return (
    <button
      onClick={handleAuth}
      type="button"
      className="bg-red-700 uppercase text-white p-3 rounded-lg"
    >
      Continue With Google
    </button>
  );
}
