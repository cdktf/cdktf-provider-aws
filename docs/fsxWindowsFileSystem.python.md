# `fsxWindowsFileSystem` Submodule <a name="`fsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.fsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxWindowsFileSystem <a name="FsxWindowsFileSystem" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystem(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_ids: typing.List[str],
  throughput_capacity: typing.Union[int, float],
  active_directory_id: str = None,
  aliases: typing.List[str] = None,
  audit_log_configuration: FsxWindowsFileSystemAuditLogConfiguration = None,
  automatic_backup_retention_days: typing.Union[int, float] = None,
  backup_id: str = None,
  copy_tags_to_backups: typing.Union[bool, IResolvable] = None,
  daily_automatic_backup_start_time: str = None,
  deployment_type: str = None,
  id: str = None,
  kms_key_id: str = None,
  preferred_subnet_id: str = None,
  security_group_ids: typing.List[str] = None,
  self_managed_active_directory: FsxWindowsFileSystemSelfManagedActiveDirectory = None,
  skip_final_backup: typing.Union[bool, IResolvable] = None,
  storage_capacity: typing.Union[int, float] = None,
  storage_type: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxWindowsFileSystemTimeouts = None,
  weekly_maintenance_start_time: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.throughputCapacity">throughput_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.activeDirectoryId">active_directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.aliases">aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.auditLogConfiguration">audit_log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | audit_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.automaticBackupRetentionDays">automatic_backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.copyTagsToBackups">copy_tags_to_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.dailyAutomaticBackupStartTime">daily_automatic_backup_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.preferredSubnetId">preferred_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.selfManagedActiveDirectory">self_managed_active_directory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | self_managed_active_directory block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.skipFinalBackup">skip_final_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.weeklyMaintenanceStartTime">weekly_maintenance_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}.

---

##### `throughput_capacity`<sup>Required</sup> <a name="throughput_capacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.throughputCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}.

---

##### `active_directory_id`<sup>Optional</sup> <a name="active_directory_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.activeDirectoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.aliases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}.

---

##### `audit_log_configuration`<sup>Optional</sup> <a name="audit_log_configuration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.auditLogConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

audit_log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}

---

##### `automatic_backup_retention_days`<sup>Optional</sup> <a name="automatic_backup_retention_days" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.automaticBackupRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}.

---

##### `copy_tags_to_backups`<sup>Optional</sup> <a name="copy_tags_to_backups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.copyTagsToBackups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}.

---

##### `daily_automatic_backup_start_time`<sup>Optional</sup> <a name="daily_automatic_backup_start_time" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.dailyAutomaticBackupStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}.

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.deploymentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}.

---

##### `preferred_subnet_id`<sup>Optional</sup> <a name="preferred_subnet_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.preferredSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}.

---

##### `self_managed_active_directory`<sup>Optional</sup> <a name="self_managed_active_directory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.selfManagedActiveDirectory"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

self_managed_active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}

---

##### `skip_final_backup`<sup>Optional</sup> <a name="skip_final_backup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.skipFinalBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}.

---

##### `storage_capacity`<sup>Optional</sup> <a name="storage_capacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.storageCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}

---

##### `weekly_maintenance_start_time`<sup>Optional</sup> <a name="weekly_maintenance_start_time" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.weeklyMaintenanceStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration">put_audit_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory">put_self_managed_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId">reset_active_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration">reset_audit_log_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays">reset_automatic_backup_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups">reset_copy_tags_to_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime">reset_daily_automatic_backup_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId">reset_preferred_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory">reset_self_managed_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup">reset_skip_final_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity">reset_storage_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime">reset_weekly_maintenance_start_time</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_audit_log_configuration` <a name="put_audit_log_configuration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration"></a>

```python
def put_audit_log_configuration(
  audit_log_destination: str = None,
  file_access_audit_log_level: str = None,
  file_share_access_audit_log_level: str = None
) -> None
```

###### `audit_log_destination`<sup>Optional</sup> <a name="audit_log_destination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration.parameter.auditLogDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}.

---

###### `file_access_audit_log_level`<sup>Optional</sup> <a name="file_access_audit_log_level" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration.parameter.fileAccessAuditLogLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}.

---

###### `file_share_access_audit_log_level`<sup>Optional</sup> <a name="file_share_access_audit_log_level" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration.parameter.fileShareAccessAuditLogLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}.

---

##### `put_self_managed_active_directory` <a name="put_self_managed_active_directory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory"></a>

```python
def put_self_managed_active_directory(
  dns_ips: typing.List[str],
  domain_name: str,
  password: str,
  username: str,
  file_system_administrators_group: str = None,
  organizational_unit_distinguished_name: str = None
) -> None
```

###### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.dnsIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}.

---

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}.

---

###### `file_system_administrators_group`<sup>Optional</sup> <a name="file_system_administrators_group" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.fileSystemAdministratorsGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}.

---

###### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.organizationalUnitDistinguishedName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}.

---

##### `reset_active_directory_id` <a name="reset_active_directory_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId"></a>

```python
def reset_active_directory_id() -> None
```

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_audit_log_configuration` <a name="reset_audit_log_configuration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration"></a>

```python
def reset_audit_log_configuration() -> None
```

##### `reset_automatic_backup_retention_days` <a name="reset_automatic_backup_retention_days" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays"></a>

```python
def reset_automatic_backup_retention_days() -> None
```

##### `reset_backup_id` <a name="reset_backup_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_copy_tags_to_backups` <a name="reset_copy_tags_to_backups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups"></a>

```python
def reset_copy_tags_to_backups() -> None
```

##### `reset_daily_automatic_backup_start_time` <a name="reset_daily_automatic_backup_start_time" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime"></a>

```python
def reset_daily_automatic_backup_start_time() -> None
```

##### `reset_deployment_type` <a name="reset_deployment_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_preferred_subnet_id` <a name="reset_preferred_subnet_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId"></a>

```python
def reset_preferred_subnet_id() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_self_managed_active_directory` <a name="reset_self_managed_active_directory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory"></a>

```python
def reset_self_managed_active_directory() -> None
```

##### `reset_skip_final_backup` <a name="reset_skip_final_backup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup"></a>

```python
def reset_skip_final_backup() -> None
```

##### `reset_storage_capacity` <a name="reset_storage_capacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity"></a>

```python
def reset_storage_capacity() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_weekly_maintenance_start_time` <a name="reset_weekly_maintenance_start_time" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime"></a>

```python
def reset_weekly_maintenance_start_time() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration">audit_log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp">preferred_file_server_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint">remote_administration_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory">self_managed_active_directory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput">active_directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput">aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput">audit_log_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput">automatic_backup_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput">copy_tags_to_backups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput">daily_automatic_backup_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput">preferred_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput">self_managed_active_directory_input</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput">skip_final_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput">storage_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput">throughput_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput">weekly_maintenance_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId">active_directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays">automatic_backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups">copy_tags_to_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">daily_automatic_backup_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId">preferred_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup">skip_final_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity">throughput_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime">weekly_maintenance_start_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `audit_log_configuration`<sup>Required</sup> <a name="audit_log_configuration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration"></a>

```python
audit_log_configuration: FsxWindowsFileSystemAuditLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `preferred_file_server_ip`<sup>Required</sup> <a name="preferred_file_server_ip" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp"></a>

```python
preferred_file_server_ip: str
```

- *Type:* str

---

##### `remote_administration_endpoint`<sup>Required</sup> <a name="remote_administration_endpoint" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint"></a>

```python
remote_administration_endpoint: str
```

- *Type:* str

---

##### `self_managed_active_directory`<sup>Required</sup> <a name="self_managed_active_directory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory"></a>

```python
self_managed_active_directory: FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts"></a>

```python
timeouts: FsxWindowsFileSystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `active_directory_id_input`<sup>Optional</sup> <a name="active_directory_id_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput"></a>

```python
active_directory_id_input: str
```

- *Type:* str

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput"></a>

```python
aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_log_configuration_input`<sup>Optional</sup> <a name="audit_log_configuration_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput"></a>

```python
audit_log_configuration_input: FsxWindowsFileSystemAuditLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `automatic_backup_retention_days_input`<sup>Optional</sup> <a name="automatic_backup_retention_days_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput"></a>

```python
automatic_backup_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `copy_tags_to_backups_input`<sup>Optional</sup> <a name="copy_tags_to_backups_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput"></a>

```python
copy_tags_to_backups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `daily_automatic_backup_start_time_input`<sup>Optional</sup> <a name="daily_automatic_backup_start_time_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```python
daily_automatic_backup_start_time_input: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `preferred_subnet_id_input`<sup>Optional</sup> <a name="preferred_subnet_id_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput"></a>

```python
preferred_subnet_id_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_managed_active_directory_input`<sup>Optional</sup> <a name="self_managed_active_directory_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput"></a>

```python
self_managed_active_directory_input: FsxWindowsFileSystemSelfManagedActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `skip_final_backup_input`<sup>Optional</sup> <a name="skip_final_backup_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput"></a>

```python
skip_final_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_capacity_input`<sup>Optional</sup> <a name="storage_capacity_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput"></a>

```python
storage_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_capacity_input`<sup>Optional</sup> <a name="throughput_capacity_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput"></a>

```python
throughput_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FsxWindowsFileSystemTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>, cdktf.IResolvable]

---

##### `weekly_maintenance_start_time_input`<sup>Optional</sup> <a name="weekly_maintenance_start_time_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```python
weekly_maintenance_start_time_input: str
```

- *Type:* str

---

##### `active_directory_id`<sup>Required</sup> <a name="active_directory_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId"></a>

```python
active_directory_id: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `automatic_backup_retention_days`<sup>Required</sup> <a name="automatic_backup_retention_days" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```python
automatic_backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `copy_tags_to_backups`<sup>Required</sup> <a name="copy_tags_to_backups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups"></a>

```python
copy_tags_to_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `daily_automatic_backup_start_time`<sup>Required</sup> <a name="daily_automatic_backup_start_time" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```python
daily_automatic_backup_start_time: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `preferred_subnet_id`<sup>Required</sup> <a name="preferred_subnet_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId"></a>

```python
preferred_subnet_id: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_final_backup`<sup>Required</sup> <a name="skip_final_backup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup"></a>

```python
skip_final_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_capacity`<sup>Required</sup> <a name="storage_capacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `throughput_capacity`<sup>Required</sup> <a name="throughput_capacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity"></a>

```python
throughput_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekly_maintenance_start_time`<sup>Required</sup> <a name="weekly_maintenance_start_time" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```python
weekly_maintenance_start_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FsxWindowsFileSystemAuditLogConfiguration <a name="FsxWindowsFileSystemAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration(
  audit_log_destination: str = None,
  file_access_audit_log_level: str = None,
  file_share_access_audit_log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination">audit_log_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel">file_access_audit_log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel">file_share_access_audit_log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}. |

---

##### `audit_log_destination`<sup>Optional</sup> <a name="audit_log_destination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination"></a>

```python
audit_log_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}.

---

##### `file_access_audit_log_level`<sup>Optional</sup> <a name="file_access_audit_log_level" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel"></a>

```python
file_access_audit_log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}.

---

##### `file_share_access_audit_log_level`<sup>Optional</sup> <a name="file_share_access_audit_log_level" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel"></a>

```python
file_share_access_audit_log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}.

---

### FsxWindowsFileSystemConfig <a name="FsxWindowsFileSystemConfig" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subnet_ids: typing.List[str],
  throughput_capacity: typing.Union[int, float],
  active_directory_id: str = None,
  aliases: typing.List[str] = None,
  audit_log_configuration: FsxWindowsFileSystemAuditLogConfiguration = None,
  automatic_backup_retention_days: typing.Union[int, float] = None,
  backup_id: str = None,
  copy_tags_to_backups: typing.Union[bool, IResolvable] = None,
  daily_automatic_backup_start_time: str = None,
  deployment_type: str = None,
  id: str = None,
  kms_key_id: str = None,
  preferred_subnet_id: str = None,
  security_group_ids: typing.List[str] = None,
  self_managed_active_directory: FsxWindowsFileSystemSelfManagedActiveDirectory = None,
  skip_final_backup: typing.Union[bool, IResolvable] = None,
  storage_capacity: typing.Union[int, float] = None,
  storage_type: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FsxWindowsFileSystemTimeouts = None,
  weekly_maintenance_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity">throughput_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId">active_directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration">audit_log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | audit_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays">automatic_backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups">copy_tags_to_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime">daily_automatic_backup_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId">preferred_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory">self_managed_active_directory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | self_managed_active_directory block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup">skip_final_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime">weekly_maintenance_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}.

---

##### `throughput_capacity`<sup>Required</sup> <a name="throughput_capacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity"></a>

```python
throughput_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}.

---

##### `active_directory_id`<sup>Optional</sup> <a name="active_directory_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId"></a>

```python
active_directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}.

---

##### `audit_log_configuration`<sup>Optional</sup> <a name="audit_log_configuration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration"></a>

```python
audit_log_configuration: FsxWindowsFileSystemAuditLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

audit_log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}

---

##### `automatic_backup_retention_days`<sup>Optional</sup> <a name="automatic_backup_retention_days" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays"></a>

```python
automatic_backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}.

---

##### `copy_tags_to_backups`<sup>Optional</sup> <a name="copy_tags_to_backups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups"></a>

```python
copy_tags_to_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}.

---

##### `daily_automatic_backup_start_time`<sup>Optional</sup> <a name="daily_automatic_backup_start_time" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```python
daily_automatic_backup_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}.

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}.

---

##### `preferred_subnet_id`<sup>Optional</sup> <a name="preferred_subnet_id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId"></a>

```python
preferred_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}.

---

##### `self_managed_active_directory`<sup>Optional</sup> <a name="self_managed_active_directory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory"></a>

```python
self_managed_active_directory: FsxWindowsFileSystemSelfManagedActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

self_managed_active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}

---

##### `skip_final_backup`<sup>Optional</sup> <a name="skip_final_backup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup"></a>

```python
skip_final_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}.

---

##### `storage_capacity`<sup>Optional</sup> <a name="storage_capacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts"></a>

```python
timeouts: FsxWindowsFileSystemTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}

---

##### `weekly_maintenance_start_time`<sup>Optional</sup> <a name="weekly_maintenance_start_time" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```python
weekly_maintenance_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}.

---

### FsxWindowsFileSystemSelfManagedActiveDirectory <a name="FsxWindowsFileSystemSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory(
  dns_ips: typing.List[str],
  domain_name: str,
  password: str,
  username: str,
  file_system_administrators_group: str = None,
  organizational_unit_distinguished_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup">file_system_administrators_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}. |

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}.

---

##### `file_system_administrators_group`<sup>Optional</sup> <a name="file_system_administrators_group" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup"></a>

```python
file_system_administrators_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}.

---

##### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}.

---

### FsxWindowsFileSystemTimeouts <a name="FsxWindowsFileSystemTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="FsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination">reset_audit_log_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel">reset_file_access_audit_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel">reset_file_share_access_audit_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audit_log_destination` <a name="reset_audit_log_destination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination"></a>

```python
def reset_audit_log_destination() -> None
```

##### `reset_file_access_audit_log_level` <a name="reset_file_access_audit_log_level" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel"></a>

```python
def reset_file_access_audit_log_level() -> None
```

##### `reset_file_share_access_audit_log_level` <a name="reset_file_share_access_audit_log_level" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel"></a>

```python
def reset_file_share_access_audit_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput">audit_log_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput">file_access_audit_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput">file_share_access_audit_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">audit_log_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">file_access_audit_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">file_share_access_audit_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_log_destination_input`<sup>Optional</sup> <a name="audit_log_destination_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput"></a>

```python
audit_log_destination_input: str
```

- *Type:* str

---

##### `file_access_audit_log_level_input`<sup>Optional</sup> <a name="file_access_audit_log_level_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput"></a>

```python
file_access_audit_log_level_input: str
```

- *Type:* str

---

##### `file_share_access_audit_log_level_input`<sup>Optional</sup> <a name="file_share_access_audit_log_level_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput"></a>

```python
file_share_access_audit_log_level_input: str
```

- *Type:* str

---

##### `audit_log_destination`<sup>Required</sup> <a name="audit_log_destination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```python
audit_log_destination: str
```

- *Type:* str

---

##### `file_access_audit_log_level`<sup>Required</sup> <a name="file_access_audit_log_level" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```python
file_access_audit_log_level: str
```

- *Type:* str

---

##### `file_share_access_audit_log_level`<sup>Required</sup> <a name="file_share_access_audit_log_level" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```python
file_share_access_audit_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FsxWindowsFileSystemAuditLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---


### FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference <a name="FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup">reset_file_system_administrators_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName">reset_organizational_unit_distinguished_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_administrators_group` <a name="reset_file_system_administrators_group" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup"></a>

```python
def reset_file_system_administrators_group() -> None
```

##### `reset_organizational_unit_distinguished_name` <a name="reset_organizational_unit_distinguished_name" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```python
def reset_organizational_unit_distinguished_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput">dns_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput">file_system_administrators_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput">organizational_unit_distinguished_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup">file_system_administrators_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_ips_input`<sup>Optional</sup> <a name="dns_ips_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput"></a>

```python
dns_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `file_system_administrators_group_input`<sup>Optional</sup> <a name="file_system_administrators_group_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```python
file_system_administrators_group_input: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name_input`<sup>Optional</sup> <a name="organizational_unit_distinguished_name_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```python
organizational_unit_distinguished_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `file_system_administrators_group`<sup>Required</sup> <a name="file_system_administrators_group" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup"></a>

```python
file_system_administrators_group: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name`<sup>Required</sup> <a name="organizational_unit_distinguished_name" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: FsxWindowsFileSystemSelfManagedActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---


### FsxWindowsFileSystemTimeoutsOutputReference <a name="FsxWindowsFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import fsx_windows_file_system

fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FsxWindowsFileSystemTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>, cdktf.IResolvable]

---



