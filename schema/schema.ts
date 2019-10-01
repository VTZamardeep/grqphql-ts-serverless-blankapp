export const typeDefs = `
  type Query {
    signup(userInformation:UserInfo): String
  }

  input UserInfo{
      username:String!
      name:String!
      password:String!
  }
  `