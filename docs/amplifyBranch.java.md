# `amplifyBranch` Submodule <a name="`amplifyBranch` Submodule" id="@cdktf/provider-aws.amplifyBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyBranch <a name="AmplifyBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch aws_amplify_branch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_branch.AmplifyBranch;

AmplifyBranch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appId(java.lang.String)
    .branchName(java.lang.String)
//  .backendEnvironmentArn(java.lang.String)
//  .basicAuthCredentials(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enableAutoBuild(java.lang.Boolean)
//  .enableAutoBuild(IResolvable)
//  .enableBasicAuth(java.lang.Boolean)
//  .enableBasicAuth(IResolvable)
//  .enableNotification(java.lang.Boolean)
//  .enableNotification(IResolvable)
//  .enablePerformanceMode(java.lang.Boolean)
//  .enablePerformanceMode(IResolvable)
//  .enablePullRequestPreview(java.lang.Boolean)
//  .enablePullRequestPreview(IResolvable)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .framework(java.lang.String)
//  .id(java.lang.String)
//  .pullRequestEnvironmentName(java.lang.String)
//  .stage(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.backendEnvironmentArn">backendEnvironmentArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.basicAuthCredentials">basicAuthCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableAutoBuild">enableAutoBuild</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableBasicAuth">enableBasicAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableNotification">enableNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePerformanceMode">enablePerformanceMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.framework">framework</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.branchName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backendEnvironmentArn`<sup>Optional</sup> <a name="backendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.backendEnvironmentArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}.

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.basicAuthCredentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}.

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="enableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableAutoBuild"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableBasicAuth"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `enableNotification`<sup>Optional</sup> <a name="enableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableNotification"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}.

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="enablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePerformanceMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="enablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePullRequestPreview"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.framework"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="pullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.pullRequestEnvironmentName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.stage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn">resetBackendEnvironmentArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials">resetBasicAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild">resetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth">resetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification">resetEnableNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode">resetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview">resetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework">resetFramework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName">resetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBackendEnvironmentArn` <a name="resetBackendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn"></a>

```java
public void resetBackendEnvironmentArn()
```

##### `resetBasicAuthCredentials` <a name="resetBasicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials"></a>

```java
public void resetBasicAuthCredentials()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnableAutoBuild` <a name="resetEnableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild"></a>

```java
public void resetEnableAutoBuild()
```

##### `resetEnableBasicAuth` <a name="resetEnableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth"></a>

```java
public void resetEnableBasicAuth()
```

##### `resetEnableNotification` <a name="resetEnableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification"></a>

```java
public void resetEnableNotification()
```

##### `resetEnablePerformanceMode` <a name="resetEnablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode"></a>

```java
public void resetEnablePerformanceMode()
```

##### `resetEnablePullRequestPreview` <a name="resetEnablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview"></a>

```java
public void resetEnablePullRequestPreview()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetFramework` <a name="resetFramework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework"></a>

```java
public void resetFramework()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId"></a>

```java
public void resetId()
```

##### `resetPullRequestEnvironmentName` <a name="resetPullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName"></a>

```java
public void resetPullRequestEnvironmentName()
```

##### `resetStage` <a name="resetStage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage"></a>

```java
public void resetStage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_branch.AmplifyBranch;

AmplifyBranch.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_branch.AmplifyBranch;

AmplifyBranch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_branch.AmplifyBranch;

AmplifyBranch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources">associatedResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains">customDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch">destinationBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch">sourceBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput">backendEnvironmentArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput">basicAuthCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput">enableAutoBuildInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput">enableBasicAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput">enableNotificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput">enablePerformanceModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput">enablePullRequestPreviewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput">frameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput">pullRequestEnvironmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn">backendEnvironmentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials">basicAuthCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild">enableAutoBuild</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth">enableBasicAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification">enableNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associatedResources`<sup>Required</sup> <a name="associatedResources" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources"></a>

```java
public java.util.List<java.lang.String> getAssociatedResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDomains`<sup>Required</sup> <a name="customDomains" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains"></a>

```java
public java.util.List<java.lang.String> getCustomDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationBranch`<sup>Required</sup> <a name="destinationBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch"></a>

```java
public java.lang.String getDestinationBranch();
```

- *Type:* java.lang.String

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch"></a>

```java
public java.lang.String getSourceBranch();
```

- *Type:* java.lang.String

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `backendEnvironmentArnInput`<sup>Optional</sup> <a name="backendEnvironmentArnInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput"></a>

```java
public java.lang.String getBackendEnvironmentArnInput();
```

- *Type:* java.lang.String

---

##### `basicAuthCredentialsInput`<sup>Optional</sup> <a name="basicAuthCredentialsInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput"></a>

```java
public java.lang.String getBasicAuthCredentialsInput();
```

- *Type:* java.lang.String

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enableAutoBuildInput`<sup>Optional</sup> <a name="enableAutoBuildInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput"></a>

```java
public java.lang.Object getEnableAutoBuildInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableBasicAuthInput`<sup>Optional</sup> <a name="enableBasicAuthInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput"></a>

```java
public java.lang.Object getEnableBasicAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableNotificationInput`<sup>Optional</sup> <a name="enableNotificationInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput"></a>

```java
public java.lang.Object getEnableNotificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePerformanceModeInput`<sup>Optional</sup> <a name="enablePerformanceModeInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput"></a>

```java
public java.lang.Object getEnablePerformanceModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePullRequestPreviewInput`<sup>Optional</sup> <a name="enablePullRequestPreviewInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput"></a>

```java
public java.lang.Object getEnablePullRequestPreviewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput"></a>

```java
public java.lang.String getFrameworkInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="pullRequestEnvironmentNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput"></a>

```java
public java.lang.String getPullRequestEnvironmentNameInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `backendEnvironmentArn`<sup>Required</sup> <a name="backendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn"></a>

```java
public java.lang.String getBackendEnvironmentArn();
```

- *Type:* java.lang.String

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials"></a>

```java
public java.lang.String getBasicAuthCredentials();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enableAutoBuild`<sup>Required</sup> <a name="enableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild"></a>

```java
public java.lang.Object getEnableAutoBuild();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth"></a>

```java
public java.lang.Object getEnableBasicAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableNotification`<sup>Required</sup> <a name="enableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification"></a>

```java
public java.lang.Object getEnableNotification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="enablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode"></a>

```java
public java.lang.Object getEnablePerformanceMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="enablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview"></a>

```java
public java.lang.Object getEnablePullRequestPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="pullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName"></a>

```java
public java.lang.String getPullRequestEnvironmentName();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyBranchConfig <a name="AmplifyBranchConfig" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_branch.AmplifyBranchConfig;

AmplifyBranchConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appId(java.lang.String)
    .branchName(java.lang.String)
//  .backendEnvironmentArn(java.lang.String)
//  .basicAuthCredentials(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .enableAutoBuild(java.lang.Boolean)
//  .enableAutoBuild(IResolvable)
//  .enableBasicAuth(java.lang.Boolean)
//  .enableBasicAuth(IResolvable)
//  .enableNotification(java.lang.Boolean)
//  .enableNotification(IResolvable)
//  .enablePerformanceMode(java.lang.Boolean)
//  .enablePerformanceMode(IResolvable)
//  .enablePullRequestPreview(java.lang.Boolean)
//  .enablePullRequestPreview(IResolvable)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .framework(java.lang.String)
//  .id(java.lang.String)
//  .pullRequestEnvironmentName(java.lang.String)
//  .stage(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn">backendEnvironmentArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials">basicAuthCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild">enableAutoBuild</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth">enableBasicAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification">enableNotification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework">framework</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backendEnvironmentArn`<sup>Optional</sup> <a name="backendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn"></a>

```java
public java.lang.String getBackendEnvironmentArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}.

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials"></a>

```java
public java.lang.String getBasicAuthCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}.

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="enableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild"></a>

```java
public java.lang.Object getEnableAutoBuild();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth"></a>

```java
public java.lang.Object getEnableBasicAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `enableNotification`<sup>Optional</sup> <a name="enableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification"></a>

```java
public java.lang.Object getEnableNotification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}.

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="enablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode"></a>

```java
public java.lang.Object getEnablePerformanceMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="enablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview"></a>

```java
public java.lang.Object getEnablePullRequestPreview();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="pullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName"></a>

```java
public java.lang.String getPullRequestEnvironmentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}.

---



