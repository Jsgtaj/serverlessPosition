let latLong = [0, 0];
exports.handler = async event => {
  const { lat, long } = event.queryStringParameters;
  latLong = [lat, long];
  const json = JSON.stringify(latLong);
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: json,
  };
};
