import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
  return (
    <div className={classes.videos}>
      {[...Array(10)].map((x, i) => (
        <Video key={i} />
      ))}
    </div>
  );
}
