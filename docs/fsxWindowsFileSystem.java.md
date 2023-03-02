# `fsxWindowsFileSystem` Submodule <a name="`fsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.fsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxWindowsFileSystem <a name="FsxWindowsFileSystem" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystem;

FsxWindowsFileSystem.Builder.create(Construct scope, java.lang.String id)
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
    .subnetIds(java.util.List<java.lang.String>)
    .throughputCapacity(java.lang.Number)
//  .activeDirectoryId(java.lang.String)
//  .aliases(java.util.List<java.lang.String>)
//  .auditLogConfiguration(FsxWindowsFileSystemAuditLogConfiguration)
//  .automaticBackupRetentionDays(java.lang.Number)
//  .backupId(java.lang.String)
//  .copyTagsToBackups(java.lang.Boolean)
//  .copyTagsToBackups(IResolvable)
//  .dailyAutomaticBackupStartTime(java.lang.String)
//  .deploymentType(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .preferredSubnetId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .selfManagedActiveDirectory(FsxWindowsFileSystemSelfManagedActiveDirectory)
//  .skipFinalBackup(java.lang.Boolean)
//  .skipFinalBackup(IResolvable)
//  .storageCapacity(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FsxWindowsFileSystemTimeouts)
//  .weeklyMaintenanceStartTime(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.activeDirectoryId">activeDirectoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.auditLogConfiguration">auditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | audit_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.preferredSubnetId">preferredSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.selfManagedActiveDirectory">selfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | self_managed_active_directory block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.skipFinalBackup">skipFinalBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}.

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.throughputCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}.

---

##### `activeDirectoryId`<sup>Optional</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.activeDirectoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.aliases"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}.

---

##### `auditLogConfiguration`<sup>Optional</sup> <a name="auditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.auditLogConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

audit_log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.automaticBackupRetentionDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.backupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.copyTagsToBackups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}.

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.dailyAutomaticBackupStartTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}.

---

##### `preferredSubnetId`<sup>Optional</sup> <a name="preferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.preferredSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}.

---

##### `selfManagedActiveDirectory`<sup>Optional</sup> <a name="selfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.selfManagedActiveDirectory"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

self_managed_active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}

---

##### `skipFinalBackup`<sup>Optional</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.skipFinalBackup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.storageCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.weeklyMaintenanceStartTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration">putAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory">putSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId">resetActiveDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration">resetAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays">resetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups">resetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime">resetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId">resetPreferredSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory">resetSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup">resetSkipFinalBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime">resetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuditLogConfiguration` <a name="putAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration"></a>

```java
public void putAuditLogConfiguration(FsxWindowsFileSystemAuditLogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `putSelfManagedActiveDirectory` <a name="putSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory"></a>

```java
public void putSelfManagedActiveDirectory(FsxWindowsFileSystemSelfManagedActiveDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts"></a>

```java
public void putTimeouts(FsxWindowsFileSystemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

---

##### `resetActiveDirectoryId` <a name="resetActiveDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId"></a>

```java
public void resetActiveDirectoryId()
```

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases"></a>

```java
public void resetAliases()
```

##### `resetAuditLogConfiguration` <a name="resetAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration"></a>

```java
public void resetAuditLogConfiguration()
```

##### `resetAutomaticBackupRetentionDays` <a name="resetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays"></a>

```java
public void resetAutomaticBackupRetentionDays()
```

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetCopyTagsToBackups` <a name="resetCopyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups"></a>

```java
public void resetCopyTagsToBackups()
```

##### `resetDailyAutomaticBackupStartTime` <a name="resetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime"></a>

```java
public void resetDailyAutomaticBackupStartTime()
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPreferredSubnetId` <a name="resetPreferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId"></a>

```java
public void resetPreferredSubnetId()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSelfManagedActiveDirectory` <a name="resetSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory"></a>

```java
public void resetSelfManagedActiveDirectory()
```

##### `resetSkipFinalBackup` <a name="resetSkipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup"></a>

```java
public void resetSkipFinalBackup()
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity"></a>

```java
public void resetStorageCapacity()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeeklyMaintenanceStartTime` <a name="resetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime"></a>

```java
public void resetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystem;

FsxWindowsFileSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystem;

FsxWindowsFileSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystem;

FsxWindowsFileSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration">auditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp">preferredFileServerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint">remoteAdministrationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory">selfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput">activeDirectoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput">aliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput">auditLogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput">automaticBackupRetentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput">copyTagsToBackupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput">dailyAutomaticBackupStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput">preferredSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput">selfManagedActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput">skipFinalBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput">storageCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput">throughputCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput">weeklyMaintenanceStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId">activeDirectoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId">preferredSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup">skipFinalBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `auditLogConfiguration`<sup>Required</sup> <a name="auditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration"></a>

```java
public FsxWindowsFileSystemAuditLogConfigurationOutputReference getAuditLogConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `preferredFileServerIp`<sup>Required</sup> <a name="preferredFileServerIp" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp"></a>

```java
public java.lang.String getPreferredFileServerIp();
```

- *Type:* java.lang.String

---

##### `remoteAdministrationEndpoint`<sup>Required</sup> <a name="remoteAdministrationEndpoint" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint"></a>

```java
public java.lang.String getRemoteAdministrationEndpoint();
```

- *Type:* java.lang.String

---

##### `selfManagedActiveDirectory`<sup>Required</sup> <a name="selfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory"></a>

```java
public FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference getSelfManagedActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts"></a>

```java
public FsxWindowsFileSystemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `activeDirectoryIdInput`<sup>Optional</sup> <a name="activeDirectoryIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput"></a>

```java
public java.lang.String getActiveDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput"></a>

```java
public java.util.List<java.lang.String> getAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditLogConfigurationInput`<sup>Optional</sup> <a name="auditLogConfigurationInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput"></a>

```java
public FsxWindowsFileSystemAuditLogConfiguration getAuditLogConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `automaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="automaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput"></a>

```java
public java.lang.Number getAutomaticBackupRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `copyTagsToBackupsInput`<sup>Optional</sup> <a name="copyTagsToBackupsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput"></a>

```java
public java.lang.Object getCopyTagsToBackupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```java
public java.lang.String getDailyAutomaticBackupStartTimeInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `preferredSubnetIdInput`<sup>Optional</sup> <a name="preferredSubnetIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput"></a>

```java
public java.lang.String getPreferredSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfManagedActiveDirectoryInput`<sup>Optional</sup> <a name="selfManagedActiveDirectoryInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput"></a>

```java
public FsxWindowsFileSystemSelfManagedActiveDirectory getSelfManagedActiveDirectoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `skipFinalBackupInput`<sup>Optional</sup> <a name="skipFinalBackupInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput"></a>

```java
public java.lang.Object getSkipFinalBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput"></a>

```java
public java.lang.Number getStorageCapacityInput();
```

- *Type:* java.lang.Number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputCapacityInput`<sup>Optional</sup> <a name="throughputCapacityInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput"></a>

```java
public java.lang.Number getThroughputCapacityInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `weeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="weeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```java
public java.lang.String getWeeklyMaintenanceStartTimeInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryId`<sup>Required</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId"></a>

```java
public java.lang.String getActiveDirectoryId();
```

- *Type:* java.lang.String

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```java
public java.lang.Number getAutomaticBackupRetentionDays();
```

- *Type:* java.lang.Number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups"></a>

```java
public java.lang.Object getCopyTagsToBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```java
public java.lang.String getDailyAutomaticBackupStartTime();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `preferredSubnetId`<sup>Required</sup> <a name="preferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId"></a>

```java
public java.lang.String getPreferredSubnetId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipFinalBackup`<sup>Required</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup"></a>

```java
public java.lang.Object getSkipFinalBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity"></a>

```java
public java.lang.Number getStorageCapacity();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```java
public java.lang.String getWeeklyMaintenanceStartTime();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FsxWindowsFileSystemAuditLogConfiguration <a name="FsxWindowsFileSystemAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystemAuditLogConfiguration;

FsxWindowsFileSystemAuditLogConfiguration.builder()
//  .auditLogDestination(java.lang.String)
//  .fileAccessAuditLogLevel(java.lang.String)
//  .fileShareAccessAuditLogLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination">auditLogDestination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel">fileAccessAuditLogLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel">fileShareAccessAuditLogLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}. |

---

##### `auditLogDestination`<sup>Optional</sup> <a name="auditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination"></a>

```java
public java.lang.String getAuditLogDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}.

---

##### `fileAccessAuditLogLevel`<sup>Optional</sup> <a name="fileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel"></a>

```java
public java.lang.String getFileAccessAuditLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}.

---

##### `fileShareAccessAuditLogLevel`<sup>Optional</sup> <a name="fileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel"></a>

```java
public java.lang.String getFileShareAccessAuditLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}.

---

### FsxWindowsFileSystemConfig <a name="FsxWindowsFileSystemConfig" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystemConfig;

FsxWindowsFileSystemConfig.builder()
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
    .subnetIds(java.util.List<java.lang.String>)
    .throughputCapacity(java.lang.Number)
//  .activeDirectoryId(java.lang.String)
//  .aliases(java.util.List<java.lang.String>)
//  .auditLogConfiguration(FsxWindowsFileSystemAuditLogConfiguration)
//  .automaticBackupRetentionDays(java.lang.Number)
//  .backupId(java.lang.String)
//  .copyTagsToBackups(java.lang.Boolean)
//  .copyTagsToBackups(IResolvable)
//  .dailyAutomaticBackupStartTime(java.lang.String)
//  .deploymentType(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .preferredSubnetId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .selfManagedActiveDirectory(FsxWindowsFileSystemSelfManagedActiveDirectory)
//  .skipFinalBackup(java.lang.Boolean)
//  .skipFinalBackup(IResolvable)
//  .storageCapacity(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FsxWindowsFileSystemTimeouts)
//  .weeklyMaintenanceStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId">activeDirectoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration">auditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | audit_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId">preferredSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory">selfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | self_managed_active_directory block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup">skipFinalBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}.

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}.

---

##### `activeDirectoryId`<sup>Optional</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId"></a>

```java
public java.lang.String getActiveDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}.

---

##### `auditLogConfiguration`<sup>Optional</sup> <a name="auditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration"></a>

```java
public FsxWindowsFileSystemAuditLogConfiguration getAuditLogConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

audit_log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays"></a>

```java
public java.lang.Number getAutomaticBackupRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups"></a>

```java
public java.lang.Object getCopyTagsToBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}.

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```java
public java.lang.String getDailyAutomaticBackupStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}.

---

##### `preferredSubnetId`<sup>Optional</sup> <a name="preferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId"></a>

```java
public java.lang.String getPreferredSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}.

---

##### `selfManagedActiveDirectory`<sup>Optional</sup> <a name="selfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory"></a>

```java
public FsxWindowsFileSystemSelfManagedActiveDirectory getSelfManagedActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

self_managed_active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}

---

##### `skipFinalBackup`<sup>Optional</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup"></a>

```java
public java.lang.Object getSkipFinalBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity"></a>

```java
public java.lang.Number getStorageCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts"></a>

```java
public FsxWindowsFileSystemTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```java
public java.lang.String getWeeklyMaintenanceStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}.

---

### FsxWindowsFileSystemSelfManagedActiveDirectory <a name="FsxWindowsFileSystemSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystemSelfManagedActiveDirectory;

FsxWindowsFileSystemSelfManagedActiveDirectory.builder()
    .dnsIps(java.util.List<java.lang.String>)
    .domainName(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .fileSystemAdministratorsGroup(java.lang.String)
//  .organizationalUnitDistinguishedName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps">dnsIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup">fileSystemAdministratorsGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}. |

---

##### `dnsIps`<sup>Required</sup> <a name="dnsIps" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps"></a>

```java
public java.util.List<java.lang.String> getDnsIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}.

---

##### `fileSystemAdministratorsGroup`<sup>Optional</sup> <a name="fileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup"></a>

```java
public java.lang.String getFileSystemAdministratorsGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}.

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="organizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}.

---

### FsxWindowsFileSystemTimeouts <a name="FsxWindowsFileSystemTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystemTimeouts;

FsxWindowsFileSystemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="FsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystemAuditLogConfigurationOutputReference;

new FsxWindowsFileSystemAuditLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination">resetAuditLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel">resetFileAccessAuditLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel">resetFileShareAccessAuditLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogDestination` <a name="resetAuditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination"></a>

```java
public void resetAuditLogDestination()
```

##### `resetFileAccessAuditLogLevel` <a name="resetFileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel"></a>

```java
public void resetFileAccessAuditLogLevel()
```

##### `resetFileShareAccessAuditLogLevel` <a name="resetFileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel"></a>

```java
public void resetFileShareAccessAuditLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput">auditLogDestinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput">fileAccessAuditLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput">fileShareAccessAuditLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">auditLogDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">fileAccessAuditLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">fileShareAccessAuditLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLogDestinationInput`<sup>Optional</sup> <a name="auditLogDestinationInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput"></a>

```java
public java.lang.String getAuditLogDestinationInput();
```

- *Type:* java.lang.String

---

##### `fileAccessAuditLogLevelInput`<sup>Optional</sup> <a name="fileAccessAuditLogLevelInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput"></a>

```java
public java.lang.String getFileAccessAuditLogLevelInput();
```

- *Type:* java.lang.String

---

##### `fileShareAccessAuditLogLevelInput`<sup>Optional</sup> <a name="fileShareAccessAuditLogLevelInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput"></a>

```java
public java.lang.String getFileShareAccessAuditLogLevelInput();
```

- *Type:* java.lang.String

---

##### `auditLogDestination`<sup>Required</sup> <a name="auditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```java
public java.lang.String getAuditLogDestination();
```

- *Type:* java.lang.String

---

##### `fileAccessAuditLogLevel`<sup>Required</sup> <a name="fileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```java
public java.lang.String getFileAccessAuditLogLevel();
```

- *Type:* java.lang.String

---

##### `fileShareAccessAuditLogLevel`<sup>Required</sup> <a name="fileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```java
public java.lang.String getFileShareAccessAuditLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```java
public FsxWindowsFileSystemAuditLogConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---


### FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference <a name="FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference;

new FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup">resetFileSystemAdministratorsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName">resetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemAdministratorsGroup` <a name="resetFileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup"></a>

```java
public void resetFileSystemAdministratorsGroup()
```

##### `resetOrganizationalUnitDistinguishedName` <a name="resetOrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```java
public void resetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput">dnsIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput">fileSystemAdministratorsGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput">organizationalUnitDistinguishedNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps">dnsIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup">fileSystemAdministratorsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsIpsInput`<sup>Optional</sup> <a name="dnsIpsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput"></a>

```java
public java.util.List<java.lang.String> getDnsIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `fileSystemAdministratorsGroupInput`<sup>Optional</sup> <a name="fileSystemAdministratorsGroupInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```java
public java.lang.String getFileSystemAdministratorsGroupInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `dnsIps`<sup>Required</sup> <a name="dnsIps" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps"></a>

```java
public java.util.List<java.lang.String> getDnsIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `fileSystemAdministratorsGroup`<sup>Required</sup> <a name="fileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup"></a>

```java
public java.lang.String getFileSystemAdministratorsGroup();
```

- *Type:* java.lang.String

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName"></a>

```java
public java.lang.String getOrganizationalUnitDistinguishedName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue"></a>

```java
public FsxWindowsFileSystemSelfManagedActiveDirectory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---


### FsxWindowsFileSystemTimeoutsOutputReference <a name="FsxWindowsFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_windows_file_system.FsxWindowsFileSystemTimeoutsOutputReference;

new FsxWindowsFileSystemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



