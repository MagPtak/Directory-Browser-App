import "./Directory.css"

const Directory = ({ name, navigateTo, dirId }) => {
  return (
    <div className="directoryWrapper" onClick={() => navigateTo(dirId, name)}>
        <div className="icon"/>
        <div className="txt">{name}</div>
    </div>
    )
};

export default Directory;
