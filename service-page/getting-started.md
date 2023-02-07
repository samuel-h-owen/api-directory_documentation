# Getting Started with the API Directory

To get started using the API Directory, you will need to sign-in, create an app, and subscribe to one or more API products. Once you are set, you will be able to make API calls using your app's credentials.

This article will guide you through each of the steps required to start using APIs at U-M.

## Usage Policies

U-M faculty, staff, sponsored affiliates, and students are eligible to use the API Directory. Access to the API Directory may be used only for academic, educational, U-M administrative, or research purposes and cannot be transferred to or shared with anyone else. Once granted access to an API, you are responsible to comply with the [Terms & Conditions][terms-conditions].

## Getting Started

1. **Sign Into the API Directory**  
   The API Directory uses U-M's Single Sign On service. To sign into the API Directory, navigate to the [API Directory Portal][api-dir], click the [Sign In][api-dir-sign-in] link on the upper right of your browser, provide your U-M uniqname and password, and complete two-factor authentication via Duo. Once you are signed-in, you will be able to browse all publicly-listed APIs, create apps, and more.

2. **Browse the API Directory**  
   Once you are signed into the API Directory, you will have the ability to browse the [APIs][api-dir-apis] available at U-M. Each API will have full documentation about its endpoints, along with information about how to authenticate an app, make calls, and what responses you should expect to see.

3. **Join a Team**  
   To begin making API calls, we strongly recommend you create or join a team. Teams allow groups of developers to manage and share apps in a more sustainable way. You can create and manage your team memberships via the [Teams][api-dir-teams] link under your user account in the main navigation. To join an existing team, please contact the team's owner to request membership.

   See the [Managing Teams][managing-teams] guide for more information about teams.

   <div class="alert alert-info small">
     <div class="alert-heading"><strong><i class="fa-solid fa-exclamation-circle" role="img" aria-hidden="true"></i> Heads up!</strong></div>
     <div class="alert-content">
     Any institutional apps managed by faculty or staff at U-M are required to be associated with a team.
     <div>
    </div>

4. **Create an App**  
   In order to make calls to an API, you will need to create an app and request access to the APIs you would like to use. Through your app, you can obtain a set of Client ID and Client Secret credentials. These credentials can be used to authenticate your app via the API Directory's Swagger UI or through your own code.

   See the [Managing Apps][managing-apps] guide for more information about apps.

5. **Consume an API**  
   Once you have created an app and subscribed it to an API, you will be able to make calls to the API using your app credentials.

   If you are browsing via the API Directory, you can make API calls directly in your browser. To do this:

   - Navigate to the API you would like to consume.
   - Click the **Authorize** button.
   - Enter your **Client ID** and **Client Secret** (API Key & Secret) in the authorization window and click accept.
   - Under the **Try this API** section of the API documentation, click the Execute button. Depending on the API endpoint, you may have to specify additional parameters to form a valid request, all of which should be outlined in the API's documentation.

   The **Try this API** tool will also generate sample requests in popular languages, including cURL, Python, Node, JS, PHP, and Java. Use these sample requests to help inform your own code.

[api-dir]: https://dir.api.it.umich.edu
[api-dir-sign-in]: https://dir.api.it.umich.edu/accounts/login
[api-dir-apis]: https://dir.api.it.umich.edu/apis
[api-dir-teams]: https://dir.api.it.umich.edu/teams
[terms-conditions]: https://dir.api.it.umich.edu/terms
[managing-teams]: https://documentation.its.umich.edu/node/3927
[managing-apps]: https://documentation.its.umich.edu/node/3928
