import "./File.css";
import "../../index.css"

const File = ({ name }) => {
  let imageClassName;

  if (name.includes("jpg")) {
    imageClassName = "fileIcon";
  } else {
    imageClassName = "otherIcon";
  }

  return (
    <div className="fileWrapper">
      <div className={imageClassName} />
      <div className="fileTxt">
        {name}
      </div>
    </div>
  );
};

export default File;
