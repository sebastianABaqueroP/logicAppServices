export const config = {
  env: 'dev',
  appName: 'LogisticApp',
  port: '27017',
  mongoUri: `mongodb+srv://${process.env.SZ_MONGO_USER}:${process.env.SZ_MONGO_PASS}@
    ${process.env.SZ_MONGO_HOST}/${process.env.SZ_MONGO_DB} 
    authSource=admin&replicaSet=${process.env.SZ_MONGO_REPLICA}&
    readPreference=primary&ssl=true`,
};
