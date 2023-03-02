# `dataAwsFsxOpenzfsSnapshot` Submodule <a name="`dataAwsFsxOpenzfsSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOpenzfsSnapshot <a name="DataAwsFsxOpenzfsSnapshot" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_openzfs_snapshot

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsFsxOpenzfsSnapshotFilter]] = None,
  id: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  name: str = None,
  snapshot_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.snapshotIds">snapshot_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#filter DataAwsFsxOpenzfsSnapshot#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.mostRecent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `snapshot_ids`<sup>Optional</sup> <a name="snapshot_ids" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.snapshotIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetMostRecent">reset_most_recent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetSnapshotIds">reset_snapshot_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsFsxOpenzfsSnapshotFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_most_recent` <a name="reset_most_recent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetMostRecent"></a>

```python
def reset_most_recent() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_snapshot_ids` <a name="reset_snapshot_ids" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetSnapshotIds"></a>

```python
def reset_snapshot_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_openzfs_snapshot

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_openzfs_snapshot

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_openzfs_snapshot

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList">DataAwsFsxOpenzfsSnapshotFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecentInput">most_recent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIdsInput">snapshot_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIds">snapshot_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filter"></a>

```python
filter: DataAwsFsxOpenzfsSnapshotFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList">DataAwsFsxOpenzfsSnapshotFilterList</a>

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsFsxOpenzfsSnapshotFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `most_recent_input`<sup>Optional</sup> <a name="most_recent_input" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecentInput"></a>

```python
most_recent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `snapshot_ids_input`<sup>Optional</sup> <a name="snapshot_ids_input" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIdsInput"></a>

```python
snapshot_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `most_recent`<sup>Required</sup> <a name="most_recent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `snapshot_ids`<sup>Required</sup> <a name="snapshot_ids" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIds"></a>

```python
snapshot_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOpenzfsSnapshotConfig <a name="DataAwsFsxOpenzfsSnapshotConfig" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_openzfs_snapshot

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsFsxOpenzfsSnapshotFilter]] = None,
  id: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  name: str = None,
  snapshot_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.snapshotIds">snapshot_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsFsxOpenzfsSnapshotFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#filter DataAwsFsxOpenzfsSnapshot#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `snapshot_ids`<sup>Optional</sup> <a name="snapshot_ids" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.snapshotIds"></a>

```python
snapshot_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}.

---

### DataAwsFsxOpenzfsSnapshotFilter <a name="DataAwsFsxOpenzfsSnapshotFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_openzfs_snapshot

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOpenzfsSnapshotFilterList <a name="DataAwsFsxOpenzfsSnapshotFilterList" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_openzfs_snapshot

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOpenzfsSnapshotFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsFsxOpenzfsSnapshotFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>]]

---


### DataAwsFsxOpenzfsSnapshotFilterOutputReference <a name="DataAwsFsxOpenzfsSnapshotFilterOutputReference" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_openzfs_snapshot

dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsFsxOpenzfsSnapshotFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>, cdktf.IResolvable]

---



