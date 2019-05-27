const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-cjvg7vrmph12"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zjes5nd2a5.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_cKX0ZtdBv",
    APP_CLIENT_ID: "35t0heglhs8bch8mio5ni7qbp4",
    IDENTITY_POOL_ID: "us-east-1:4910fb64-a0cb-42da-b63a-7e0c4ffeb43c"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ydmjliryg7"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pu11v1rkoa.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_HYdMNnNGC",
    APP_CLIENT_ID: "5136co52r6fccqquektne009l3",
    IDENTITY_POOL_ID: "us-east-1:2098d987-f767-4d55-85d9-df50370a97e4"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
