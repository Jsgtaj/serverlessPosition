const latLong = [];
exports.handler = async event => {
  const lat = event.queryStringParameters.lat || 0;
  const long = event.queryStringParameters?.long || 0;
  latLong.push(lat, long);

  const json = JSON.stringify(latLong);
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: json,
  };
};
