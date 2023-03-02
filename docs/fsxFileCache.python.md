# `fsxFileCache` Submodule <a name="`fsxFileCache` Submodule" id="@cdktf/provider-aws.fsxFileCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxFileCache <a name="FsxFileCache" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache aws_fsx_file_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCache(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_cache_type: str,
  file_cache_type_version: str,
  storage_capacity: typing.Union[int, float],
  subnet_ids: typing.List[str],
  copy_tags_to_data_repository_associations: typing.Union[bool, IResolvable] = None,
  data_repository_association: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociation]] = None,
  id: str = None,
  kms_key_id: str = None,
  lustre_configuration: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfiguration]] = None,
  security_group_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxFileCacheTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.fileCacheType">file_cache_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.fileCacheTypeVersion">file_cache_type_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.copyTagsToDataRepositoryAssociations">copy_tags_to_data_repository_associations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.dataRepositoryAssociation">data_repository_association</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]</code> | data_repository_association block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.lustreConfiguration">lustre_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]</code> | lustre_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_cache_type`<sup>Required</sup> <a name="file_cache_type" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.fileCacheType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}.

---

##### `file_cache_type_version`<sup>Required</sup> <a name="file_cache_type_version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.fileCacheTypeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}.

---

##### `storage_capacity`<sup>Required</sup> <a name="storage_capacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.storageCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}.

---

##### `copy_tags_to_data_repository_associations`<sup>Optional</sup> <a name="copy_tags_to_data_repository_associations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.copyTagsToDataRepositoryAssociations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}.

---

##### `data_repository_association`<sup>Optional</sup> <a name="data_repository_association" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.dataRepositoryAssociation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]

data_repository_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_association FsxFileCache#data_repository_association}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}.

---

##### `lustre_configuration`<sup>Optional</sup> <a name="lustre_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.lustreConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]

lustre_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#lustre_configuration FsxFileCache#lustre_configuration}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#timeouts FsxFileCache#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation">put_data_repository_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration">put_lustre_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetCopyTagsToDataRepositoryAssociations">reset_copy_tags_to_data_repository_associations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetDataRepositoryAssociation">reset_data_repository_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetLustreConfiguration">reset_lustre_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_data_repository_association` <a name="put_data_repository_association" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation"></a>

```python
def put_data_repository_association(
  value: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putDataRepositoryAssociation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]

---

##### `put_lustre_configuration` <a name="put_lustre_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration"></a>

```python
def put_lustre_configuration(
  value: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putLustreConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#create FsxFileCache#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#delete FsxFileCache#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#update FsxFileCache#update}.

---

##### `reset_copy_tags_to_data_repository_associations` <a name="reset_copy_tags_to_data_repository_associations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetCopyTagsToDataRepositoryAssociations"></a>

```python
def reset_copy_tags_to_data_repository_associations() -> None
```

##### `reset_data_repository_association` <a name="reset_data_repository_association" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetDataRepositoryAssociation"></a>

```python
def reset_data_repository_association() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_lustre_configuration` <a name="reset_lustre_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetLustreConfiguration"></a>

```python
def reset_lustre_configuration() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCache.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCache.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCache.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociation">data_repository_association</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList">FsxFileCacheDataRepositoryAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationIds">data_repository_association_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheId">file_cache_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfiguration">lustre_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList">FsxFileCacheLustreConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference">FsxFileCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociationsInput">copy_tags_to_data_repository_associations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationInput">data_repository_association_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeInput">file_cache_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersionInput">file_cache_type_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfigurationInput">lustre_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacityInput">storage_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociations">copy_tags_to_data_repository_associations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheType">file_cache_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersion">file_cache_type_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `data_repository_association`<sup>Required</sup> <a name="data_repository_association" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociation"></a>

```python
data_repository_association: FsxFileCacheDataRepositoryAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList">FsxFileCacheDataRepositoryAssociationList</a>

---

##### `data_repository_association_ids`<sup>Required</sup> <a name="data_repository_association_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationIds"></a>

```python
data_repository_association_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `file_cache_id`<sup>Required</sup> <a name="file_cache_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheId"></a>

```python
file_cache_id: str
```

- *Type:* str

---

##### `lustre_configuration`<sup>Required</sup> <a name="lustre_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfiguration"></a>

```python
lustre_configuration: FsxFileCacheLustreConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList">FsxFileCacheLustreConfigurationList</a>

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeouts"></a>

```python
timeouts: FsxFileCacheTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference">FsxFileCacheTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `copy_tags_to_data_repository_associations_input`<sup>Optional</sup> <a name="copy_tags_to_data_repository_associations_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociationsInput"></a>

```python
copy_tags_to_data_repository_associations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_repository_association_input`<sup>Optional</sup> <a name="data_repository_association_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.dataRepositoryAssociationInput"></a>

```python
data_repository_association_input: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]

---

##### `file_cache_type_input`<sup>Optional</sup> <a name="file_cache_type_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeInput"></a>

```python
file_cache_type_input: str
```

- *Type:* str

---

##### `file_cache_type_version_input`<sup>Optional</sup> <a name="file_cache_type_version_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersionInput"></a>

```python
file_cache_type_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `lustre_configuration_input`<sup>Optional</sup> <a name="lustre_configuration_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.lustreConfigurationInput"></a>

```python
lustre_configuration_input: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_capacity_input`<sup>Optional</sup> <a name="storage_capacity_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacityInput"></a>

```python
storage_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FsxFileCacheTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>, cdktf.IResolvable]

---

##### `copy_tags_to_data_repository_associations`<sup>Required</sup> <a name="copy_tags_to_data_repository_associations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.copyTagsToDataRepositoryAssociations"></a>

```python
copy_tags_to_data_repository_associations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_cache_type`<sup>Required</sup> <a name="file_cache_type" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheType"></a>

```python
file_cache_type: str
```

- *Type:* str

---

##### `file_cache_type_version`<sup>Required</sup> <a name="file_cache_type_version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.fileCacheTypeVersion"></a>

```python
file_cache_type_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_capacity`<sup>Required</sup> <a name="storage_capacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxFileCache.FsxFileCache.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxFileCacheConfig <a name="FsxFileCacheConfig" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  file_cache_type: str,
  file_cache_type_version: str,
  storage_capacity: typing.Union[int, float],
  subnet_ids: typing.List[str],
  copy_tags_to_data_repository_associations: typing.Union[bool, IResolvable] = None,
  data_repository_association: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociation]] = None,
  id: str = None,
  kms_key_id: str = None,
  lustre_configuration: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfiguration]] = None,
  security_group_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxFileCacheTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheType">file_cache_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheTypeVersion">file_cache_type_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.copyTagsToDataRepositoryAssociations">copy_tags_to_data_repository_associations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dataRepositoryAssociation">data_repository_association</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]</code> | data_repository_association block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lustreConfiguration">lustre_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]</code> | lustre_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `file_cache_type`<sup>Required</sup> <a name="file_cache_type" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheType"></a>

```python
file_cache_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type FsxFileCache#file_cache_type}.

---

##### `file_cache_type_version`<sup>Required</sup> <a name="file_cache_type_version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.fileCacheTypeVersion"></a>

```python
file_cache_type_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_type_version FsxFileCache#file_cache_type_version}.

---

##### `storage_capacity`<sup>Required</sup> <a name="storage_capacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#subnet_ids FsxFileCache#subnet_ids}.

---

##### `copy_tags_to_data_repository_associations`<sup>Optional</sup> <a name="copy_tags_to_data_repository_associations" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.copyTagsToDataRepositoryAssociations"></a>

```python
copy_tags_to_data_repository_associations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#copy_tags_to_data_repository_associations FsxFileCache#copy_tags_to_data_repository_associations}.

---

##### `data_repository_association`<sup>Optional</sup> <a name="data_repository_association" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.dataRepositoryAssociation"></a>

```python
data_repository_association: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]

data_repository_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_association FsxFileCache#data_repository_association}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#id FsxFileCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#kms_key_id FsxFileCache#kms_key_id}.

---

##### `lustre_configuration`<sup>Optional</sup> <a name="lustre_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.lustreConfiguration"></a>

```python
lustre_configuration: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]

lustre_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#lustre_configuration FsxFileCache#lustre_configuration}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#security_group_ids FsxFileCache#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags_all FsxFileCache#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheConfig.property.timeouts"></a>

```python
timeouts: FsxFileCacheTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#timeouts FsxFileCache#timeouts}

---

### FsxFileCacheDataRepositoryAssociation <a name="FsxFileCacheDataRepositoryAssociation" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheDataRepositoryAssociation(
  data_repository_path: str,
  file_cache_path: str,
  data_repository_subdirectories: typing.List[str] = None,
  nfs: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociationNfs]] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositoryPath">data_repository_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_path FsxFileCache#data_repository_path}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.fileCachePath">file_cache_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_path FsxFileCache#file_cache_path}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositorySubdirectories">data_repository_subdirectories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_subdirectories FsxFileCache#data_repository_subdirectories}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.nfs">nfs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>]]</code> | nfs block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}. |

---

##### `data_repository_path`<sup>Required</sup> <a name="data_repository_path" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositoryPath"></a>

```python
data_repository_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_path FsxFileCache#data_repository_path}.

---

##### `file_cache_path`<sup>Required</sup> <a name="file_cache_path" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.fileCachePath"></a>

```python
file_cache_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#file_cache_path FsxFileCache#file_cache_path}.

---

##### `data_repository_subdirectories`<sup>Optional</sup> <a name="data_repository_subdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.dataRepositorySubdirectories"></a>

```python
data_repository_subdirectories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#data_repository_subdirectories FsxFileCache#data_repository_subdirectories}.

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.nfs"></a>

```python
nfs: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociationNfs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>]]

nfs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#nfs FsxFileCache#nfs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#tags FsxFileCache#tags}.

---

### FsxFileCacheDataRepositoryAssociationNfs <a name="FsxFileCacheDataRepositoryAssociationNfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs(
  version: str,
  dns_ips: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#version FsxFileCache#version}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#dns_ips FsxFileCache#dns_ips}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#version FsxFileCache#version}.

---

##### `dns_ips`<sup>Optional</sup> <a name="dns_ips" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#dns_ips FsxFileCache#dns_ips}.

---

### FsxFileCacheLustreConfiguration <a name="FsxFileCacheLustreConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfiguration(
  deployment_type: str,
  metadata_configuration: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfigurationMetadataConfiguration]],
  per_unit_storage_throughput: typing.Union[int, float],
  weekly_maintenance_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#deployment_type FsxFileCache#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.metadataConfiguration">metadata_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>]]</code> | metadata_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.perUnitStorageThroughput">per_unit_storage_throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#per_unit_storage_throughput FsxFileCache#per_unit_storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.weeklyMaintenanceStartTime">weekly_maintenance_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#weekly_maintenance_start_time FsxFileCache#weekly_maintenance_start_time}. |

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#deployment_type FsxFileCache#deployment_type}.

---

##### `metadata_configuration`<sup>Required</sup> <a name="metadata_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.metadataConfiguration"></a>

```python
metadata_configuration: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfigurationMetadataConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>]]

metadata_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#metadata_configuration FsxFileCache#metadata_configuration}

---

##### `per_unit_storage_throughput`<sup>Required</sup> <a name="per_unit_storage_throughput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.perUnitStorageThroughput"></a>

```python
per_unit_storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#per_unit_storage_throughput FsxFileCache#per_unit_storage_throughput}.

---

##### `weekly_maintenance_start_time`<sup>Optional</sup> <a name="weekly_maintenance_start_time" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration.property.weeklyMaintenanceStartTime"></a>

```python
weekly_maintenance_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#weekly_maintenance_start_time FsxFileCache#weekly_maintenance_start_time}.

---

### FsxFileCacheLustreConfigurationLogConfiguration <a name="FsxFileCacheLustreConfigurationLogConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration()
```


### FsxFileCacheLustreConfigurationMetadataConfiguration <a name="FsxFileCacheLustreConfigurationMetadataConfiguration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration(
  storage_capacity: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}. |

---

##### `storage_capacity`<sup>Required</sup> <a name="storage_capacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#storage_capacity FsxFileCache#storage_capacity}.

---

### FsxFileCacheTimeouts <a name="FsxFileCacheTimeouts" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#create FsxFileCache#create}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#delete FsxFileCache#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#update FsxFileCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#create FsxFileCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#delete FsxFileCache#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_file_cache#update FsxFileCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxFileCacheDataRepositoryAssociationList <a name="FsxFileCacheDataRepositoryAssociationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheDataRepositoryAssociationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxFileCacheDataRepositoryAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>]]

---


### FsxFileCacheDataRepositoryAssociationNfsList <a name="FsxFileCacheDataRepositoryAssociationNfsList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxFileCacheDataRepositoryAssociationNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociationNfs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>]]

---


### FsxFileCacheDataRepositoryAssociationNfsOutputReference <a name="FsxFileCacheDataRepositoryAssociationNfsOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resetDnsIps">reset_dns_ips</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_ips` <a name="reset_dns_ips" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.resetDnsIps"></a>

```python
def reset_dns_ips() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIpsInput">dns_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_ips_input`<sup>Optional</sup> <a name="dns_ips_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIpsInput"></a>

```python
dns_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxFileCacheDataRepositoryAssociationNfs, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>, cdktf.IResolvable]

---


### FsxFileCacheDataRepositoryAssociationOutputReference <a name="FsxFileCacheDataRepositoryAssociationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs">put_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetDataRepositorySubdirectories">reset_data_repository_subdirectories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetNfs">reset_nfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nfs` <a name="put_nfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs"></a>

```python
def put_nfs(
  value: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociationNfs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.putNfs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>]]

---

##### `reset_data_repository_subdirectories` <a name="reset_data_repository_subdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetDataRepositorySubdirectories"></a>

```python
def reset_data_repository_subdirectories() -> None
```

##### `reset_nfs` <a name="reset_nfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetNfs"></a>

```python
def reset_nfs() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCacheId">file_cache_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemPath">file_system_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.importedFileChunkSize">imported_file_chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList">FsxFileCacheDataRepositoryAssociationNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPathInput">data_repository_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectoriesInput">data_repository_subdirectories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePathInput">file_cache_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfsInput">nfs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPath">data_repository_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectories">data_repository_subdirectories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePath">file_cache_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `file_cache_id`<sup>Required</sup> <a name="file_cache_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCacheId"></a>

```python
file_cache_id: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `file_system_path`<sup>Required</sup> <a name="file_system_path" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileSystemPath"></a>

```python
file_system_path: str
```

- *Type:* str

---

##### `imported_file_chunk_size`<sup>Required</sup> <a name="imported_file_chunk_size" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.importedFileChunkSize"></a>

```python
imported_file_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfs"></a>

```python
nfs: FsxFileCacheDataRepositoryAssociationNfsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfsList">FsxFileCacheDataRepositoryAssociationNfsList</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `data_repository_path_input`<sup>Optional</sup> <a name="data_repository_path_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPathInput"></a>

```python
data_repository_path_input: str
```

- *Type:* str

---

##### `data_repository_subdirectories_input`<sup>Optional</sup> <a name="data_repository_subdirectories_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectoriesInput"></a>

```python
data_repository_subdirectories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_cache_path_input`<sup>Optional</sup> <a name="file_cache_path_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePathInput"></a>

```python
file_cache_path_input: str
```

- *Type:* str

---

##### `nfs_input`<sup>Optional</sup> <a name="nfs_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.nfsInput"></a>

```python
nfs_input: typing.Union[IResolvable, typing.List[FsxFileCacheDataRepositoryAssociationNfs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationNfs">FsxFileCacheDataRepositoryAssociationNfs</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_repository_path`<sup>Required</sup> <a name="data_repository_path" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositoryPath"></a>

```python
data_repository_path: str
```

- *Type:* str

---

##### `data_repository_subdirectories`<sup>Required</sup> <a name="data_repository_subdirectories" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.dataRepositorySubdirectories"></a>

```python
data_repository_subdirectories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_cache_path`<sup>Required</sup> <a name="file_cache_path" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.fileCachePath"></a>

```python
file_cache_path: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxFileCacheDataRepositoryAssociation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheDataRepositoryAssociation">FsxFileCacheDataRepositoryAssociation</a>, cdktf.IResolvable]

---


### FsxFileCacheLustreConfigurationList <a name="FsxFileCacheLustreConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxFileCacheLustreConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>]]

---


### FsxFileCacheLustreConfigurationLogConfigurationList <a name="FsxFileCacheLustreConfigurationLogConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxFileCacheLustreConfigurationLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FsxFileCacheLustreConfigurationLogConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration">FsxFileCacheLustreConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FsxFileCacheLustreConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfiguration">FsxFileCacheLustreConfigurationLogConfiguration</a>

---


### FsxFileCacheLustreConfigurationMetadataConfigurationList <a name="FsxFileCacheLustreConfigurationMetadataConfigurationList" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfigurationMetadataConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>]]

---


### FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacityInput">storage_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_capacity_input`<sup>Optional</sup> <a name="storage_capacity_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacityInput"></a>

```python
storage_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity`<sup>Required</sup> <a name="storage_capacity" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxFileCacheLustreConfigurationMetadataConfiguration, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>, cdktf.IResolvable]

---


### FsxFileCacheLustreConfigurationOutputReference <a name="FsxFileCacheLustreConfigurationOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheLustreConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration">put_metadata_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resetWeeklyMaintenanceStartTime">reset_weekly_maintenance_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metadata_configuration` <a name="put_metadata_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration"></a>

```python
def put_metadata_configuration(
  value: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfigurationMetadataConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.putMetadataConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>]]

---

##### `reset_weekly_maintenance_start_time` <a name="reset_weekly_maintenance_start_time" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.resetWeeklyMaintenanceStartTime"></a>

```python
def reset_weekly_maintenance_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.logConfiguration">log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList">FsxFileCacheLustreConfigurationLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfiguration">metadata_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList">FsxFileCacheLustreConfigurationMetadataConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.mountName">mount_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfigurationInput">metadata_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughputInput">per_unit_storage_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTimeInput">weekly_maintenance_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughput">per_unit_storage_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTime">weekly_maintenance_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_configuration`<sup>Required</sup> <a name="log_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.logConfiguration"></a>

```python
log_configuration: FsxFileCacheLustreConfigurationLogConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationLogConfigurationList">FsxFileCacheLustreConfigurationLogConfigurationList</a>

---

##### `metadata_configuration`<sup>Required</sup> <a name="metadata_configuration" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfiguration"></a>

```python
metadata_configuration: FsxFileCacheLustreConfigurationMetadataConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfigurationList">FsxFileCacheLustreConfigurationMetadataConfigurationList</a>

---

##### `mount_name`<sup>Required</sup> <a name="mount_name" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.mountName"></a>

```python
mount_name: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `metadata_configuration_input`<sup>Optional</sup> <a name="metadata_configuration_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.metadataConfigurationInput"></a>

```python
metadata_configuration_input: typing.Union[IResolvable, typing.List[FsxFileCacheLustreConfigurationMetadataConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationMetadataConfiguration">FsxFileCacheLustreConfigurationMetadataConfiguration</a>]]

---

##### `per_unit_storage_throughput_input`<sup>Optional</sup> <a name="per_unit_storage_throughput_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughputInput"></a>

```python
per_unit_storage_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekly_maintenance_start_time_input`<sup>Optional</sup> <a name="weekly_maintenance_start_time_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTimeInput"></a>

```python
weekly_maintenance_start_time_input: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `per_unit_storage_throughput`<sup>Required</sup> <a name="per_unit_storage_throughput" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.perUnitStorageThroughput"></a>

```python
per_unit_storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekly_maintenance_start_time`<sup>Required</sup> <a name="weekly_maintenance_start_time" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.weeklyMaintenanceStartTime"></a>

```python
weekly_maintenance_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxFileCacheLustreConfiguration, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheLustreConfiguration">FsxFileCacheLustreConfiguration</a>, cdktf.IResolvable]

---


### FsxFileCacheTimeoutsOutputReference <a name="FsxFileCacheTimeoutsOutputReference" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_file_cache

fsxFileCache.FsxFileCacheTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxFileCacheTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxFileCache.FsxFileCacheTimeouts">FsxFileCacheTimeouts</a>, cdktf.IResolvable]

---



