# `ebsSnapshotImport` Submodule <a name="`ebsSnapshotImport` Submodule" id="@cdktf/provider-aws.ebsSnapshotImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshotImport <a name="EbsSnapshotImport" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import aws_ebs_snapshot_import}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk_container: EbsSnapshotImportDiskContainer,
  client_data: EbsSnapshotImportClientData = None,
  description: str = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  permanent_restore: typing.Union[bool, IResolvable] = None,
  role_name: str = None,
  storage_tier: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  temporary_restore_days: typing.Union[int, float] = None,
  timeouts: EbsSnapshotImportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.diskContainer">disk_container</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | disk_container block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.clientData">client_data</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | client_data block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.permanentRestore">permanent_restore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.storageTier">storage_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.temporaryRestoreDays">temporary_restore_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_container`<sup>Required</sup> <a name="disk_container" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.diskContainer"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

disk_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}

---

##### `client_data`<sup>Optional</sup> <a name="client_data" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.clientData"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

client_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}.

---

##### `permanent_restore`<sup>Optional</sup> <a name="permanent_restore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.permanentRestore"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}.

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.roleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}.

---

##### `storage_tier`<sup>Optional</sup> <a name="storage_tier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.storageTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}.

---

##### `temporary_restore_days`<sup>Optional</sup> <a name="temporary_restore_days" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.temporaryRestoreDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData">put_client_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer">put_disk_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData">reset_client_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore">reset_permanent_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier">reset_storage_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays">reset_temporary_restore_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_client_data` <a name="put_client_data" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData"></a>

```python
def put_client_data(
  comment: str = None,
  upload_end: str = None,
  upload_size: typing.Union[int, float] = None,
  upload_start: str = None
) -> None
```

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}.

---

###### `upload_end`<sup>Optional</sup> <a name="upload_end" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData.parameter.uploadEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}.

---

###### `upload_size`<sup>Optional</sup> <a name="upload_size" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData.parameter.uploadSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}.

---

###### `upload_start`<sup>Optional</sup> <a name="upload_start" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData.parameter.uploadStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}.

---

##### `put_disk_container` <a name="put_disk_container" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer"></a>

```python
def put_disk_container(
  format: str,
  description: str = None,
  url: str = None,
  user_bucket: EbsSnapshotImportDiskContainerUserBucket = None
) -> None
```

###### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}.

---

###### `user_bucket`<sup>Optional</sup> <a name="user_bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer.parameter.userBucket"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

user_bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#user_bucket EbsSnapshotImport#user_bucket}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}.

---

##### `reset_client_data` <a name="reset_client_data" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData"></a>

```python
def reset_client_data() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_permanent_restore` <a name="reset_permanent_restore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore"></a>

```python
def reset_permanent_restore() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_storage_tier` <a name="reset_storage_tier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier"></a>

```python
def reset_storage_tier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_temporary_restore_days` <a name="reset_temporary_restore_days" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays"></a>

```python
def reset_temporary_restore_days() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData">client_data</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId">data_encryption_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer">disk_container</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias">owner_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput">client_data_input</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput">disk_container_input</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput">permanent_restore_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput">storage_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput">temporary_restore_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore">permanent_restore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier">storage_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays">temporary_restore_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `client_data`<sup>Required</sup> <a name="client_data" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData"></a>

```python
client_data: EbsSnapshotImportClientDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a>

---

##### `data_encryption_key_id`<sup>Required</sup> <a name="data_encryption_key_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId"></a>

```python
data_encryption_key_id: str
```

- *Type:* str

---

##### `disk_container`<sup>Required</sup> <a name="disk_container" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer"></a>

```python
disk_container: EbsSnapshotImportDiskContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a>

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `owner_alias`<sup>Required</sup> <a name="owner_alias" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias"></a>

```python
owner_alias: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts"></a>

```python
timeouts: EbsSnapshotImportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a>

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_data_input`<sup>Optional</sup> <a name="client_data_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput"></a>

```python
client_data_input: EbsSnapshotImportClientData
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_container_input`<sup>Optional</sup> <a name="disk_container_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput"></a>

```python
disk_container_input: EbsSnapshotImportDiskContainer
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `permanent_restore_input`<sup>Optional</sup> <a name="permanent_restore_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput"></a>

```python
permanent_restore_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `storage_tier_input`<sup>Optional</sup> <a name="storage_tier_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput"></a>

```python
storage_tier_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `temporary_restore_days_input`<sup>Optional</sup> <a name="temporary_restore_days_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput"></a>

```python
temporary_restore_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EbsSnapshotImportTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `permanent_restore`<sup>Required</sup> <a name="permanent_restore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore"></a>

```python
permanent_restore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `storage_tier`<sup>Required</sup> <a name="storage_tier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `temporary_restore_days`<sup>Required</sup> <a name="temporary_restore_days" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays"></a>

```python
temporary_restore_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotImportClientData <a name="EbsSnapshotImportClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportClientData(
  comment: str = None,
  upload_end: str = None,
  upload_size: typing.Union[int, float] = None,
  upload_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd">upload_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize">upload_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart">upload_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}.

---

##### `upload_end`<sup>Optional</sup> <a name="upload_end" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd"></a>

```python
upload_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}.

---

##### `upload_size`<sup>Optional</sup> <a name="upload_size" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize"></a>

```python
upload_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}.

---

##### `upload_start`<sup>Optional</sup> <a name="upload_start" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart"></a>

```python
upload_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}.

---

### EbsSnapshotImportConfig <a name="EbsSnapshotImportConfig" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk_container: EbsSnapshotImportDiskContainer,
  client_data: EbsSnapshotImportClientData = None,
  description: str = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  permanent_restore: typing.Union[bool, IResolvable] = None,
  role_name: str = None,
  storage_tier: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  temporary_restore_days: typing.Union[int, float] = None,
  timeouts: EbsSnapshotImportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer">disk_container</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | disk_container block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData">client_data</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | client_data block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore">permanent_restore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier">storage_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays">temporary_restore_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_container`<sup>Required</sup> <a name="disk_container" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer"></a>

```python
disk_container: EbsSnapshotImportDiskContainer
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

disk_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}

---

##### `client_data`<sup>Optional</sup> <a name="client_data" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData"></a>

```python
client_data: EbsSnapshotImportClientData
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

client_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}.

---

##### `permanent_restore`<sup>Optional</sup> <a name="permanent_restore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore"></a>

```python
permanent_restore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}.

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}.

---

##### `storage_tier`<sup>Optional</sup> <a name="storage_tier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}.

---

##### `temporary_restore_days`<sup>Optional</sup> <a name="temporary_restore_days" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays"></a>

```python
temporary_restore_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts"></a>

```python
timeouts: EbsSnapshotImportTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}

---

### EbsSnapshotImportDiskContainer <a name="EbsSnapshotImportDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportDiskContainer(
  format: str,
  description: str = None,
  url: str = None,
  user_bucket: EbsSnapshotImportDiskContainerUserBucket = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket">user_bucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | user_bucket block. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}.

---

##### `user_bucket`<sup>Optional</sup> <a name="user_bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket"></a>

```python
user_bucket: EbsSnapshotImportDiskContainerUserBucket
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

user_bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#user_bucket EbsSnapshotImport#user_bucket}

---

### EbsSnapshotImportDiskContainerUserBucket <a name="EbsSnapshotImportDiskContainerUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket(
  s3_bucket: str,
  s3_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}. |

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}.

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}.

---

### EbsSnapshotImportTimeouts <a name="EbsSnapshotImportTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotImportClientDataOutputReference <a name="EbsSnapshotImportClientDataOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd">reset_upload_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize">reset_upload_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart">reset_upload_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_upload_end` <a name="reset_upload_end" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd"></a>

```python
def reset_upload_end() -> None
```

##### `reset_upload_size` <a name="reset_upload_size" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize"></a>

```python
def reset_upload_size() -> None
```

##### `reset_upload_start` <a name="reset_upload_start" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart"></a>

```python
def reset_upload_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput">upload_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput">upload_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput">upload_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd">upload_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize">upload_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart">upload_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `upload_end_input`<sup>Optional</sup> <a name="upload_end_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput"></a>

```python
upload_end_input: str
```

- *Type:* str

---

##### `upload_size_input`<sup>Optional</sup> <a name="upload_size_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput"></a>

```python
upload_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upload_start_input`<sup>Optional</sup> <a name="upload_start_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput"></a>

```python
upload_start_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `upload_end`<sup>Required</sup> <a name="upload_end" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd"></a>

```python
upload_end: str
```

- *Type:* str

---

##### `upload_size`<sup>Required</sup> <a name="upload_size" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize"></a>

```python
upload_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `upload_start`<sup>Required</sup> <a name="upload_start" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart"></a>

```python
upload_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue"></a>

```python
internal_value: EbsSnapshotImportClientData
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---


### EbsSnapshotImportDiskContainerOutputReference <a name="EbsSnapshotImportDiskContainerOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket">put_user_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket">reset_user_bucket</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_user_bucket` <a name="put_user_bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket"></a>

```python
def put_user_bucket(
  s3_bucket: str,
  s3_key: str
) -> None
```

###### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}.

---

###### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_user_bucket` <a name="reset_user_bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket"></a>

```python
def reset_user_bucket() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket">user_bucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput">user_bucket_input</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_bucket`<sup>Required</sup> <a name="user_bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket"></a>

```python
user_bucket: EbsSnapshotImportDiskContainerUserBucketOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `user_bucket_input`<sup>Optional</sup> <a name="user_bucket_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput"></a>

```python
user_bucket_input: EbsSnapshotImportDiskContainerUserBucket
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue"></a>

```python
internal_value: EbsSnapshotImportDiskContainer
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---


### EbsSnapshotImportDiskContainerUserBucketOutputReference <a name="EbsSnapshotImportDiskContainerUserBucketOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue"></a>

```python
internal_value: EbsSnapshotImportDiskContainerUserBucket
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---


### EbsSnapshotImportTimeoutsOutputReference <a name="EbsSnapshotImportTimeoutsOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_import

ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EbsSnapshotImportTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>, cdktf.IResolvable]

---



