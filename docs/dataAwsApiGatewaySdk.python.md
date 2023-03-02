# `dataAwsApiGatewaySdk` Submodule <a name="`dataAwsApiGatewaySdk` Submodule" id="@cdktf/provider-aws.dataAwsApiGatewaySdk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewaySdk <a name="DataAwsApiGatewaySdk" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk aws_api_gateway_sdk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_api_gateway_sdk

dataAwsApiGatewaySdk.DataAwsApiGatewaySdk(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rest_api_id: str,
  sdk_type: str,
  stage_name: str,
  id: str = None,
  parameters: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#rest_api_id DataAwsApiGatewaySdk#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.sdkType">sdk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#sdk_type DataAwsApiGatewaySdk#sdk_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#stage_name DataAwsApiGatewaySdk#stage_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#id DataAwsApiGatewaySdk#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#parameters DataAwsApiGatewaySdk#parameters}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#rest_api_id DataAwsApiGatewaySdk#rest_api_id}.

---

##### `sdk_type`<sup>Required</sup> <a name="sdk_type" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.sdkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#sdk_type DataAwsApiGatewaySdk#sdk_type}.

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.stageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#stage_name DataAwsApiGatewaySdk#stage_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#id DataAwsApiGatewaySdk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#parameters DataAwsApiGatewaySdk#parameters}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.resetParameters"></a>

```python
def reset_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_api_gateway_sdk

dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_api_gateway_sdk

dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_api_gateway_sdk

dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.sdkTypeInput">sdk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.stageNameInput">stage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.sdkType">sdk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `sdk_type_input`<sup>Optional</sup> <a name="sdk_type_input" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.sdkTypeInput"></a>

```python
sdk_type_input: str
```

- *Type:* str

---

##### `stage_name_input`<sup>Optional</sup> <a name="stage_name_input" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.stageNameInput"></a>

```python
stage_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `sdk_type`<sup>Required</sup> <a name="sdk_type" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.sdkType"></a>

```python
sdk_type: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewaySdkConfig <a name="DataAwsApiGatewaySdkConfig" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_api_gateway_sdk

dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  rest_api_id: str,
  sdk_type: str,
  stage_name: str,
  id: str = None,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#rest_api_id DataAwsApiGatewaySdk#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.sdkType">sdk_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#sdk_type DataAwsApiGatewaySdk#sdk_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#stage_name DataAwsApiGatewaySdk#stage_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#id DataAwsApiGatewaySdk#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#parameters DataAwsApiGatewaySdk#parameters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#rest_api_id DataAwsApiGatewaySdk#rest_api_id}.

---

##### `sdk_type`<sup>Required</sup> <a name="sdk_type" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.sdkType"></a>

```python
sdk_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#sdk_type DataAwsApiGatewaySdk#sdk_type}.

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#stage_name DataAwsApiGatewaySdk#stage_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#id DataAwsApiGatewaySdk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.dataAwsApiGatewaySdk.DataAwsApiGatewaySdkConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_sdk#parameters DataAwsApiGatewaySdk#parameters}.

---



