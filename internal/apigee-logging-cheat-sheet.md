# Apigee Logging Cheat Sheet

## Logging in Apigee

Every administrative action and API call made within Apigee is logged within Google Cloud Logging and sent to ITS's Splunk instance for longer-term storage. These log records are critical for the monitoring and support of U-M's API Directory service. This document covers how to search the Apigee logs for specific events that might be of interest to the service team and those who are administering various campus API offerings.

## General Search Criteria

The following search criteria should be used in general to access Apigee logs in Splunk:

```
index="apigee"
data.jsonPayload.environment="*{dev|test|prod}*"
```

# Apigee Management Console Activity

All Apigee Management API calls are organized based on the `protoPayload.methodName` attribute, which references the resource and action being called upon.

A sample query for all operations on API Categories within the production portal would be formulated like so:

```
index="apigee"
data.jsonPayload.environment="*prod*"
data.protoPayload.methodName="google.cloud.apigee.v1.ApiCategories.CreateApiCategory"
```

The following is a list of all Apigee Management API methods, organized by resource. For each resource, the associated methods are defined along with any key data elements from the log record. Across all logs records, there are some common key data elements, which are defined in the [Common Key Data Elements](#common-key-data-elements) section.

## Log Events by Resource

### API Categories

`google.cloud.apigee.v1.ApiCategories`

Operations associated with a portal's API Categories.

#### Methods

- `CreateApiCategory`  
  Triggered when an api category is created within a portal
- `DeleteApiCategory`  
  Triggered when an api category is deleted from a portal
- `UpdateApiCategory`  
  Triggered when a api category is updated within a portal

#### Key Data Elements

- `protoPayload.resourceName`  
  Resource path information including project id, portal name, and api category id
- `protoPayload.request.apiCategory`  
  Dictionary containing the api category id and name values

---

### ApiDocs

`google.cloud.apigee.v1.ApiDocs`

Operations associated with API Catalog records within an integrated portal.

#### Methods

- `CreateApiDoc`  
  Triggered when an API doc is created within a portal.
- `PostSnapshot`  
  Triggered when a API spec snapshot is created.
- `TagApiDocs`  
  Triggered when tags are updated for an API doc.
- `UpdateApiDoc`  
  Triggered when an API doc is updated within a portal.

#### Key Data Elements

- `data.protoPayload.resourceName`  
  The full path of the API doc resource, including the organization id, portal id, and doc id.
- `data.protoPayload.request.body.siteId`  
  The id of the portal that is being acted upon.
- `data.protoPayload.request.body.title`  
  The name of the API catalog entry.

---

### API Products

`google.cloud.apigee.v1.ApiProducts`

Operations associated with API Product records.

#### Methods

- `CreateApiProduct`  
  Triggered when an API Product is created within an organization.
- `UpdateApiProduct`  
  Triggered when an API Product is updated within an organization.
- `DeleteApiProduct`  
  Triggered when an API Product is deleted within an organization.

#### Key Data Elements

- `protoPayload.request.apiProduct`  
  Object describing the apiProduct with entries for `approvalType`, `displayName`, `environments`, `name`, `quota`, etc.

---

### API Proxy Service

`google.cloud.apigee.v1.ApiProxyService`

Operations associated with the development of API Proxies within the Apigee Management Console.

#### Methods

- `CreateApiProxyRevision`  
  Triggered when an API Proxy revision is created. This includes when an API Proxy is first created.
- `DeleteApiProxy`  
  Triggered when an API Proxy is deleted.
- `DeleteApiProxyRevision`  
  Triggered when an API Proxy revision is deleted.
- `UpdateApiProxyRevision`  
  Triggered when an API Proxy revision is updated.

#### Key Data Elements

- `data.protoPayload.request.name`  
  The name of the API proxy.
- `data.protoPayload.response.description`  
  The description associated with the API Proxy.
- `data.protoPayload.response.revision`  
  The revision number associated with the API Proxy.

---

### Deployment Service

`google.cloud.apigee.v1.DeploymentService`

Operations associated with the deployment of API proxies and shared flows.

#### Methods

- `AttachSharedFlowToFlowHook`  
  Triggered when a shared flow is associated with a flow hook.
- `DeployApiProxy`  
  Triggered when an API proxy is deployed to an environment.
- `DeploySharedFlow`  
  Triggered when a shared flow is deployed to an environment.
- `GenerateDeployChangeReport`  
  Triggered after a deployment has finished.
- `UndeployApiProxy`  
  Triggered when an API proxy is undeployed from an environment.
- `UndeploySharedFlow`  
  Triggered when a shared flow is undeployed from an environment.

#### Key Data Elements

- `protoPayload.response.apiProxy`  
  The name of the API proxy or shared flow
- `protoPayload.response.environment`  
  The environment where the operation occurred
- `protoPayload.response.revision`
  The revision number of the API proxy or shared flow

---

### Developer App Keys

`google.cloud.apigee.v1.DeveloperAppKeys`

Operations associated with the management of app API keys.

#### Methods

- `CreateDeveloperAppKey`  
  Triggered when a new app key is created.
- `DeleteApiProduct`  
  Triggered when an API product is removed from an app.
- `DeleteDeveloperAppKey`  
  Triggered when an app key is deleted.
- `UpdateDeveloperAppKey`  
  Triggered when an app key is updated.
- `UpdateDeveloperAppKeyApiProduct`  
  Triggered when an API product is added to an app key.

#### Key Data Elements

- API Product subscription requests are not captured within the log records as that information is typically sent in the request body.

---

## Developer Apps

`google.cloud.apigee.v1.DeveloperApps`

Operations associated with the management of developer apps.

See [Developer App Keys](#developer-app-keys) for operations related to the management of app API keys.

#### Methods

- `CreateDeveloperApp`  
  Triggered when an app is created
- `DeleteDeveloperApp`  
  Triggered when an app is deleted
- `GenerateKeyPairOrUpdateDeveloperAppStatus`  
  Triggered when a new key is generated
- `UpdateDeveloperApp`  
  Triggered when an app is updated

#### Key Data Elements

- `data.protoPayload.resourceName`  
  Contains the full path for the resource, including organization id, developer id, and app name.
- `data.protoPayload.request.developerApp.name`  
  The name of the app. This value is immutable once an app has been created.
- `data.protoPayload.request.developerApp.apiProducts`  
  The API products associated with the app
- `data.protoPayload.request.developerApp.attributes`  
  An array of attributes (display name, description, etc.) associated with the app. Each attribute is a mapping containing entries for `name` and `value`.
- `data.protoPayload.response.appId`  
  The guid of the app.
- `data.protoPayload.response.developerId`  
  The guid of the developer.

---

### Developers

`google.cloud.apigee.v1.Developers`

Operations associated to the management of developers (users) within the Apigee Management Console.

#### Methods

- `CreateDeveloper`  
  Triggered when a developer account is created.
- `DeleteDeveloper`  
  Triggered when a developer account is deleted.
- `SetDeveloperStatus`  
  Triggered when a developer account status (active/inactive) is modified.
- `UpdateDeveloper`  
  Triggered when a developer account is updated.

#### Key Data Elements

- `protoPayload.response.developerId`  
  The guid of the developer resource.
- `protoPayload.response.email`  
  The email associated with the developer resource.
- `protoPayload.response.status`  
  The status of the developer resource.

---

### Environment Service

`google.cloud.apigee.v1.EnvironmentService`

#### Methods

- `Subscribe`  
  Triggered when an Apigee environment is deployed to a runtime instance.
- `Unsubscribe`  
  Triggered when an Apigee environment is detached from a runtime instance.

#### Key Data Elements

todo: key data elements

---

### Key Value Map Service

`google.cloud.apigee.v1.KeyValueMapService`

#### Methods

- `CreateKeyValueEntry`  
  Triggered when a KVM value is created
- `DeleteKeyValueEntry`  
  Triggered when a KVM value is deleted

#### Key Data Elements

---

### Pages

`google.cloud.apigee.v1.Pages`

#### Methods

- `PublishPage`  
  Triggered when a portal page is published
- `SetPageContent`  
  Triggered when a portal page is updated

#### Key Data Elements

- `protoPayload.request.body.content`  
  The page content.
- `protoPayload.response.status`  
  The status indicator of the response
- `protoPayload.response.message`  
  The status message of the resposne.

---

### Runtime Service

`google.cloud.apigee.v1.RuntimeService`

Operations associated with the management and operation of the Apigee runtime instances.

#### Methods

- `ReportInstanceStatus`  
  Triggered by GCP/Apigee's internal instance status checks

#### Key Data Elements

- `protoPayload.request.instance`  
  The path to associated with the runtime instance.
- `protoPayload.request.instanceUid`  
  The uid of the runtime instance.
- `protoPayload.request.reportTime`  
  The timestamp of the instance report.
- `protoPayload.request.resources[].resource`  
  The name of the enviornment group housed within the instance.
- `protoPayload.request.resources[].revisions`  
  The number of revisions associated with the environment group.
- `protoPayload.request.resources[].uid`  
  The uid of the environment group.

---

### Shared Flow Service

`google.cloud.apigee.v1.SharedFlowService`

Operations associated with the development and management of shared flows.

#### Methods

- `CreateSharedFlowRevision`  
  Triggered when a shared flow revision is created
- `UpdateSharedFlowRevision`  
  Triggered when a shared flow revision is saved/updated

#### Key Data Elements

- `protoPayload.response.description`  
  The description of the shared flow
- `protoPayload.response.name`  
  The name of the shared flow
- `protoPayload.response.revision`  
  The revision number of the shared flow

---

### Target Server Service

`google.cloud.apigee.v1.TargetServerService`

Operations associated with the management of target servers within an Apigee organization.

#### Methods

- `CreateTargetServer`  
  Triggered when a target server is created
- `DeleteTargetServer`
  Triggered when a target server is deleted
- `UpdateTargetServer`  
  Triggered when a target server is updated

#### Key Data Elements

- `protoPayload.response.host`  
  The host of the target server.
- `protoPayload.response.isEnabled`  
  Boolean value indicating whether the target server is enabled.
- `protoPayload.response.name`  
  The name of the target server.
- `protoPayload.response.port`
  The port of the target server.
- `protoPayload.response.protocol`
  The protocol of the target server.

## Common Key Data Elements

The following data elements are included in every Apigee Management Console log record and are generally useful in any context:

- `data.protoPayload.authenticationInfo.principalEmail`  
  The email of the user making the request
- `protoPayload.authorizationInfo.permission`  
  The permission required to perform the logged action.
- `data.protoPayload.requestMetadata.requestAttributes.time`  
  The ISO 8601 timestamp for the original request
- `data.ProtoPayload.requestMetadata.callerIp`  
  The IP address associated with the original request.
- `data.resource.labels.project_id`  
  The ID of the Apigee project that handled the request.
- `protoPayload.resourceName`  
  The URI of the resource being acted upon. Typically this will include all of the identifiers required to access the resource.
- `protoPayload.severity`  
  The severity of the log record (`ERROR`, `NOTICE`, etc.)
