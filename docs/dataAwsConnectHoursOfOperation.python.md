# `dataAwsConnectHoursOfOperation` Submodule <a name="`dataAwsConnectHoursOfOperation` Submodule" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectHoursOfOperation <a name="DataAwsConnectHoursOfOperation" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation aws_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  hours_of_operation_id: str = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#instance_id DataAwsConnectHoursOfOperation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.hoursOfOperationId">hours_of_operation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#hours_of_operation_id DataAwsConnectHoursOfOperation#hours_of_operation_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#id DataAwsConnectHoursOfOperation#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#name DataAwsConnectHoursOfOperation#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#tags DataAwsConnectHoursOfOperation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#instance_id DataAwsConnectHoursOfOperation#instance_id}.

---

##### `hours_of_operation_id`<sup>Optional</sup> <a name="hours_of_operation_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.hoursOfOperationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#hours_of_operation_id DataAwsConnectHoursOfOperation#hours_of_operation_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#id DataAwsConnectHoursOfOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#name DataAwsConnectHoursOfOperation#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#tags DataAwsConnectHoursOfOperation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetHoursOfOperationId">reset_hours_of_operation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_hours_of_operation_id` <a name="reset_hours_of_operation_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetHoursOfOperationId"></a>

```python
def reset_hours_of_operation_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList">DataAwsConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.hoursOfOperationArn">hours_of_operation_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.hoursOfOperationIdInput">hours_of_operation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.hoursOfOperationId">hours_of_operation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.config"></a>

```python
config: DataAwsConnectHoursOfOperationConfigAList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList">DataAwsConnectHoursOfOperationConfigAList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hours_of_operation_arn`<sup>Required</sup> <a name="hours_of_operation_arn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```python
hours_of_operation_arn: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `hours_of_operation_id_input`<sup>Optional</sup> <a name="hours_of_operation_id_input" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.hoursOfOperationIdInput"></a>

```python
hours_of_operation_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hours_of_operation_id`<sup>Required</sup> <a name="hours_of_operation_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.hoursOfOperationId"></a>

```python
hours_of_operation_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectHoursOfOperationConfig <a name="DataAwsConnectHoursOfOperationConfig" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  hours_of_operation_id: str = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#instance_id DataAwsConnectHoursOfOperation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.hoursOfOperationId">hours_of_operation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#hours_of_operation_id DataAwsConnectHoursOfOperation#hours_of_operation_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#id DataAwsConnectHoursOfOperation#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#name DataAwsConnectHoursOfOperation#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#tags DataAwsConnectHoursOfOperation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#instance_id DataAwsConnectHoursOfOperation#instance_id}.

---

##### `hours_of_operation_id`<sup>Optional</sup> <a name="hours_of_operation_id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.hoursOfOperationId"></a>

```python
hours_of_operation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#hours_of_operation_id DataAwsConnectHoursOfOperation#hours_of_operation_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#id DataAwsConnectHoursOfOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#name DataAwsConnectHoursOfOperation#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_hours_of_operation#tags DataAwsConnectHoursOfOperation#tags}.

---

### DataAwsConnectHoursOfOperationConfigA <a name="DataAwsConnectHoursOfOperationConfigA" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigA()
```


### DataAwsConnectHoursOfOperationConfigEndTime <a name="DataAwsConnectHoursOfOperationConfigEndTime" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTime()
```


### DataAwsConnectHoursOfOperationConfigStartTime <a name="DataAwsConnectHoursOfOperationConfigStartTime" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTime()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectHoursOfOperationConfigAList <a name="DataAwsConnectHoursOfOperationConfigAList" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectHoursOfOperationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectHoursOfOperationConfigAOutputReference <a name="DataAwsConnectHoursOfOperationConfigAOutputReference" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.endTime">end_time</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList">DataAwsConnectHoursOfOperationConfigEndTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList">DataAwsConnectHoursOfOperationConfigStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigA">DataAwsConnectHoursOfOperationConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```python
end_time: DataAwsConnectHoursOfOperationConfigEndTimeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList">DataAwsConnectHoursOfOperationConfigEndTimeList</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```python
start_time: DataAwsConnectHoursOfOperationConfigStartTimeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList">DataAwsConnectHoursOfOperationConfigStartTimeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectHoursOfOperationConfigA
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigA">DataAwsConnectHoursOfOperationConfigA</a>

---


### DataAwsConnectHoursOfOperationConfigEndTimeList <a name="DataAwsConnectHoursOfOperationConfigEndTimeList" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectHoursOfOperationConfigEndTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectHoursOfOperationConfigEndTimeOutputReference <a name="DataAwsConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTime">DataAwsConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectHoursOfOperationConfigEndTime
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigEndTime">DataAwsConnectHoursOfOperationConfigEndTime</a>

---


### DataAwsConnectHoursOfOperationConfigStartTimeList <a name="DataAwsConnectHoursOfOperationConfigStartTimeList" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsConnectHoursOfOperationConfigStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsConnectHoursOfOperationConfigStartTimeOutputReference <a name="DataAwsConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_hours_of_operation

dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTime">DataAwsConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsConnectHoursOfOperationConfigStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectHoursOfOperation.DataAwsConnectHoursOfOperationConfigStartTime">DataAwsConnectHoursOfOperationConfigStartTime</a>

---



