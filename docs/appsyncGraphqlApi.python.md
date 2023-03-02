# `appsyncGraphqlApi` Submodule <a name="`appsyncGraphqlApi` Submodule" id="@cdktf/provider-aws.appsyncGraphqlApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncGraphqlApi <a name="AppsyncGraphqlApi" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api aws_appsync_graphql_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApi(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_type: str,
  name: str,
  additional_authentication_provider: typing.Union[IResolvable, typing.List[AppsyncGraphqlApiAdditionalAuthenticationProvider]] = None,
  id: str = None,
  lambda_authorizer_config: AppsyncGraphqlApiLambdaAuthorizerConfig = None,
  log_config: AppsyncGraphqlApiLogConfig = None,
  openid_connect_config: AppsyncGraphqlApiOpenidConnectConfig = None,
  schema: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_pool_config: AppsyncGraphqlApiUserPoolConfig = None,
  xray_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#name AppsyncGraphqlApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.additionalAuthenticationProvider">additional_authentication_provider</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]</code> | additional_authentication_provider block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#id AppsyncGraphqlApi#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.openidConnectConfig">openid_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#schema AppsyncGraphqlApi#schema}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags AppsyncGraphqlApi#tags}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | user_pool_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.xrayEnabled">xray_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#name AppsyncGraphqlApi#name}.

---

##### `additional_authentication_provider`<sup>Optional</sup> <a name="additional_authentication_provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.additionalAuthenticationProvider"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]

additional_authentication_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#id AppsyncGraphqlApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_authorizer_config`<sup>Optional</sup> <a name="lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.lambdaAuthorizerConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#log_config AppsyncGraphqlApi#log_config}

---

##### `openid_connect_config`<sup>Optional</sup> <a name="openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.openidConnectConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.schema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#schema AppsyncGraphqlApi#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags AppsyncGraphqlApi#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}.

---

##### `user_pool_config`<sup>Optional</sup> <a name="user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.userPoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

##### `xray_enabled`<sup>Optional</sup> <a name="xray_enabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.Initializer.parameter.xrayEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider">put_additional_authentication_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig">put_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig">put_openid_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig">put_user_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetAdditionalAuthenticationProvider">reset_additional_authentication_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLambdaAuthorizerConfig">reset_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOpenidConnectConfig">reset_openid_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetUserPoolConfig">reset_user_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetXrayEnabled">reset_xray_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_additional_authentication_provider` <a name="put_additional_authentication_provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider"></a>

```python
def put_additional_authentication_provider(
  value: typing.Union[IResolvable, typing.List[AppsyncGraphqlApiAdditionalAuthenticationProvider]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putAdditionalAuthenticationProvider.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]

---

##### `put_lambda_authorizer_config` <a name="put_lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig"></a>

```python
def put_lambda_authorizer_config(
  authorizer_uri: str,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  identity_validation_expression: str = None
) -> None
```

###### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig.parameter.authorizerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

###### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

###### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLambdaAuthorizerConfig.parameter.identityValidationExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig"></a>

```python
def put_log_config(
  cloudwatch_logs_role_arn: str,
  field_log_level: str,
  exclude_verbose_content: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig.parameter.cloudwatchLogsRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}.

---

###### `field_log_level`<sup>Required</sup> <a name="field_log_level" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig.parameter.fieldLogLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}.

---

###### `exclude_verbose_content`<sup>Optional</sup> <a name="exclude_verbose_content" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putLogConfig.parameter.excludeVerboseContent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}.

---

##### `put_openid_connect_config` <a name="put_openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig"></a>

```python
def put_openid_connect_config(
  issuer: str,
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None
) -> None
```

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

###### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig.parameter.authTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

###### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putOpenidConnectConfig.parameter.iatTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

##### `put_user_pool_config` <a name="put_user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig"></a>

```python
def put_user_pool_config(
  default_action: str,
  user_pool_id: str,
  app_id_client_regex: str = None,
  aws_region: str = None
) -> None
```

###### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}.

---

###### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

###### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig.parameter.appIdClientRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.putUserPoolConfig.parameter.awsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

##### `reset_additional_authentication_provider` <a name="reset_additional_authentication_provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetAdditionalAuthenticationProvider"></a>

```python
def reset_additional_authentication_provider() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lambda_authorizer_config` <a name="reset_lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLambdaAuthorizerConfig"></a>

```python
def reset_lambda_authorizer_config() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_openid_connect_config` <a name="reset_openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetOpenidConnectConfig"></a>

```python
def reset_openid_connect_config() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_user_pool_config` <a name="reset_user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetUserPoolConfig"></a>

```python
def reset_user_pool_config() -> None
```

##### `reset_xray_enabled` <a name="reset_xray_enabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.resetXrayEnabled"></a>

```python
def reset_xray_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProvider">additional_authentication_provider</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList">AppsyncGraphqlApiAdditionalAuthenticationProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference">AppsyncGraphqlApiLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfig">openid_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference">AppsyncGraphqlApiOpenidConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.uris">uris</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference">AppsyncGraphqlApiUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProviderInput">additional_authentication_provider_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfigInput">lambda_authorizer_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfigInput">openid_connect_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfigInput">user_pool_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabledInput">xray_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabled">xray_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_authentication_provider`<sup>Required</sup> <a name="additional_authentication_provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProvider"></a>

```python
additional_authentication_provider: AppsyncGraphqlApiAdditionalAuthenticationProviderList
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList">AppsyncGraphqlApiAdditionalAuthenticationProviderList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `lambda_authorizer_config`<sup>Required</sup> <a name="lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfig"></a>

```python
log_config: AppsyncGraphqlApiLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference">AppsyncGraphqlApiLogConfigOutputReference</a>

---

##### `openid_connect_config`<sup>Required</sup> <a name="openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfig"></a>

```python
openid_connect_config: AppsyncGraphqlApiOpenidConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference">AppsyncGraphqlApiOpenidConnectConfigOutputReference</a>

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.uris"></a>

```python
uris: StringMap
```

- *Type:* cdktf.StringMap

---

##### `user_pool_config`<sup>Required</sup> <a name="user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfig"></a>

```python
user_pool_config: AppsyncGraphqlApiUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference">AppsyncGraphqlApiUserPoolConfigOutputReference</a>

---

##### `additional_authentication_provider_input`<sup>Optional</sup> <a name="additional_authentication_provider_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.additionalAuthenticationProviderInput"></a>

```python
additional_authentication_provider_input: typing.Union[IResolvable, typing.List[AppsyncGraphqlApiAdditionalAuthenticationProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lambda_authorizer_config_input`<sup>Optional</sup> <a name="lambda_authorizer_config_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.lambdaAuthorizerConfigInput"></a>

```python
lambda_authorizer_config_input: AppsyncGraphqlApiLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.logConfigInput"></a>

```python
log_config_input: AppsyncGraphqlApiLogConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `openid_connect_config_input`<sup>Optional</sup> <a name="openid_connect_config_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.openidConnectConfigInput"></a>

```python
openid_connect_config_input: AppsyncGraphqlApiOpenidConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_pool_config_input`<sup>Optional</sup> <a name="user_pool_config_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.userPoolConfigInput"></a>

```python
user_pool_config_input: AppsyncGraphqlApiUserPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---

##### `xray_enabled_input`<sup>Optional</sup> <a name="xray_enabled_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabledInput"></a>

```python
xray_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `xray_enabled`<sup>Required</sup> <a name="xray_enabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.xrayEnabled"></a>

```python
xray_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncGraphqlApiAdditionalAuthenticationProvider <a name="AppsyncGraphqlApiAdditionalAuthenticationProvider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider(
  authentication_type: str,
  lambda_authorizer_config: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig = None,
  openid_connect_config: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig = None,
  user_pool_config: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.openidConnectConfig">openid_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | user_pool_config block. |

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `lambda_authorizer_config`<sup>Optional</sup> <a name="lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `openid_connect_config`<sup>Optional</sup> <a name="openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.openidConnectConfig"></a>

```python
openid_connect_config: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `user_pool_config`<sup>Optional</sup> <a name="user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider.property.userPoolConfig"></a>

```python
user_pool_config: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig(
  authorizer_uri: str,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  identity_validation_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}. |

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig(
  issuer: str,
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

##### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

##### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

### AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig(
  user_pool_id: str,
  app_id_client_regex: str = None,
  aws_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}. |

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

##### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

### AppsyncGraphqlApiConfig <a name="AppsyncGraphqlApiConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication_type: str,
  name: str,
  additional_authentication_provider: typing.Union[IResolvable, typing.List[AppsyncGraphqlApiAdditionalAuthenticationProvider]] = None,
  id: str = None,
  lambda_authorizer_config: AppsyncGraphqlApiLambdaAuthorizerConfig = None,
  log_config: AppsyncGraphqlApiLogConfig = None,
  openid_connect_config: AppsyncGraphqlApiOpenidConnectConfig = None,
  schema: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_pool_config: AppsyncGraphqlApiUserPoolConfig = None,
  xray_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#name AppsyncGraphqlApi#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.additionalAuthenticationProvider">additional_authentication_provider</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]</code> | additional_authentication_provider block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#id AppsyncGraphqlApi#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | lambda_authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.openidConnectConfig">openid_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | openid_connect_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#schema AppsyncGraphqlApi#schema}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags AppsyncGraphqlApi#tags}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | user_pool_config block. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.xrayEnabled">xray_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#name AppsyncGraphqlApi#name}.

---

##### `additional_authentication_provider`<sup>Optional</sup> <a name="additional_authentication_provider" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.additionalAuthenticationProvider"></a>

```python
additional_authentication_provider: typing.Union[IResolvable, typing.List[AppsyncGraphqlApiAdditionalAuthenticationProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]

additional_authentication_provider block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#id AppsyncGraphqlApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_authorizer_config`<sup>Optional</sup> <a name="lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncGraphqlApiLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

lambda_authorizer_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.logConfig"></a>

```python
log_config: AppsyncGraphqlApiLogConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#log_config AppsyncGraphqlApi#log_config}

---

##### `openid_connect_config`<sup>Optional</sup> <a name="openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.openidConnectConfig"></a>

```python
openid_connect_config: AppsyncGraphqlApiOpenidConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

openid_connect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#schema AppsyncGraphqlApi#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags AppsyncGraphqlApi#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}.

---

##### `user_pool_config`<sup>Optional</sup> <a name="user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.userPoolConfig"></a>

```python
user_pool_config: AppsyncGraphqlApiUserPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

user_pool_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}

---

##### `xray_enabled`<sup>Optional</sup> <a name="xray_enabled" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiConfig.property.xrayEnabled"></a>

```python
xray_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}.

---

### AppsyncGraphqlApiLambdaAuthorizerConfig <a name="AppsyncGraphqlApiLambdaAuthorizerConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig(
  authorizer_uri: str,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  identity_validation_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}. |

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

### AppsyncGraphqlApiLogConfig <a name="AppsyncGraphqlApiLogConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiLogConfig(
  cloudwatch_logs_role_arn: str,
  field_log_level: str,
  exclude_verbose_content: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.fieldLogLevel">field_log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.excludeVerboseContent">exclude_verbose_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}. |

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}.

---

##### `field_log_level`<sup>Required</sup> <a name="field_log_level" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.fieldLogLevel"></a>

```python
field_log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}.

---

##### `exclude_verbose_content`<sup>Optional</sup> <a name="exclude_verbose_content" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig.property.excludeVerboseContent"></a>

```python
exclude_verbose_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}.

---

### AppsyncGraphqlApiOpenidConnectConfig <a name="AppsyncGraphqlApiOpenidConnectConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig(
  issuer: str,
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

##### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

##### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

### AppsyncGraphqlApiUserPoolConfig <a name="AppsyncGraphqlApiUserPoolConfig" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig(
  default_action: str,
  user_pool_id: str,
  app_id_client_regex: str = None,
  aws_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}. |

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

##### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">reset_identity_validation_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_identity_validation_expression` <a name="reset_identity_validation_expression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```python
def reset_identity_validation_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identity_validation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `identity_validation_expression_input`<sup>Optional</sup> <a name="identity_validation_expression_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```python
identity_validation_expression_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderList <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderList" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppsyncGraphqlApiAdditionalAuthenticationProvider]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>]]

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetAuthTtl">reset_auth_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetIatTtl">reset_iat_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_ttl` <a name="reset_auth_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```python
def reset_auth_ttl() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_iat_ttl` <a name="reset_iat_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.resetIatTtl"></a>

```python
def reset_iat_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtlInput">auth_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtlInput">iat_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_ttl_input`<sup>Optional</sup> <a name="auth_ttl_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```python
auth_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `iat_ttl_input`<sup>Optional</sup> <a name="iat_ttl_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```python
iat_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `auth_ttl`<sup>Required</sup> <a name="auth_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `iat_ttl`<sup>Required</sup> <a name="iat_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig">put_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig">put_openid_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig">put_user_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetLambdaAuthorizerConfig">reset_lambda_authorizer_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetOpenidConnectConfig">reset_openid_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetUserPoolConfig">reset_user_pool_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_authorizer_config` <a name="put_lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig"></a>

```python
def put_lambda_authorizer_config(
  authorizer_uri: str,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  identity_validation_expression: str = None
) -> None
```

###### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig.parameter.authorizerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}.

---

###### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}.

---

###### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putLambdaAuthorizerConfig.parameter.identityValidationExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}.

---

##### `put_openid_connect_config` <a name="put_openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig"></a>

```python
def put_openid_connect_config(
  issuer: str,
  auth_ttl: typing.Union[int, float] = None,
  client_id: str = None,
  iat_ttl: typing.Union[int, float] = None
) -> None
```

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}.

---

###### `auth_ttl`<sup>Optional</sup> <a name="auth_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig.parameter.authTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}.

---

###### `iat_ttl`<sup>Optional</sup> <a name="iat_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putOpenidConnectConfig.parameter.iatTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}.

---

##### `put_user_pool_config` <a name="put_user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig"></a>

```python
def put_user_pool_config(
  user_pool_id: str,
  app_id_client_regex: str = None,
  aws_region: str = None
) -> None
```

###### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}.

---

###### `app_id_client_regex`<sup>Optional</sup> <a name="app_id_client_regex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig.parameter.appIdClientRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}.

---

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.putUserPoolConfig.parameter.awsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}.

---

##### `reset_lambda_authorizer_config` <a name="reset_lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetLambdaAuthorizerConfig"></a>

```python
def reset_lambda_authorizer_config() -> None
```

##### `reset_openid_connect_config` <a name="reset_openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetOpenidConnectConfig"></a>

```python
def reset_openid_connect_config() -> None
```

##### `reset_user_pool_config` <a name="reset_user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.resetUserPoolConfig"></a>

```python
def reset_user_pool_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfig">lambda_authorizer_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfig">openid_connect_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfig">user_pool_config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfigInput">lambda_authorizer_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfigInput">openid_connect_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfigInput">user_pool_config_input</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_authorizer_config`<sup>Required</sup> <a name="lambda_authorizer_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfig"></a>

```python
lambda_authorizer_config: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference</a>

---

##### `openid_connect_config`<sup>Required</sup> <a name="openid_connect_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfig"></a>

```python
openid_connect_config: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference</a>

---

##### `user_pool_config`<sup>Required</sup> <a name="user_pool_config" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfig"></a>

```python
user_pool_config: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `lambda_authorizer_config_input`<sup>Optional</sup> <a name="lambda_authorizer_config_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.lambdaAuthorizerConfigInput"></a>

```python
lambda_authorizer_config_input: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig</a>

---

##### `openid_connect_config_input`<sup>Optional</sup> <a name="openid_connect_config_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.openidConnectConfigInput"></a>

```python
openid_connect_config_input: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig</a>

---

##### `user_pool_config_input`<sup>Optional</sup> <a name="user_pool_config_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.userPoolConfigInput"></a>

```python
user_pool_config_input: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppsyncGraphqlApiAdditionalAuthenticationProvider, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProvider">AppsyncGraphqlApiAdditionalAuthenticationProvider</a>, cdktf.IResolvable]

---


### AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference <a name="AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAppIdClientRegex">reset_app_id_client_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_id_client_regex` <a name="reset_app_id_client_regex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```python
def reset_app_id_client_regex() -> None
```

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegexInput">app_id_client_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_client_regex_input`<sup>Optional</sup> <a name="app_id_client_regex_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```python
app_id_client_regex_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `app_id_client_regex`<sup>Required</sup> <a name="app_id_client_regex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig">AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig</a>

---


### AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference <a name="AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">reset_identity_validation_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_identity_validation_expression` <a name="reset_identity_validation_expression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```python
def reset_identity_validation_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">identity_validation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `identity_validation_expression_input`<sup>Optional</sup> <a name="identity_validation_expression_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```python
identity_validation_expression_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncGraphqlApiLambdaAuthorizerConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLambdaAuthorizerConfig">AppsyncGraphqlApiLambdaAuthorizerConfig</a>

---


### AppsyncGraphqlApiLogConfigOutputReference <a name="AppsyncGraphqlApiLogConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resetExcludeVerboseContent">reset_exclude_verbose_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_verbose_content` <a name="reset_exclude_verbose_content" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.resetExcludeVerboseContent"></a>

```python
def reset_exclude_verbose_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">cloudwatch_logs_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContentInput">exclude_verbose_content_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevelInput">field_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContent">exclude_verbose_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevel">field_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn_input`<sup>Optional</sup> <a name="cloudwatch_logs_role_arn_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```python
cloudwatch_logs_role_arn_input: str
```

- *Type:* str

---

##### `exclude_verbose_content_input`<sup>Optional</sup> <a name="exclude_verbose_content_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContentInput"></a>

```python
exclude_verbose_content_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_log_level_input`<sup>Optional</sup> <a name="field_log_level_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevelInput"></a>

```python
field_log_level_input: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

---

##### `exclude_verbose_content`<sup>Required</sup> <a name="exclude_verbose_content" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.excludeVerboseContent"></a>

```python
exclude_verbose_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_log_level`<sup>Required</sup> <a name="field_log_level" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.fieldLogLevel"></a>

```python
field_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncGraphqlApiLogConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiLogConfig">AppsyncGraphqlApiLogConfig</a>

---


### AppsyncGraphqlApiOpenidConnectConfigOutputReference <a name="AppsyncGraphqlApiOpenidConnectConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetAuthTtl">reset_auth_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetIatTtl">reset_iat_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_ttl` <a name="reset_auth_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetAuthTtl"></a>

```python
def reset_auth_ttl() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_iat_ttl` <a name="reset_iat_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.resetIatTtl"></a>

```python
def reset_iat_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtlInput">auth_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtlInput">iat_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtl">auth_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtl">iat_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_ttl_input`<sup>Optional</sup> <a name="auth_ttl_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtlInput"></a>

```python
auth_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `iat_ttl_input`<sup>Optional</sup> <a name="iat_ttl_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtlInput"></a>

```python
iat_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `auth_ttl`<sup>Required</sup> <a name="auth_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.authTtl"></a>

```python
auth_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `iat_ttl`<sup>Required</sup> <a name="iat_ttl" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.iatTtl"></a>

```python
iat_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncGraphqlApiOpenidConnectConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiOpenidConnectConfig">AppsyncGraphqlApiOpenidConnectConfig</a>

---


### AppsyncGraphqlApiUserPoolConfigOutputReference <a name="AppsyncGraphqlApiUserPoolConfigOutputReference" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appsync_graphql_api

appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAppIdClientRegex">reset_app_id_client_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_id_client_regex` <a name="reset_app_id_client_regex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAppIdClientRegex"></a>

```python
def reset_app_id_client_regex() -> None
```

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegexInput">app_id_client_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegex">app_id_client_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_client_regex_input`<sup>Optional</sup> <a name="app_id_client_regex_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegexInput"></a>

```python
app_id_client_regex_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `app_id_client_regex`<sup>Required</sup> <a name="app_id_client_regex" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.appIdClientRegex"></a>

```python
app_id_client_regex: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppsyncGraphqlApiUserPoolConfig
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncGraphqlApi.AppsyncGraphqlApiUserPoolConfig">AppsyncGraphqlApiUserPoolConfig</a>

---



