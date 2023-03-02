# `fsxDataRepositoryAssociation` Submodule <a name="`fsxDataRepositoryAssociation` Submodule" id="@cdktf/provider-aws.fsxDataRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxDataRepositoryAssociation <a name="FsxDataRepositoryAssociation" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association aws_fsx_data_repository_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_repository_path: str,
  file_system_id: str,
  file_system_path: str,
  batch_import_meta_data_on_create: typing.Union[bool, IResolvable] = None,
  delete_data_in_filesystem: typing.Union[bool, IResolvable] = None,
  id: str = None,
  imported_file_chunk_size: typing.Union[int, float] = None,
  s3: FsxDataRepositoryAssociationS3 = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxDataRepositoryAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.dataRepositoryPath">data_repository_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.fileSystemPath">file_system_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.batchImportMetaDataOnCreate">batch_import_meta_data_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.deleteDataInFilesystem">delete_data_in_filesystem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.importedFileChunkSize">imported_file_chunk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_repository_path`<sup>Required</sup> <a name="data_repository_path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.dataRepositoryPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}.

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}.

---

##### `file_system_path`<sup>Required</sup> <a name="file_system_path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.fileSystemPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}.

---

##### `batch_import_meta_data_on_create`<sup>Optional</sup> <a name="batch_import_meta_data_on_create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.batchImportMetaDataOnCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}.

---

##### `delete_data_in_filesystem`<sup>Optional</sup> <a name="delete_data_in_filesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.deleteDataInFilesystem"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imported_file_chunk_size`<sup>Optional</sup> <a name="imported_file_chunk_size" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.importedFileChunkSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#timeouts FsxDataRepositoryAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate">reset_batch_import_meta_data_on_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetDeleteDataInFilesystem">reset_delete_data_in_filesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize">reset_imported_file_chunk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3"></a>

```python
def put_s3(
  auto_export_policy: FsxDataRepositoryAssociationS3AutoExportPolicy = None,
  auto_import_policy: FsxDataRepositoryAssociationS3AutoImportPolicy = None
) -> None
```

###### `auto_export_policy`<sup>Optional</sup> <a name="auto_export_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3.parameter.autoExportPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

auto_export_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_export_policy FsxDataRepositoryAssociation#auto_export_policy}

---

###### `auto_import_policy`<sup>Optional</sup> <a name="auto_import_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3.parameter.autoImportPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

auto_import_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_import_policy FsxDataRepositoryAssociation#auto_import_policy}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}.

---

##### `reset_batch_import_meta_data_on_create` <a name="reset_batch_import_meta_data_on_create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate"></a>

```python
def reset_batch_import_meta_data_on_create() -> None
```

##### `reset_delete_data_in_filesystem` <a name="reset_delete_data_in_filesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetDeleteDataInFilesystem"></a>

```python
def reset_delete_data_in_filesystem() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_imported_file_chunk_size` <a name="reset_imported_file_chunk_size" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize"></a>

```python
def reset_imported_file_chunk_size() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference">FsxDataRepositoryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput">batch_import_meta_data_on_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput">data_repository_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystemInput">delete_data_in_filesystem_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput">file_system_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput">imported_file_chunk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate">batch_import_meta_data_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath">data_repository_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystem">delete_data_in_filesystem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath">file_system_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize">imported_file_chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3"></a>

```python
s3: FsxDataRepositoryAssociationS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeouts"></a>

```python
timeouts: FsxDataRepositoryAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference">FsxDataRepositoryAssociationTimeoutsOutputReference</a>

---

##### `batch_import_meta_data_on_create_input`<sup>Optional</sup> <a name="batch_import_meta_data_on_create_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput"></a>

```python
batch_import_meta_data_on_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_repository_path_input`<sup>Optional</sup> <a name="data_repository_path_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput"></a>

```python
data_repository_path_input: str
```

- *Type:* str

---

##### `delete_data_in_filesystem_input`<sup>Optional</sup> <a name="delete_data_in_filesystem_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystemInput"></a>

```python
delete_data_in_filesystem_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `file_system_path_input`<sup>Optional</sup> <a name="file_system_path_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput"></a>

```python
file_system_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `imported_file_chunk_size_input`<sup>Optional</sup> <a name="imported_file_chunk_size_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput"></a>

```python
imported_file_chunk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input"></a>

```python
s3_input: FsxDataRepositoryAssociationS3
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FsxDataRepositoryAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `batch_import_meta_data_on_create`<sup>Required</sup> <a name="batch_import_meta_data_on_create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate"></a>

```python
batch_import_meta_data_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_repository_path`<sup>Required</sup> <a name="data_repository_path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath"></a>

```python
data_repository_path: str
```

- *Type:* str

---

##### `delete_data_in_filesystem`<sup>Required</sup> <a name="delete_data_in_filesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystem"></a>

```python
delete_data_in_filesystem: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `file_system_path`<sup>Required</sup> <a name="file_system_path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath"></a>

```python
file_system_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `imported_file_chunk_size`<sup>Required</sup> <a name="imported_file_chunk_size" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize"></a>

```python
imported_file_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxDataRepositoryAssociationConfig <a name="FsxDataRepositoryAssociationConfig" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_repository_path: str,
  file_system_id: str,
  file_system_path: str,
  batch_import_meta_data_on_create: typing.Union[bool, IResolvable] = None,
  delete_data_in_filesystem: typing.Union[bool, IResolvable] = None,
  id: str = None,
  imported_file_chunk_size: typing.Union[int, float] = None,
  s3: FsxDataRepositoryAssociationS3 = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxDataRepositoryAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath">data_repository_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath">file_system_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate">batch_import_meta_data_on_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.deleteDataInFilesystem">delete_data_in_filesystem</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize">imported_file_chunk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_repository_path`<sup>Required</sup> <a name="data_repository_path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath"></a>

```python
data_repository_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}.

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}.

---

##### `file_system_path`<sup>Required</sup> <a name="file_system_path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath"></a>

```python
file_system_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}.

---

##### `batch_import_meta_data_on_create`<sup>Optional</sup> <a name="batch_import_meta_data_on_create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate"></a>

```python
batch_import_meta_data_on_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}.

---

##### `delete_data_in_filesystem`<sup>Optional</sup> <a name="delete_data_in_filesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.deleteDataInFilesystem"></a>

```python
delete_data_in_filesystem: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imported_file_chunk_size`<sup>Optional</sup> <a name="imported_file_chunk_size" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize"></a>

```python
imported_file_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3"></a>

```python
s3: FsxDataRepositoryAssociationS3
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.timeouts"></a>

```python
timeouts: FsxDataRepositoryAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#timeouts FsxDataRepositoryAssociation#timeouts}

---

### FsxDataRepositoryAssociationS3 <a name="FsxDataRepositoryAssociationS3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3(
  auto_export_policy: FsxDataRepositoryAssociationS3AutoExportPolicy = None,
  auto_import_policy: FsxDataRepositoryAssociationS3AutoImportPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy">auto_export_policy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | auto_export_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy">auto_import_policy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | auto_import_policy block. |

---

##### `auto_export_policy`<sup>Optional</sup> <a name="auto_export_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy"></a>

```python
auto_export_policy: FsxDataRepositoryAssociationS3AutoExportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

auto_export_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_export_policy FsxDataRepositoryAssociation#auto_export_policy}

---

##### `auto_import_policy`<sup>Optional</sup> <a name="auto_import_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy"></a>

```python
auto_import_policy: FsxDataRepositoryAssociationS3AutoImportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

auto_import_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_import_policy FsxDataRepositoryAssociation#auto_import_policy}

---

### FsxDataRepositoryAssociationS3AutoExportPolicy <a name="FsxDataRepositoryAssociationS3AutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy(
  events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationS3AutoImportPolicy <a name="FsxDataRepositoryAssociationS3AutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy(
  events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationTimeouts <a name="FsxDataRepositoryAssociationTimeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents">reset_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_events` <a name="reset_events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents"></a>

```python
def reset_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FsxDataRepositoryAssociationS3AutoExportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---


### FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents">reset_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_events` <a name="reset_events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents"></a>

```python
def reset_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue"></a>

```python
internal_value: FsxDataRepositoryAssociationS3AutoImportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---


### FsxDataRepositoryAssociationS3OutputReference <a name="FsxDataRepositoryAssociationS3OutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy">put_auto_export_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy">put_auto_import_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy">reset_auto_export_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy">reset_auto_import_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_export_policy` <a name="put_auto_export_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy"></a>

```python
def put_auto_export_policy(
  events: typing.List[str] = None
) -> None
```

###### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy.parameter.events"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

##### `put_auto_import_policy` <a name="put_auto_import_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy"></a>

```python
def put_auto_import_policy(
  events: typing.List[str] = None
) -> None
```

###### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy.parameter.events"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

##### `reset_auto_export_policy` <a name="reset_auto_export_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy"></a>

```python
def reset_auto_export_policy() -> None
```

##### `reset_auto_import_policy` <a name="reset_auto_import_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy"></a>

```python
def reset_auto_import_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy">auto_export_policy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy">auto_import_policy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput">auto_export_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput">auto_import_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_export_policy`<sup>Required</sup> <a name="auto_export_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy"></a>

```python
auto_export_policy: FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a>

---

##### `auto_import_policy`<sup>Required</sup> <a name="auto_import_policy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy"></a>

```python
auto_import_policy: FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a>

---

##### `auto_export_policy_input`<sup>Optional</sup> <a name="auto_export_policy_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput"></a>

```python
auto_export_policy_input: FsxDataRepositoryAssociationS3AutoExportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `auto_import_policy_input`<sup>Optional</sup> <a name="auto_import_policy_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput"></a>

```python
auto_import_policy_input: FsxDataRepositoryAssociationS3AutoImportPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue"></a>

```python
internal_value: FsxDataRepositoryAssociationS3
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---


### FsxDataRepositoryAssociationTimeoutsOutputReference <a name="FsxDataRepositoryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_data_repository_association

fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxDataRepositoryAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>, cdktf.IResolvable]

---



