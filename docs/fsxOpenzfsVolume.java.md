# `fsxOpenzfsVolume` Submodule <a name="`fsxOpenzfsVolume` Submodule" id="@cdktf/provider-aws.fsxOpenzfsVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsVolume <a name="FsxOpenzfsVolume" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume aws_fsx_openzfs_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolume;

FsxOpenzfsVolume.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .parentVolumeId(java.lang.String)
//  .copyTagsToSnapshots(java.lang.Boolean)
//  .copyTagsToSnapshots(IResolvable)
//  .dataCompressionType(java.lang.String)
//  .id(java.lang.String)
//  .nfsExports(FsxOpenzfsVolumeNfsExports)
//  .originSnapshot(FsxOpenzfsVolumeOriginSnapshot)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .recordSizeKib(java.lang.Number)
//  .storageCapacityQuotaGib(java.lang.Number)
//  .storageCapacityReservationGib(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FsxOpenzfsVolumeTimeouts)
//  .userAndGroupQuotas(IResolvable)
//  .userAndGroupQuotas(java.util.List<FsxOpenzfsVolumeUserAndGroupQuotas>)
//  .volumeType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.parentVolumeId">parentVolumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.dataCompressionType">dataCompressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | origin_snapshot block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.recordSizeKib">recordSizeKib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.storageCapacityReservationGib">storageCapacityReservationGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>></code> | user_and_group_quotas block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}.

---

##### `parentVolumeId`<sup>Required</sup> <a name="parentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.parentVolumeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}.

---

##### `copyTagsToSnapshots`<sup>Optional</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.copyTagsToSnapshots"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}.

---

##### `dataCompressionType`<sup>Optional</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.dataCompressionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nfsExports`<sup>Optional</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.nfsExports"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#nfs_exports FsxOpenzfsVolume#nfs_exports}

---

##### `originSnapshot`<sup>Optional</sup> <a name="originSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.originSnapshot"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

origin_snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#origin_snapshot FsxOpenzfsVolume#origin_snapshot}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.readOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}.

---

##### `recordSizeKib`<sup>Optional</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.recordSizeKib"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}.

---

##### `storageCapacityQuotaGib`<sup>Optional</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.storageCapacityQuotaGib"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `storageCapacityReservationGib`<sup>Optional</sup> <a name="storageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.storageCapacityReservationGib"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#timeouts FsxOpenzfsVolume#timeouts}

---

##### `userAndGroupQuotas`<sup>Optional</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.userAndGroupQuotas"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>>

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.volumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports">putNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot">putOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas">putUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots">resetCopyTagsToSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType">resetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports">resetNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot">resetOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib">resetRecordSizeKib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib">resetStorageCapacityQuotaGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib">resetStorageCapacityReservationGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas">resetUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putNfsExports` <a name="putNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports"></a>

```java
public void putNfsExports(FsxOpenzfsVolumeNfsExports value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `putOriginSnapshot` <a name="putOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot"></a>

```java
public void putOriginSnapshot(FsxOpenzfsVolumeOriginSnapshot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts"></a>

```java
public void putTimeouts(FsxOpenzfsVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

---

##### `putUserAndGroupQuotas` <a name="putUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas"></a>

```java
public void putUserAndGroupQuotas(IResolvable OR java.util.List<FsxOpenzfsVolumeUserAndGroupQuotas> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>>

---

##### `resetCopyTagsToSnapshots` <a name="resetCopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots"></a>

```java
public void resetCopyTagsToSnapshots()
```

##### `resetDataCompressionType` <a name="resetDataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType"></a>

```java
public void resetDataCompressionType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId"></a>

```java
public void resetId()
```

##### `resetNfsExports` <a name="resetNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports"></a>

```java
public void resetNfsExports()
```

##### `resetOriginSnapshot` <a name="resetOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot"></a>

```java
public void resetOriginSnapshot()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetRecordSizeKib` <a name="resetRecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib"></a>

```java
public void resetRecordSizeKib()
```

##### `resetStorageCapacityQuotaGib` <a name="resetStorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib"></a>

```java
public void resetStorageCapacityQuotaGib()
```

##### `resetStorageCapacityReservationGib` <a name="resetStorageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib"></a>

```java
public void resetStorageCapacityReservationGib()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserAndGroupQuotas` <a name="resetUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas"></a>

```java
public void resetUserAndGroupQuotas()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType"></a>

```java
public void resetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolume;

FsxOpenzfsVolume.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolume;

FsxOpenzfsVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolume;

FsxOpenzfsVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput">copyTagsToSnapshotsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput">dataCompressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput">nfsExportsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput">originSnapshotInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput">parentVolumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput">recordSizeKibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput">storageCapacityQuotaGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput">storageCapacityReservationGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput">userAndGroupQuotasInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType">dataCompressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId">parentVolumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib">recordSizeKib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib">storageCapacityReservationGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `nfsExports`<sup>Required</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports"></a>

```java
public FsxOpenzfsVolumeNfsExportsOutputReference getNfsExports();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a>

---

##### `originSnapshot`<sup>Required</sup> <a name="originSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot"></a>

```java
public FsxOpenzfsVolumeOriginSnapshotOutputReference getOriginSnapshot();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts"></a>

```java
public FsxOpenzfsVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a>

---

##### `userAndGroupQuotas`<sup>Required</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas"></a>

```java
public FsxOpenzfsVolumeUserAndGroupQuotasList getUserAndGroupQuotas();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a>

---

##### `copyTagsToSnapshotsInput`<sup>Optional</sup> <a name="copyTagsToSnapshotsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput"></a>

```java
public java.lang.Object getCopyTagsToSnapshotsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataCompressionTypeInput`<sup>Optional</sup> <a name="dataCompressionTypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput"></a>

```java
public java.lang.String getDataCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nfsExportsInput`<sup>Optional</sup> <a name="nfsExportsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput"></a>

```java
public FsxOpenzfsVolumeNfsExports getNfsExportsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `originSnapshotInput`<sup>Optional</sup> <a name="originSnapshotInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput"></a>

```java
public FsxOpenzfsVolumeOriginSnapshot getOriginSnapshotInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `parentVolumeIdInput`<sup>Optional</sup> <a name="parentVolumeIdInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput"></a>

```java
public java.lang.String getParentVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordSizeKibInput`<sup>Optional</sup> <a name="recordSizeKibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput"></a>

```java
public java.lang.Number getRecordSizeKibInput();
```

- *Type:* java.lang.Number

---

##### `storageCapacityQuotaGibInput`<sup>Optional</sup> <a name="storageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput"></a>

```java
public java.lang.Number getStorageCapacityQuotaGibInput();
```

- *Type:* java.lang.Number

---

##### `storageCapacityReservationGibInput`<sup>Optional</sup> <a name="storageCapacityReservationGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput"></a>

```java
public java.lang.Number getStorageCapacityReservationGibInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `userAndGroupQuotasInput`<sup>Optional</sup> <a name="userAndGroupQuotasInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput"></a>

```java
public java.lang.Object getUserAndGroupQuotasInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>>

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshots`<sup>Required</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots"></a>

```java
public java.lang.Object getCopyTagsToSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataCompressionType`<sup>Required</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType"></a>

```java
public java.lang.String getDataCompressionType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentVolumeId`<sup>Required</sup> <a name="parentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId"></a>

```java
public java.lang.String getParentVolumeId();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordSizeKib`<sup>Required</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib"></a>

```java
public java.lang.Number getRecordSizeKib();
```

- *Type:* java.lang.Number

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib"></a>

```java
public java.lang.Number getStorageCapacityQuotaGib();
```

- *Type:* java.lang.Number

---

##### `storageCapacityReservationGib`<sup>Required</sup> <a name="storageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib"></a>

```java
public java.lang.Number getStorageCapacityReservationGib();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsVolumeConfig <a name="FsxOpenzfsVolumeConfig" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeConfig;

FsxOpenzfsVolumeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .parentVolumeId(java.lang.String)
//  .copyTagsToSnapshots(java.lang.Boolean)
//  .copyTagsToSnapshots(IResolvable)
//  .dataCompressionType(java.lang.String)
//  .id(java.lang.String)
//  .nfsExports(FsxOpenzfsVolumeNfsExports)
//  .originSnapshot(FsxOpenzfsVolumeOriginSnapshot)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .recordSizeKib(java.lang.Number)
//  .storageCapacityQuotaGib(java.lang.Number)
//  .storageCapacityReservationGib(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FsxOpenzfsVolumeTimeouts)
//  .userAndGroupQuotas(IResolvable)
//  .userAndGroupQuotas(java.util.List<FsxOpenzfsVolumeUserAndGroupQuotas>)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId">parentVolumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType">dataCompressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | origin_snapshot block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib">recordSizeKib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib">storageCapacityReservationGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>></code> | user_and_group_quotas block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}.

---

##### `parentVolumeId`<sup>Required</sup> <a name="parentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId"></a>

```java
public java.lang.String getParentVolumeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}.

---

##### `copyTagsToSnapshots`<sup>Optional</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots"></a>

```java
public java.lang.Object getCopyTagsToSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}.

---

##### `dataCompressionType`<sup>Optional</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType"></a>

```java
public java.lang.String getDataCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nfsExports`<sup>Optional</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports"></a>

```java
public FsxOpenzfsVolumeNfsExports getNfsExports();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#nfs_exports FsxOpenzfsVolume#nfs_exports}

---

##### `originSnapshot`<sup>Optional</sup> <a name="originSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot"></a>

```java
public FsxOpenzfsVolumeOriginSnapshot getOriginSnapshot();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

origin_snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#origin_snapshot FsxOpenzfsVolume#origin_snapshot}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}.

---

##### `recordSizeKib`<sup>Optional</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib"></a>

```java
public java.lang.Number getRecordSizeKib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}.

---

##### `storageCapacityQuotaGib`<sup>Optional</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib"></a>

```java
public java.lang.Number getStorageCapacityQuotaGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `storageCapacityReservationGib`<sup>Optional</sup> <a name="storageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib"></a>

```java
public java.lang.Number getStorageCapacityReservationGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts"></a>

```java
public FsxOpenzfsVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#timeouts FsxOpenzfsVolume#timeouts}

---

##### `userAndGroupQuotas`<sup>Optional</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas"></a>

```java
public java.lang.Object getUserAndGroupQuotas();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>>

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}.

---

### FsxOpenzfsVolumeNfsExports <a name="FsxOpenzfsVolumeNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeNfsExports;

FsxOpenzfsVolumeNfsExports.builder()
    .clientConfigurations(IResolvable)
    .clientConfigurations(java.util.List<FsxOpenzfsVolumeNfsExportsClientConfigurations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations">clientConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>></code> | client_configurations block. |

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations"></a>

```java
public java.lang.Object getClientConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>>

client_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#client_configurations FsxOpenzfsVolume#client_configurations}

---

### FsxOpenzfsVolumeNfsExportsClientConfigurations <a name="FsxOpenzfsVolumeNfsExportsClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeNfsExportsClientConfigurations;

FsxOpenzfsVolumeNfsExportsClientConfigurations.builder()
    .clients(java.lang.String)
    .options(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients">clients</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}. |

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients"></a>

```java
public java.lang.String getClients();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}.

---

### FsxOpenzfsVolumeOriginSnapshot <a name="FsxOpenzfsVolumeOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeOriginSnapshot;

FsxOpenzfsVolumeOriginSnapshot.builder()
    .copyStrategy(java.lang.String)
    .snapshotArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy">copyStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}. |

---

##### `copyStrategy`<sup>Required</sup> <a name="copyStrategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy"></a>

```java
public java.lang.String getCopyStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}.

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn"></a>

```java
public java.lang.String getSnapshotArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}.

---

### FsxOpenzfsVolumeTimeouts <a name="FsxOpenzfsVolumeTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeTimeouts;

FsxOpenzfsVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}.

---

### FsxOpenzfsVolumeUserAndGroupQuotas <a name="FsxOpenzfsVolumeUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeUserAndGroupQuotas;

FsxOpenzfsVolumeUserAndGroupQuotas.builder()
    .id(java.lang.Number)
    .storageCapacityQuotaGib(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id">id</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib"></a>

```java
public java.lang.Number getStorageCapacityQuotaGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsVolumeNfsExportsClientConfigurationsList <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList;

new FsxOpenzfsVolumeNfsExportsClientConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get"></a>

```java
public FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>>

---


### FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference;

new FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput">clientsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientsInput`<sup>Optional</sup> <a name="clientsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```java
public java.lang.String getClientsInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```java
public java.util.List<java.lang.String> getOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```java
public java.lang.String getClients();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a> OR com.hashicorp.cdktf.IResolvable

---


### FsxOpenzfsVolumeNfsExportsOutputReference <a name="FsxOpenzfsVolumeNfsExportsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeNfsExportsOutputReference;

new FsxOpenzfsVolumeNfsExportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations">putClientConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfigurations` <a name="putClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations"></a>

```java
public void putClientConfigurations(IResolvable OR java.util.List<FsxOpenzfsVolumeNfsExportsClientConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations">clientConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput">clientConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations"></a>

```java
public FsxOpenzfsVolumeNfsExportsClientConfigurationsList getClientConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a>

---

##### `clientConfigurationsInput`<sup>Optional</sup> <a name="clientConfigurationsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```java
public java.lang.Object getClientConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue"></a>

```java
public FsxOpenzfsVolumeNfsExports getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---


### FsxOpenzfsVolumeOriginSnapshotOutputReference <a name="FsxOpenzfsVolumeOriginSnapshotOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeOriginSnapshotOutputReference;

new FsxOpenzfsVolumeOriginSnapshotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput">copyStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput">snapshotArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy">copyStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyStrategyInput`<sup>Optional</sup> <a name="copyStrategyInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```java
public java.lang.String getCopyStrategyInput();
```

- *Type:* java.lang.String

---

##### `snapshotArnInput`<sup>Optional</sup> <a name="snapshotArnInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```java
public java.lang.String getSnapshotArnInput();
```

- *Type:* java.lang.String

---

##### `copyStrategy`<sup>Required</sup> <a name="copyStrategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy"></a>

```java
public java.lang.String getCopyStrategy();
```

- *Type:* java.lang.String

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn"></a>

```java
public java.lang.String getSnapshotArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue"></a>

```java
public FsxOpenzfsVolumeOriginSnapshot getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---


### FsxOpenzfsVolumeTimeoutsOutputReference <a name="FsxOpenzfsVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeTimeoutsOutputReference;

new FsxOpenzfsVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### FsxOpenzfsVolumeUserAndGroupQuotasList <a name="FsxOpenzfsVolumeUserAndGroupQuotasList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeUserAndGroupQuotasList;

new FsxOpenzfsVolumeUserAndGroupQuotasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get"></a>

```java
public FsxOpenzfsVolumeUserAndGroupQuotasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>>

---


### FsxOpenzfsVolumeUserAndGroupQuotasOutputReference <a name="FsxOpenzfsVolumeUserAndGroupQuotasOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_volume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference;

new FsxOpenzfsVolumeUserAndGroupQuotasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput">idInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput">storageCapacityQuotaGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput"></a>

```java
public java.lang.Number getIdInput();
```

- *Type:* java.lang.Number

---

##### `storageCapacityQuotaGibInput`<sup>Optional</sup> <a name="storageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput"></a>

```java
public java.lang.Number getStorageCapacityQuotaGibInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib"></a>

```java
public java.lang.Number getStorageCapacityQuotaGib();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a> OR com.hashicorp.cdktf.IResolvable

---



