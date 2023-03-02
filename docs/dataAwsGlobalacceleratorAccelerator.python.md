# `dataAwsGlobalacceleratorAccelerator` Submodule <a name="`dataAwsGlobalacceleratorAccelerator` Submodule" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlobalacceleratorAccelerator <a name="DataAwsGlobalacceleratorAccelerator" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator aws_globalaccelerator_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#id DataAwsGlobalacceleratorAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#id DataAwsGlobalacceleratorAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList">DataAwsGlobalacceleratorAcceleratorAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipSets">ip_sets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList">DataAwsGlobalacceleratorAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.attributes"></a>

```python
attributes: DataAwsGlobalacceleratorAcceleratorAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList">DataAwsGlobalacceleratorAcceleratorAttributesList</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ip_sets`<sup>Required</sup> <a name="ip_sets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipSets"></a>

```python
ip_sets: DataAwsGlobalacceleratorAcceleratorIpSetsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList">DataAwsGlobalacceleratorAcceleratorIpSetsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlobalacceleratorAcceleratorAttributes <a name="DataAwsGlobalacceleratorAcceleratorAttributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes()
```


### DataAwsGlobalacceleratorAcceleratorConfig <a name="DataAwsGlobalacceleratorAcceleratorConfig" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#id DataAwsGlobalacceleratorAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#id DataAwsGlobalacceleratorAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}.

---

### DataAwsGlobalacceleratorAcceleratorIpSets <a name="DataAwsGlobalacceleratorAcceleratorIpSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlobalacceleratorAcceleratorAttributesList <a name="DataAwsGlobalacceleratorAcceleratorAttributesList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlobalacceleratorAcceleratorAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlobalacceleratorAcceleratorAttributesOutputReference <a name="DataAwsGlobalacceleratorAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled">flow_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">flow_logs_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">flow_logs_s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes">DataAwsGlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_logs_enabled`<sup>Required</sup> <a name="flow_logs_enabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```python
flow_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `flow_logs_s3_bucket`<sup>Required</sup> <a name="flow_logs_s3_bucket" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```python
flow_logs_s3_bucket: str
```

- *Type:* str

---

##### `flow_logs_s3_prefix`<sup>Required</sup> <a name="flow_logs_s3_prefix" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```python
flow_logs_s3_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlobalacceleratorAcceleratorAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes">DataAwsGlobalacceleratorAcceleratorAttributes</a>

---


### DataAwsGlobalacceleratorAcceleratorIpSetsList <a name="DataAwsGlobalacceleratorAcceleratorIpSetsList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference <a name="DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_accelerator

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily">ip_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets">DataAwsGlobalacceleratorAcceleratorIpSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_family`<sup>Required</sup> <a name="ip_family" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```python
ip_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlobalacceleratorAcceleratorIpSets
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets">DataAwsGlobalacceleratorAcceleratorIpSets</a>

---



