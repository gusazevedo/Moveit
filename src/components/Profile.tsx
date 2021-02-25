import sytles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={sytles.profileContainer}>
      <img src="https://github.com/gusazevedo.png" alt="Profile Image" />
      <div>
        <strong>Gustavo Azevedo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
