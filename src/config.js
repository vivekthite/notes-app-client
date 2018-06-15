const dev = {
  STRIPE_KEY: "pk_test_S5UrWT0nXfOHtstdhr8xq9hP",
  s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-api-dev-attachmentbucket-1klg2u6on1rd3"
    },
  apiGateway: {
      REGION: "us-east-1",
      URL: "https://pivn1edth6.execute-api.us-east-1.amazonaws.com/dev"
    },
  cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_U0pfNAKu8",
      APP_CLIENT_ID: "15dj46m7fus8vtc6v318seu2ip",
      IDENTITY_POOL_ID: "us-east-1:c4080ce3-8ed9-4017-899b-0e9bcd65da3b"
    }
};

const prod = {
  STRIPE_KEY: "pk_test_S5UrWT0nXfOHtstdhr8xq9hP",
  s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-api-prod-attachmentbucket-d44d6rtqu9tb"
    },
  apiGateway: {
      REGION: "us-east-1",
      URL: "https://iht5rt5bnj.execute-api.us-east-1.amazonaws.com/prod"
    },
  cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_khYu4LlgX",
      APP_CLIENT_ID: "2hnu4nt45k94onvh4psc3td78a",
      IDENTITY_POOL_ID: "us-east-1:a22353df-fd40-4b33-a249-626aaa1df1ae"
    }
};

//default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;


export default {    
    // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config    
};