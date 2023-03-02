# `apiGatewayGatewayResponse` Submodule <a name="`apiGatewayGatewayResponse` Submodule" id="@cdktf/provider-aws.apiGatewayGatewayResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayGatewayResponse <a name="ApiGatewayGatewayResponse" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response aws_api_gateway_gateway_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_gateway_response

apiGatewayGatewayResponse.ApiGatewayGatewayResponse(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  response_type: str,
  rest_api_id: str,
  id: str = None,
  response_parameters: typing.Mapping[str] = None,
  response_templates: typing.Mapping[str] = None,
  status_code: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseType">response_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseParameters">response_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseTemplates">response_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `response_type`<sup>Required</sup> <a name="response_type" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}.

---

##### `response_templates`<sup>Optional</sup> <a name="response_templates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseTemplates"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.statusCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseParameters">reset_response_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseTemplates">reset_response_templates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_response_parameters` <a name="reset_response_parameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseParameters"></a>

```python
def reset_response_parameters() -> None
```

##### `reset_response_templates` <a name="reset_response_templates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseTemplates"></a>

```python
def reset_response_templates() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetStatusCode"></a>

```python
def reset_status_code() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_gateway_response

apiGatewayGatewayResponse.ApiGatewayGatewayResponse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_gateway_response

apiGatewayGatewayResponse.ApiGatewayGatewayResponse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_gateway_response

apiGatewayGatewayResponse.ApiGatewayGatewayResponse.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParametersInput">response_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplatesInput">response_templates_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTypeInput">response_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParameters">response_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplates">response_templates</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseType">response_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `response_parameters_input`<sup>Optional</sup> <a name="response_parameters_input" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParametersInput"></a>

```python
response_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_templates_input`<sup>Optional</sup> <a name="response_templates_input" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplatesInput"></a>

```python
response_templates_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_type_input`<sup>Optional</sup> <a name="response_type_input" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTypeInput"></a>

```python
response_type_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParameters"></a>

```python
response_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_templates`<sup>Required</sup> <a name="response_templates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplates"></a>

```python
response_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_type`<sup>Required</sup> <a name="response_type" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseType"></a>

```python
response_type: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayGatewayResponseConfig <a name="ApiGatewayGatewayResponseConfig" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_gateway_response

apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  response_type: str,
  rest_api_id: str,
  id: str = None,
  response_parameters: typing.Mapping[str] = None,
  response_templates: typing.Mapping[str] = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseType">response_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseParameters">response_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseTemplates">response_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `response_type`<sup>Required</sup> <a name="response_type" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseType"></a>

```python
response_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseParameters"></a>

```python
response_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}.

---

##### `response_templates`<sup>Optional</sup> <a name="response_templates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseTemplates"></a>

```python
response_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}.

---



