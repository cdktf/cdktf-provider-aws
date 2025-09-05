# `dbSnapshot` Submodule <a name="`dbSnapshot` Submodule" id="@cdktf/provider-aws.dbSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbSnapshot <a name="DbSnapshot" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot aws_db_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_snapshot

dbSnapshot.DbSnapshot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_instance_identifier: str,
  db_snapshot_identifier: str,
  id: str = None,
  region: str = None,
  shared_accounts: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DbSnapshotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#db_instance_identifier DbSnapshot#db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#db_snapshot_identifier DbSnapshot#db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#id DbSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.sharedAccounts">shared_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#shared_accounts DbSnapshot#shared_accounts}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#tags DbSnapshot#tags}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#tags_all DbSnapshot#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts">DbSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.dbInstanceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#db_instance_identifier DbSnapshot#db_instance_identifier}.

---

##### `db_snapshot_identifier`<sup>Required</sup> <a name="db_snapshot_identifier" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.dbSnapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#db_snapshot_identifier DbSnapshot#db_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#id DbSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#region DbSnapshot#region}

---

##### `shared_accounts`<sup>Optional</sup> <a name="shared_accounts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.sharedAccounts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#shared_accounts DbSnapshot#shared_accounts}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#tags DbSnapshot#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#tags_all DbSnapshot#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts">DbSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#timeouts DbSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetSharedAccounts">reset_shared_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#create DbSnapshot#create}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_shared_accounts` <a name="reset_shared_accounts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetSharedAccounts"></a>

```python
def reset_shared_accounts() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DbSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import db_snapshot

dbSnapshot.DbSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import db_snapshot

dbSnapshot.DbSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import db_snapshot

dbSnapshot.DbSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import db_snapshot

dbSnapshot.DbSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DbSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DbSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DbSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DbSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbSnapshotArn">db_snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.optionGroupName">option_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.snapshotType">snapshot_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.sourceDbSnapshotIdentifier">source_db_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.sourceRegion">source_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference">DbSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbInstanceIdentifierInput">db_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbSnapshotIdentifierInput">db_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.sharedAccountsInput">shared_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts">DbSnapshotTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.sharedAccounts">shared_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `db_snapshot_arn`<sup>Required</sup> <a name="db_snapshot_arn" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbSnapshotArn"></a>

```python
db_snapshot_arn: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `option_group_name`<sup>Required</sup> <a name="option_group_name" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.optionGroupName"></a>

```python
option_group_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_type`<sup>Required</sup> <a name="snapshot_type" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.snapshotType"></a>

```python
snapshot_type: str
```

- *Type:* str

---

##### `source_db_snapshot_identifier`<sup>Required</sup> <a name="source_db_snapshot_identifier" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.sourceDbSnapshotIdentifier"></a>

```python
source_db_snapshot_identifier: str
```

- *Type:* str

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.timeouts"></a>

```python
timeouts: DbSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference">DbSnapshotTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `db_instance_identifier_input`<sup>Optional</sup> <a name="db_instance_identifier_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbInstanceIdentifierInput"></a>

```python
db_instance_identifier_input: str
```

- *Type:* str

---

##### `db_snapshot_identifier_input`<sup>Optional</sup> <a name="db_snapshot_identifier_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbSnapshotIdentifierInput"></a>

```python
db_snapshot_identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `shared_accounts_input`<sup>Optional</sup> <a name="shared_accounts_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.sharedAccountsInput"></a>

```python
shared_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DbSnapshotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts">DbSnapshotTimeouts</a>]

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

---

##### `db_snapshot_identifier`<sup>Required</sup> <a name="db_snapshot_identifier" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.dbSnapshotIdentifier"></a>

```python
db_snapshot_identifier: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `shared_accounts`<sup>Required</sup> <a name="shared_accounts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.sharedAccounts"></a>

```python
shared_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbSnapshot.DbSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DbSnapshotConfig <a name="DbSnapshotConfig" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_snapshot

dbSnapshot.DbSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_instance_identifier: str,
  db_snapshot_identifier: str,
  id: str = None,
  region: str = None,
  shared_accounts: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DbSnapshotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#db_instance_identifier DbSnapshot#db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#db_snapshot_identifier DbSnapshot#db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#id DbSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.sharedAccounts">shared_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#shared_accounts DbSnapshot#shared_accounts}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#tags DbSnapshot#tags}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#tags_all DbSnapshot#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts">DbSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#db_instance_identifier DbSnapshot#db_instance_identifier}.

---

##### `db_snapshot_identifier`<sup>Required</sup> <a name="db_snapshot_identifier" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.dbSnapshotIdentifier"></a>

```python
db_snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#db_snapshot_identifier DbSnapshot#db_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#id DbSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#region DbSnapshot#region}

---

##### `shared_accounts`<sup>Optional</sup> <a name="shared_accounts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.sharedAccounts"></a>

```python
shared_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#shared_accounts DbSnapshot#shared_accounts}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#tags DbSnapshot#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#tags_all DbSnapshot#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotConfig.property.timeouts"></a>

```python
timeouts: DbSnapshotTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts">DbSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#timeouts DbSnapshot#timeouts}

---

### DbSnapshotTimeouts <a name="DbSnapshotTimeouts" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_snapshot

dbSnapshot.DbSnapshotTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#create DbSnapshot#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.12.0/docs/resources/db_snapshot#create DbSnapshot#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbSnapshotTimeoutsOutputReference <a name="DbSnapshotTimeoutsOutputReference" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_snapshot

dbSnapshot.DbSnapshotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts">DbSnapshotTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DbSnapshotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dbSnapshot.DbSnapshotTimeouts">DbSnapshotTimeouts</a>]

---



