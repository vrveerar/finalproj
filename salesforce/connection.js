const nforce = require('nforce');

/**
 * Creates connection to Salesforce CRM
 */

module.exports = nforce.createConnection({
  clientId: '3MVG9ZF4bs_.MKujpp84Jpya2NEl5lGGyFK2IWnxG9mMeyQs0brnwqNM1.XH0.xdTro5sHbL5A_SmCSKQzIBX',
  clientSecret: '0C5EF08EB500FF1FD48748E18A01015748562E1E282BC9E34ADBEA58489D62DB',
  redirectUri: 'https://login.salesforce.com/services/oauth2/success',
  apiVersion: 'v43.0',
  mode: 'single',
  autoRefresh: true,
  username: 'tdusterdieck@trilogyed.com',
  password: 'EnterpriseTeam14ZP8DrUHOHyQlNbdz3RDadBD',
  oauth: {
    access_token: '6Cel800D2E000001H1Ly8882E0000007wrMsyfGRVq763DVMt4P8aWnagm5YNfgjAgss3RG9np3cEgXkFSHeYbO6LDPuZunBCwkQIncXau0',
    instance_url: 'https://na91.my.salesforce.com',
  },
});
