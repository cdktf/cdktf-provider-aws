# `gluePartition` Submodule <a name="`gluePartition` Submodule" id="@cdktf/provider-aws.gluePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartition <a name="GluePartition" id="@cdktf/provider-aws.gluePartition.GluePartition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition aws_glue_partition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartition(
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
  partition_values: typing.List[str],
  table_name: str,
  catalog_id: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  storage_descriptor: GluePartitionStorageDescriptor = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#database_name GluePartition#database_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.partitionValues">partition_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#partition_values GluePartition#partition_values}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#table_name GluePartition#table_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#catalog_id GluePartition#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#id GluePartition#id}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor">GluePartitionStorageDescriptor</a></code> | storage_descriptor block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#database_name GluePartition#database_name}.

---

##### `partition_values`<sup>Required</sup> <a name="partition_values" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.partitionValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#partition_values GluePartition#partition_values}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#table_name GluePartition#table_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#catalog_id GluePartition#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#id GluePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}.

---

##### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktf/provider-aws.gluePartition.GluePartition.Initializer.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor">GluePartitionStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#storage_descriptor GluePartition#storage_descriptor}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor">put_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.resetStorageDescriptor">reset_storage_descriptor</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartition.GluePartition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.gluePartition.GluePartition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gluePartition.GluePartition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartition.GluePartition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.gluePartition.GluePartition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.gluePartition.GluePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.gluePartition.GluePartition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.gluePartition.GluePartition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.gluePartition.GluePartition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_storage_descriptor` <a name="put_storage_descriptor" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor"></a>

```python
def put_storage_descriptor(
  bucket_columns: typing.List[str] = None,
  columns: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorColumns]] = None,
  compressed: typing.Union[bool, IResolvable] = None,
  input_format: str = None,
  location: str = None,
  number_of_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: typing.Mapping[str] = None,
  ser_de_info: GluePartitionStorageDescriptorSerDeInfo = None,
  skewed_info: GluePartitionStorageDescriptorSkewedInfo = None,
  sort_columns: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorSortColumns]] = None,
  stored_as_sub_directories: typing.Union[bool, IResolvable] = None
) -> None
```

###### `bucket_columns`<sup>Optional</sup> <a name="bucket_columns" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.bucketColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#bucket_columns GluePartition#bucket_columns}.

---

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.columns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>]]

columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#columns GluePartition#columns}

---

###### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.compressed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#compressed GluePartition#compressed}.

---

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.inputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#input_format GluePartition#input_format}.

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#location GluePartition#location}.

---

###### `number_of_buckets`<sup>Optional</sup> <a name="number_of_buckets" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.numberOfBuckets"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#number_of_buckets GluePartition#number_of_buckets}.

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.outputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#output_format GluePartition#output_format}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}.

---

###### `ser_de_info`<sup>Optional</sup> <a name="ser_de_info" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.serDeInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo">GluePartitionStorageDescriptorSerDeInfo</a>

ser_de_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#ser_de_info GluePartition#ser_de_info}

---

###### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.skewedInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo">GluePartitionStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_info GluePartition#skewed_info}

---

###### `sort_columns`<sup>Optional</sup> <a name="sort_columns" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.sortColumns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>]]

sort_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#sort_columns GluePartition#sort_columns}

---

###### `stored_as_sub_directories`<sup>Optional</sup> <a name="stored_as_sub_directories" id="@cdktf/provider-aws.gluePartition.GluePartition.putStorageDescriptor.parameter.storedAsSubDirectories"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}.

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.gluePartition.GluePartition.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.gluePartition.GluePartition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.gluePartition.GluePartition.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_storage_descriptor` <a name="reset_storage_descriptor" id="@cdktf/provider-aws.gluePartition.GluePartition.resetStorageDescriptor"></a>

```python
def reset_storage_descriptor() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.gluePartition.GluePartition.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartition.GluePartition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.gluePartition.GluePartition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartition.GluePartition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.gluePartition.GluePartition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gluePartition.GluePartition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.lastAccessedTime">last_accessed_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.lastAnalyzedTime">last_analyzed_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference">GluePartitionStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.partitionValuesInput">partition_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.storageDescriptorInput">storage_descriptor_input</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor">GluePartitionStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.partitionValues">partition_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.gluePartition.GluePartition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.gluePartition.GluePartition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartition.GluePartition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.gluePartition.GluePartition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.gluePartition.GluePartition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.gluePartition.GluePartition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.gluePartition.GluePartition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gluePartition.GluePartition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gluePartition.GluePartition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gluePartition.GluePartition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gluePartition.GluePartition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gluePartition.GluePartition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gluePartition.GluePartition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gluePartition.GluePartition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.gluePartition.GluePartition.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `last_accessed_time`<sup>Required</sup> <a name="last_accessed_time" id="@cdktf/provider-aws.gluePartition.GluePartition.property.lastAccessedTime"></a>

```python
last_accessed_time: str
```

- *Type:* str

---

##### `last_analyzed_time`<sup>Required</sup> <a name="last_analyzed_time" id="@cdktf/provider-aws.gluePartition.GluePartition.property.lastAnalyzedTime"></a>

```python
last_analyzed_time: str
```

- *Type:* str

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktf/provider-aws.gluePartition.GluePartition.property.storageDescriptor"></a>

```python
storage_descriptor: GluePartitionStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference">GluePartitionStorageDescriptorOutputReference</a>

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.gluePartition.GluePartition.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.gluePartition.GluePartition.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.gluePartition.GluePartition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.gluePartition.GluePartition.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_values_input`<sup>Optional</sup> <a name="partition_values_input" id="@cdktf/provider-aws.gluePartition.GluePartition.property.partitionValuesInput"></a>

```python
partition_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_descriptor_input`<sup>Optional</sup> <a name="storage_descriptor_input" id="@cdktf/provider-aws.gluePartition.GluePartition.property.storageDescriptorInput"></a>

```python
storage_descriptor_input: GluePartitionStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor">GluePartitionStorageDescriptor</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-aws.gluePartition.GluePartition.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.gluePartition.GluePartition.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.gluePartition.GluePartition.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gluePartition.GluePartition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartition.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_values`<sup>Required</sup> <a name="partition_values" id="@cdktf/provider-aws.gluePartition.GluePartition.property.partitionValues"></a>

```python
partition_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.gluePartition.GluePartition.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.gluePartition.GluePartition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionConfig <a name="GluePartitionConfig" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  partition_values: typing.List[str],
  table_name: str,
  catalog_id: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  storage_descriptor: GluePartitionStorageDescriptor = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#database_name GluePartition#database_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.partitionValues">partition_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#partition_values GluePartition#partition_values}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#table_name GluePartition#table_name}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#catalog_id GluePartition#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#id GluePartition#id}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor">GluePartitionStorageDescriptor</a></code> | storage_descriptor block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#database_name GluePartition#database_name}.

---

##### `partition_values`<sup>Required</sup> <a name="partition_values" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.partitionValues"></a>

```python
partition_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#partition_values GluePartition#partition_values}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#table_name GluePartition#table_name}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#catalog_id GluePartition#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#id GluePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}.

---

##### `storage_descriptor`<sup>Optional</sup> <a name="storage_descriptor" id="@cdktf/provider-aws.gluePartition.GluePartitionConfig.property.storageDescriptor"></a>

```python
storage_descriptor: GluePartitionStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor">GluePartitionStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#storage_descriptor GluePartition#storage_descriptor}

---

### GluePartitionStorageDescriptor <a name="GluePartitionStorageDescriptor" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptor(
  bucket_columns: typing.List[str] = None,
  columns: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorColumns]] = None,
  compressed: typing.Union[bool, IResolvable] = None,
  input_format: str = None,
  location: str = None,
  number_of_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: typing.Mapping[str] = None,
  ser_de_info: GluePartitionStorageDescriptorSerDeInfo = None,
  skewed_info: GluePartitionStorageDescriptorSkewedInfo = None,
  sort_columns: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorSortColumns]] = None,
  stored_as_sub_directories: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#bucket_columns GluePartition#bucket_columns}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.columns">columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>]]</code> | columns block. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.compressed">compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#compressed GluePartition#compressed}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.inputFormat">input_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#input_format GluePartition#input_format}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#location GluePartition#location}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#number_of_buckets GluePartition#number_of_buckets}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.outputFormat">output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#output_format GluePartition#output_format}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.serDeInfo">ser_de_info</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo">GluePartitionStorageDescriptorSerDeInfo</a></code> | ser_de_info block. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo">GluePartitionStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.sortColumns">sort_columns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>]]</code> | sort_columns block. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}. |

---

##### `bucket_columns`<sup>Optional</sup> <a name="bucket_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#bucket_columns GluePartition#bucket_columns}.

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.columns"></a>

```python
columns: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>]]

columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#columns GluePartition#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.compressed"></a>

```python
compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#compressed GluePartition#compressed}.

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#input_format GluePartition#input_format}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#location GluePartition#location}.

---

##### `number_of_buckets`<sup>Optional</sup> <a name="number_of_buckets" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#number_of_buckets GluePartition#number_of_buckets}.

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#output_format GluePartition#output_format}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}.

---

##### `ser_de_info`<sup>Optional</sup> <a name="ser_de_info" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.serDeInfo"></a>

```python
ser_de_info: GluePartitionStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo">GluePartitionStorageDescriptorSerDeInfo</a>

ser_de_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#ser_de_info GluePartition#ser_de_info}

---

##### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.skewedInfo"></a>

```python
skewed_info: GluePartitionStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo">GluePartitionStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_info GluePartition#skewed_info}

---

##### `sort_columns`<sup>Optional</sup> <a name="sort_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.sortColumns"></a>

```python
sort_columns: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorSortColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>]]

sort_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#sort_columns GluePartition#sort_columns}

---

##### `stored_as_sub_directories`<sup>Optional</sup> <a name="stored_as_sub_directories" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}.

---

### GluePartitionStorageDescriptorColumns <a name="GluePartitionStorageDescriptorColumns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorColumns(
  name: str,
  comment: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#name GluePartition#name}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#comment GluePartition#comment}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#type GluePartition#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#name GluePartition#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#comment GluePartition#comment}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#type GluePartition#type}.

---

### GluePartitionStorageDescriptorSerDeInfo <a name="GluePartitionStorageDescriptorSerDeInfo" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorSerDeInfo(
  name: str = None,
  parameters: typing.Mapping[str] = None,
  serialization_library: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#name GluePartition#name}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#serialization_library GluePartition#serialization_library}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#name GluePartition#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}.

---

##### `serialization_library`<sup>Optional</sup> <a name="serialization_library" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#serialization_library GluePartition#serialization_library}.

---

### GluePartitionStorageDescriptorSkewedInfo <a name="GluePartitionStorageDescriptorSkewedInfo" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorSkewedInfo(
  skewed_column_names: typing.List[str] = None,
  skewed_column_value_location_maps: typing.Mapping[str] = None,
  skewed_column_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_names GluePartition#skewed_column_names}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_values GluePartition#skewed_column_values}. |

---

##### `skewed_column_names`<sup>Optional</sup> <a name="skewed_column_names" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_names GluePartition#skewed_column_names}.

---

##### `skewed_column_value_location_maps`<sup>Optional</sup> <a name="skewed_column_value_location_maps" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}.

---

##### `skewed_column_values`<sup>Optional</sup> <a name="skewed_column_values" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_values GluePartition#skewed_column_values}.

---

### GluePartitionStorageDescriptorSortColumns <a name="GluePartitionStorageDescriptorSortColumns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorSortColumns(
  column: str,
  sort_order: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns.property.column">column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#column GluePartition#column}. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#sort_order GluePartition#sort_order}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns.property.column"></a>

```python
column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#column GluePartition#column}.

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#sort_order GluePartition#sort_order}.

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionStorageDescriptorColumnsList <a name="GluePartitionStorageDescriptorColumnsList" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GluePartitionStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>]]

---


### GluePartitionStorageDescriptorColumnsOutputReference <a name="GluePartitionStorageDescriptorColumnsOutputReference" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GluePartitionStorageDescriptorColumns, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>, cdktf.IResolvable]

---


### GluePartitionStorageDescriptorOutputReference <a name="GluePartitionStorageDescriptorOutputReference" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSerDeInfo">put_ser_de_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSkewedInfo">put_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSortColumns">put_sort_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetBucketColumns">reset_bucket_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetColumns">reset_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetCompressed">reset_compressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetNumberOfBuckets">reset_number_of_buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetSerDeInfo">reset_ser_de_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetSkewedInfo">reset_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetSortColumns">reset_sort_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetStoredAsSubDirectories">reset_stored_as_sub_directories</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putColumns"></a>

```python
def put_columns(
  value: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorColumns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>]]

---

##### `put_ser_de_info` <a name="put_ser_de_info" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSerDeInfo"></a>

```python
def put_ser_de_info(
  name: str = None,
  parameters: typing.Mapping[str] = None,
  serialization_library: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSerDeInfo.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#name GluePartition#name}.

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSerDeInfo.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#parameters GluePartition#parameters}.

---

###### `serialization_library`<sup>Optional</sup> <a name="serialization_library" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSerDeInfo.parameter.serializationLibrary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#serialization_library GluePartition#serialization_library}.

---

##### `put_skewed_info` <a name="put_skewed_info" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSkewedInfo"></a>

```python
def put_skewed_info(
  skewed_column_names: typing.List[str] = None,
  skewed_column_value_location_maps: typing.Mapping[str] = None,
  skewed_column_values: typing.List[str] = None
) -> None
```

###### `skewed_column_names`<sup>Optional</sup> <a name="skewed_column_names" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_names GluePartition#skewed_column_names}.

---

###### `skewed_column_value_location_maps`<sup>Optional</sup> <a name="skewed_column_value_location_maps" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnValueLocationMaps"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}.

---

###### `skewed_column_values`<sup>Optional</sup> <a name="skewed_column_values" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColumnValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition#skewed_column_values GluePartition#skewed_column_values}.

---

##### `put_sort_columns` <a name="put_sort_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSortColumns"></a>

```python
def put_sort_columns(
  value: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorSortColumns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>]]

---

##### `reset_bucket_columns` <a name="reset_bucket_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetBucketColumns"></a>

```python
def reset_bucket_columns() -> None
```

##### `reset_columns` <a name="reset_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```

##### `reset_compressed` <a name="reset_compressed" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetCompressed"></a>

```python
def reset_compressed() -> None
```

##### `reset_input_format` <a name="reset_input_format" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_number_of_buckets` <a name="reset_number_of_buckets" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```python
def reset_number_of_buckets() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_ser_de_info` <a name="reset_ser_de_info" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetSerDeInfo"></a>

```python
def reset_ser_de_info() -> None
```

##### `reset_skewed_info` <a name="reset_skewed_info" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetSkewedInfo"></a>

```python
def reset_skewed_info() -> None
```

##### `reset_sort_columns` <a name="reset_sort_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetSortColumns"></a>

```python
def reset_sort_columns() -> None
```

##### `reset_stored_as_sub_directories` <a name="reset_stored_as_sub_directories" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```python
def reset_stored_as_sub_directories() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList">GluePartitionStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.serDeInfo">ser_de_info</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference">GluePartitionStorageDescriptorSerDeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference">GluePartitionStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.sortColumns">sort_columns</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList">GluePartitionStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.bucketColumnsInput">bucket_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.compressedInput">compressed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.numberOfBucketsInput">number_of_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.serDeInfoInput">ser_de_info_input</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo">GluePartitionStorageDescriptorSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.skewedInfoInput">skewed_info_input</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo">GluePartitionStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.sortColumnsInput">sort_columns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">stored_as_sub_directories_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor">GluePartitionStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.columns"></a>

```python
columns: GluePartitionStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumnsList">GluePartitionStorageDescriptorColumnsList</a>

---

##### `ser_de_info`<sup>Required</sup> <a name="ser_de_info" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.serDeInfo"></a>

```python
ser_de_info: GluePartitionStorageDescriptorSerDeInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference">GluePartitionStorageDescriptorSerDeInfoOutputReference</a>

---

##### `skewed_info`<sup>Required</sup> <a name="skewed_info" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.skewedInfo"></a>

```python
skewed_info: GluePartitionStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference">GluePartitionStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sort_columns`<sup>Required</sup> <a name="sort_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.sortColumns"></a>

```python
sort_columns: GluePartitionStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList">GluePartitionStorageDescriptorSortColumnsList</a>

---

##### `bucket_columns_input`<sup>Optional</sup> <a name="bucket_columns_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```python
bucket_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.columnsInput"></a>

```python
columns_input: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorColumns">GluePartitionStorageDescriptorColumns</a>]]

---

##### `compressed_input`<sup>Optional</sup> <a name="compressed_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.compressedInput"></a>

```python
compressed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `number_of_buckets_input`<sup>Optional</sup> <a name="number_of_buckets_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```python
number_of_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ser_de_info_input`<sup>Optional</sup> <a name="ser_de_info_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.serDeInfoInput"></a>

```python
ser_de_info_input: GluePartitionStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo">GluePartitionStorageDescriptorSerDeInfo</a>

---

##### `skewed_info_input`<sup>Optional</sup> <a name="skewed_info_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```python
skewed_info_input: GluePartitionStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo">GluePartitionStorageDescriptorSkewedInfo</a>

---

##### `sort_columns_input`<sup>Optional</sup> <a name="sort_columns_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```python
sort_columns_input: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorSortColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>]]

---

##### `stored_as_sub_directories_input`<sup>Optional</sup> <a name="stored_as_sub_directories_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```python
stored_as_sub_directories_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_columns`<sup>Required</sup> <a name="bucket_columns" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.compressed"></a>

```python
compressed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `number_of_buckets`<sup>Required</sup> <a name="number_of_buckets" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `stored_as_sub_directories`<sup>Required</sup> <a name="stored_as_sub_directories" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: GluePartitionStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptor">GluePartitionStorageDescriptor</a>

---


### GluePartitionStorageDescriptorSerDeInfoOutputReference <a name="GluePartitionStorageDescriptorSerDeInfoOutputReference" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary">reset_serialization_library</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_serialization_library` <a name="reset_serialization_library" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary"></a>

```python
def reset_serialization_library() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput">serialization_library_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo">GluePartitionStorageDescriptorSerDeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serialization_library_input`<sup>Optional</sup> <a name="serialization_library_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput"></a>

```python
serialization_library_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfoOutputReference.property.internalValue"></a>

```python
internal_value: GluePartitionStorageDescriptorSerDeInfo
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSerDeInfo">GluePartitionStorageDescriptorSerDeInfo</a>

---


### GluePartitionStorageDescriptorSkewedInfoOutputReference <a name="GluePartitionStorageDescriptorSkewedInfoOutputReference" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">reset_skewed_column_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">reset_skewed_column_value_location_maps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">reset_skewed_column_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_skewed_column_names` <a name="reset_skewed_column_names" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```python
def reset_skewed_column_names() -> None
```

##### `reset_skewed_column_value_location_maps` <a name="reset_skewed_column_value_location_maps" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```python
def reset_skewed_column_value_location_maps() -> None
```

##### `reset_skewed_column_values` <a name="reset_skewed_column_values" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```python
def reset_skewed_column_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewed_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewed_column_value_location_maps_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewed_column_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo">GluePartitionStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skewed_column_names_input`<sup>Optional</sup> <a name="skewed_column_names_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```python
skewed_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps_input`<sup>Optional</sup> <a name="skewed_column_value_location_maps_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```python
skewed_column_value_location_maps_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `skewed_column_values_input`<sup>Optional</sup> <a name="skewed_column_values_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```python
skewed_column_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_names`<sup>Required</sup> <a name="skewed_column_names" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps`<sup>Required</sup> <a name="skewed_column_value_location_maps" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `skewed_column_values`<sup>Required</sup> <a name="skewed_column_values" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```python
internal_value: GluePartitionStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSkewedInfo">GluePartitionStorageDescriptorSkewedInfo</a>

---


### GluePartitionStorageDescriptorSortColumnsList <a name="GluePartitionStorageDescriptorSortColumnsList" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorSortColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GluePartitionStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GluePartitionStorageDescriptorSortColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>]]

---


### GluePartitionStorageDescriptorSortColumnsOutputReference <a name="GluePartitionStorageDescriptorSortColumnsOutputReference" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_partition

gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sort_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```python
sort_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GluePartitionStorageDescriptorSortColumns, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.gluePartition.GluePartitionStorageDescriptorSortColumns">GluePartitionStorageDescriptorSortColumns</a>, cdktf.IResolvable]

---



