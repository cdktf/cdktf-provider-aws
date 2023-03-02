# `fsxOpenzfsVolume` Submodule <a name="`fsxOpenzfsVolume` Submodule" id="@cdktf/provider-aws.fsxOpenzfsVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsVolume <a name="FsxOpenzfsVolume" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume aws_fsx_openzfs_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolume(
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
  parent_volume_id: str,
  copy_tags_to_snapshots: typing.Union[bool, IResolvable] = None,
  data_compression_type: str = None,
  id: str = None,
  nfs_exports: FsxOpenzfsVolumeNfsExports = None,
  origin_snapshot: FsxOpenzfsVolumeOriginSnapshot = None,
  read_only: typing.Union[bool, IResolvable] = None,
  record_size_kib: typing.Union[int, float] = None,
  storage_capacity_quota_gib: typing.Union[int, float] = None,
  storage_capacity_reservation_gib: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxOpenzfsVolumeTimeouts = None,
  user_and_group_quotas: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeUserAndGroupQuotas]] = None,
  volume_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.parentVolumeId">parent_volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.copyTagsToSnapshots">copy_tags_to_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.dataCompressionType">data_compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.nfsExports">nfs_exports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.originSnapshot">origin_snapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | origin_snapshot block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.recordSizeKib">record_size_kib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.storageCapacityQuotaGib">storage_capacity_quota_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.storageCapacityReservationGib">storage_capacity_reservation_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.userAndGroupQuotas">user_and_group_quotas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]</code> | user_and_group_quotas block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}.

---

##### `parent_volume_id`<sup>Required</sup> <a name="parent_volume_id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.parentVolumeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}.

---

##### `copy_tags_to_snapshots`<sup>Optional</sup> <a name="copy_tags_to_snapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.copyTagsToSnapshots"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}.

---

##### `data_compression_type`<sup>Optional</sup> <a name="data_compression_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.dataCompressionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nfs_exports`<sup>Optional</sup> <a name="nfs_exports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.nfsExports"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#nfs_exports FsxOpenzfsVolume#nfs_exports}

---

##### `origin_snapshot`<sup>Optional</sup> <a name="origin_snapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.originSnapshot"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

origin_snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#origin_snapshot FsxOpenzfsVolume#origin_snapshot}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}.

---

##### `record_size_kib`<sup>Optional</sup> <a name="record_size_kib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.recordSizeKib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}.

---

##### `storage_capacity_quota_gib`<sup>Optional</sup> <a name="storage_capacity_quota_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.storageCapacityQuotaGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `storage_capacity_reservation_gib`<sup>Optional</sup> <a name="storage_capacity_reservation_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.storageCapacityReservationGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#timeouts FsxOpenzfsVolume#timeouts}

---

##### `user_and_group_quotas`<sup>Optional</sup> <a name="user_and_group_quotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.userAndGroupQuotas"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports">put_nfs_exports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot">put_origin_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas">put_user_and_group_quotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots">reset_copy_tags_to_snapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType">reset_data_compression_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports">reset_nfs_exports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot">reset_origin_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib">reset_record_size_kib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib">reset_storage_capacity_quota_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib">reset_storage_capacity_reservation_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas">reset_user_and_group_quotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_nfs_exports` <a name="put_nfs_exports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports"></a>

```python
def put_nfs_exports(
  client_configurations: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeNfsExportsClientConfigurations]]
) -> None
```

###### `client_configurations`<sup>Required</sup> <a name="client_configurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports.parameter.clientConfigurations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>]]

client_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#client_configurations FsxOpenzfsVolume#client_configurations}

---

##### `put_origin_snapshot` <a name="put_origin_snapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot"></a>

```python
def put_origin_snapshot(
  copy_strategy: str,
  snapshot_arn: str
) -> None
```

###### `copy_strategy`<sup>Required</sup> <a name="copy_strategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot.parameter.copyStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}.

---

###### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot.parameter.snapshotArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}.

---

##### `put_user_and_group_quotas` <a name="put_user_and_group_quotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas"></a>

```python
def put_user_and_group_quotas(
  value: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeUserAndGroupQuotas]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]

---

##### `reset_copy_tags_to_snapshots` <a name="reset_copy_tags_to_snapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots"></a>

```python
def reset_copy_tags_to_snapshots() -> None
```

##### `reset_data_compression_type` <a name="reset_data_compression_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType"></a>

```python
def reset_data_compression_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_nfs_exports` <a name="reset_nfs_exports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports"></a>

```python
def reset_nfs_exports() -> None
```

##### `reset_origin_snapshot` <a name="reset_origin_snapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot"></a>

```python
def reset_origin_snapshot() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_record_size_kib` <a name="reset_record_size_kib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib"></a>

```python
def reset_record_size_kib() -> None
```

##### `reset_storage_capacity_quota_gib` <a name="reset_storage_capacity_quota_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib"></a>

```python
def reset_storage_capacity_quota_gib() -> None
```

##### `reset_storage_capacity_reservation_gib` <a name="reset_storage_capacity_reservation_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib"></a>

```python
def reset_storage_capacity_reservation_gib() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_and_group_quotas` <a name="reset_user_and_group_quotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas"></a>

```python
def reset_user_and_group_quotas() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports">nfs_exports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot">origin_snapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas">user_and_group_quotas</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput">copy_tags_to_snapshots_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput">data_compression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput">nfs_exports_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput">origin_snapshot_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput">parent_volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput">record_size_kib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput">storage_capacity_quota_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput">storage_capacity_reservation_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput">user_and_group_quotas_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots">copy_tags_to_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType">data_compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId">parent_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib">record_size_kib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib">storage_capacity_quota_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib">storage_capacity_reservation_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `nfs_exports`<sup>Required</sup> <a name="nfs_exports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports"></a>

```python
nfs_exports: FsxOpenzfsVolumeNfsExportsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a>

---

##### `origin_snapshot`<sup>Required</sup> <a name="origin_snapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot"></a>

```python
origin_snapshot: FsxOpenzfsVolumeOriginSnapshotOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts"></a>

```python
timeouts: FsxOpenzfsVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a>

---

##### `user_and_group_quotas`<sup>Required</sup> <a name="user_and_group_quotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas"></a>

```python
user_and_group_quotas: FsxOpenzfsVolumeUserAndGroupQuotasList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a>

---

##### `copy_tags_to_snapshots_input`<sup>Optional</sup> <a name="copy_tags_to_snapshots_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput"></a>

```python
copy_tags_to_snapshots_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_compression_type_input`<sup>Optional</sup> <a name="data_compression_type_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput"></a>

```python
data_compression_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nfs_exports_input`<sup>Optional</sup> <a name="nfs_exports_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput"></a>

```python
nfs_exports_input: FsxOpenzfsVolumeNfsExports
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `origin_snapshot_input`<sup>Optional</sup> <a name="origin_snapshot_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput"></a>

```python
origin_snapshot_input: FsxOpenzfsVolumeOriginSnapshot
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `parent_volume_id_input`<sup>Optional</sup> <a name="parent_volume_id_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput"></a>

```python
parent_volume_id_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `record_size_kib_input`<sup>Optional</sup> <a name="record_size_kib_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput"></a>

```python
record_size_kib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gib_input`<sup>Optional</sup> <a name="storage_capacity_quota_gib_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput"></a>

```python
storage_capacity_quota_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_reservation_gib_input`<sup>Optional</sup> <a name="storage_capacity_reservation_gib_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput"></a>

```python
storage_capacity_reservation_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FsxOpenzfsVolumeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>, cdktf.IResolvable]

---

##### `user_and_group_quotas_input`<sup>Optional</sup> <a name="user_and_group_quotas_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput"></a>

```python
user_and_group_quotas_input: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeUserAndGroupQuotas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `copy_tags_to_snapshots`<sup>Required</sup> <a name="copy_tags_to_snapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots"></a>

```python
copy_tags_to_snapshots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_compression_type`<sup>Required</sup> <a name="data_compression_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType"></a>

```python
data_compression_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_volume_id`<sup>Required</sup> <a name="parent_volume_id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId"></a>

```python
parent_volume_id: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `record_size_kib`<sup>Required</sup> <a name="record_size_kib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib"></a>

```python
record_size_kib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gib`<sup>Required</sup> <a name="storage_capacity_quota_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib"></a>

```python
storage_capacity_quota_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_reservation_gib`<sup>Required</sup> <a name="storage_capacity_reservation_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib"></a>

```python
storage_capacity_reservation_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsVolumeConfig <a name="FsxOpenzfsVolumeConfig" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent_volume_id: str,
  copy_tags_to_snapshots: typing.Union[bool, IResolvable] = None,
  data_compression_type: str = None,
  id: str = None,
  nfs_exports: FsxOpenzfsVolumeNfsExports = None,
  origin_snapshot: FsxOpenzfsVolumeOriginSnapshot = None,
  read_only: typing.Union[bool, IResolvable] = None,
  record_size_kib: typing.Union[int, float] = None,
  storage_capacity_quota_gib: typing.Union[int, float] = None,
  storage_capacity_reservation_gib: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxOpenzfsVolumeTimeouts = None,
  user_and_group_quotas: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeUserAndGroupQuotas]] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId">parent_volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots">copy_tags_to_snapshots</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType">data_compression_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports">nfs_exports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot">origin_snapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | origin_snapshot block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib">record_size_kib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib">storage_capacity_quota_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib">storage_capacity_reservation_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas">user_and_group_quotas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]</code> | user_and_group_quotas block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}.

---

##### `parent_volume_id`<sup>Required</sup> <a name="parent_volume_id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId"></a>

```python
parent_volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}.

---

##### `copy_tags_to_snapshots`<sup>Optional</sup> <a name="copy_tags_to_snapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots"></a>

```python
copy_tags_to_snapshots: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}.

---

##### `data_compression_type`<sup>Optional</sup> <a name="data_compression_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType"></a>

```python
data_compression_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nfs_exports`<sup>Optional</sup> <a name="nfs_exports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports"></a>

```python
nfs_exports: FsxOpenzfsVolumeNfsExports
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#nfs_exports FsxOpenzfsVolume#nfs_exports}

---

##### `origin_snapshot`<sup>Optional</sup> <a name="origin_snapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot"></a>

```python
origin_snapshot: FsxOpenzfsVolumeOriginSnapshot
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

origin_snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#origin_snapshot FsxOpenzfsVolume#origin_snapshot}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}.

---

##### `record_size_kib`<sup>Optional</sup> <a name="record_size_kib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib"></a>

```python
record_size_kib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}.

---

##### `storage_capacity_quota_gib`<sup>Optional</sup> <a name="storage_capacity_quota_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib"></a>

```python
storage_capacity_quota_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `storage_capacity_reservation_gib`<sup>Optional</sup> <a name="storage_capacity_reservation_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib"></a>

```python
storage_capacity_reservation_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts"></a>

```python
timeouts: FsxOpenzfsVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#timeouts FsxOpenzfsVolume#timeouts}

---

##### `user_and_group_quotas`<sup>Optional</sup> <a name="user_and_group_quotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas"></a>

```python
user_and_group_quotas: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeUserAndGroupQuotas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}.

---

### FsxOpenzfsVolumeNfsExports <a name="FsxOpenzfsVolumeNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports(
  client_configurations: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeNfsExportsClientConfigurations]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations">client_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>]]</code> | client_configurations block. |

---

##### `client_configurations`<sup>Required</sup> <a name="client_configurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations"></a>

```python
client_configurations: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeNfsExportsClientConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>]]

client_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#client_configurations FsxOpenzfsVolume#client_configurations}

---

### FsxOpenzfsVolumeNfsExportsClientConfigurations <a name="FsxOpenzfsVolumeNfsExportsClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations(
  clients: str,
  options: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients">clients</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options">options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}. |

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients"></a>

```python
clients: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}.

---

### FsxOpenzfsVolumeOriginSnapshot <a name="FsxOpenzfsVolumeOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot(
  copy_strategy: str,
  snapshot_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy">copy_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}. |

---

##### `copy_strategy`<sup>Required</sup> <a name="copy_strategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy"></a>

```python
copy_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}.

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}.

---

### FsxOpenzfsVolumeTimeouts <a name="FsxOpenzfsVolumeTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}.

---

### FsxOpenzfsVolumeUserAndGroupQuotas <a name="FsxOpenzfsVolumeUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas(
  id: typing.Union[int, float],
  storage_capacity_quota_gib: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id">id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib">storage_capacity_quota_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_capacity_quota_gib`<sup>Required</sup> <a name="storage_capacity_quota_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib"></a>

```python
storage_capacity_quota_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsVolumeNfsExportsClientConfigurationsList <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeNfsExportsClientConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>]]

---


### FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput">clients_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clients_input`<sup>Optional</sup> <a name="clients_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```python
clients_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```python
clients: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxOpenzfsVolumeNfsExportsClientConfigurations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>, cdktf.IResolvable]

---


### FsxOpenzfsVolumeNfsExportsOutputReference <a name="FsxOpenzfsVolumeNfsExportsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations">put_client_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_configurations` <a name="put_client_configurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations"></a>

```python
def put_client_configurations(
  value: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeNfsExportsClientConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations">client_configurations</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput">client_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_configurations`<sup>Required</sup> <a name="client_configurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations"></a>

```python
client_configurations: FsxOpenzfsVolumeNfsExportsClientConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a>

---

##### `client_configurations_input`<sup>Optional</sup> <a name="client_configurations_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```python
client_configurations_input: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeNfsExportsClientConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue"></a>

```python
internal_value: FsxOpenzfsVolumeNfsExports
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---


### FsxOpenzfsVolumeOriginSnapshotOutputReference <a name="FsxOpenzfsVolumeOriginSnapshotOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput">copy_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput">snapshot_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy">copy_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_strategy_input`<sup>Optional</sup> <a name="copy_strategy_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```python
copy_strategy_input: str
```

- *Type:* str

---

##### `snapshot_arn_input`<sup>Optional</sup> <a name="snapshot_arn_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```python
snapshot_arn_input: str
```

- *Type:* str

---

##### `copy_strategy`<sup>Required</sup> <a name="copy_strategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy"></a>

```python
copy_strategy: str
```

- *Type:* str

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: FsxOpenzfsVolumeOriginSnapshot
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---


### FsxOpenzfsVolumeTimeoutsOutputReference <a name="FsxOpenzfsVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxOpenzfsVolumeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>, cdktf.IResolvable]

---


### FsxOpenzfsVolumeUserAndGroupQuotasList <a name="FsxOpenzfsVolumeUserAndGroupQuotasList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FsxOpenzfsVolumeUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FsxOpenzfsVolumeUserAndGroupQuotas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>]]

---


### FsxOpenzfsVolumeUserAndGroupQuotasOutputReference <a name="FsxOpenzfsVolumeUserAndGroupQuotasOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_openzfs_volume

fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput">id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput">storage_capacity_quota_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib">storage_capacity_quota_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput"></a>

```python
id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gib_input`<sup>Optional</sup> <a name="storage_capacity_quota_gib_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput"></a>

```python
storage_capacity_quota_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gib`<sup>Required</sup> <a name="storage_capacity_quota_gib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib"></a>

```python
storage_capacity_quota_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxOpenzfsVolumeUserAndGroupQuotas, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>, cdktf.IResolvable]

---



