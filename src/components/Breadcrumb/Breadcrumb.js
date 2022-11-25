

const Breadcrumb = ({ name, navigateTo, dirId }) => {
  return <span onClick={() => navigateTo(dirId)}> {name} /</span>;
};

export default Breadcrumb;
