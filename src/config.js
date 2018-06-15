const dev = {
  s3: {
      REGION: "us-east-1",
      BUCKET: "tvs-notes"
    },
  apiGateway: {
      REGION: "us-east-1",
      URL: "https://ivnjm68lzi.execute-api.us-east-1.amazonaws.com/dev"
    },
  cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_W5d394nhe",
      APP_CLIENT_ID: "4eq460m43l5604kvjaua9ecqsl",
      IDENTITY_POOL_ID: "us-east-1:334e0ce7-e94c-4223-bf06-3045425b2434"
    }
};

const prod = {
  s3: {
      REGION: "us-east-1",
      BUCKET: "tvs-notes"
    },
  apiGateway: {
      REGION: "us-east-1",
      URL: "https://ivnjm68lzi.execute-api.us-east-1.amazonaws.com/dev"
    },
  cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_W5d394nhe",
      APP_CLIENT_ID: "4eq460m43l5604kvjaua9ecqsl",
      IDENTITY_POOL_ID: "us-east-1:334e0ce7-e94c-4223-bf06-3045425b2434"
    }
};

//default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;


export default {    
    // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config    
};