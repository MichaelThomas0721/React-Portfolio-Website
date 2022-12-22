const handler = async (req, res) => {
  let APPID = req.body.APPID;
  let CC = req.body.cc;
  let returnData;
  await fetch(
    `http://store.steampowered.com/api/appdetails?appids=${APPID}&cc=${CC}&l=en`
  )
    .then((response) => response.json())
    .then((data) => {console.log(data)
         returnData = data[Object.keys(data)[0]]}); //console.log(data[Object.keys(data)[0]].data.price_overview));
  return res.status(200).json({ data: returnData });
};

export default handler;
