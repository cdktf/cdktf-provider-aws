# `amplifyApp` Submodule <a name="`amplifyApp` Submodule" id="@cdktf/provider-aws.amplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyApp <a name="AmplifyApp" id="@cdktf/provider-aws.amplifyApp.AmplifyApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app aws_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_token: str = None,
  auto_branch_creation_config: AmplifyAppAutoBranchCreationConfig = None,
  auto_branch_creation_patterns: typing.List[str] = None,
  basic_auth_credentials: str = None,
  build_spec: str = None,
  custom_rule: typing.Union[IResolvable, typing.List[AmplifyAppCustomRule]] = None,
  description: str = None,
  enable_auto_branch_creation: typing.Union[bool, IResolvable] = None,
  enable_basic_auth: typing.Union[bool, IResolvable] = None,
  enable_branch_auto_build: typing.Union[bool, IResolvable] = None,
  enable_branch_auto_deletion: typing.Union[bool, IResolvable] = None,
  environment_variables: typing.Mapping[str] = None,
  iam_service_role_arn: str = None,
  id: str = None,
  oauth_token: str = None,
  platform: str = None,
  repository: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.autoBranchCreationConfig">auto_branch_creation_config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | auto_branch_creation_config block. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.autoBranchCreationPatterns">auto_branch_creation_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.basicAuthCredentials">basic_auth_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.buildSpec">build_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.customRule">custom_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.enableAutoBranchCreation">enable_auto_branch_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.enableBasicAuth">enable_basic_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.enableBranchAutoBuild">enable_branch_auto_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.enableBranchAutoDeletion">enable_branch_auto_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.iamServiceRoleArn">iam_service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.oauthToken">oauth_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}.

---

##### `auto_branch_creation_config`<sup>Optional</sup> <a name="auto_branch_creation_config" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.autoBranchCreationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

auto_branch_creation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}

---

##### `auto_branch_creation_patterns`<sup>Optional</sup> <a name="auto_branch_creation_patterns" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.autoBranchCreationPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

##### `basic_auth_credentials`<sup>Optional</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.basicAuthCredentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}.

---

##### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.buildSpec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `custom_rule`<sup>Optional</sup> <a name="custom_rule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.customRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]

custom_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#custom_rule AmplifyApp#custom_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}.

---

##### `enable_auto_branch_creation`<sup>Optional</sup> <a name="enable_auto_branch_creation" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.enableAutoBranchCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

##### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.enableBasicAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `enable_branch_auto_build`<sup>Optional</sup> <a name="enable_branch_auto_build" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.enableBranchAutoBuild"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}.

---

##### `enable_branch_auto_deletion`<sup>Optional</sup> <a name="enable_branch_auto_deletion" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.enableBranchAutoDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `iam_service_role_arn`<sup>Optional</sup> <a name="iam_service_role_arn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.iamServiceRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.oauthToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig">put_auto_branch_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule">put_custom_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig">reset_auto_branch_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationPatterns">reset_auto_branch_creation_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBasicAuthCredentials">reset_basic_auth_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBuildSpec">reset_build_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetCustomRule">reset_custom_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableAutoBranchCreation">reset_enable_auto_branch_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBasicAuth">reset_enable_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoBuild">reset_enable_branch_auto_build</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion">reset_enable_branch_auto_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetIamServiceRoleArn">reset_iam_service_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOauthToken">reset_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auto_branch_creation_config` <a name="put_auto_branch_creation_config" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig"></a>

```python
def put_auto_branch_creation_config(
  basic_auth_credentials: str = None,
  build_spec: str = None,
  enable_auto_build: typing.Union[bool, IResolvable] = None,
  enable_basic_auth: typing.Union[bool, IResolvable] = None,
  enable_performance_mode: typing.Union[bool, IResolvable] = None,
  enable_pull_request_preview: typing.Union[bool, IResolvable] = None,
  environment_variables: typing.Mapping[str] = None,
  framework: str = None,
  pull_request_environment_name: str = None,
  stage: str = None
) -> None
```

###### `basic_auth_credentials`<sup>Optional</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.basicAuthCredentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}.

---

###### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.buildSpec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}.

---

###### `enable_auto_build`<sup>Optional</sup> <a name="enable_auto_build" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.enableAutoBuild"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

###### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.enableBasicAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

###### `enable_performance_mode`<sup>Optional</sup> <a name="enable_performance_mode" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.enablePerformanceMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

###### `enable_pull_request_preview`<sup>Optional</sup> <a name="enable_pull_request_preview" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.enablePullRequestPreview"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

###### `framework`<sup>Optional</sup> <a name="framework" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.framework"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#framework AmplifyApp#framework}.

---

###### `pull_request_environment_name`<sup>Optional</sup> <a name="pull_request_environment_name" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.pullRequestEnvironmentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

###### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.stage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#stage AmplifyApp#stage}.

---

##### `put_custom_rule` <a name="put_custom_rule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule"></a>

```python
def put_custom_rule(
  value: typing.Union[IResolvable, typing.List[AmplifyAppCustomRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]

---

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_auto_branch_creation_config` <a name="reset_auto_branch_creation_config" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig"></a>

```python
def reset_auto_branch_creation_config() -> None
```

##### `reset_auto_branch_creation_patterns` <a name="reset_auto_branch_creation_patterns" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationPatterns"></a>

```python
def reset_auto_branch_creation_patterns() -> None
```

##### `reset_basic_auth_credentials` <a name="reset_basic_auth_credentials" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBasicAuthCredentials"></a>

```python
def reset_basic_auth_credentials() -> None
```

##### `reset_build_spec` <a name="reset_build_spec" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBuildSpec"></a>

```python
def reset_build_spec() -> None
```

##### `reset_custom_rule` <a name="reset_custom_rule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetCustomRule"></a>

```python
def reset_custom_rule() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_auto_branch_creation` <a name="reset_enable_auto_branch_creation" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableAutoBranchCreation"></a>

```python
def reset_enable_auto_branch_creation() -> None
```

##### `reset_enable_basic_auth` <a name="reset_enable_basic_auth" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBasicAuth"></a>

```python
def reset_enable_basic_auth() -> None
```

##### `reset_enable_branch_auto_build` <a name="reset_enable_branch_auto_build" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoBuild"></a>

```python
def reset_enable_branch_auto_build() -> None
```

##### `reset_enable_branch_auto_deletion` <a name="reset_enable_branch_auto_deletion" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion"></a>

```python
def reset_enable_branch_auto_deletion() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_iam_service_role_arn` <a name="reset_iam_service_role_arn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetIamServiceRoleArn"></a>

```python
def reset_iam_service_role_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfig">auto_branch_creation_config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRule">custom_rule</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList">AmplifyAppCustomRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.defaultDomain">default_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.productionBranch">production_branch</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList">AmplifyAppProductionBranchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput">auto_branch_creation_config_input</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatternsInput">auto_branch_creation_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentialsInput">basic_auth_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpecInput">build_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRuleInput">custom_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreationInput">enable_auto_branch_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuthInput">enable_basic_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuildInput">enable_branch_auto_build_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput">enable_branch_auto_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArnInput">iam_service_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthTokenInput">oauth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatterns">auto_branch_creation_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentials">basic_auth_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpec">build_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreation">enable_auto_branch_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuth">enable_basic_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuild">enable_branch_auto_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion">enable_branch_auto_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArn">iam_service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthToken">oauth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_branch_creation_config`<sup>Required</sup> <a name="auto_branch_creation_config" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfig"></a>

```python
auto_branch_creation_config: AmplifyAppAutoBranchCreationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `custom_rule`<sup>Required</sup> <a name="custom_rule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRule"></a>

```python
custom_rule: AmplifyAppCustomRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList">AmplifyAppCustomRuleList</a>

---

##### `default_domain`<sup>Required</sup> <a name="default_domain" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.defaultDomain"></a>

```python
default_domain: str
```

- *Type:* str

---

##### `production_branch`<sup>Required</sup> <a name="production_branch" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.productionBranch"></a>

```python
production_branch: AmplifyAppProductionBranchList
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList">AmplifyAppProductionBranchList</a>

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `auto_branch_creation_config_input`<sup>Optional</sup> <a name="auto_branch_creation_config_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput"></a>

```python
auto_branch_creation_config_input: AmplifyAppAutoBranchCreationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `auto_branch_creation_patterns_input`<sup>Optional</sup> <a name="auto_branch_creation_patterns_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatternsInput"></a>

```python
auto_branch_creation_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `basic_auth_credentials_input`<sup>Optional</sup> <a name="basic_auth_credentials_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentialsInput"></a>

```python
basic_auth_credentials_input: str
```

- *Type:* str

---

##### `build_spec_input`<sup>Optional</sup> <a name="build_spec_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpecInput"></a>

```python
build_spec_input: str
```

- *Type:* str

---

##### `custom_rule_input`<sup>Optional</sup> <a name="custom_rule_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRuleInput"></a>

```python
custom_rule_input: typing.Union[IResolvable, typing.List[AmplifyAppCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_auto_branch_creation_input`<sup>Optional</sup> <a name="enable_auto_branch_creation_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreationInput"></a>

```python
enable_auto_branch_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_basic_auth_input`<sup>Optional</sup> <a name="enable_basic_auth_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuthInput"></a>

```python
enable_basic_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_branch_auto_build_input`<sup>Optional</sup> <a name="enable_branch_auto_build_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuildInput"></a>

```python
enable_branch_auto_build_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_branch_auto_deletion_input`<sup>Optional</sup> <a name="enable_branch_auto_deletion_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput"></a>

```python
enable_branch_auto_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `iam_service_role_arn_input`<sup>Optional</sup> <a name="iam_service_role_arn_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArnInput"></a>

```python
iam_service_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthTokenInput"></a>

```python
oauth_token_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `auto_branch_creation_patterns`<sup>Required</sup> <a name="auto_branch_creation_patterns" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatterns"></a>

```python
auto_branch_creation_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `basic_auth_credentials`<sup>Required</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentials"></a>

```python
basic_auth_credentials: str
```

- *Type:* str

---

##### `build_spec`<sup>Required</sup> <a name="build_spec" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_auto_branch_creation`<sup>Required</sup> <a name="enable_auto_branch_creation" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreation"></a>

```python
enable_auto_branch_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_basic_auth`<sup>Required</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuth"></a>

```python
enable_basic_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_branch_auto_build`<sup>Required</sup> <a name="enable_branch_auto_build" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuild"></a>

```python
enable_branch_auto_build: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_branch_auto_deletion`<sup>Required</sup> <a name="enable_branch_auto_deletion" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion"></a>

```python
enable_branch_auto_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `iam_service_role_arn`<sup>Required</sup> <a name="iam_service_role_arn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArn"></a>

```python
iam_service_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyAppAutoBranchCreationConfig <a name="AmplifyAppAutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfig(
  basic_auth_credentials: str = None,
  build_spec: str = None,
  enable_auto_build: typing.Union[bool, IResolvable] = None,
  enable_basic_auth: typing.Union[bool, IResolvable] = None,
  enable_performance_mode: typing.Union[bool, IResolvable] = None,
  enable_pull_request_preview: typing.Union[bool, IResolvable] = None,
  environment_variables: typing.Mapping[str] = None,
  framework: str = None,
  pull_request_environment_name: str = None,
  stage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthCredentials">basic_auth_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec">build_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild">enable_auto_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableBasicAuth">enable_basic_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework">framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#framework AmplifyApp#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#stage AmplifyApp#stage}. |

---

##### `basic_auth_credentials`<sup>Optional</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthCredentials"></a>

```python
basic_auth_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}.

---

##### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `enable_auto_build`<sup>Optional</sup> <a name="enable_auto_build" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

```python
enable_auto_build: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

##### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableBasicAuth"></a>

```python
enable_basic_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `enable_performance_mode`<sup>Optional</sup> <a name="enable_performance_mode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

```python
enable_performance_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

##### `enable_pull_request_preview`<sup>Optional</sup> <a name="enable_pull_request_preview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework"></a>

```python
framework: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#framework AmplifyApp#framework}.

---

##### `pull_request_environment_name`<sup>Optional</sup> <a name="pull_request_environment_name" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage"></a>

```python
stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#stage AmplifyApp#stage}.

---

### AmplifyAppConfig <a name="AmplifyAppConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_token: str = None,
  auto_branch_creation_config: AmplifyAppAutoBranchCreationConfig = None,
  auto_branch_creation_patterns: typing.List[str] = None,
  basic_auth_credentials: str = None,
  build_spec: str = None,
  custom_rule: typing.Union[IResolvable, typing.List[AmplifyAppCustomRule]] = None,
  description: str = None,
  enable_auto_branch_creation: typing.Union[bool, IResolvable] = None,
  enable_basic_auth: typing.Union[bool, IResolvable] = None,
  enable_branch_auto_build: typing.Union[bool, IResolvable] = None,
  enable_branch_auto_deletion: typing.Union[bool, IResolvable] = None,
  environment_variables: typing.Mapping[str] = None,
  iam_service_role_arn: str = None,
  id: str = None,
  oauth_token: str = None,
  platform: str = None,
  repository: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig">auto_branch_creation_config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | auto_branch_creation_config block. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationPatterns">auto_branch_creation_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.basicAuthCredentials">basic_auth_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.buildSpec">build_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.customRule">custom_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableAutoBranchCreation">enable_auto_branch_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBasicAuth">enable_basic_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoBuild">enable_branch_auto_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion">enable_branch_auto_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.iamServiceRoleArn">iam_service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.oauthToken">oauth_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}.

---

##### `auto_branch_creation_config`<sup>Optional</sup> <a name="auto_branch_creation_config" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig"></a>

```python
auto_branch_creation_config: AmplifyAppAutoBranchCreationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

auto_branch_creation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}

---

##### `auto_branch_creation_patterns`<sup>Optional</sup> <a name="auto_branch_creation_patterns" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationPatterns"></a>

```python
auto_branch_creation_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

##### `basic_auth_credentials`<sup>Optional</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.basicAuthCredentials"></a>

```python
basic_auth_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}.

---

##### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `custom_rule`<sup>Optional</sup> <a name="custom_rule" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.customRule"></a>

```python
custom_rule: typing.Union[IResolvable, typing.List[AmplifyAppCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]

custom_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#custom_rule AmplifyApp#custom_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}.

---

##### `enable_auto_branch_creation`<sup>Optional</sup> <a name="enable_auto_branch_creation" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableAutoBranchCreation"></a>

```python
enable_auto_branch_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

##### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBasicAuth"></a>

```python
enable_basic_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `enable_branch_auto_build`<sup>Optional</sup> <a name="enable_branch_auto_build" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoBuild"></a>

```python
enable_branch_auto_build: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}.

---

##### `enable_branch_auto_deletion`<sup>Optional</sup> <a name="enable_branch_auto_deletion" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion"></a>

```python
enable_branch_auto_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `iam_service_role_arn`<sup>Optional</sup> <a name="iam_service_role_arn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.iamServiceRoleArn"></a>

```python
iam_service_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}.

---

### AmplifyAppCustomRule <a name="AmplifyAppCustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppCustomRule(
  source: str,
  target: str,
  condition: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#source AmplifyApp#source}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#target AmplifyApp#target}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#condition AmplifyApp#condition}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#status AmplifyApp#status}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#source AmplifyApp#source}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#target AmplifyApp#target}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#condition AmplifyApp#condition}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#status AmplifyApp#status}.

---

### AmplifyAppProductionBranch <a name="AmplifyAppProductionBranch" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppProductionBranch()
```


## Classes <a name="Classes" id="Classes"></a>

### AmplifyAppAutoBranchCreationConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthCredentials">reset_basic_auth_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec">reset_build_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild">reset_enable_auto_build</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableBasicAuth">reset_enable_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode">reset_enable_performance_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview">reset_enable_pull_request_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework">reset_framework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName">reset_pull_request_environment_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage">reset_stage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_basic_auth_credentials` <a name="reset_basic_auth_credentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthCredentials"></a>

```python
def reset_basic_auth_credentials() -> None
```

##### `reset_build_spec` <a name="reset_build_spec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec"></a>

```python
def reset_build_spec() -> None
```

##### `reset_enable_auto_build` <a name="reset_enable_auto_build" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild"></a>

```python
def reset_enable_auto_build() -> None
```

##### `reset_enable_basic_auth` <a name="reset_enable_basic_auth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableBasicAuth"></a>

```python
def reset_enable_basic_auth() -> None
```

##### `reset_enable_performance_mode` <a name="reset_enable_performance_mode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode"></a>

```python
def reset_enable_performance_mode() -> None
```

##### `reset_enable_pull_request_preview` <a name="reset_enable_pull_request_preview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview"></a>

```python
def reset_enable_pull_request_preview() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_framework` <a name="reset_framework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework"></a>

```python
def reset_framework() -> None
```

##### `reset_pull_request_environment_name` <a name="reset_pull_request_environment_name" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName"></a>

```python
def reset_pull_request_environment_name() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage"></a>

```python
def reset_stage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentialsInput">basic_auth_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput">build_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput">enable_auto_build_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuthInput">enable_basic_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput">enable_performance_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput">enable_pull_request_preview_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput">pull_request_environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentials">basic_auth_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">build_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">enable_auto_build</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuth">enable_basic_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth_credentials_input`<sup>Optional</sup> <a name="basic_auth_credentials_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentialsInput"></a>

```python
basic_auth_credentials_input: str
```

- *Type:* str

---

##### `build_spec_input`<sup>Optional</sup> <a name="build_spec_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput"></a>

```python
build_spec_input: str
```

- *Type:* str

---

##### `enable_auto_build_input`<sup>Optional</sup> <a name="enable_auto_build_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput"></a>

```python
enable_auto_build_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_basic_auth_input`<sup>Optional</sup> <a name="enable_basic_auth_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuthInput"></a>

```python
enable_basic_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_performance_mode_input`<sup>Optional</sup> <a name="enable_performance_mode_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput"></a>

```python
enable_performance_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_pull_request_preview_input`<sup>Optional</sup> <a name="enable_pull_request_preview_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput"></a>

```python
enable_pull_request_preview_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `pull_request_environment_name_input`<sup>Optional</sup> <a name="pull_request_environment_name_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput"></a>

```python
pull_request_environment_name_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `basic_auth_credentials`<sup>Required</sup> <a name="basic_auth_credentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentials"></a>

```python
basic_auth_credentials: str
```

- *Type:* str

---

##### `build_spec`<sup>Required</sup> <a name="build_spec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

---

##### `enable_auto_build`<sup>Required</sup> <a name="enable_auto_build" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```python
enable_auto_build: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_basic_auth`<sup>Required</sup> <a name="enable_basic_auth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuth"></a>

```python
enable_basic_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_performance_mode`<sup>Required</sup> <a name="enable_performance_mode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```python
enable_performance_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_pull_request_preview`<sup>Required</sup> <a name="enable_pull_request_preview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `pull_request_environment_name`<sup>Required</sup> <a name="pull_request_environment_name" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```python
internal_value: AmplifyAppAutoBranchCreationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---


### AmplifyAppCustomRuleList <a name="AmplifyAppCustomRuleList" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppCustomRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyAppCustomRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AmplifyAppCustomRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>]]

---


### AmplifyAppCustomRuleOutputReference <a name="AmplifyAppCustomRuleOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppCustomRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AmplifyAppCustomRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>, cdktf.IResolvable]

---


### AmplifyAppProductionBranchList <a name="AmplifyAppProductionBranchList" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppProductionBranchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyAppProductionBranchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AmplifyAppProductionBranchOutputReference <a name="AmplifyAppProductionBranchOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_app

amplifyApp.AmplifyAppProductionBranchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.lastDeployTime">last_deploy_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.thumbnailUrl">thumbnail_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch">AmplifyAppProductionBranch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `last_deploy_time`<sup>Required</sup> <a name="last_deploy_time" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.lastDeployTime"></a>

```python
last_deploy_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `thumbnail_url`<sup>Required</sup> <a name="thumbnail_url" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.thumbnailUrl"></a>

```python
thumbnail_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.internalValue"></a>

```python
internal_value: AmplifyAppProductionBranch
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch">AmplifyAppProductionBranch</a>

---



