# `apiGatewayMethod` Submodule <a name="`apiGatewayMethod` Submodule" id="@cdktf/provider-aws.apiGatewayMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayMethod <a name="ApiGatewayMethod" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method aws_api_gateway_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method

apiGatewayMethod.ApiGatewayMethod(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: str,
  http_method: str,
  resource_id: str,
  rest_api_id: str,
  api_key_required: typing.Union[bool, IResolvable] = None,
  authorization_scopes: typing.List[str] = None,
  authorizer_id: str = None,
  id: str = None,
  operation_name: str = None,
  request_models: typing.Mapping[str] = None,
  request_parameters: typing.Mapping[typing.Union[bool, IResolvable]] = None,
  request_validator_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.apiKeyRequired">api_key_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.operationName">operation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.requestParameters">request_parameters</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.requestValidatorId">request_validator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}.

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}.

---

##### `api_key_required`<sup>Optional</sup> <a name="api_key_required" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.apiKeyRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}.

---

##### `authorization_scopes`<sup>Optional</sup> <a name="authorization_scopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.authorizationScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.authorizerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_name`<sup>Optional</sup> <a name="operation_name" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.operationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}.

---

##### `request_models`<sup>Optional</sup> <a name="request_models" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.requestModels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.requestParameters"></a>

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}.

---

##### `request_validator_id`<sup>Optional</sup> <a name="request_validator_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.Initializer.parameter.requestValidatorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired">reset_api_key_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes">reset_authorization_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOperationName">reset_operation_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestModels">reset_request_models</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters">reset_request_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId">reset_request_validator_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_api_key_required` <a name="reset_api_key_required" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetApiKeyRequired"></a>

```python
def reset_api_key_required() -> None
```

##### `reset_authorization_scopes` <a name="reset_authorization_scopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizationScopes"></a>

```python
def reset_authorization_scopes() -> None
```

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operation_name` <a name="reset_operation_name" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetOperationName"></a>

```python
def reset_operation_name() -> None
```

##### `reset_request_models` <a name="reset_request_models" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestModels"></a>

```python
def reset_request_models() -> None
```

##### `reset_request_parameters` <a name="reset_request_parameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestParameters"></a>

```python
def reset_request_parameters() -> None
```

##### `reset_request_validator_id` <a name="reset_request_validator_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.resetRequestValidatorId"></a>

```python
def reset_request_validator_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method

apiGatewayMethod.ApiGatewayMethod.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method

apiGatewayMethod.ApiGatewayMethod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method

apiGatewayMethod.ApiGatewayMethod.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput">api_key_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput">authorization_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput">operation_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput">request_models_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput">request_parameters_input</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput">request_validator_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired">api_key_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId">request_validator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key_required_input`<sup>Optional</sup> <a name="api_key_required_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequiredInput"></a>

```python
api_key_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `authorization_scopes_input`<sup>Optional</sup> <a name="authorization_scopes_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopesInput"></a>

```python
authorization_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `operation_name_input`<sup>Optional</sup> <a name="operation_name_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationNameInput"></a>

```python
operation_name_input: str
```

- *Type:* str

---

##### `request_models_input`<sup>Optional</sup> <a name="request_models_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModelsInput"></a>

```python
request_models_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_parameters_input`<sup>Optional</sup> <a name="request_parameters_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParametersInput"></a>

```python
request_parameters_input: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

---

##### `request_validator_id_input`<sup>Optional</sup> <a name="request_validator_id_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorIdInput"></a>

```python
request_validator_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `api_key_required`<sup>Required</sup> <a name="api_key_required" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.apiKeyRequired"></a>

```python
api_key_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `authorization_scopes`<sup>Required</sup> <a name="authorization_scopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizationScopes"></a>

```python
authorization_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `request_models`<sup>Required</sup> <a name="request_models" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestModels"></a>

```python
request_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_parameters`<sup>Required</sup> <a name="request_parameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

---

##### `request_validator_id`<sup>Required</sup> <a name="request_validator_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.requestValidatorId"></a>

```python
request_validator_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayMethodConfig <a name="ApiGatewayMethodConfig" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_method

apiGatewayMethod.ApiGatewayMethodConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization: str,
  http_method: str,
  resource_id: str,
  rest_api_id: str,
  api_key_required: typing.Union[bool, IResolvable] = None,
  authorization_scopes: typing.List[str] = None,
  authorizer_id: str = None,
  id: str = None,
  operation_name: str = None,
  request_models: typing.Mapping[str] = None,
  request_parameters: typing.Mapping[typing.Union[bool, IResolvable]] = None,
  request_validator_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired">api_key_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName">operation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId">request_validator_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization ApiGatewayMethod#authorization}.

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#http_method ApiGatewayMethod#http_method}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#resource_id ApiGatewayMethod#resource_id}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}.

---

##### `api_key_required`<sup>Optional</sup> <a name="api_key_required" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.apiKeyRequired"></a>

```python
api_key_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}.

---

##### `authorization_scopes`<sup>Optional</sup> <a name="authorization_scopes" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizationScopes"></a>

```python
authorization_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#id ApiGatewayMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_name`<sup>Optional</sup> <a name="operation_name" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#operation_name ApiGatewayMethod#operation_name}.

---

##### `request_models`<sup>Optional</sup> <a name="request_models" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestModels"></a>

```python
request_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_models ApiGatewayMethod#request_models}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}.

---

##### `request_validator_id`<sup>Optional</sup> <a name="request_validator_id" id="@cdktf/provider-aws.apiGatewayMethod.ApiGatewayMethodConfig.property.requestValidatorId"></a>

```python
request_validator_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}.

---



