# `amplifyBranch` Submodule <a name="`amplifyBranch` Submodule" id="@cdktf/provider-aws.amplifyBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyBranch <a name="AmplifyBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch aws_amplify_branch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_branch

amplifyBranch.AmplifyBranch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  branch_name: str,
  backend_environment_arn: str = None,
  basic_auth_credentials: str = None,
  description: str = None,
  display_name: str = None,
  enable_auto_build: typing.Union[bool, IResolvable] = None,
  enable_basic_auth: typing.Union[bool, IResolvable] = None,
  enable_notification: typing.Union[bool, IResolvable] = None,
  enable_performance_mode: typing.Union[bool, IResolvable] = None,
  enable_pull_request_preview: typing.Union[bool, IResolvable] = None,
  environment_variables: typing.Mapping[str] = None,
  framework: str = None,
  id: str = None,
  pull_request_environment_name: str = None,
  stage: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.backendEnvironmentArn">backend_environment_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.basicAuthCredentials">basic_auth_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableAutoBuild">enable_auto_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableBasicAuth">enable_basic_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableNotification">enable_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePerformanceMode">enable_performance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.framework">framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.branchName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backend_environment_arn`<sup>Optional</sup> <a name="backend_environment_arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.backendEnvironmentArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}.

---

##### `basic_auth_credentials`<sup>Optional</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.basicAuthCredentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}.

---

##### `enable_auto_build`<sup>Optional</sup> <a name="enable_auto_build" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableAutoBuild"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableBasicAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `enable_notification`<sup>Optional</sup> <a name="enable_notification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enableNotification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}.

---

##### `enable_performance_mode`<sup>Optional</sup> <a name="enable_performance_mode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePerformanceMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enable_pull_request_preview`<sup>Optional</sup> <a name="enable_pull_request_preview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePullRequestPreview"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.framework"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pull_request_environment_name`<sup>Optional</sup> <a name="pull_request_environment_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.pullRequestEnvironmentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.stage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.ttl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn">reset_backend_environment_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials">reset_basic_auth_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild">reset_enable_auto_build</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth">reset_enable_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification">reset_enable_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode">reset_enable_performance_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview">reset_enable_pull_request_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework">reset_framework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName">reset_pull_request_environment_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage">reset_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_backend_environment_arn` <a name="reset_backend_environment_arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn"></a>

```python
def reset_backend_environment_arn() -> None
```

##### `reset_basic_auth_credentials` <a name="reset_basic_auth_credentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials"></a>

```python
def reset_basic_auth_credentials() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_auto_build` <a name="reset_enable_auto_build" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild"></a>

```python
def reset_enable_auto_build() -> None
```

##### `reset_enable_basic_auth` <a name="reset_enable_basic_auth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth"></a>

```python
def reset_enable_basic_auth() -> None
```

##### `reset_enable_notification` <a name="reset_enable_notification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification"></a>

```python
def reset_enable_notification() -> None
```

##### `reset_enable_performance_mode` <a name="reset_enable_performance_mode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode"></a>

```python
def reset_enable_performance_mode() -> None
```

##### `reset_enable_pull_request_preview` <a name="reset_enable_pull_request_preview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview"></a>

```python
def reset_enable_pull_request_preview() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_framework` <a name="reset_framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework"></a>

```python
def reset_framework() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pull_request_environment_name` <a name="reset_pull_request_environment_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName"></a>

```python
def reset_pull_request_environment_name() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage"></a>

```python
def reset_stage() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import amplify_branch

amplifyBranch.AmplifyBranch.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import amplify_branch

amplifyBranch.AmplifyBranch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import amplify_branch

amplifyBranch.AmplifyBranch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources">associated_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains">custom_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch">destination_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch">source_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput">backend_environment_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput">basic_auth_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput">enable_auto_build_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput">enable_basic_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput">enable_notification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput">enable_performance_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput">enable_pull_request_preview_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput">pull_request_environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn">backend_environment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials">basic_auth_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild">enable_auto_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth">enable_basic_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification">enable_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associated_resources`<sup>Required</sup> <a name="associated_resources" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources"></a>

```python
associated_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_domains`<sup>Required</sup> <a name="custom_domains" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains"></a>

```python
custom_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_branch`<sup>Required</sup> <a name="destination_branch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch"></a>

```python
destination_branch: str
```

- *Type:* str

---

##### `source_branch`<sup>Required</sup> <a name="source_branch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch"></a>

```python
source_branch: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `backend_environment_arn_input`<sup>Optional</sup> <a name="backend_environment_arn_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput"></a>

```python
backend_environment_arn_input: str
```

- *Type:* str

---

##### `basic_auth_credentials_input`<sup>Optional</sup> <a name="basic_auth_credentials_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput"></a>

```python
basic_auth_credentials_input: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_auto_build_input`<sup>Optional</sup> <a name="enable_auto_build_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput"></a>

```python
enable_auto_build_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_basic_auth_input`<sup>Optional</sup> <a name="enable_basic_auth_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput"></a>

```python
enable_basic_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_notification_input`<sup>Optional</sup> <a name="enable_notification_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput"></a>

```python
enable_notification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_performance_mode_input`<sup>Optional</sup> <a name="enable_performance_mode_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput"></a>

```python
enable_performance_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_pull_request_preview_input`<sup>Optional</sup> <a name="enable_pull_request_preview_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput"></a>

```python
enable_pull_request_preview_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pull_request_environment_name_input`<sup>Optional</sup> <a name="pull_request_environment_name_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput"></a>

```python
pull_request_environment_name_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `backend_environment_arn`<sup>Required</sup> <a name="backend_environment_arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn"></a>

```python
backend_environment_arn: str
```

- *Type:* str

---

##### `basic_auth_credentials`<sup>Required</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials"></a>

```python
basic_auth_credentials: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_auto_build`<sup>Required</sup> <a name="enable_auto_build" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild"></a>

```python
enable_auto_build: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_basic_auth`<sup>Required</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth"></a>

```python
enable_basic_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_notification`<sup>Required</sup> <a name="enable_notification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification"></a>

```python
enable_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_performance_mode`<sup>Required</sup> <a name="enable_performance_mode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode"></a>

```python
enable_performance_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_pull_request_preview`<sup>Required</sup> <a name="enable_pull_request_preview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pull_request_environment_name`<sup>Required</sup> <a name="pull_request_environment_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyBranchConfig <a name="AmplifyBranchConfig" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_branch

amplifyBranch.AmplifyBranchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  branch_name: str,
  backend_environment_arn: str = None,
  basic_auth_credentials: str = None,
  description: str = None,
  display_name: str = None,
  enable_auto_build: typing.Union[bool, IResolvable] = None,
  enable_basic_auth: typing.Union[bool, IResolvable] = None,
  enable_notification: typing.Union[bool, IResolvable] = None,
  enable_performance_mode: typing.Union[bool, IResolvable] = None,
  enable_pull_request_preview: typing.Union[bool, IResolvable] = None,
  environment_variables: typing.Mapping[str] = None,
  framework: str = None,
  id: str = None,
  pull_request_environment_name: str = None,
  stage: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn">backend_environment_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials">basic_auth_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild">enable_auto_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth">enable_basic_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification">enable_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework">framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl">ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backend_environment_arn`<sup>Optional</sup> <a name="backend_environment_arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn"></a>

```python
backend_environment_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}.

---

##### `basic_auth_credentials`<sup>Optional</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials"></a>

```python
basic_auth_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}.

---

##### `enable_auto_build`<sup>Optional</sup> <a name="enable_auto_build" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild"></a>

```python
enable_auto_build: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth"></a>

```python
enable_basic_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `enable_notification`<sup>Optional</sup> <a name="enable_notification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification"></a>

```python
enable_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}.

---

##### `enable_performance_mode`<sup>Optional</sup> <a name="enable_performance_mode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode"></a>

```python
enable_performance_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enable_pull_request_preview`<sup>Optional</sup> <a name="enable_pull_request_preview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework"></a>

```python
framework: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pull_request_environment_name`<sup>Optional</sup> <a name="pull_request_environment_name" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage"></a>

```python
stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}.

---



