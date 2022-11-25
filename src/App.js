import { useEffect, useState } from "react";
import Directory from "./components/Directory/Directory";
import File from "./components/File/File";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import "./index.css"


const App = () => {
  const [breadCrumbs, setBreadCrumbs] = useState([{name: "root", id: ""}]);
  const [content, setContent] = useState(null);

  const URL =
    "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories";

  const addBredcrumb = (name, id) => {
    const temp = [...breadCrumbs];
    temp.push({ name, id });
    setBreadCrumbs(temp);
  };

  const getData = (id) => {
    fetch(`${URL}/${id}`, { "Access-Control-Allow-Origin": "*" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setContent(data);
      });
  };

  const navigateByClick = (id, name) => {
    addBredcrumb(name, id);
    getData(id, name)
  }

  const navigateByBreadcrumb = (id) => {
    const temp = [...breadCrumbs];
    const indexOfEl = temp.findIndex(el => el.id === id)
    temp.splice(indexOfEl + 1)
    setBreadCrumbs(temp)
    getData(id)
  }

  useEffect(() => {
    getData("");
  }, []);

  return (
    <div className="App">
      <div className="breadcrumbsWrapper">
        {breadCrumbs.map(function (el, i) {
          return <Breadcrumb name={el.name} key={`breadcrumb_${el.id}_${i}`} navigateTo={navigateByBreadcrumb} dirId={el.id}/>;
        })}
      </div>
      <div className="content" >
      {content?.directories?.map(function (el) {
        return (
          <Directory
            name={el.name}
            key={`directory_${el.id}`}
            dirId={el.id}
            navigateTo={navigateByClick}
          />
        );
      })}
      {content?.files?.map(function (el, i) {
        return <File name={el.name} key={`file_${el.name}_${i}`} />;
      })}
      </div>
    </div>
  );
};

export default App;
