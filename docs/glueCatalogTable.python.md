# `glueCatalogTable` Submodule <a name="`glueCatalogTable` Submodule" id="@cdktf/provider-aws.glueCatalogTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogTable <a name="GlueCatalogTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table aws_glue_catalog_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  name: str,
  catalog_id: str = None,
  description: str = None,
  id: str = None,
  owner: str = None,
  parameters: typing.Mapping[str] = None,
  partition_index: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionIndex]] = None,
  partition_keys: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionKeys]] = None,
  retention: typing.Union[int, float] = None,
  storage_descriptor: GlueCatalogTableStorageDescriptor = None,
  table_type: str = None,
  target_table: GlueCatalogTableTargetTable = None,
  view_expanded_text: str = None,
  view_original_text: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#description GlueCatalogTable#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#id GlueCatalogTable#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#owner GlueCatalogTable#owner}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.partitionIndex">partition_index</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]</code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.partitionKeys">partition_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]</code> | partition_keys block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.retention">retention</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#retention GlueCatalogTable#retention}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.tableType">table_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#table_type GlueCatalogTable#table_type}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.targetTable">target_table</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | target_table block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.viewOriginalText">view_original_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#description GlueCatalogTable#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#id GlueCatalogTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#owner GlueCatalogTable#owner}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.partitionIndex"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]

partition_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#partition_index GlueCatalogTable#partition_index}

---

##### `partition_keys`<sup>Optional</sup> <a name="partition_keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.partitionKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]

partition_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#partition_keys GlueCatalogTable#partition_keys}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.retention"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#retention GlueCatalogTable#retention}.

---

##### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#storage_descriptor GlueCatalogTable#storage_descriptor}

---

##### `table_type`<sup>Optional</sup> <a name="table_type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.tableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#table_type GlueCatalogTable#table_type}.

---

##### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.targetTable"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#target_table GlueCatalogTable#target_table}

---

##### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.viewExpandedText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}.

---

##### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.viewOriginalText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex">put_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys">put_partition_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor">put_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable">put_target_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys">reset_partition_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention">reset_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor">reset_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType">reset_table_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable">reset_target_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText">reset_view_expanded_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText">reset_view_original_text</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_partition_index` <a name="put_partition_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex"></a>

```python
def put_partition_index(
  value: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionIndex]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]

---

##### `put_partition_keys` <a name="put_partition_keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys"></a>

```python
def put_partition_keys(
  value: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]

---

##### `put_storage_descriptor` <a name="put_storage_descriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor"></a>

```python
def put_storage_descriptor(
  bucket_columns: typing.List[str] = None,
  columns: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorColumns]] = None,
  compressed: typing.Union[bool, IResolvable] = None,
  input_format: str = None,
  location: str = None,
  number_of_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: typing.Mapping[str] = None,
  schema_reference: GlueCatalogTableStorageDescriptorSchemaReference = None,
  ser_de_info: GlueCatalogTableStorageDescriptorSerDeInfo = None,
  skewed_info: GlueCatalogTableStorageDescriptorSkewedInfo = None,
  sort_columns: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorSortColumns]] = None,
  stored_as_sub_directories: typing.Union[bool, IResolvable] = None
) -> None
```

###### `bucket_columns`<sup>Optional</sup> <a name="bucket_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.bucketColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}.

---

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.columns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>]]

columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#columns GlueCatalogTable#columns}

---

###### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.compressed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#compressed GlueCatalogTable#compressed}.

---

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.inputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#input_format GlueCatalogTable#input_format}.

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#location GlueCatalogTable#location}.

---

###### `number_of_buckets`<sup>Optional</sup> <a name="number_of_buckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.numberOfBuckets"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}.

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.outputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#output_format GlueCatalogTable#output_format}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

###### `schema_reference`<sup>Optional</sup> <a name="schema_reference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.schemaReference"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

schema_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_reference GlueCatalogTable#schema_reference}

---

###### `ser_de_info`<sup>Optional</sup> <a name="ser_de_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.serDeInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

ser_de_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#ser_de_info GlueCatalogTable#ser_de_info}

---

###### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.skewedInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_info GlueCatalogTable#skewed_info}

---

###### `sort_columns`<sup>Optional</sup> <a name="sort_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.sortColumns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>]]

sort_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_columns GlueCatalogTable#sort_columns}

---

###### `stored_as_sub_directories`<sup>Optional</sup> <a name="stored_as_sub_directories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.storedAsSubDirectories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}.

---

##### `put_target_table` <a name="put_target_table" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable"></a>

```python
def put_target_table(
  catalog_id: str,
  database_name: str,
  name: str
) -> None
```

###### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

###### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_partition_keys` <a name="reset_partition_keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys"></a>

```python
def reset_partition_keys() -> None
```

##### `reset_retention` <a name="reset_retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention"></a>

```python
def reset_retention() -> None
```

##### `reset_storage_descriptor` <a name="reset_storage_descriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor"></a>

```python
def reset_storage_descriptor() -> None
```

##### `reset_table_type` <a name="reset_table_type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType"></a>

```python
def reset_table_type() -> None
```

##### `reset_target_table` <a name="reset_target_table" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable"></a>

```python
def reset_target_table() -> None
```

##### `reset_view_expanded_text` <a name="reset_view_expanded_text" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText"></a>

```python
def reset_view_expanded_text() -> None
```

##### `reset_view_original_text` <a name="reset_view_original_text" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText"></a>

```python
def reset_view_original_text() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex">partition_index</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys">partition_keys</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable">target_table</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput">partition_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput">retention_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput">storage_descriptor_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput">table_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput">target_table_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput">view_expanded_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput">view_original_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType">table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex"></a>

```python
partition_index: GlueCatalogTablePartitionIndexList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a>

---

##### `partition_keys`<sup>Required</sup> <a name="partition_keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys"></a>

```python
partition_keys: GlueCatalogTablePartitionKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a>

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor"></a>

```python
storage_descriptor: GlueCatalogTableStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a>

---

##### `target_table`<sup>Required</sup> <a name="target_table" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable"></a>

```python
target_table: GlueCatalogTableTargetTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]

---

##### `partition_keys_input`<sup>Optional</sup> <a name="partition_keys_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput"></a>

```python
partition_keys_input: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput"></a>

```python
retention_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_descriptor_input`<sup>Optional</sup> <a name="storage_descriptor_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput"></a>

```python
storage_descriptor_input: GlueCatalogTableStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `table_type_input`<sup>Optional</sup> <a name="table_type_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput"></a>

```python
table_type_input: str
```

- *Type:* str

---

##### `target_table_input`<sup>Optional</sup> <a name="target_table_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput"></a>

```python
target_table_input: GlueCatalogTableTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `view_expanded_text_input`<sup>Optional</sup> <a name="view_expanded_text_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput"></a>

```python
view_expanded_text_input: str
```

- *Type:* str

---

##### `view_original_text_input`<sup>Optional</sup> <a name="view_original_text_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput"></a>

```python
view_original_text_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_type`<sup>Required</sup> <a name="table_type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

---

##### `view_expanded_text`<sup>Required</sup> <a name="view_expanded_text" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

---

##### `view_original_text`<sup>Required</sup> <a name="view_original_text" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogTableConfig <a name="GlueCatalogTableConfig" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  name: str,
  catalog_id: str = None,
  description: str = None,
  id: str = None,
  owner: str = None,
  parameters: typing.Mapping[str] = None,
  partition_index: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionIndex]] = None,
  partition_keys: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionKeys]] = None,
  retention: typing.Union[int, float] = None,
  storage_descriptor: GlueCatalogTableStorageDescriptor = None,
  table_type: str = None,
  target_table: GlueCatalogTableTargetTable = None,
  view_expanded_text: str = None,
  view_original_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#description GlueCatalogTable#description}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#id GlueCatalogTable#id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#owner GlueCatalogTable#owner}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex">partition_index</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]</code> | partition_index block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys">partition_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]</code> | partition_keys block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#retention GlueCatalogTable#retention}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType">table_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#table_type GlueCatalogTable#table_type}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable">target_table</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | target_table block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#description GlueCatalogTable#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#id GlueCatalogTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#owner GlueCatalogTable#owner}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex"></a>

```python
partition_index: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]

partition_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#partition_index GlueCatalogTable#partition_index}

---

##### `partition_keys`<sup>Optional</sup> <a name="partition_keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys"></a>

```python
partition_keys: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]

partition_keys block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#partition_keys GlueCatalogTable#partition_keys}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#retention GlueCatalogTable#retention}.

---

##### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor"></a>

```python
storage_descriptor: GlueCatalogTableStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#storage_descriptor GlueCatalogTable#storage_descriptor}

---

##### `table_type`<sup>Optional</sup> <a name="table_type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#table_type GlueCatalogTable#table_type}.

---

##### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable"></a>

```python
target_table: GlueCatalogTableTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#target_table GlueCatalogTable#target_table}

---

##### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}.

---

##### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}.

---

### GlueCatalogTablePartitionIndex <a name="GlueCatalogTablePartitionIndex" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTablePartitionIndex(
  index_name: str,
  keys: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName">index_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#index_name GlueCatalogTable#index_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys">keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#keys GlueCatalogTable#keys}. |

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#index_name GlueCatalogTable#index_name}.

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#keys GlueCatalogTable#keys}.

---

### GlueCatalogTablePartitionKeys <a name="GlueCatalogTablePartitionKeys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTablePartitionKeys(
  name: str,
  comment: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptor <a name="GlueCatalogTableStorageDescriptor" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptor(
  bucket_columns: typing.List[str] = None,
  columns: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorColumns]] = None,
  compressed: typing.Union[bool, IResolvable] = None,
  input_format: str = None,
  location: str = None,
  number_of_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: typing.Mapping[str] = None,
  schema_reference: GlueCatalogTableStorageDescriptorSchemaReference = None,
  ser_de_info: GlueCatalogTableStorageDescriptorSerDeInfo = None,
  skewed_info: GlueCatalogTableStorageDescriptorSkewedInfo = None,
  sort_columns: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorSortColumns]] = None,
  stored_as_sub_directories: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns">columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>]]</code> | columns block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed">compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#compressed GlueCatalogTable#compressed}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat">input_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#input_format GlueCatalogTable#input_format}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#location GlueCatalogTable#location}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#output_format GlueCatalogTable#output_format}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference">schema_reference</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | schema_reference block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo">ser_de_info</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | ser_de_info block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns">sort_columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>]]</code> | sort_columns block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}. |

---

##### `bucket_columns`<sup>Optional</sup> <a name="bucket_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}.

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns"></a>

```python
columns: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>]]

columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#columns GlueCatalogTable#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed"></a>

```python
compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#compressed GlueCatalogTable#compressed}.

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#input_format GlueCatalogTable#input_format}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#location GlueCatalogTable#location}.

---

##### `number_of_buckets`<sup>Optional</sup> <a name="number_of_buckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}.

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#output_format GlueCatalogTable#output_format}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `schema_reference`<sup>Optional</sup> <a name="schema_reference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference"></a>

```python
schema_reference: GlueCatalogTableStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

schema_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_reference GlueCatalogTable#schema_reference}

---

##### `ser_de_info`<sup>Optional</sup> <a name="ser_de_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo"></a>

```python
ser_de_info: GlueCatalogTableStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

ser_de_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#ser_de_info GlueCatalogTable#ser_de_info}

---

##### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo"></a>

```python
skewed_info: GlueCatalogTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_info GlueCatalogTable#skewed_info}

---

##### `sort_columns`<sup>Optional</sup> <a name="sort_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns"></a>

```python
sort_columns: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorSortColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>]]

sort_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_columns GlueCatalogTable#sort_columns}

---

##### `stored_as_sub_directories`<sup>Optional</sup> <a name="stored_as_sub_directories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}.

---

### GlueCatalogTableStorageDescriptorColumns <a name="GlueCatalogTableStorageDescriptorColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorColumns(
  name: str,
  comment: str = None,
  parameters: typing.Mapping[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptorSchemaReference <a name="GlueCatalogTableStorageDescriptorSchemaReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference(
  schema_version_number: typing.Union[int, float],
  schema_id: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId = None,
  schema_version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber">schema_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId">schema_id</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | schema_id block. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId">schema_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}. |

---

##### `schema_version_number`<sup>Required</sup> <a name="schema_version_number" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```python
schema_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}.

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId"></a>

```python
schema_id: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

schema_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_id GlueCatalogTable#schema_id}

---

##### `schema_version_id`<sup>Optional</sup> <a name="schema_version_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```python
schema_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}.

---

### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId(
  registry_name: str = None,
  schema_arn: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName">registry_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#registry_name GlueCatalogTable#registry_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">schema_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_name GlueCatalogTable#schema_name}. |

---

##### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#registry_name GlueCatalogTable#registry_name}.

---

##### `schema_arn`<sup>Optional</sup> <a name="schema_arn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_name GlueCatalogTable#schema_name}.

---

### GlueCatalogTableStorageDescriptorSerDeInfo <a name="GlueCatalogTableStorageDescriptorSerDeInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo(
  name: str = None,
  parameters: typing.Mapping[str] = None,
  serialization_library: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `serialization_library`<sup>Optional</sup> <a name="serialization_library" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}.

---

### GlueCatalogTableStorageDescriptorSkewedInfo <a name="GlueCatalogTableStorageDescriptorSkewedInfo" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo(
  skewed_column_names: typing.List[str] = None,
  skewed_column_value_location_maps: typing.Mapping[str] = None,
  skewed_column_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}. |

---

##### `skewed_column_names`<sup>Optional</sup> <a name="skewed_column_names" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}.

---

##### `skewed_column_value_location_maps`<sup>Optional</sup> <a name="skewed_column_value_location_maps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}.

---

##### `skewed_column_values`<sup>Optional</sup> <a name="skewed_column_values" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}.

---

### GlueCatalogTableStorageDescriptorSortColumns <a name="GlueCatalogTableStorageDescriptorSortColumns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns(
  column: str,
  sort_order: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column">column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#column GlueCatalogTable#column}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_order GlueCatalogTable#sort_order}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column"></a>

```python
column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#column GlueCatalogTable#column}.

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#sort_order GlueCatalogTable#sort_order}.

---

### GlueCatalogTableTargetTable <a name="GlueCatalogTableTargetTable" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableTargetTable(
  catalog_id: str,
  database_name: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}. |

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogTablePartitionIndexList <a name="GlueCatalogTablePartitionIndexList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTablePartitionIndexList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogTablePartitionIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>]]

---


### GlueCatalogTablePartitionIndexOutputReference <a name="GlueCatalogTablePartitionIndexOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus">index_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput">keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_status`<sup>Required</sup> <a name="index_status" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus"></a>

```python
index_status: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `keys_input`<sup>Optional</sup> <a name="keys_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput"></a>

```python
keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCatalogTablePartitionIndex, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>, cdktf.IResolvable]

---


### GlueCatalogTablePartitionKeysList <a name="GlueCatalogTablePartitionKeysList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTablePartitionKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCatalogTablePartitionKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>]]

---


### GlueCatalogTablePartitionKeysOutputReference <a name="GlueCatalogTablePartitionKeysOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCatalogTablePartitionKeys, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>, cdktf.IResolvable]

---


### GlueCatalogTableStorageDescriptorColumnsList <a name="GlueCatalogTableStorageDescriptorColumnsList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>]]

---


### GlueCatalogTableStorageDescriptorColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorColumnsOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCatalogTableStorageDescriptorColumns, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>, cdktf.IResolvable]

---


### GlueCatalogTableStorageDescriptorOutputReference <a name="GlueCatalogTableStorageDescriptorOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference">put_schema_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo">put_ser_de_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo">put_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns">put_sort_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns">reset_bucket_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns">reset_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed">reset_compressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets">reset_number_of_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference">reset_schema_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo">reset_ser_de_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo">reset_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns">reset_sort_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories">reset_stored_as_sub_directories</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns"></a>

```python
def put_columns(
  value: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorColumns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>]]

---

##### `put_schema_reference` <a name="put_schema_reference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference"></a>

```python
def put_schema_reference(
  schema_version_number: typing.Union[int, float],
  schema_id: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId = None,
  schema_version_id: str = None
) -> None
```

###### `schema_version_number`<sup>Required</sup> <a name="schema_version_number" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference.parameter.schemaVersionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}.

---

###### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference.parameter.schemaId"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

schema_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_id GlueCatalogTable#schema_id}

---

###### `schema_version_id`<sup>Optional</sup> <a name="schema_version_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference.parameter.schemaVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}.

---

##### `put_ser_de_info` <a name="put_ser_de_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo"></a>

```python
def put_ser_de_info(
  name: str = None,
  parameters: typing.Mapping[str] = None,
  serialization_library: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#name GlueCatalogTable#name}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

###### `serialization_library`<sup>Optional</sup> <a name="serialization_library" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo.parameter.serializationLibrary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}.

---

##### `put_skewed_info` <a name="put_skewed_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```python
def put_skewed_info(
  skewed_column_names: typing.List[str] = None,
  skewed_column_value_location_maps: typing.Mapping[str] = None,
  skewed_column_values: typing.List[str] = None
) -> None
```

###### `skewed_column_names`<sup>Optional</sup> <a name="skewed_column_names" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}.

---

###### `skewed_column_value_location_maps`<sup>Optional</sup> <a name="skewed_column_value_location_maps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnValueLocationMaps"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}.

---

###### `skewed_column_values`<sup>Optional</sup> <a name="skewed_column_values" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}.

---

##### `put_sort_columns` <a name="put_sort_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns"></a>

```python
def put_sort_columns(
  value: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorSortColumns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>]]

---

##### `reset_bucket_columns` <a name="reset_bucket_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns"></a>

```python
def reset_bucket_columns() -> None
```

##### `reset_columns` <a name="reset_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```

##### `reset_compressed` <a name="reset_compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed"></a>

```python
def reset_compressed() -> None
```

##### `reset_input_format` <a name="reset_input_format" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_number_of_buckets` <a name="reset_number_of_buckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```python
def reset_number_of_buckets() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schema_reference` <a name="reset_schema_reference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference"></a>

```python
def reset_schema_reference() -> None
```

##### `reset_ser_de_info` <a name="reset_ser_de_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo"></a>

```python
def reset_ser_de_info() -> None
```

##### `reset_skewed_info` <a name="reset_skewed_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```python
def reset_skewed_info() -> None
```

##### `reset_sort_columns` <a name="reset_sort_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns"></a>

```python
def reset_sort_columns() -> None
```

##### `reset_stored_as_sub_directories` <a name="reset_stored_as_sub_directories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```python
def reset_stored_as_sub_directories() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference">schema_reference</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo">ser_de_info</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns">sort_columns</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput">bucket_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput">compressed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput">number_of_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput">schema_reference_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput">ser_de_info_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput">skewed_info_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput">sort_columns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">stored_as_sub_directories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns"></a>

```python
columns: GlueCatalogTableStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a>

---

##### `schema_reference`<sup>Required</sup> <a name="schema_reference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference"></a>

```python
schema_reference: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `ser_de_info`<sup>Required</sup> <a name="ser_de_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo"></a>

```python
ser_de_info: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a>

---

##### `skewed_info`<sup>Required</sup> <a name="skewed_info" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```python
skewed_info: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sort_columns`<sup>Required</sup> <a name="sort_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns"></a>

```python
sort_columns: GlueCatalogTableStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a>

---

##### `bucket_columns_input`<sup>Optional</sup> <a name="bucket_columns_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```python
bucket_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput"></a>

```python
columns_input: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>]]

---

##### `compressed_input`<sup>Optional</sup> <a name="compressed_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput"></a>

```python
compressed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `number_of_buckets_input`<sup>Optional</sup> <a name="number_of_buckets_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```python
number_of_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_reference_input`<sup>Optional</sup> <a name="schema_reference_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```python
schema_reference_input: GlueCatalogTableStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `ser_de_info_input`<sup>Optional</sup> <a name="ser_de_info_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput"></a>

```python
ser_de_info_input: GlueCatalogTableStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `skewed_info_input`<sup>Optional</sup> <a name="skewed_info_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```python
skewed_info_input: GlueCatalogTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `sort_columns_input`<sup>Optional</sup> <a name="sort_columns_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```python
sort_columns_input: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorSortColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>]]

---

##### `stored_as_sub_directories_input`<sup>Optional</sup> <a name="stored_as_sub_directories_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```python
stored_as_sub_directories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_columns`<sup>Required</sup> <a name="bucket_columns" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed"></a>

```python
compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `number_of_buckets`<sup>Required</sup> <a name="number_of_buckets" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `stored_as_sub_directories`<sup>Required</sup> <a name="stored_as_sub_directories" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogTableStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId">put_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">reset_schema_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema_id` <a name="put_schema_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```python
def put_schema_id(
  registry_name: str = None,
  schema_arn: str = None,
  schema_name: str = None
) -> None
```

###### `registry_name`<sup>Optional</sup> <a name="registry_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.registryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#registry_name GlueCatalogTable#registry_name}.

---

###### `schema_arn`<sup>Optional</sup> <a name="schema_arn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.schemaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table#schema_name GlueCatalogTable#schema_name}.

---

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_schema_version_id` <a name="reset_schema_version_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```python
def reset_schema_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schema_id</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">schema_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">schema_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schema_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schema_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```python
schema_id: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `schema_version_id_input`<sup>Optional</sup> <a name="schema_version_id_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```python
schema_version_id_input: str
```

- *Type:* str

---

##### `schema_version_number_input`<sup>Optional</sup> <a name="schema_version_number_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```python
schema_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_version_id`<sup>Required</sup> <a name="schema_version_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```python
schema_version_id: str
```

- *Type:* str

---

##### `schema_version_number`<sup>Required</sup> <a name="schema_version_number" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```python
schema_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogTableStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">reset_registry_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">reset_schema_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_registry_name` <a name="reset_registry_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```python
def reset_registry_name() -> None
```

##### `reset_schema_arn` <a name="reset_schema_arn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```python
def reset_schema_arn() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">registry_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">schema_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `registry_name_input`<sup>Optional</sup> <a name="registry_name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```python
registry_name_input: str
```

- *Type:* str

---

##### `schema_arn_input`<sup>Optional</sup> <a name="schema_arn_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```python
schema_arn_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `registry_name`<sup>Required</sup> <a name="registry_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---


### GlueCatalogTableStorageDescriptorSerDeInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSerDeInfoOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary">reset_serialization_library</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_serialization_library` <a name="reset_serialization_library" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary"></a>

```python
def reset_serialization_library() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput">serialization_library_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serialization_library_input`<sup>Optional</sup> <a name="serialization_library_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput"></a>

```python
serialization_library_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogTableStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---


### GlueCatalogTableStorageDescriptorSkewedInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSkewedInfoOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">reset_skewed_column_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">reset_skewed_column_value_location_maps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">reset_skewed_column_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_skewed_column_names` <a name="reset_skewed_column_names" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```python
def reset_skewed_column_names() -> None
```

##### `reset_skewed_column_value_location_maps` <a name="reset_skewed_column_value_location_maps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```python
def reset_skewed_column_value_location_maps() -> None
```

##### `reset_skewed_column_values` <a name="reset_skewed_column_values" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```python
def reset_skewed_column_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewed_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewed_column_value_location_maps_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewed_column_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skewed_column_names_input`<sup>Optional</sup> <a name="skewed_column_names_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```python
skewed_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps_input`<sup>Optional</sup> <a name="skewed_column_value_location_maps_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```python
skewed_column_value_location_maps_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `skewed_column_values_input`<sup>Optional</sup> <a name="skewed_column_values_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```python
skewed_column_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_names`<sup>Required</sup> <a name="skewed_column_names" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps`<sup>Required</sup> <a name="skewed_column_value_location_maps" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `skewed_column_values`<sup>Required</sup> <a name="skewed_column_values" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---


### GlueCatalogTableStorageDescriptorSortColumnsList <a name="GlueCatalogTableStorageDescriptorSortColumnsList" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueCatalogTableStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlueCatalogTableStorageDescriptorSortColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>]]

---


### GlueCatalogTableStorageDescriptorSortColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorSortColumnsOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sort_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```python
sort_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlueCatalogTableStorageDescriptorSortColumns, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>, cdktf.IResolvable]

---


### GlueCatalogTableTargetTableOutputReference <a name="GlueCatalogTableTargetTableOutputReference" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_catalog_table

glueCatalogTable.GlueCatalogTableTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: GlueCatalogTableTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---



