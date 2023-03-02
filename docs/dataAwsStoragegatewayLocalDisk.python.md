# `dataAwsStoragegatewayLocalDisk` Submodule <a name="`dataAwsStoragegatewayLocalDisk` Submodule" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsStoragegatewayLocalDisk <a name="DataAwsStoragegatewayLocalDisk" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk aws_storagegateway_local_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_storagegateway_local_disk

dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  disk_node: str = None,
  disk_path: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.diskNode">disk_node</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.diskPath">disk_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.gatewayArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}.

---

##### `disk_node`<sup>Optional</sup> <a name="disk_node" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.diskNode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}.

---

##### `disk_path`<sup>Optional</sup> <a name="disk_path" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.diskPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskNode">reset_disk_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskPath">reset_disk_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_disk_node` <a name="reset_disk_node" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskNode"></a>

```python
def reset_disk_node() -> None
```

##### `reset_disk_path` <a name="reset_disk_path" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetDiskPath"></a>

```python
def reset_disk_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_storagegateway_local_disk

dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_storagegateway_local_disk

dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_storagegateway_local_disk

dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskId">disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNodeInput">disk_node_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPathInput">disk_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArnInput">gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNode">disk_node</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPath">disk_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `disk_id`<sup>Required</sup> <a name="disk_id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskId"></a>

```python
disk_id: str
```

- *Type:* str

---

##### `disk_node_input`<sup>Optional</sup> <a name="disk_node_input" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNodeInput"></a>

```python
disk_node_input: str
```

- *Type:* str

---

##### `disk_path_input`<sup>Optional</sup> <a name="disk_path_input" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPathInput"></a>

```python
disk_path_input: str
```

- *Type:* str

---

##### `gateway_arn_input`<sup>Optional</sup> <a name="gateway_arn_input" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArnInput"></a>

```python
gateway_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `disk_node`<sup>Required</sup> <a name="disk_node" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskNode"></a>

```python
disk_node: str
```

- *Type:* str

---

##### `disk_path`<sup>Required</sup> <a name="disk_path" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.diskPath"></a>

```python
disk_path: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDisk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsStoragegatewayLocalDiskConfig <a name="DataAwsStoragegatewayLocalDiskConfig" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_storagegateway_local_disk

dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_arn: str,
  disk_node: str = None,
  disk_path: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskNode">disk_node</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskPath">disk_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}.

---

##### `disk_node`<sup>Optional</sup> <a name="disk_node" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskNode"></a>

```python
disk_node: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_node DataAwsStoragegatewayLocalDisk#disk_node}.

---

##### `disk_path`<sup>Optional</sup> <a name="disk_path" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.diskPath"></a>

```python
disk_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#disk_path DataAwsStoragegatewayLocalDisk#disk_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsStoragegatewayLocalDisk.DataAwsStoragegatewayLocalDiskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk#id DataAwsStoragegatewayLocalDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



