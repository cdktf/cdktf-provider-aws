# `fsxOpenzfsSnapshot` Submodule <a name="`fsxOpenzfsSnapshot` Submodule" id="@cdktf/provider-aws.fsxOpenzfsSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsSnapshot <a name="FsxOpenzfsSnapshot" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_snapshot

fsxOpenzfsSnapshot.FsxOpenzfsSnapshot(
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
  volume_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxOpenzfsSnapshotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#name FsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#volume_id FsxOpenzfsSnapshot#volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#id FsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags FsxOpenzfsSnapshot#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags_all FsxOpenzfsSnapshot#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#name FsxOpenzfsSnapshot#name}.

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.volumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#volume_id FsxOpenzfsSnapshot#volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#id FsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags FsxOpenzfsSnapshot#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags_all FsxOpenzfsSnapshot#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#timeouts FsxOpenzfsSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#create FsxOpenzfsSnapshot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#delete FsxOpenzfsSnapshot#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#read FsxOpenzfsSnapshot#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#update FsxOpenzfsSnapshot#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_snapshot

fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_snapshot

fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_snapshot

fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference">FsxOpenzfsSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.timeouts"></a>

```python
timeouts: FsxOpenzfsSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference">FsxOpenzfsSnapshotTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FsxOpenzfsSnapshotTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a>, cdktf.IResolvable]

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsSnapshotConfig <a name="FsxOpenzfsSnapshotConfig" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_snapshot

fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  volume_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxOpenzfsSnapshotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#name FsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#volume_id FsxOpenzfsSnapshot#volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#id FsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags FsxOpenzfsSnapshot#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags_all FsxOpenzfsSnapshot#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#name FsxOpenzfsSnapshot#name}.

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#volume_id FsxOpenzfsSnapshot#volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#id FsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags FsxOpenzfsSnapshot#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#tags_all FsxOpenzfsSnapshot#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotConfig.property.timeouts"></a>

```python
timeouts: FsxOpenzfsSnapshotTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#timeouts FsxOpenzfsSnapshot#timeouts}

---

### FsxOpenzfsSnapshotTimeouts <a name="FsxOpenzfsSnapshotTimeouts" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_snapshot

fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#create FsxOpenzfsSnapshot#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#delete FsxOpenzfsSnapshot#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#read FsxOpenzfsSnapshot#read}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#update FsxOpenzfsSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#create FsxOpenzfsSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#delete FsxOpenzfsSnapshot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#read FsxOpenzfsSnapshot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_snapshot#update FsxOpenzfsSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsSnapshotTimeoutsOutputReference <a name="FsxOpenzfsSnapshotTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_snapshot

fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxOpenzfsSnapshotTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsSnapshot.FsxOpenzfsSnapshotTimeouts">FsxOpenzfsSnapshotTimeouts</a>, cdktf.IResolvable]

---



