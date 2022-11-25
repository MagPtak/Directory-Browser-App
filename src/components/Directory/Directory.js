import "./Directory.css"
import "../../index.css"


const Directory = ({ name, navigateTo, dirId }) => {
  return (
    <div className="directoryWrapper" onClick={() => navigateTo(dirId, name)}>
        <div className="directoryIcon"/>
        <div className="directoryTxt">{name}</div>
    </div>
    )
};

export default Directory;
