# `fsxOpenzfsFileSystem` Submodule <a name="`fsxOpenzfsFileSystem` Submodule" id="@cdktf/provider-aws.fsxOpenzfsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsFileSystem <a name="FsxOpenzfsFileSystem" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system aws_fsx_openzfs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystem;

FsxOpenzfsFileSystem.Builder.create(Construct scope, java.lang.String id)
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
    .deploymentType(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
    .throughputCapacity(java.lang.Number)
//  .automaticBackupRetentionDays(java.lang.Number)
//  .backupId(java.lang.String)
//  .copyTagsToBackups(java.lang.Boolean)
//  .copyTagsToBackups(IResolvable)
//  .copyTagsToVolumes(java.lang.Boolean)
//  .copyTagsToVolumes(IResolvable)
//  .dailyAutomaticBackupStartTime(java.lang.String)
//  .diskIopsConfiguration(FsxOpenzfsFileSystemDiskIopsConfiguration)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .rootVolumeConfiguration(FsxOpenzfsFileSystemRootVolumeConfiguration)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .storageCapacity(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FsxOpenzfsFileSystemTimeouts)
//  .weeklyMaintenanceStartTime(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#deployment_type FsxOpenzfsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#subnet_ids FsxOpenzfsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#throughput_capacity FsxOpenzfsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#automatic_backup_retention_days FsxOpenzfsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#backup_id FsxOpenzfsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_backups FsxOpenzfsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.copyTagsToVolumes">copyTagsToVolumes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_volumes FsxOpenzfsFileSystem#copy_tags_to_volumes}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#daily_automatic_backup_start_time FsxOpenzfsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a></code> | disk_iops_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#kms_key_id FsxOpenzfsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.rootVolumeConfiguration">rootVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a></code> | root_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#security_group_ids FsxOpenzfsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity FsxOpenzfsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_type FsxOpenzfsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags FsxOpenzfsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags_all FsxOpenzfsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#weekly_maintenance_start_time FsxOpenzfsFileSystem#weekly_maintenance_start_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#deployment_type FsxOpenzfsFileSystem#deployment_type}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#subnet_ids FsxOpenzfsFileSystem#subnet_ids}.

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.throughputCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#throughput_capacity FsxOpenzfsFileSystem#throughput_capacity}.

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.automaticBackupRetentionDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#automatic_backup_retention_days FsxOpenzfsFileSystem#automatic_backup_retention_days}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.backupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#backup_id FsxOpenzfsFileSystem#backup_id}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.copyTagsToBackups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_backups FsxOpenzfsFileSystem#copy_tags_to_backups}.

---

##### `copyTagsToVolumes`<sup>Optional</sup> <a name="copyTagsToVolumes" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.copyTagsToVolumes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_volumes FsxOpenzfsFileSystem#copy_tags_to_volumes}.

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.dailyAutomaticBackupStartTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#daily_automatic_backup_start_time FsxOpenzfsFileSystem#daily_automatic_backup_start_time}.

---

##### `diskIopsConfiguration`<sup>Optional</sup> <a name="diskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.diskIopsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

disk_iops_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#disk_iops_configuration FsxOpenzfsFileSystem#disk_iops_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#kms_key_id FsxOpenzfsFileSystem#kms_key_id}.

---

##### `rootVolumeConfiguration`<sup>Optional</sup> <a name="rootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.rootVolumeConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

root_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#root_volume_configuration FsxOpenzfsFileSystem#root_volume_configuration}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#security_group_ids FsxOpenzfsFileSystem#security_group_ids}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.storageCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity FsxOpenzfsFileSystem#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_type FsxOpenzfsFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags FsxOpenzfsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags_all FsxOpenzfsFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#timeouts FsxOpenzfsFileSystem#timeouts}

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.weeklyMaintenanceStartTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#weekly_maintenance_start_time FsxOpenzfsFileSystem#weekly_maintenance_start_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putDiskIopsConfiguration">putDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putRootVolumeConfiguration">putRootVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetAutomaticBackupRetentionDays">resetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetCopyTagsToBackups">resetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetCopyTagsToVolumes">resetCopyTagsToVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetDailyAutomaticBackupStartTime">resetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetDiskIopsConfiguration">resetDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetRootVolumeConfiguration">resetRootVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetWeeklyMaintenanceStartTime">resetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDiskIopsConfiguration` <a name="putDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putDiskIopsConfiguration"></a>

```java
public void putDiskIopsConfiguration(FsxOpenzfsFileSystemDiskIopsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putDiskIopsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

---

##### `putRootVolumeConfiguration` <a name="putRootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putRootVolumeConfiguration"></a>

```java
public void putRootVolumeConfiguration(FsxOpenzfsFileSystemRootVolumeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putRootVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putTimeouts"></a>

```java
public void putTimeouts(FsxOpenzfsFileSystemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a>

---

##### `resetAutomaticBackupRetentionDays` <a name="resetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetAutomaticBackupRetentionDays"></a>

```java
public void resetAutomaticBackupRetentionDays()
```

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetCopyTagsToBackups` <a name="resetCopyTagsToBackups" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetCopyTagsToBackups"></a>

```java
public void resetCopyTagsToBackups()
```

##### `resetCopyTagsToVolumes` <a name="resetCopyTagsToVolumes" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetCopyTagsToVolumes"></a>

```java
public void resetCopyTagsToVolumes()
```

##### `resetDailyAutomaticBackupStartTime` <a name="resetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetDailyAutomaticBackupStartTime"></a>

```java
public void resetDailyAutomaticBackupStartTime()
```

##### `resetDiskIopsConfiguration` <a name="resetDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetDiskIopsConfiguration"></a>

```java
public void resetDiskIopsConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetRootVolumeConfiguration` <a name="resetRootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetRootVolumeConfiguration"></a>

```java
public void resetRootVolumeConfiguration()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetStorageCapacity"></a>

```java
public void resetStorageCapacity()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeeklyMaintenanceStartTime` <a name="resetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetWeeklyMaintenanceStartTime"></a>

```java
public void resetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystem;

FsxOpenzfsFileSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystem;

FsxOpenzfsFileSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystem;

FsxOpenzfsFileSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference">FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeConfiguration">rootVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference">FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeId">rootVolumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference">FsxOpenzfsFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.automaticBackupRetentionDaysInput">automaticBackupRetentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToBackupsInput">copyTagsToBackupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToVolumesInput">copyTagsToVolumesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dailyAutomaticBackupStartTimeInput">dailyAutomaticBackupStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.diskIopsConfigurationInput">diskIopsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeConfigurationInput">rootVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageCapacityInput">storageCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.throughputCapacityInput">throughputCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.weeklyMaintenanceStartTimeInput">weeklyMaintenanceStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToVolumes">copyTagsToVolumes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `diskIopsConfiguration`<sup>Required</sup> <a name="diskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.diskIopsConfiguration"></a>

```java
public FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference getDiskIopsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference">FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `rootVolumeConfiguration`<sup>Required</sup> <a name="rootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeConfiguration"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference getRootVolumeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference">FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference</a>

---

##### `rootVolumeId`<sup>Required</sup> <a name="rootVolumeId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeId"></a>

```java
public java.lang.String getRootVolumeId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.timeouts"></a>

```java
public FsxOpenzfsFileSystemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference">FsxOpenzfsFileSystemTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `automaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="automaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.automaticBackupRetentionDaysInput"></a>

```java
public java.lang.Number getAutomaticBackupRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `copyTagsToBackupsInput`<sup>Optional</sup> <a name="copyTagsToBackupsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToBackupsInput"></a>

```java
public java.lang.Object getCopyTagsToBackupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `copyTagsToVolumesInput`<sup>Optional</sup> <a name="copyTagsToVolumesInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToVolumesInput"></a>

```java
public java.lang.Object getCopyTagsToVolumesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```java
public java.lang.String getDailyAutomaticBackupStartTimeInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `diskIopsConfigurationInput`<sup>Optional</sup> <a name="diskIopsConfigurationInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.diskIopsConfigurationInput"></a>

```java
public FsxOpenzfsFileSystemDiskIopsConfiguration getDiskIopsConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `rootVolumeConfigurationInput`<sup>Optional</sup> <a name="rootVolumeConfigurationInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeConfigurationInput"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfiguration getRootVolumeConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageCapacityInput"></a>

```java
public java.lang.Number getStorageCapacityInput();
```

- *Type:* java.lang.Number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputCapacityInput`<sup>Optional</sup> <a name="throughputCapacityInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.throughputCapacityInput"></a>

```java
public java.lang.Number getThroughputCapacityInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `weeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="weeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```java
public java.lang.String getWeeklyMaintenanceStartTimeInput();
```

- *Type:* java.lang.String

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.automaticBackupRetentionDays"></a>

```java
public java.lang.Number getAutomaticBackupRetentionDays();
```

- *Type:* java.lang.Number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToBackups"></a>

```java
public java.lang.Object getCopyTagsToBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `copyTagsToVolumes`<sup>Required</sup> <a name="copyTagsToVolumes" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToVolumes"></a>

```java
public java.lang.Object getCopyTagsToVolumes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```java
public java.lang.String getDailyAutomaticBackupStartTime();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageCapacity"></a>

```java
public java.lang.Number getStorageCapacity();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.weeklyMaintenanceStartTime"></a>

```java
public java.lang.String getWeeklyMaintenanceStartTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsFileSystemConfig <a name="FsxOpenzfsFileSystemConfig" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemConfig;

FsxOpenzfsFileSystemConfig.builder()
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
    .deploymentType(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
    .throughputCapacity(java.lang.Number)
//  .automaticBackupRetentionDays(java.lang.Number)
//  .backupId(java.lang.String)
//  .copyTagsToBackups(java.lang.Boolean)
//  .copyTagsToBackups(IResolvable)
//  .copyTagsToVolumes(java.lang.Boolean)
//  .copyTagsToVolumes(IResolvable)
//  .dailyAutomaticBackupStartTime(java.lang.String)
//  .diskIopsConfiguration(FsxOpenzfsFileSystemDiskIopsConfiguration)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .rootVolumeConfiguration(FsxOpenzfsFileSystemRootVolumeConfiguration)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .storageCapacity(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FsxOpenzfsFileSystemTimeouts)
//  .weeklyMaintenanceStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#deployment_type FsxOpenzfsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#subnet_ids FsxOpenzfsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#throughput_capacity FsxOpenzfsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#automatic_backup_retention_days FsxOpenzfsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#backup_id FsxOpenzfsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_backups FsxOpenzfsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.copyTagsToVolumes">copyTagsToVolumes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_volumes FsxOpenzfsFileSystem#copy_tags_to_volumes}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#daily_automatic_backup_start_time FsxOpenzfsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a></code> | disk_iops_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#kms_key_id FsxOpenzfsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.rootVolumeConfiguration">rootVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a></code> | root_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#security_group_ids FsxOpenzfsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity FsxOpenzfsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_type FsxOpenzfsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags FsxOpenzfsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags_all FsxOpenzfsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#weekly_maintenance_start_time FsxOpenzfsFileSystem#weekly_maintenance_start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#deployment_type FsxOpenzfsFileSystem#deployment_type}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#subnet_ids FsxOpenzfsFileSystem#subnet_ids}.

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#throughput_capacity FsxOpenzfsFileSystem#throughput_capacity}.

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.automaticBackupRetentionDays"></a>

```java
public java.lang.Number getAutomaticBackupRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#automatic_backup_retention_days FsxOpenzfsFileSystem#automatic_backup_retention_days}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#backup_id FsxOpenzfsFileSystem#backup_id}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.copyTagsToBackups"></a>

```java
public java.lang.Object getCopyTagsToBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_backups FsxOpenzfsFileSystem#copy_tags_to_backups}.

---

##### `copyTagsToVolumes`<sup>Optional</sup> <a name="copyTagsToVolumes" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.copyTagsToVolumes"></a>

```java
public java.lang.Object getCopyTagsToVolumes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_volumes FsxOpenzfsFileSystem#copy_tags_to_volumes}.

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```java
public java.lang.String getDailyAutomaticBackupStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#daily_automatic_backup_start_time FsxOpenzfsFileSystem#daily_automatic_backup_start_time}.

---

##### `diskIopsConfiguration`<sup>Optional</sup> <a name="diskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.diskIopsConfiguration"></a>

```java
public FsxOpenzfsFileSystemDiskIopsConfiguration getDiskIopsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

disk_iops_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#disk_iops_configuration FsxOpenzfsFileSystem#disk_iops_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#kms_key_id FsxOpenzfsFileSystem#kms_key_id}.

---

##### `rootVolumeConfiguration`<sup>Optional</sup> <a name="rootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.rootVolumeConfiguration"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfiguration getRootVolumeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

root_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#root_volume_configuration FsxOpenzfsFileSystem#root_volume_configuration}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#security_group_ids FsxOpenzfsFileSystem#security_group_ids}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.storageCapacity"></a>

```java
public java.lang.Number getStorageCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity FsxOpenzfsFileSystem#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_type FsxOpenzfsFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags FsxOpenzfsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags_all FsxOpenzfsFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.timeouts"></a>

```java
public FsxOpenzfsFileSystemTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#timeouts FsxOpenzfsFileSystem#timeouts}

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```java
public java.lang.String getWeeklyMaintenanceStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#weekly_maintenance_start_time FsxOpenzfsFileSystem#weekly_maintenance_start_time}.

---

### FsxOpenzfsFileSystemDiskIopsConfiguration <a name="FsxOpenzfsFileSystemDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemDiskIopsConfiguration;

FsxOpenzfsFileSystemDiskIopsConfiguration.builder()
//  .iops(java.lang.Number)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#iops FsxOpenzfsFileSystem#iops}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#mode FsxOpenzfsFileSystem#mode}. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#iops FsxOpenzfsFileSystem#iops}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#mode FsxOpenzfsFileSystem#mode}.

---

### FsxOpenzfsFileSystemRootVolumeConfiguration <a name="FsxOpenzfsFileSystemRootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfiguration;

FsxOpenzfsFileSystemRootVolumeConfiguration.builder()
//  .copyTagsToSnapshots(java.lang.Boolean)
//  .copyTagsToSnapshots(IResolvable)
//  .dataCompressionType(java.lang.String)
//  .nfsExports(FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .recordSizeKib(java.lang.Number)
//  .userAndGroupQuotas(IResolvable)
//  .userAndGroupQuotas(java.util.List<FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_snapshots FsxOpenzfsFileSystem#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.dataCompressionType">dataCompressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#data_compression_type FsxOpenzfsFileSystem#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#read_only FsxOpenzfsFileSystem#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.recordSizeKib">recordSizeKib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#record_size_kib FsxOpenzfsFileSystem#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>></code> | user_and_group_quotas block. |

---

##### `copyTagsToSnapshots`<sup>Optional</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.copyTagsToSnapshots"></a>

```java
public java.lang.Object getCopyTagsToSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_snapshots FsxOpenzfsFileSystem#copy_tags_to_snapshots}.

---

##### `dataCompressionType`<sup>Optional</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.dataCompressionType"></a>

```java
public java.lang.String getDataCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#data_compression_type FsxOpenzfsFileSystem#data_compression_type}.

---

##### `nfsExports`<sup>Optional</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.nfsExports"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports getNfsExports();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#nfs_exports FsxOpenzfsFileSystem#nfs_exports}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#read_only FsxOpenzfsFileSystem#read_only}.

---

##### `recordSizeKib`<sup>Optional</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.recordSizeKib"></a>

```java
public java.lang.Number getRecordSizeKib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#record_size_kib FsxOpenzfsFileSystem#record_size_kib}.

---

##### `userAndGroupQuotas`<sup>Optional</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.userAndGroupQuotas"></a>

```java
public java.lang.Object getUserAndGroupQuotas();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>>

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#user_and_group_quotas FsxOpenzfsFileSystem#user_and_group_quotas}

---

### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports;

FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports.builder()
    .clientConfigurations(IResolvable)
    .clientConfigurations(java.util.List<FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports.property.clientConfigurations">clientConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>></code> | client_configurations block. |

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports.property.clientConfigurations"></a>

```java
public java.lang.Object getClientConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>>

client_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#client_configurations FsxOpenzfsFileSystem#client_configurations}

---

### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations;

FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.builder()
    .clients(java.lang.String)
    .options(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.property.clients">clients</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#clients FsxOpenzfsFileSystem#clients}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#options FsxOpenzfsFileSystem#options}. |

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.property.clients"></a>

```java
public java.lang.String getClients();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#clients FsxOpenzfsFileSystem#clients}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#options FsxOpenzfsFileSystem#options}.

---

### FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas <a name="FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas;

FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.builder()
    .id(java.lang.Number)
    .storageCapacityQuotaGib(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.id">id</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity_quota_gib FsxOpenzfsFileSystem#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#type FsxOpenzfsFileSystem#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGib"></a>

```java
public java.lang.Number getStorageCapacityQuotaGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity_quota_gib FsxOpenzfsFileSystem#storage_capacity_quota_gib}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#type FsxOpenzfsFileSystem#type}.

---

### FsxOpenzfsFileSystemTimeouts <a name="FsxOpenzfsFileSystemTimeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemTimeouts;

FsxOpenzfsFileSystemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#create FsxOpenzfsFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#delete FsxOpenzfsFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#update FsxOpenzfsFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#create FsxOpenzfsFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#delete FsxOpenzfsFileSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#update FsxOpenzfsFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference <a name="FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference;

new FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```java
public FsxOpenzfsFileSystemDiskIopsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

---


### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList;

new FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.get"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>>

---


### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference;

new FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput">clientsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientsInput`<sup>Optional</sup> <a name="clientsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```java
public java.lang.String getClientsInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```java
public java.util.List<java.lang.String> getOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```java
public java.lang.String getClients();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a> OR com.hashicorp.cdktf.IResolvable

---


### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference;

new FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.putClientConfigurations">putClientConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfigurations` <a name="putClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.putClientConfigurations"></a>

```java
public void putClientConfigurations(IResolvable OR java.util.List<FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.clientConfigurations">clientConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.clientConfigurationsInput">clientConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList getClientConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList</a>

---

##### `clientConfigurationsInput`<sup>Optional</sup> <a name="clientConfigurationsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```java
public java.lang.Object getClientConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.internalValue"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a>

---


### FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference <a name="FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference;

new FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putNfsExports">putNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putUserAndGroupQuotas">putUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetCopyTagsToSnapshots">resetCopyTagsToSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetDataCompressionType">resetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetNfsExports">resetNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetRecordSizeKib">resetRecordSizeKib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetUserAndGroupQuotas">resetUserAndGroupQuotas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfsExports` <a name="putNfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putNfsExports"></a>

```java
public void putNfsExports(FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putNfsExports.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a>

---

##### `putUserAndGroupQuotas` <a name="putUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putUserAndGroupQuotas"></a>

```java
public void putUserAndGroupQuotas(IResolvable OR java.util.List<FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>>

---

##### `resetCopyTagsToSnapshots` <a name="resetCopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetCopyTagsToSnapshots"></a>

```java
public void resetCopyTagsToSnapshots()
```

##### `resetDataCompressionType` <a name="resetDataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetDataCompressionType"></a>

```java
public void resetDataCompressionType()
```

##### `resetNfsExports` <a name="resetNfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetNfsExports"></a>

```java
public void resetNfsExports()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetRecordSizeKib` <a name="resetRecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetRecordSizeKib"></a>

```java
public void resetRecordSizeKib()
```

##### `resetUserAndGroupQuotas` <a name="resetUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetUserAndGroupQuotas"></a>

```java
public void resetUserAndGroupQuotas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.copyTagsToSnapshotsInput">copyTagsToSnapshotsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.dataCompressionTypeInput">dataCompressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.nfsExportsInput">nfsExportsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.recordSizeKibInput">recordSizeKibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.userAndGroupQuotasInput">userAndGroupQuotasInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.dataCompressionType">dataCompressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.recordSizeKib">recordSizeKib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nfsExports`<sup>Required</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.nfsExports"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference getNfsExports();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference</a>

---

##### `userAndGroupQuotas`<sup>Required</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.userAndGroupQuotas"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList getUserAndGroupQuotas();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList</a>

---

##### `copyTagsToSnapshotsInput`<sup>Optional</sup> <a name="copyTagsToSnapshotsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.copyTagsToSnapshotsInput"></a>

```java
public java.lang.Object getCopyTagsToSnapshotsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataCompressionTypeInput`<sup>Optional</sup> <a name="dataCompressionTypeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.dataCompressionTypeInput"></a>

```java
public java.lang.String getDataCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `nfsExportsInput`<sup>Optional</sup> <a name="nfsExportsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.nfsExportsInput"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports getNfsExportsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordSizeKibInput`<sup>Optional</sup> <a name="recordSizeKibInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.recordSizeKibInput"></a>

```java
public java.lang.Number getRecordSizeKibInput();
```

- *Type:* java.lang.Number

---

##### `userAndGroupQuotasInput`<sup>Optional</sup> <a name="userAndGroupQuotasInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.userAndGroupQuotasInput"></a>

```java
public java.lang.Object getUserAndGroupQuotasInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>>

---

##### `copyTagsToSnapshots`<sup>Required</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```java
public java.lang.Object getCopyTagsToSnapshots();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataCompressionType`<sup>Required</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.dataCompressionType"></a>

```java
public java.lang.String getDataCompressionType();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `recordSizeKib`<sup>Required</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.recordSizeKib"></a>

```java
public java.lang.Number getRecordSizeKib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.internalValue"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

---


### FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList <a name="FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList;

new FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.get"></a>

```java
public FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>>

---


### FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference <a name="FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference;

new FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.idInput">idInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput">storageCapacityQuotaGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.idInput"></a>

```java
public java.lang.Number getIdInput();
```

- *Type:* java.lang.Number

---

##### `storageCapacityQuotaGibInput`<sup>Optional</sup> <a name="storageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput"></a>

```java
public java.lang.Number getStorageCapacityQuotaGibInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib"></a>

```java
public java.lang.Number getStorageCapacityQuotaGib();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a> OR com.hashicorp.cdktf.IResolvable

---


### FsxOpenzfsFileSystemTimeoutsOutputReference <a name="FsxOpenzfsFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_openzfs_file_system.FsxOpenzfsFileSystemTimeoutsOutputReference;

new FsxOpenzfsFileSystemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



