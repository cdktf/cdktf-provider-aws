# `apiGatewayAuthorizer` Submodule <a name="`apiGatewayAuthorizer` Submodule" id="@cdktf/provider-aws.apiGatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayAuthorizer <a name="ApiGatewayAuthorizer" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer aws_api_gateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_authorizer

apiGatewayAuthorizer.ApiGatewayAuthorizer(
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
  rest_api_id: str,
  authorizer_credentials: str = None,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  id: str = None,
  identity_source: str = None,
  identity_validation_expression: str = None,
  provider_arns: typing.List[str] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerCredentials">authorizer_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerUri">authorizer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.identitySource">identity_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.providerArns">provider_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}.

---

##### `authorizer_credentials`<sup>Optional</sup> <a name="authorizer_credentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerCredentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}.

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_source`<sup>Optional</sup> <a name="identity_source" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.identitySource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}.

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.identityValidationExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}.

---

##### `provider_arns`<sup>Optional</sup> <a name="provider_arns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.providerArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerCredentials">reset_authorizer_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerResultTtlInSeconds">reset_authorizer_result_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerUri">reset_authorizer_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentitySource">reset_identity_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentityValidationExpression">reset_identity_validation_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetProviderArns">reset_provider_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorizer_credentials` <a name="reset_authorizer_credentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerCredentials"></a>

```python
def reset_authorizer_credentials() -> None
```

##### `reset_authorizer_result_ttl_in_seconds` <a name="reset_authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerResultTtlInSeconds"></a>

```python
def reset_authorizer_result_ttl_in_seconds() -> None
```

##### `reset_authorizer_uri` <a name="reset_authorizer_uri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerUri"></a>

```python
def reset_authorizer_uri() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_source` <a name="reset_identity_source" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentitySource"></a>

```python
def reset_identity_source() -> None
```

##### `reset_identity_validation_expression` <a name="reset_identity_validation_expression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentityValidationExpression"></a>

```python
def reset_identity_validation_expression() -> None
```

##### `reset_provider_arns` <a name="reset_provider_arns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetProviderArns"></a>

```python
def reset_provider_arns() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_authorizer

apiGatewayAuthorizer.ApiGatewayAuthorizer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_authorizer

apiGatewayAuthorizer.ApiGatewayAuthorizer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_authorizer

apiGatewayAuthorizer.ApiGatewayAuthorizer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentialsInput">authorizer_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSecondsInput">authorizer_result_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUriInput">authorizer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySourceInput">identity_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpressionInput">identity_validation_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArnsInput">provider_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentials">authorizer_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySource">identity_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArns">provider_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authorizer_credentials_input`<sup>Optional</sup> <a name="authorizer_credentials_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentialsInput"></a>

```python
authorizer_credentials_input: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds_input`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSecondsInput"></a>

```python
authorizer_result_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri_input`<sup>Optional</sup> <a name="authorizer_uri_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUriInput"></a>

```python
authorizer_uri_input: str
```

- *Type:* str

---

##### `identity_source_input`<sup>Optional</sup> <a name="identity_source_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySourceInput"></a>

```python
identity_source_input: str
```

- *Type:* str

---

##### `identity_validation_expression_input`<sup>Optional</sup> <a name="identity_validation_expression_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpressionInput"></a>

```python
identity_validation_expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_arns_input`<sup>Optional</sup> <a name="provider_arns_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArnsInput"></a>

```python
provider_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `authorizer_credentials`<sup>Required</sup> <a name="authorizer_credentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentials"></a>

```python
authorizer_credentials: str
```

- *Type:* str

---

##### `authorizer_result_ttl_in_seconds`<sup>Required</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorizer_uri`<sup>Required</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_source`<sup>Required</sup> <a name="identity_source" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySource"></a>

```python
identity_source: str
```

- *Type:* str

---

##### `identity_validation_expression`<sup>Required</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_arns`<sup>Required</sup> <a name="provider_arns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArns"></a>

```python
provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayAuthorizerConfig <a name="ApiGatewayAuthorizerConfig" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_authorizer

apiGatewayAuthorizer.ApiGatewayAuthorizerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rest_api_id: str,
  authorizer_credentials: str = None,
  authorizer_result_ttl_in_seconds: typing.Union[int, float] = None,
  authorizer_uri: str = None,
  id: str = None,
  identity_source: str = None,
  identity_validation_expression: str = None,
  provider_arns: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerCredentials">authorizer_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizer_result_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerUri">authorizer_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identitySource">identity_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identityValidationExpression">identity_validation_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.providerArns">provider_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}.

---

##### `authorizer_credentials`<sup>Optional</sup> <a name="authorizer_credentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerCredentials"></a>

```python
authorizer_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}.

---

##### `authorizer_result_ttl_in_seconds`<sup>Optional</sup> <a name="authorizer_result_ttl_in_seconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```python
authorizer_result_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizer_uri`<sup>Optional</sup> <a name="authorizer_uri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerUri"></a>

```python
authorizer_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_source`<sup>Optional</sup> <a name="identity_source" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identitySource"></a>

```python
identity_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}.

---

##### `identity_validation_expression`<sup>Optional</sup> <a name="identity_validation_expression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identityValidationExpression"></a>

```python
identity_validation_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}.

---

##### `provider_arns`<sup>Optional</sup> <a name="provider_arns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.providerArns"></a>

```python
provider_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}.

---



