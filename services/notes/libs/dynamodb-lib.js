import AWS from 'aws-sdk';

const client = new AWS.DynamoDB.DocumentClient();

AWS.config.update({
  region: 'us-east-1',
});

export default {
  get: (params) => client.get(params).promise(),
  put: (params) => client.put(params).promise(),
  query: (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise(),
};
