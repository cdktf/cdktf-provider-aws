# `dataAwsEfsMountTarget` Submodule <a name="`dataAwsEfsMountTarget` Submodule" id="@cdktf/provider-aws.dataAwsEfsMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEfsMountTarget <a name="DataAwsEfsMountTarget" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target aws_efs_mount_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_mount_target

dataAwsEfsMountTarget.DataAwsEfsMountTarget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_point_id: str = None,
  file_system_id: str = None,
  id: str = None,
  mount_target_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.accessPointId">access_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#access_point_id DataAwsEfsMountTarget#access_point_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#file_system_id DataAwsEfsMountTarget#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#id DataAwsEfsMountTarget#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.mountTargetId">mount_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#mount_target_id DataAwsEfsMountTarget#mount_target_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_point_id`<sup>Optional</sup> <a name="access_point_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.accessPointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#access_point_id DataAwsEfsMountTarget#access_point_id}.

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#file_system_id DataAwsEfsMountTarget#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#id DataAwsEfsMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_target_id`<sup>Optional</sup> <a name="mount_target_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.mountTargetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#mount_target_id DataAwsEfsMountTarget#mount_target_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetAccessPointId">reset_access_point_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetMountTargetId">reset_mount_target_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_access_point_id` <a name="reset_access_point_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetAccessPointId"></a>

```python
def reset_access_point_id() -> None
```

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_target_id` <a name="reset_mount_target_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetMountTargetId"></a>

```python
def reset_mount_target_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_mount_target

dataAwsEfsMountTarget.DataAwsEfsMountTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_mount_target

dataAwsEfsMountTarget.DataAwsEfsMountTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_mount_target

dataAwsEfsMountTarget.DataAwsEfsMountTarget.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemArn">file_system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetDnsName">mount_target_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.accessPointIdInput">access_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetIdInput">mount_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.accessPointId">access_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `availability_zone_name`<sup>Required</sup> <a name="availability_zone_name" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `file_system_arn`<sup>Required</sup> <a name="file_system_arn" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemArn"></a>

```python
file_system_arn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `mount_target_dns_name`<sup>Required</sup> <a name="mount_target_dns_name" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetDnsName"></a>

```python
mount_target_dns_name: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `access_point_id_input`<sup>Optional</sup> <a name="access_point_id_input" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.accessPointIdInput"></a>

```python
access_point_id_input: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_target_id_input`<sup>Optional</sup> <a name="mount_target_id_input" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetIdInput"></a>

```python
mount_target_id_input: str
```

- *Type:* str

---

##### `access_point_id`<sup>Required</sup> <a name="access_point_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.accessPointId"></a>

```python
access_point_id: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEfsMountTargetConfig <a name="DataAwsEfsMountTargetConfig" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_mount_target

dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_point_id: str = None,
  file_system_id: str = None,
  id: str = None,
  mount_target_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.accessPointId">access_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#access_point_id DataAwsEfsMountTarget#access_point_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#file_system_id DataAwsEfsMountTarget#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#id DataAwsEfsMountTarget#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#mount_target_id DataAwsEfsMountTarget#mount_target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_point_id`<sup>Optional</sup> <a name="access_point_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.accessPointId"></a>

```python
access_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#access_point_id DataAwsEfsMountTarget#access_point_id}.

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#file_system_id DataAwsEfsMountTarget#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#id DataAwsEfsMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_target_id`<sup>Optional</sup> <a name="mount_target_id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#mount_target_id DataAwsEfsMountTarget#mount_target_id}.

---



