# Apigee X Developer Resources

To get up and running with Apigee X, we've put together this guide to help you
navigate through the documentation, courses, and training available for U-M
users.

## API Directory Links

### API Directory Integrated Portal

The integrated portal is the front-end that most users consider as the 'API Directory'.

| Environment | URL                                                            |
| ----------- | -------------------------------------------------------------- |
| Production  | [dir.api.it.umich.edu](https://dir.api.it.umich.edu)           |
| Test        | [dir-test.api.it.umich.edu](https://dir-test.api.it.umich.edu) |
| Development | [dir-dev.api.it.umich.edu](https://dir-dev.api.it.umich.edu)   |

### Apigee Management Console

The Apigee Management Console is the backend interface used to develop and manage APIs that are listed in the API Directory. The different environments exist as separate projects within Apigee.

Apigee Management Console: [apigee.google.com](https://apigee.google.com)

| Environment      | Project ID          |
| ---------------- | ------------------- |
| Production       | `api-dir-prod-e1ca` |
| Development/Test | `api-dir-dev-c089`  |

### Gateway URLs

The following are the urls that receive actual API calls.

| Environment | URL                                                          |
| ----------- | ------------------------------------------------------------ |
| Production  | [gw.api.it.umich.edu](https://gw.api.it.umich.edu)           |
| Test        | [gw-test.api.it.umich.edu](https://gw-test.api.it.umich.edu) |
| Development | [gw-dev.api.it.umich.edu](https://gw-dev.api.it.umich.edu)   |

## Apigee Documentation

Google's [Apigee X Documentation](https://cloud.google.com/apigee/docs) provides robust documentation for all facets of Apigee, along with how-to guides, tutorials, and more. If you are getting started, we highly recommend exploring the [Guides](https://cloud.google.com/apigee/docs/guides) section—especially the develop and publish modules—for a good overview of how to create and deploy API products in Apigee.

If you are just getting started on Apigee, we would call out the following topics as primary areas of interest:

- [Publishing overview](https://cloud.google.com/apigee/docs/api-platform/publish/publishing-overview#task2registeranappdeveloperonedge)
- [Introduction to API products](https://cloud.google.com/apigee/docs/api-platform/publish/what-api-product)
- [Introduction to OAuth 2.0](https://cloud.google.com/apigee/docs/api-platform/security/oauth/oauth-introduction)
- [Creating reusable shared flows](https://cloud.google.com/apigee/docs/api-platform/fundamentals/shared-flows)
- [Handling faults](https://cloud.google.com/apigee/docs/api-platform/fundamentals/fault-handling)
- [Policy reference overview](https://cloud.google.com/apigee/docs/api-platform/reference/policies/reference-overview-policy)  
   _Bookmark this!_ And familiarize yourself with these policies:

  - [OAuthV2 Policy](https://cloud.google.com/apigee/docs/api-platform/reference/policies/oauthv2-policy)
  - [SpikeArrest Policy](https://cloud.google.com/apigee/docs/api-platform/reference/policies/spike-arrest-policy)
  - [AssignMessage Policy](https://cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
  - [ExtractVariables Policy](https://cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy)

## Google Cloud Skills Boost

Google Cloud Skills Boost provides modularized training along different skill
sets within the [Cloud Architect/Engineer on Apigee](https://www.cloudskillsboost.google/paths/27) learning path. Within the path, we recommend taking the following core courses:

1. [API Design and Fundamentals of Google Cloud's Apigee API Platform](https://www.cloudskillsboost.google/course_templates/254) (20 credits)
2. [API Security on Google Cloud's Apigee API Platform (C2)](https://www.cloudskillsboost.google/course_templates/255) (25 credits)
3. [API Development on Google Cloud's Apigee API Platform](https://www.cloudskillsboost.google/course_templates/256) (40 credits)

<div class="alert alert-info small">
  <div style="font-weight: 600">
    <i class="fa-solid fa-star"></i> Before you begin
  </div>
  <p>
    In order to participate in the hands-on labs within the Cloud Skills Boost
    modules, you will need to spend a certain amount of training credits. To
    receive 200 free credits from Google, you must first apply for
    <a href="https://edu.google.com/intl/ALL_us/programs/credits/training/?modal_active=none">Training Credits</a>
    with your U-M email address. Be aware, it can take up to two weeks for your
    credits to be issued.
  </p>
</div>

As you progress through the course content, we recommend the following:

- **Use an incognito/private browser window whenever you access the lab content**  
  A new temporary GCP organization and Google login are provisioned for each lab. If you try to login with a normal browser window, your U-M login or private Google credentials can cause issues and unwanted side-effects.
- **Set aside time for labs**  
  Though the content for each lab may only take a few minutes, you will need to dedicate extra time for the lab environment to be provisioned. Once you start a lab, it typically takes 7–8 minutes for the lab environment to be provisioned. For some labs, you will need to wait for the full GCP/Apigee deployment to finish, which can take upwards of 25 minutes.

## Sample Proxies

The Apigee team maintains a repo of [Apigee Edge Sample API Proxies](https://github.com/apigee/api-platform-samples). While Apigee Edge is an old version of the Apigee platform (U-M uses the newer Apigee X product), the repo's [sample-proxies](https://github.com/apigee/api-platform-samples/tree/master/sample-proxies) directory still holds a great deal of relevance. Study the samples to familiarize yourself on common patterns and best practices for developing API proxies.

## OpenAPI Specification

Apart from configuring and testing proxies within Apigee, developers will also need to document their API using the [OpenAPI Specification][oas-spec]. The resulting json/yaml file will be published to the API Directory portal and provide all of the documentation to end-users through the API Directory.

There are many tools and IDE extensions to help you construct the required json/yaml for your documentation. Among the tools used by the API Directory team are [Postman's API Builder][postman-builder], SmartBear's [Swagger Editor][swagger-io], and 42Crunch's [OpenAPI (Swagger) Editor][vscode-openapi] for Visual Studio Code.

[oas-spec]: https://spec.openapis.org/oas/latest
[postman-builder]: https://learning.postman.com/docs/publishing-your-api/documenting-your-api/
[swagger-io]: https://editor.swagger.io/
[vscode-openapi]: https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi
