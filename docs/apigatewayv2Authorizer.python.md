# `apigatewayv2Authorizer` Submodule <a name="`apigatewayv2Authorizer` Submodule" id="@cdktf/provider-aws.apigatewayv2Authorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Authorizer <a name="Apigatewayv2Authorizer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer aws_apigatewayv2_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  authorizer_type: str,
  name: str,
  authorizer_credentials_arn: str = None,
  authorizer_payload_format_version: str = None,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  enable_simple_responses: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity_sources: typing.List[str] = None,
  jwt_configuration: Apigatewayv2AuthorizerJwtConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerType">authorizer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerCredentialsArn">authorizer_credentials_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerPayloadFormatVersion">authorizer_payload_format_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerUri">authorizer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.enableSimpleResponses">enable_simple_responses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.identitySources">identity_sources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.jwtConfiguration">jwt_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | jwt_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}.

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}.

---

##### `authorizer_credentials_arn`<sup>Optional</sup> <a name="authorizer_credentials_arn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerCredentialsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}.

---

##### `authorizer_payload_format_version`<sup>Optional</sup> <a name="authorizer_payload_format_version" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerPayloadFormatVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}.

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}.

---

##### `enable_simple_responses`<sup>Optional</sup> <a name="enable_simple_responses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.enableSimpleResponses"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_sources`<sup>Optional</sup> <a name="identity_sources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.identitySources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}.

---

##### `jwt_configuration`<sup>Optional</sup> <a name="jwt_configuration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.jwtConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

jwt_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration">put_jwt_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn">reset_authorizer_credentials_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion">reset_authorizer_payload_format_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri">reset_authorizer_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses">reset_enable_simple_responses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySources">reset_identity_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration">reset_jwt_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_jwt_configuration` <a name="put_jwt_configuration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration"></a>

```python
def put_jwt_configuration(
  audience: typing.List[str] = None,
  issuer: str = None
) -> None
```

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration.parameter.audience"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}.

---

##### `reset_authorizer_credentials_arn` <a name="reset_authorizer_credentials_arn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn"></a>

```python
def reset_authorizer_credentials_arn() -> None
```

##### `reset_authorizer_payload_format_version` <a name="reset_authorizer_payload_format_version" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion"></a>

```python
def reset_authorizer_payload_format_version() -> None
```

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_authorizer_uri` <a name="reset_authorizer_uri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri"></a>

```python
def reset_authorizer_uri() -> None
```

##### `reset_enable_simple_responses` <a name="reset_enable_simple_responses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses"></a>

```python
def reset_enable_simple_responses() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_sources` <a name="reset_identity_sources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySources"></a>

```python
def reset_identity_sources() -> None
```

##### `reset_jwt_configuration` <a name="reset_jwt_configuration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration"></a>

```python
def reset_jwt_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2Authorizer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration">jwt_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput">authorizer_credentials_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput">authorizer_payload_format_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput">authorizer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput">enable_simple_responses_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourcesInput">identity_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput">jwt_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn">authorizer_credentials_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion">authorizer_payload_format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType">authorizer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses">enable_simple_responses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySources">identity_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `jwt_configuration`<sup>Required</sup> <a name="jwt_configuration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration"></a>

```python
jwt_configuration: Apigatewayv2AuthorizerJwtConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `authorizer_credentials_arn_input`<sup>Optional</sup> <a name="authorizer_credentials_arn_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput"></a>

```python
authorizer_credentials_arn_input: str
```

- *Type:* str

---

##### `authorizer_payload_format_version_input`<sup>Optional</sup> <a name="authorizer_payload_format_version_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput"></a>

```python
authorizer_payload_format_version_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_type_input`<sup>Optional</sup> <a name="authorizer_type_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput"></a>

```python
authorizer_type_input: str
```

- *Type:* str

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `enable_simple_responses_input`<sup>Optional</sup> <a name="enable_simple_responses_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput"></a>

```python
enable_simple_responses_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_sources_input`<sup>Optional</sup> <a name="identity_sources_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourcesInput"></a>

```python
identity_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `jwt_configuration_input`<sup>Optional</sup> <a name="jwt_configuration_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput"></a>

```python
jwt_configuration_input: Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `authorizer_credentials_arn`<sup>Required</sup> <a name="authorizer_credentials_arn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn"></a>

```python
authorizer_credentials_arn: str
```

- *Type:* str

---

##### `authorizer_payload_format_version`<sup>Required</sup> <a name="authorizer_payload_format_version" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion"></a>

```python
authorizer_payload_format_version: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType"></a>

```python
authorizer_type: str
```

- *Type:* str

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `enable_simple_responses`<sup>Required</sup> <a name="enable_simple_responses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses"></a>

```python
enable_simple_responses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_sources`<sup>Required</sup> <a name="identity_sources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySources"></a>

```python
identity_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2AuthorizerConfig <a name="Apigatewayv2AuthorizerConfig" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  authorizer_type: str,
  name: str,
  authorizer_credentials_arn: str = None,
  authorizer_payload_format_version: str = None,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  enable_simple_responses: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity_sources: typing.List[str] = None,
  jwt_configuration: Apigatewayv2AuthorizerJwtConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType">authorizer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn">authorizer_credentials_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion">authorizer_payload_format_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses">enable_simple_responses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySources">identity_sources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration">jwt_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | jwt_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}.

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType"></a>

```python
authorizer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}.

---

##### `authorizer_credentials_arn`<sup>Optional</sup> <a name="authorizer_credentials_arn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn"></a>

```python
authorizer_credentials_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}.

---

##### `authorizer_payload_format_version`<sup>Optional</sup> <a name="authorizer_payload_format_version" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion"></a>

```python
authorizer_payload_format_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}.

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}.

---

##### `enable_simple_responses`<sup>Optional</sup> <a name="enable_simple_responses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses"></a>

```python
enable_simple_responses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_sources`<sup>Optional</sup> <a name="identity_sources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySources"></a>

```python
identity_sources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}.

---

##### `jwt_configuration`<sup>Optional</sup> <a name="jwt_configuration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration"></a>

```python
jwt_configuration: Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

jwt_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}

---

### Apigatewayv2AuthorizerJwtConfiguration <a name="Apigatewayv2AuthorizerJwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration(
  audience: typing.List[str] = None,
  issuer: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience">audience</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2AuthorizerJwtConfigurationOutputReference <a name="Apigatewayv2AuthorizerJwtConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_authorizer

apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput">audience_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience">audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput"></a>

```python
audience_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: Apigatewayv2AuthorizerJwtConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---



