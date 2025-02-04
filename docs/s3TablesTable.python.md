# `s3TablesTable` Submodule <a name="`s3TablesTable` Submodule" id="@cdktf/provider-aws.s3TablesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTable <a name="S3TablesTable" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table aws_s3tables_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  format: str,
  name: str,
  namespace: str,
  table_bucket_arn: str,
  maintenance_configuration: S3TablesTableMaintenanceConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#format S3TablesTable#format}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#name S3TablesTable#name}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#maintenance_configuration S3TablesTable#maintenance_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#format S3TablesTable#format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#name S3TablesTable#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}.

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.tableBucketArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}.

---

##### `maintenance_configuration`<sup>Optional</sup> <a name="maintenance_configuration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.maintenanceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#maintenance_configuration S3TablesTable#maintenance_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.putMaintenanceConfiguration">put_maintenance_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.resetMaintenanceConfiguration">reset_maintenance_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_maintenance_configuration` <a name="put_maintenance_configuration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.putMaintenanceConfiguration"></a>

```python
def put_maintenance_configuration(
  iceberg_compaction: S3TablesTableMaintenanceConfigurationIcebergCompaction = None,
  iceberg_snapshot_management: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement = None
) -> None
```

###### `iceberg_compaction`<sup>Optional</sup> <a name="iceberg_compaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.putMaintenanceConfiguration.parameter.icebergCompaction"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#iceberg_compaction S3TablesTable#iceberg_compaction}.

---

###### `iceberg_snapshot_management`<sup>Optional</sup> <a name="iceberg_snapshot_management" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.putMaintenanceConfiguration.parameter.icebergSnapshotManagement"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#iceberg_snapshot_management S3TablesTable#iceberg_snapshot_management}.

---

##### `reset_maintenance_configuration` <a name="reset_maintenance_configuration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.resetMaintenanceConfiguration"></a>

```python
def reset_maintenance_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3TablesTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3TablesTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3TablesTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3TablesTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3TablesTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference">S3TablesTableMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.metadataLocation">metadata_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.versionToken">version_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.warehouseLocation">warehouse_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.maintenanceConfigurationInput">maintenance_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tableBucketArnInput">table_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `maintenance_configuration`<sup>Required</sup> <a name="maintenance_configuration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.maintenanceConfiguration"></a>

```python
maintenance_configuration: S3TablesTableMaintenanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference">S3TablesTableMaintenanceConfigurationOutputReference</a>

---

##### `metadata_location`<sup>Required</sup> <a name="metadata_location" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.metadataLocation"></a>

```python
metadata_location: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version_token`<sup>Required</sup> <a name="version_token" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.versionToken"></a>

```python
version_token: str
```

- *Type:* str

---

##### `warehouse_location`<sup>Required</sup> <a name="warehouse_location" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.warehouseLocation"></a>

```python
warehouse_location: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `maintenance_configuration_input`<sup>Optional</sup> <a name="maintenance_configuration_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.maintenanceConfigurationInput"></a>

```python
maintenance_configuration_input: typing.Union[IResolvable, S3TablesTableMaintenanceConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `table_bucket_arn_input`<sup>Optional</sup> <a name="table_bucket_arn_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tableBucketArnInput"></a>

```python
table_bucket_arn_input: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableConfig <a name="S3TablesTableConfig" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  format: str,
  name: str,
  namespace: str,
  table_bucket_arn: str,
  maintenance_configuration: S3TablesTableMaintenanceConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#format S3TablesTable#format}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#name S3TablesTable#name}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.tableBucketArn">table_bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#maintenance_configuration S3TablesTable#maintenance_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#format S3TablesTable#format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#name S3TablesTable#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}.

---

##### `table_bucket_arn`<sup>Required</sup> <a name="table_bucket_arn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.tableBucketArn"></a>

```python
table_bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}.

---

##### `maintenance_configuration`<sup>Optional</sup> <a name="maintenance_configuration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.maintenanceConfiguration"></a>

```python
maintenance_configuration: S3TablesTableMaintenanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#maintenance_configuration S3TablesTable#maintenance_configuration}.

---

### S3TablesTableMaintenanceConfiguration <a name="S3TablesTableMaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfiguration(
  iceberg_compaction: S3TablesTableMaintenanceConfigurationIcebergCompaction = None,
  iceberg_snapshot_management: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.property.icebergCompaction">iceberg_compaction</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#iceberg_compaction S3TablesTable#iceberg_compaction}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.property.icebergSnapshotManagement">iceberg_snapshot_management</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#iceberg_snapshot_management S3TablesTable#iceberg_snapshot_management}. |

---

##### `iceberg_compaction`<sup>Optional</sup> <a name="iceberg_compaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.property.icebergCompaction"></a>

```python
iceberg_compaction: S3TablesTableMaintenanceConfigurationIcebergCompaction
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#iceberg_compaction S3TablesTable#iceberg_compaction}.

---

##### `iceberg_snapshot_management`<sup>Optional</sup> <a name="iceberg_snapshot_management" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.property.icebergSnapshotManagement"></a>

```python
iceberg_snapshot_management: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#iceberg_snapshot_management S3TablesTable#iceberg_snapshot_management}.

---

### S3TablesTableMaintenanceConfigurationIcebergCompaction <a name="S3TablesTableMaintenanceConfigurationIcebergCompaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction(
  settings: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#settings S3TablesTable#settings}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#status S3TablesTable#status}. |

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.property.settings"></a>

```python
settings: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#settings S3TablesTable#settings}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#status S3TablesTable#status}.

---

### S3TablesTableMaintenanceConfigurationIcebergCompactionSettings <a name="S3TablesTableMaintenanceConfigurationIcebergCompactionSettings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings(
  target_file_size_mb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings.property.targetFileSizeMb">target_file_size_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}. |

---

##### `target_file_size_mb`<sup>Optional</sup> <a name="target_file_size_mb" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings.property.targetFileSizeMb"></a>

```python
target_file_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}.

---

### S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement <a name="S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement(
  settings: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#settings S3TablesTable#settings}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#status S3TablesTable#status}. |

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.property.settings"></a>

```python
settings: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#settings S3TablesTable#settings}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#status S3TablesTable#status}.

---

### S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings <a name="S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings(
  max_snapshot_age_hours: typing.Union[int, float] = None,
  min_snapshots_to_keep: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.property.maxSnapshotAgeHours">max_snapshot_age_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.property.minSnapshotsToKeep">min_snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}. |

---

##### `max_snapshot_age_hours`<sup>Optional</sup> <a name="max_snapshot_age_hours" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.property.maxSnapshotAgeHours"></a>

```python
max_snapshot_age_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}.

---

##### `min_snapshots_to_keep`<sup>Optional</sup> <a name="min_snapshots_to_keep" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.property.minSnapshotsToKeep"></a>

```python
min_snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference <a name="S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.putSettings"></a>

```python
def put_settings(
  target_file_size_mb: typing.Union[int, float] = None
) -> None
```

###### `target_file_size_mb`<sup>Optional</sup> <a name="target_file_size_mb" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.putSettings.parameter.targetFileSizeMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}.

---

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference">S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.settingsInput">settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.settings"></a>

```python
settings: S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference">S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference</a>

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.settingsInput"></a>

```python
settings_input: typing.Union[IResolvable, S3TablesTableMaintenanceConfigurationIcebergCompactionSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a>]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableMaintenanceConfigurationIcebergCompaction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a>]

---


### S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference <a name="S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resetTargetFileSizeMb">reset_target_file_size_mb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_file_size_mb` <a name="reset_target_file_size_mb" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resetTargetFileSizeMb"></a>

```python
def reset_target_file_size_mb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.targetFileSizeMbInput">target_file_size_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.targetFileSizeMb">target_file_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_file_size_mb_input`<sup>Optional</sup> <a name="target_file_size_mb_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.targetFileSizeMbInput"></a>

```python
target_file_size_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_file_size_mb`<sup>Required</sup> <a name="target_file_size_mb" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.targetFileSizeMb"></a>

```python
target_file_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableMaintenanceConfigurationIcebergCompactionSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a>]

---


### S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference <a name="S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.putSettings"></a>

```python
def put_settings(
  max_snapshot_age_hours: typing.Union[int, float] = None,
  min_snapshots_to_keep: typing.Union[int, float] = None
) -> None
```

###### `max_snapshot_age_hours`<sup>Optional</sup> <a name="max_snapshot_age_hours" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.putSettings.parameter.maxSnapshotAgeHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}.

---

###### `min_snapshots_to_keep`<sup>Optional</sup> <a name="min_snapshots_to_keep" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.putSettings.parameter.minSnapshotsToKeep"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}.

---

##### `reset_settings` <a name="reset_settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.settingsInput">settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.settings"></a>

```python
settings: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference</a>

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.settingsInput"></a>

```python
settings_input: typing.Union[IResolvable, S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a>]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a>]

---


### S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference <a name="S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resetMaxSnapshotAgeHours">reset_max_snapshot_age_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resetMinSnapshotsToKeep">reset_min_snapshots_to_keep</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_snapshot_age_hours` <a name="reset_max_snapshot_age_hours" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resetMaxSnapshotAgeHours"></a>

```python
def reset_max_snapshot_age_hours() -> None
```

##### `reset_min_snapshots_to_keep` <a name="reset_min_snapshots_to_keep" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resetMinSnapshotsToKeep"></a>

```python
def reset_min_snapshots_to_keep() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.maxSnapshotAgeHoursInput">max_snapshot_age_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.minSnapshotsToKeepInput">min_snapshots_to_keep_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.maxSnapshotAgeHours">max_snapshot_age_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.minSnapshotsToKeep">min_snapshots_to_keep</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_snapshot_age_hours_input`<sup>Optional</sup> <a name="max_snapshot_age_hours_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.maxSnapshotAgeHoursInput"></a>

```python
max_snapshot_age_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_snapshots_to_keep_input`<sup>Optional</sup> <a name="min_snapshots_to_keep_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.minSnapshotsToKeepInput"></a>

```python
min_snapshots_to_keep_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_snapshot_age_hours`<sup>Required</sup> <a name="max_snapshot_age_hours" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.maxSnapshotAgeHours"></a>

```python
max_snapshot_age_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_snapshots_to_keep`<sup>Required</sup> <a name="min_snapshots_to_keep" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.minSnapshotsToKeep"></a>

```python
min_snapshots_to_keep: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a>]

---


### S3TablesTableMaintenanceConfigurationOutputReference <a name="S3TablesTableMaintenanceConfigurationOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_tables_table

s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergCompaction">put_iceberg_compaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergSnapshotManagement">put_iceberg_snapshot_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resetIcebergCompaction">reset_iceberg_compaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resetIcebergSnapshotManagement">reset_iceberg_snapshot_management</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iceberg_compaction` <a name="put_iceberg_compaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergCompaction"></a>

```python
def put_iceberg_compaction(
  settings: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings = None,
  status: str = None
) -> None
```

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergCompaction.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#settings S3TablesTable#settings}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergCompaction.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#status S3TablesTable#status}.

---

##### `put_iceberg_snapshot_management` <a name="put_iceberg_snapshot_management" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergSnapshotManagement"></a>

```python
def put_iceberg_snapshot_management(
  settings: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings = None,
  status: str = None
) -> None
```

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergSnapshotManagement.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#settings S3TablesTable#settings}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergSnapshotManagement.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/s3tables_table#status S3TablesTable#status}.

---

##### `reset_iceberg_compaction` <a name="reset_iceberg_compaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resetIcebergCompaction"></a>

```python
def reset_iceberg_compaction() -> None
```

##### `reset_iceberg_snapshot_management` <a name="reset_iceberg_snapshot_management" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resetIcebergSnapshotManagement"></a>

```python
def reset_iceberg_snapshot_management() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergCompaction">iceberg_compaction</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference">S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergSnapshotManagement">iceberg_snapshot_management</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergCompactionInput">iceberg_compaction_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergSnapshotManagementInput">iceberg_snapshot_management_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_compaction`<sup>Required</sup> <a name="iceberg_compaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergCompaction"></a>

```python
iceberg_compaction: S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference">S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference</a>

---

##### `iceberg_snapshot_management`<sup>Required</sup> <a name="iceberg_snapshot_management" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergSnapshotManagement"></a>

```python
iceberg_snapshot_management: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference</a>

---

##### `iceberg_compaction_input`<sup>Optional</sup> <a name="iceberg_compaction_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergCompactionInput"></a>

```python
iceberg_compaction_input: typing.Union[IResolvable, S3TablesTableMaintenanceConfigurationIcebergCompaction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a>]

---

##### `iceberg_snapshot_management_input`<sup>Optional</sup> <a name="iceberg_snapshot_management_input" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergSnapshotManagementInput"></a>

```python
iceberg_snapshot_management_input: typing.Union[IResolvable, S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3TablesTableMaintenanceConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a>]

---



