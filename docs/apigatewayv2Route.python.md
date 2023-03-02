# `apigatewayv2Route` Submodule <a name="`apigatewayv2Route` Submodule" id="@cdktf/provider-aws.apigatewayv2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Route <a name="Apigatewayv2Route" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route aws_apigatewayv2_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route

apigatewayv2Route.Apigatewayv2Route(
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
  route_key: str,
  api_key_required: typing.Union[bool, IResolvable] = None,
  authorization_scopes: typing.List[str] = None,
  authorization_type: str = None,
  authorizer_id: str = None,
  id: str = None,
  model_selection_expression: str = None,
  operation_name: str = None,
  request_models: typing.Mapping[str] = None,
  request_parameter: typing.Union[IResolvable, typing.List[Apigatewayv2RouteRequestParameter]] = None,
  route_response_selection_expression: str = None,
  target: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeKey">route_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiKeyRequired">api_key_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.modelSelectionExpression">model_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.operationName">operation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestParameter">request_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]</code> | request_parameter block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeResponseSelectionExpression">route_response_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}.

---

##### `route_key`<sup>Required</sup> <a name="route_key" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}.

---

##### `api_key_required`<sup>Optional</sup> <a name="api_key_required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiKeyRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}.

---

##### `authorization_scopes`<sup>Optional</sup> <a name="authorization_scopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}.

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model_selection_expression`<sup>Optional</sup> <a name="model_selection_expression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.modelSelectionExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}.

---

##### `operation_name`<sup>Optional</sup> <a name="operation_name" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.operationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}.

---

##### `request_models`<sup>Optional</sup> <a name="request_models" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestModels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}.

---

##### `request_parameter`<sup>Optional</sup> <a name="request_parameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]

request_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}

---

##### `route_response_selection_expression`<sup>Optional</sup> <a name="route_response_selection_expression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeResponseSelectionExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter">put_request_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired">reset_api_key_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes">reset_authorization_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType">reset_authorization_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression">reset_model_selection_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName">reset_operation_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels">reset_request_models</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter">reset_request_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression">reset_route_response_selection_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget">reset_target</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_request_parameter` <a name="put_request_parameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter"></a>

```python
def put_request_parameter(
  value: typing.Union[IResolvable, typing.List[Apigatewayv2RouteRequestParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]

---

##### `reset_api_key_required` <a name="reset_api_key_required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired"></a>

```python
def reset_api_key_required() -> None
```

##### `reset_authorization_scopes` <a name="reset_authorization_scopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes"></a>

```python
def reset_authorization_scopes() -> None
```

##### `reset_authorization_type` <a name="reset_authorization_type" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType"></a>

```python
def reset_authorization_type() -> None
```

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_model_selection_expression` <a name="reset_model_selection_expression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression"></a>

```python
def reset_model_selection_expression() -> None
```

##### `reset_operation_name` <a name="reset_operation_name" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName"></a>

```python
def reset_operation_name() -> None
```

##### `reset_request_models` <a name="reset_request_models" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels"></a>

```python
def reset_request_models() -> None
```

##### `reset_request_parameter` <a name="reset_request_parameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter"></a>

```python
def reset_request_parameter() -> None
```

##### `reset_route_response_selection_expression` <a name="reset_route_response_selection_expression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression"></a>

```python
def reset_route_response_selection_expression() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget"></a>

```python
def reset_target() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route

apigatewayv2Route.Apigatewayv2Route.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route

apigatewayv2Route.Apigatewayv2Route.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route

apigatewayv2Route.Apigatewayv2Route.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter">request_parameter</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput">api_key_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput">authorization_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput">model_selection_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput">operation_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput">request_models_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput">request_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput">route_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput">route_response_selection_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired">api_key_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression">model_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey">route_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression">route_response_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `request_parameter`<sup>Required</sup> <a name="request_parameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter"></a>

```python
request_parameter: Apigatewayv2RouteRequestParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `api_key_required_input`<sup>Optional</sup> <a name="api_key_required_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput"></a>

```python
api_key_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorization_scopes_input`<sup>Optional</sup> <a name="authorization_scopes_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput"></a>

```python
authorization_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `model_selection_expression_input`<sup>Optional</sup> <a name="model_selection_expression_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput"></a>

```python
model_selection_expression_input: str
```

- *Type:* str

---

##### `operation_name_input`<sup>Optional</sup> <a name="operation_name_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput"></a>

```python
operation_name_input: str
```

- *Type:* str

---

##### `request_models_input`<sup>Optional</sup> <a name="request_models_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput"></a>

```python
request_models_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_parameter_input`<sup>Optional</sup> <a name="request_parameter_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput"></a>

```python
request_parameter_input: typing.Union[IResolvable, typing.List[Apigatewayv2RouteRequestParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]

---

##### `route_key_input`<sup>Optional</sup> <a name="route_key_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput"></a>

```python
route_key_input: str
```

- *Type:* str

---

##### `route_response_selection_expression_input`<sup>Optional</sup> <a name="route_response_selection_expression_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput"></a>

```python
route_response_selection_expression_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `api_key_required`<sup>Required</sup> <a name="api_key_required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired"></a>

```python
api_key_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorization_scopes`<sup>Required</sup> <a name="authorization_scopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes"></a>

```python
authorization_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_selection_expression`<sup>Required</sup> <a name="model_selection_expression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression"></a>

```python
model_selection_expression: str
```

- *Type:* str

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `request_models`<sup>Required</sup> <a name="request_models" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels"></a>

```python
request_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `route_key`<sup>Required</sup> <a name="route_key" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey"></a>

```python
route_key: str
```

- *Type:* str

---

##### `route_response_selection_expression`<sup>Required</sup> <a name="route_response_selection_expression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression"></a>

```python
route_response_selection_expression: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteConfig <a name="Apigatewayv2RouteConfig" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route

apigatewayv2Route.Apigatewayv2RouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  route_key: str,
  api_key_required: typing.Union[bool, IResolvable] = None,
  authorization_scopes: typing.List[str] = None,
  authorization_type: str = None,
  authorizer_id: str = None,
  id: str = None,
  model_selection_expression: str = None,
  operation_name: str = None,
  request_models: typing.Mapping[str] = None,
  request_parameter: typing.Union[IResolvable, typing.List[Apigatewayv2RouteRequestParameter]] = None,
  route_response_selection_expression: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey">route_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired">api_key_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes">authorization_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression">model_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName">operation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels">request_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter">request_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]</code> | request_parameter block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression">route_response_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}.

---

##### `route_key`<sup>Required</sup> <a name="route_key" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey"></a>

```python
route_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}.

---

##### `api_key_required`<sup>Optional</sup> <a name="api_key_required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired"></a>

```python
api_key_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}.

---

##### `authorization_scopes`<sup>Optional</sup> <a name="authorization_scopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes"></a>

```python
authorization_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}.

---

##### `authorization_type`<sup>Optional</sup> <a name="authorization_type" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model_selection_expression`<sup>Optional</sup> <a name="model_selection_expression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression"></a>

```python
model_selection_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}.

---

##### `operation_name`<sup>Optional</sup> <a name="operation_name" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}.

---

##### `request_models`<sup>Optional</sup> <a name="request_models" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels"></a>

```python
request_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}.

---

##### `request_parameter`<sup>Optional</sup> <a name="request_parameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter"></a>

```python
request_parameter: typing.Union[IResolvable, typing.List[Apigatewayv2RouteRequestParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]

request_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}

---

##### `route_response_selection_expression`<sup>Optional</sup> <a name="route_response_selection_expression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression"></a>

```python
route_response_selection_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}.

---

### Apigatewayv2RouteRequestParameter <a name="Apigatewayv2RouteRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route

apigatewayv2Route.Apigatewayv2RouteRequestParameter(
  request_parameter_key: str,
  required: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey">request_parameter_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}. |

---

##### `request_parameter_key`<sup>Required</sup> <a name="request_parameter_key" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey"></a>

```python
request_parameter_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RouteRequestParameterList <a name="Apigatewayv2RouteRequestParameterList" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route

apigatewayv2Route.Apigatewayv2RouteRequestParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RouteRequestParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Apigatewayv2RouteRequestParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>]]

---


### Apigatewayv2RouteRequestParameterOutputReference <a name="Apigatewayv2RouteRequestParameterOutputReference" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route

apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput">request_parameter_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey">request_parameter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_parameter_key_input`<sup>Optional</sup> <a name="request_parameter_key_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput"></a>

```python
request_parameter_key_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `request_parameter_key`<sup>Required</sup> <a name="request_parameter_key" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey"></a>

```python
request_parameter_key: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Apigatewayv2RouteRequestParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>, cdktf.IResolvable]

---



