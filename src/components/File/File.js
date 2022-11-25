import "./File.css";

const File = ({ name }) => {
  let imageClassName;

  if (name.includes("jpg")) {
    imageClassName = "image";
  } else {
    imageClassName = "other";
  }

  return (
    <div className="fileWrapper">
      <div className={imageClassName} />
      <div className="txt">
        {name}
      </div>
    </div>
  );
};

export default File;
