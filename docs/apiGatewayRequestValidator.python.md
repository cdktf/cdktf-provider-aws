# `apiGatewayRequestValidator` Submodule <a name="`apiGatewayRequestValidator` Submodule" id="@cdktf/provider-aws.apiGatewayRequestValidator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRequestValidator <a name="ApiGatewayRequestValidator" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator aws_api_gateway_request_validator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_request_validator

apiGatewayRequestValidator.ApiGatewayRequestValidator(
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
  id: str = None,
  validate_request_body: typing.Union[bool, IResolvable] = None,
  validate_request_parameters: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#name ApiGatewayRequestValidator#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#rest_api_id ApiGatewayRequestValidator#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#id ApiGatewayRequestValidator#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.validateRequestBody">validate_request_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#validate_request_body ApiGatewayRequestValidator#validate_request_body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.validateRequestParameters">validate_request_parameters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#name ApiGatewayRequestValidator#name}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#rest_api_id ApiGatewayRequestValidator#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#id ApiGatewayRequestValidator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `validate_request_body`<sup>Optional</sup> <a name="validate_request_body" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.validateRequestBody"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#validate_request_body ApiGatewayRequestValidator#validate_request_body}.

---

##### `validate_request_parameters`<sup>Optional</sup> <a name="validate_request_parameters" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.Initializer.parameter.validateRequestParameters"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetValidateRequestBody">reset_validate_request_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetValidateRequestParameters">reset_validate_request_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_validate_request_body` <a name="reset_validate_request_body" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetValidateRequestBody"></a>

```python
def reset_validate_request_body() -> None
```

##### `reset_validate_request_parameters` <a name="reset_validate_request_parameters" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.resetValidateRequestParameters"></a>

```python
def reset_validate_request_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_request_validator

apiGatewayRequestValidator.ApiGatewayRequestValidator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_request_validator

apiGatewayRequestValidator.ApiGatewayRequestValidator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_request_validator

apiGatewayRequestValidator.ApiGatewayRequestValidator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestBodyInput">validate_request_body_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestParametersInput">validate_request_parameters_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestBody">validate_request_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestParameters">validate_request_parameters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `validate_request_body_input`<sup>Optional</sup> <a name="validate_request_body_input" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestBodyInput"></a>

```python
validate_request_body_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validate_request_parameters_input`<sup>Optional</sup> <a name="validate_request_parameters_input" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestParametersInput"></a>

```python
validate_request_parameters_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `validate_request_body`<sup>Required</sup> <a name="validate_request_body" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestBody"></a>

```python
validate_request_body: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `validate_request_parameters`<sup>Required</sup> <a name="validate_request_parameters" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.validateRequestParameters"></a>

```python
validate_request_parameters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRequestValidatorConfig <a name="ApiGatewayRequestValidatorConfig" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_request_validator

apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rest_api_id: str,
  id: str = None,
  validate_request_body: typing.Union[bool, IResolvable] = None,
  validate_request_parameters: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#name ApiGatewayRequestValidator#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#rest_api_id ApiGatewayRequestValidator#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#id ApiGatewayRequestValidator#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.validateRequestBody">validate_request_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#validate_request_body ApiGatewayRequestValidator#validate_request_body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.validateRequestParameters">validate_request_parameters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#name ApiGatewayRequestValidator#name}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#rest_api_id ApiGatewayRequestValidator#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#id ApiGatewayRequestValidator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `validate_request_body`<sup>Optional</sup> <a name="validate_request_body" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.validateRequestBody"></a>

```python
validate_request_body: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#validate_request_body ApiGatewayRequestValidator#validate_request_body}.

---

##### `validate_request_parameters`<sup>Optional</sup> <a name="validate_request_parameters" id="@cdktf/provider-aws.apiGatewayRequestValidator.ApiGatewayRequestValidatorConfig.property.validateRequestParameters"></a>

```python
validate_request_parameters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}.

---



