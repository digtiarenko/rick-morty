import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import googleLogo from '../../images/svg/google.svg';
import styles from './signin.module.scss';

function SignIn() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [loggedUser] = useAuthState(auth);

  const signIn = async () => {
    await signInWithGoogle([], { prompt: 'select_account' });
  };

  const logOut = async () => {
    await signOut(auth);
  };

  if (error) {
    return (
      <div className="signInContainer">
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p className="signInContainer">Loading...</p>;
  }

  return (
    <div className={styles.signInContainer}>
      {user && loggedUser ? (
        <>
          <img className={styles.img} src={user.user.photoURL!} alt="user avatar" />
          <span>{user.user.displayName}</span>
          <button className={styles.signinButton} type="button" onClick={logOut}>
            Sign out
          </button>
        </>
      ) : (
        <button className={styles.signinButton} type="button" onClick={signIn}>
          <img className={styles.img} src={googleLogo} alt="google logo" />
          Sign In
        </button>
      )}
    </div>
  );
}

export default SignIn;
