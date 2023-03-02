# `dataAwsEc2InstanceType` Submodule <a name="`dataAwsEc2InstanceType` Submodule" id="@cdktf/provider-aws.dataAwsEc2InstanceType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2InstanceType <a name="DataAwsEc2InstanceType" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type aws_ec2_instance_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_type: str,
  id: str = None,
  timeouts: DataAwsEc2InstanceTypeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#id DataAwsEc2InstanceType#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#id DataAwsEc2InstanceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#timeouts DataAwsEc2InstanceType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#read DataAwsEc2InstanceType#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceType.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.autoRecoverySupported">auto_recovery_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.bareMetal">bare_metal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.burstablePerformanceSupported">burstable_performance_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.currentGeneration">current_generation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.dedicatedHostsSupported">dedicated_hosts_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultCores">default_cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultThreadsPerCore">default_threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultVcpus">default_vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsEncryptionSupport">ebs_encryption_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsNvmeSupport">ebs_nvme_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsOptimizedSupport">ebs_optimized_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineBandwidth">ebs_performance_baseline_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineIops">ebs_performance_baseline_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineThroughput">ebs_performance_baseline_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumBandwidth">ebs_performance_maximum_bandwidth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumIops">ebs_performance_maximum_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumThroughput">ebs_performance_maximum_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.efaSupported">efa_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.enaSupport">ena_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.encryptionInTransitSupported">encryption_in_transit_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.fpgas">fpgas</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList">DataAwsEc2InstanceTypeFpgasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.freeTierEligible">free_tier_eligible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.gpus">gpus</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList">DataAwsEc2InstanceTypeGpusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.hibernationSupported">hibernation_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.hypervisor">hypervisor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.inferenceAccelerators">inference_accelerators</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList">DataAwsEc2InstanceTypeInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceDisks">instance_disks</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList">DataAwsEc2InstanceTypeInstanceDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceStorageSupported">instance_storage_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ipv6Supported">ipv6_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumIpv4AddressesPerInterface">maximum_ipv4_addresses_per_interface</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumIpv6AddressesPerInterface">maximum_ipv6_addresses_per_interface</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumNetworkInterfaces">maximum_network_interfaces</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.networkPerformance">network_performance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedArchitectures">supported_architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedPlacementStrategies">supported_placement_strategies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedRootDeviceTypes">supported_root_device_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedUsagesClasses">supported_usages_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedVirtualizationTypes">supported_virtualization_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.sustainedClockSpeed">sustained_clock_speed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference">DataAwsEc2InstanceTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalFpgaMemory">total_fpga_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalGpuMemory">total_gpu_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalInstanceStorage">total_instance_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.validCores">valid_cores</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.validThreadsPerCore">valid_threads_per_core</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auto_recovery_supported`<sup>Required</sup> <a name="auto_recovery_supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.autoRecoverySupported"></a>

```python
auto_recovery_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bare_metal`<sup>Required</sup> <a name="bare_metal" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.bareMetal"></a>

```python
bare_metal: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `burstable_performance_supported`<sup>Required</sup> <a name="burstable_performance_supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.burstablePerformanceSupported"></a>

```python
burstable_performance_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `current_generation`<sup>Required</sup> <a name="current_generation" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.currentGeneration"></a>

```python
current_generation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dedicated_hosts_supported`<sup>Required</sup> <a name="dedicated_hosts_supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.dedicatedHostsSupported"></a>

```python
dedicated_hosts_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `default_cores`<sup>Required</sup> <a name="default_cores" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultCores"></a>

```python
default_cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_threads_per_core`<sup>Required</sup> <a name="default_threads_per_core" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultThreadsPerCore"></a>

```python
default_threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_vcpus`<sup>Required</sup> <a name="default_vcpus" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.defaultVcpus"></a>

```python
default_vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_encryption_support`<sup>Required</sup> <a name="ebs_encryption_support" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsEncryptionSupport"></a>

```python
ebs_encryption_support: str
```

- *Type:* str

---

##### `ebs_nvme_support`<sup>Required</sup> <a name="ebs_nvme_support" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsNvmeSupport"></a>

```python
ebs_nvme_support: str
```

- *Type:* str

---

##### `ebs_optimized_support`<sup>Required</sup> <a name="ebs_optimized_support" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsOptimizedSupport"></a>

```python
ebs_optimized_support: str
```

- *Type:* str

---

##### `ebs_performance_baseline_bandwidth`<sup>Required</sup> <a name="ebs_performance_baseline_bandwidth" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineBandwidth"></a>

```python
ebs_performance_baseline_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_performance_baseline_iops`<sup>Required</sup> <a name="ebs_performance_baseline_iops" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineIops"></a>

```python
ebs_performance_baseline_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_performance_baseline_throughput`<sup>Required</sup> <a name="ebs_performance_baseline_throughput" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceBaselineThroughput"></a>

```python
ebs_performance_baseline_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_performance_maximum_bandwidth`<sup>Required</sup> <a name="ebs_performance_maximum_bandwidth" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumBandwidth"></a>

```python
ebs_performance_maximum_bandwidth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_performance_maximum_iops`<sup>Required</sup> <a name="ebs_performance_maximum_iops" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumIops"></a>

```python
ebs_performance_maximum_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_performance_maximum_throughput`<sup>Required</sup> <a name="ebs_performance_maximum_throughput" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ebsPerformanceMaximumThroughput"></a>

```python
ebs_performance_maximum_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `efa_supported`<sup>Required</sup> <a name="efa_supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.efaSupported"></a>

```python
efa_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ena_support`<sup>Required</sup> <a name="ena_support" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.enaSupport"></a>

```python
ena_support: str
```

- *Type:* str

---

##### `encryption_in_transit_supported`<sup>Required</sup> <a name="encryption_in_transit_supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.encryptionInTransitSupported"></a>

```python
encryption_in_transit_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `fpgas`<sup>Required</sup> <a name="fpgas" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.fpgas"></a>

```python
fpgas: DataAwsEc2InstanceTypeFpgasList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList">DataAwsEc2InstanceTypeFpgasList</a>

---

##### `free_tier_eligible`<sup>Required</sup> <a name="free_tier_eligible" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.freeTierEligible"></a>

```python
free_tier_eligible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.gpus"></a>

```python
gpus: DataAwsEc2InstanceTypeGpusList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList">DataAwsEc2InstanceTypeGpusList</a>

---

##### `hibernation_supported`<sup>Required</sup> <a name="hibernation_supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.hibernationSupported"></a>

```python
hibernation_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.hypervisor"></a>

```python
hypervisor: str
```

- *Type:* str

---

##### `inference_accelerators`<sup>Required</sup> <a name="inference_accelerators" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.inferenceAccelerators"></a>

```python
inference_accelerators: DataAwsEc2InstanceTypeInferenceAcceleratorsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList">DataAwsEc2InstanceTypeInferenceAcceleratorsList</a>

---

##### `instance_disks`<sup>Required</sup> <a name="instance_disks" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceDisks"></a>

```python
instance_disks: DataAwsEc2InstanceTypeInstanceDisksList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList">DataAwsEc2InstanceTypeInstanceDisksList</a>

---

##### `instance_storage_supported`<sup>Required</sup> <a name="instance_storage_supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceStorageSupported"></a>

```python
instance_storage_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ipv6_supported`<sup>Required</sup> <a name="ipv6_supported" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.ipv6Supported"></a>

```python
ipv6_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `maximum_ipv4_addresses_per_interface`<sup>Required</sup> <a name="maximum_ipv4_addresses_per_interface" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumIpv4AddressesPerInterface"></a>

```python
maximum_ipv4_addresses_per_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ipv6_addresses_per_interface`<sup>Required</sup> <a name="maximum_ipv6_addresses_per_interface" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumIpv6AddressesPerInterface"></a>

```python
maximum_ipv6_addresses_per_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_network_interfaces`<sup>Required</sup> <a name="maximum_network_interfaces" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.maximumNetworkInterfaces"></a>

```python
maximum_network_interfaces: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size`<sup>Required</sup> <a name="memory_size" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_performance`<sup>Required</sup> <a name="network_performance" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.networkPerformance"></a>

```python
network_performance: str
```

- *Type:* str

---

##### `supported_architectures`<sup>Required</sup> <a name="supported_architectures" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedArchitectures"></a>

```python
supported_architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_placement_strategies`<sup>Required</sup> <a name="supported_placement_strategies" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedPlacementStrategies"></a>

```python
supported_placement_strategies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_root_device_types`<sup>Required</sup> <a name="supported_root_device_types" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedRootDeviceTypes"></a>

```python
supported_root_device_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_usages_classes`<sup>Required</sup> <a name="supported_usages_classes" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedUsagesClasses"></a>

```python
supported_usages_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_virtualization_types`<sup>Required</sup> <a name="supported_virtualization_types" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.supportedVirtualizationTypes"></a>

```python
supported_virtualization_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sustained_clock_speed`<sup>Required</sup> <a name="sustained_clock_speed" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.sustainedClockSpeed"></a>

```python
sustained_clock_speed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.timeouts"></a>

```python
timeouts: DataAwsEc2InstanceTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference">DataAwsEc2InstanceTypeTimeoutsOutputReference</a>

---

##### `total_fpga_memory`<sup>Required</sup> <a name="total_fpga_memory" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalFpgaMemory"></a>

```python
total_fpga_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_gpu_memory`<sup>Required</sup> <a name="total_gpu_memory" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalGpuMemory"></a>

```python
total_gpu_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_instance_storage`<sup>Required</sup> <a name="total_instance_storage" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.totalInstanceStorage"></a>

```python
total_instance_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `valid_cores`<sup>Required</sup> <a name="valid_cores" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.validCores"></a>

```python
valid_cores: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `valid_threads_per_core`<sup>Required</sup> <a name="valid_threads_per_core" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.validThreadsPerCore"></a>

```python
valid_threads_per_core: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsEc2InstanceTypeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2InstanceTypeConfig <a name="DataAwsEc2InstanceTypeConfig" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_type: str,
  id: str = None,
  timeouts: DataAwsEc2InstanceTypeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#id DataAwsEc2InstanceType#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#id DataAwsEc2InstanceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeConfig.property.timeouts"></a>

```python
timeouts: DataAwsEc2InstanceTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#timeouts DataAwsEc2InstanceType#timeouts}

---

### DataAwsEc2InstanceTypeFpgas <a name="DataAwsEc2InstanceTypeFpgas" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas()
```


### DataAwsEc2InstanceTypeGpus <a name="DataAwsEc2InstanceTypeGpus" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus()
```


### DataAwsEc2InstanceTypeInferenceAccelerators <a name="DataAwsEc2InstanceTypeInferenceAccelerators" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators()
```


### DataAwsEc2InstanceTypeInstanceDisks <a name="DataAwsEc2InstanceTypeInstanceDisks" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks()
```


### DataAwsEc2InstanceTypeTimeouts <a name="DataAwsEc2InstanceTypeTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#read DataAwsEc2InstanceType#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type#read DataAwsEc2InstanceType#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2InstanceTypeFpgasList <a name="DataAwsEc2InstanceTypeFpgasList" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2InstanceTypeFpgasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2InstanceTypeFpgasOutputReference <a name="DataAwsEc2InstanceTypeFpgasOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.manufacturer">manufacturer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas">DataAwsEc2InstanceTypeFpgas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.manufacturer"></a>

```python
manufacturer: str
```

- *Type:* str

---

##### `memory_size`<sup>Required</sup> <a name="memory_size" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgasOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2InstanceTypeFpgas
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeFpgas">DataAwsEc2InstanceTypeFpgas</a>

---


### DataAwsEc2InstanceTypeGpusList <a name="DataAwsEc2InstanceTypeGpusList" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2InstanceTypeGpusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2InstanceTypeGpusOutputReference <a name="DataAwsEc2InstanceTypeGpusOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.manufacturer">manufacturer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus">DataAwsEc2InstanceTypeGpus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.manufacturer"></a>

```python
manufacturer: str
```

- *Type:* str

---

##### `memory_size`<sup>Required</sup> <a name="memory_size" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2InstanceTypeGpus
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeGpus">DataAwsEc2InstanceTypeGpus</a>

---


### DataAwsEc2InstanceTypeInferenceAcceleratorsList <a name="DataAwsEc2InstanceTypeInferenceAcceleratorsList" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference <a name="DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.manufacturer">manufacturer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators">DataAwsEc2InstanceTypeInferenceAccelerators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.manufacturer"></a>

```python
manufacturer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2InstanceTypeInferenceAccelerators
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInferenceAccelerators">DataAwsEc2InstanceTypeInferenceAccelerators</a>

---


### DataAwsEc2InstanceTypeInstanceDisksList <a name="DataAwsEc2InstanceTypeInstanceDisksList" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2InstanceTypeInstanceDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2InstanceTypeInstanceDisksOutputReference <a name="DataAwsEc2InstanceTypeInstanceDisksOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks">DataAwsEc2InstanceTypeInstanceDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisksOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2InstanceTypeInstanceDisks
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeInstanceDisks">DataAwsEc2InstanceTypeInstanceDisks</a>

---


### DataAwsEc2InstanceTypeTimeoutsOutputReference <a name="DataAwsEc2InstanceTypeTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_instance_type

dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsEc2InstanceTypeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsEc2InstanceType.DataAwsEc2InstanceTypeTimeouts">DataAwsEc2InstanceTypeTimeouts</a>, cdktf.IResolvable]

---



