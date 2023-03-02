# `apigatewayv2RouteResponse` Submodule <a name="`apigatewayv2RouteResponse` Submodule" id="@cdktf/provider-aws.apigatewayv2RouteResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RouteResponse <a name="Apigatewayv2RouteResponse" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response aws_apigatewayv2_route_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route_response

apigatewayv2RouteResponse.Apigatewayv2RouteResponse(
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
  route_id: str,
  route_response_key: str,
  id: str = None,
  model_selection_expression: str = None,
  response_models: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.routeId">route_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.routeResponseKey">route_response_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.modelSelectionExpression">model_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.responseModels">response_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}.

---

##### `route_id`<sup>Required</sup> <a name="route_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.routeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}.

---

##### `route_response_key`<sup>Required</sup> <a name="route_response_key" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.routeResponseKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model_selection_expression`<sup>Optional</sup> <a name="model_selection_expression" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.modelSelectionExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}.

---

##### `response_models`<sup>Optional</sup> <a name="response_models" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.responseModels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression">reset_model_selection_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels">reset_response_models</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_model_selection_expression` <a name="reset_model_selection_expression" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression"></a>

```python
def reset_model_selection_expression() -> None
```

##### `reset_response_models` <a name="reset_response_models" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels"></a>

```python
def reset_response_models() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route_response

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route_response

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route_response

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput">model_selection_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput">response_models_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput">route_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput">route_response_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression">model_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels">response_models</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId">route_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey">route_response_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `model_selection_expression_input`<sup>Optional</sup> <a name="model_selection_expression_input" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput"></a>

```python
model_selection_expression_input: str
```

- *Type:* str

---

##### `response_models_input`<sup>Optional</sup> <a name="response_models_input" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput"></a>

```python
response_models_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `route_id_input`<sup>Optional</sup> <a name="route_id_input" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput"></a>

```python
route_id_input: str
```

- *Type:* str

---

##### `route_response_key_input`<sup>Optional</sup> <a name="route_response_key_input" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput"></a>

```python
route_response_key_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_selection_expression`<sup>Required</sup> <a name="model_selection_expression" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression"></a>

```python
model_selection_expression: str
```

- *Type:* str

---

##### `response_models`<sup>Required</sup> <a name="response_models" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels"></a>

```python
response_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `route_id`<sup>Required</sup> <a name="route_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId"></a>

```python
route_id: str
```

- *Type:* str

---

##### `route_response_key`<sup>Required</sup> <a name="route_response_key" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey"></a>

```python
route_response_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteResponseConfig <a name="Apigatewayv2RouteResponseConfig" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_route_response

apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  route_id: str,
  route_response_key: str,
  id: str = None,
  model_selection_expression: str = None,
  response_models: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId">route_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey">route_response_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression">model_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels">response_models</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}.

---

##### `route_id`<sup>Required</sup> <a name="route_id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId"></a>

```python
route_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}.

---

##### `route_response_key`<sup>Required</sup> <a name="route_response_key" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey"></a>

```python
route_response_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model_selection_expression`<sup>Optional</sup> <a name="model_selection_expression" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression"></a>

```python
model_selection_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}.

---

##### `response_models`<sup>Optional</sup> <a name="response_models" id="@cdktf/provider-aws.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels"></a>

```python
response_models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}.

---



