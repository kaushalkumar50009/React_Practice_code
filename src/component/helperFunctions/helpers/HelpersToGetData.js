const HelpersToGetData = async (params) => {
  const UrlApi = `https://jsonplaceholder.typicode.com/${params}`;
  return await fetch(UrlApi).then((jsonData) => jsonData.json());
};

export default HelpersToGetData;
