let count = 0;

module.exports = async function (context, req) {
  count++;

  context.res = {
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      count: count
    }
  };
};