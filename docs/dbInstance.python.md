# `dbInstance` Submodule <a name="`dbInstance` Submodule" id="@cdktf/provider-aws.dbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstance <a name="DbInstance" id="@cdktf/provider-aws.dbInstance.DbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance aws_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_class: str,
  allocated_storage: typing.Union[int, float] = None,
  allow_major_version_upgrade: typing.Union[bool, IResolvable] = None,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  auto_minor_version_upgrade: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  backup_retention_period: typing.Union[int, float] = None,
  backup_window: str = None,
  blue_green_update: DbInstanceBlueGreenUpdate = None,
  ca_cert_identifier: str = None,
  character_set_name: str = None,
  copy_tags_to_snapshot: typing.Union[bool, IResolvable] = None,
  customer_owned_ip_enabled: typing.Union[bool, IResolvable] = None,
  custom_iam_instance_profile: str = None,
  db_name: str = None,
  db_subnet_group_name: str = None,
  delete_automated_backups: typing.Union[bool, IResolvable] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  domain: str = None,
  domain_iam_role_name: str = None,
  enabled_cloudwatch_logs_exports: typing.List[str] = None,
  engine: str = None,
  engine_version: str = None,
  final_snapshot_identifier: str = None,
  iam_database_authentication_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identifier: str = None,
  identifier_prefix: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  license_model: str = None,
  maintenance_window: str = None,
  max_allocated_storage: typing.Union[int, float] = None,
  monitoring_interval: typing.Union[int, float] = None,
  monitoring_role_arn: str = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  name: str = None,
  nchar_character_set_name: str = None,
  network_type: str = None,
  option_group_name: str = None,
  parameter_group_name: str = None,
  password: str = None,
  performance_insights_enabled: typing.Union[bool, IResolvable] = None,
  performance_insights_kms_key_id: str = None,
  performance_insights_retention_period: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  replica_mode: str = None,
  replicate_source_db: str = None,
  restore_to_point_in_time: DbInstanceRestoreToPointInTime = None,
  s3_import: DbInstanceS3Import = None,
  security_group_names: typing.List[str] = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  snapshot_identifier: str = None,
  storage_encrypted: typing.Union[bool, IResolvable] = None,
  storage_throughput: typing.Union[int, float] = None,
  storage_type: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DbInstanceTimeouts = None,
  timezone: str = None,
  username: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.instanceClass">instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.backupWindow">backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.blueGreenUpdate">blue_green_update</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | blue_green_update block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.caCertIdentifier">ca_cert_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.characterSetName">character_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.customerOwnedIpEnabled">customer_owned_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.customIamInstanceProfile">custom_iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.enabledCloudwatchLogsExports">enabled_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.iamDatabaseAuthenticationEnabled">iam_database_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.identifierPrefix">identifier_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.maxAllocatedStorage">max_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.optionGroupName">option_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.replicaMode">replica_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.replicateSourceDb">replicate_source_db</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.restoreToPointInTime">restore_to_point_in_time</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.s3Import">s3_import</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.securityGroupNames">security_group_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.instanceClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}.

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}.

---

##### `allow_major_version_upgrade`<sup>Optional</sup> <a name="allow_major_version_upgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.applyImmediately"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}.

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}.

---

##### `backup_window`<sup>Optional</sup> <a name="backup_window" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.backupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}.

---

##### `blue_green_update`<sup>Optional</sup> <a name="blue_green_update" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.blueGreenUpdate"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

blue_green_update block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#blue_green_update DbInstance#blue_green_update}

---

##### `ca_cert_identifier`<sup>Optional</sup> <a name="ca_cert_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.caCertIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}.

---

##### `character_set_name`<sup>Optional</sup> <a name="character_set_name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.characterSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}.

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}.

---

##### `customer_owned_ip_enabled`<sup>Optional</sup> <a name="customer_owned_ip_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.customerOwnedIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}.

---

##### `custom_iam_instance_profile`<sup>Optional</sup> <a name="custom_iam_instance_profile" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.customIamInstanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}.

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}.

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}.

---

##### `delete_automated_backups`<sup>Optional</sup> <a name="delete_automated_backups" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.deleteAutomatedBackups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}.

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}.

---

##### `domain_iam_role_name`<sup>Optional</sup> <a name="domain_iam_role_name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.domainIamRoleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}.

---

##### `enabled_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enabled_cloudwatch_logs_exports" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.enabledCloudwatchLogsExports"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}.

---

##### `iam_database_authentication_enabled`<sup>Optional</sup> <a name="iam_database_authentication_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.iamDatabaseAuthenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}.

---

##### `identifier_prefix`<sup>Optional</sup> <a name="identifier_prefix" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.identifierPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.maintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}.

---

##### `max_allocated_storage`<sup>Optional</sup> <a name="max_allocated_storage" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.maxAllocatedStorage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}.

---

##### `monitoring_interval`<sup>Optional</sup> <a name="monitoring_interval" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.monitoringInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}.

---

##### `monitoring_role_arn`<sup>Optional</sup> <a name="monitoring_role_arn" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.monitoringRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}.

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.multiAz"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}.

---

##### `nchar_character_set_name`<sup>Optional</sup> <a name="nchar_character_set_name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.ncharCharacterSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.networkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}.

---

##### `option_group_name`<sup>Optional</sup> <a name="option_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.optionGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}.

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.parameterGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}.

---

##### `performance_insights_enabled`<sup>Optional</sup> <a name="performance_insights_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}.

---

##### `performance_insights_kms_key_id`<sup>Optional</sup> <a name="performance_insights_kms_key_id" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}.

---

##### `performance_insights_retention_period`<sup>Optional</sup> <a name="performance_insights_retention_period" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}.

---

##### `replica_mode`<sup>Optional</sup> <a name="replica_mode" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.replicaMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}.

---

##### `replicate_source_db`<sup>Optional</sup> <a name="replicate_source_db" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.replicateSourceDb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}.

---

##### `restore_to_point_in_time`<sup>Optional</sup> <a name="restore_to_point_in_time" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.restoreToPointInTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_to_point_in_time DbInstance#restore_to_point_in_time}

---

##### `s3_import`<sup>Optional</sup> <a name="s3_import" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.s3Import"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#s3_import DbInstance#s3_import}

---

##### `security_group_names`<sup>Optional</sup> <a name="security_group_names" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.securityGroupNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}.

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}.

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}.

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageEncrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}.

---

##### `storage_throughput`<sup>Optional</sup> <a name="storage_throughput" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageThroughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timeouts DbInstance#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate">put_blue_green_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime">put_restore_to_point_in_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putS3Import">put_s3_import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAllocatedStorage">reset_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAllowMajorVersionUpgrade">reset_allow_major_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetApplyImmediately">reset_apply_immediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBackupRetentionPeriod">reset_backup_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBackupWindow">reset_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBlueGreenUpdate">reset_blue_green_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCaCertIdentifier">reset_ca_cert_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCharacterSetName">reset_character_set_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCopyTagsToSnapshot">reset_copy_tags_to_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCustomerOwnedIpEnabled">reset_customer_owned_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCustomIamInstanceProfile">reset_custom_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDbSubnetGroupName">reset_db_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDeleteAutomatedBackups">reset_delete_automated_backups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDomainIamRoleName">reset_domain_iam_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEnabledCloudwatchLogsExports">reset_enabled_cloudwatch_logs_exports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetFinalSnapshotIdentifier">reset_final_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIamDatabaseAuthenticationEnabled">reset_iam_database_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifierPrefix">reset_identifier_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMaxAllocatedStorage">reset_max_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringInterval">reset_monitoring_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringRoleArn">reset_monitoring_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetNcharCharacterSetName">reset_nchar_character_set_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetOptionGroupName">reset_option_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetParameterGroupName">reset_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsEnabled">reset_performance_insights_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsKmsKeyId">reset_performance_insights_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsRetentionPeriod">reset_performance_insights_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetReplicaMode">reset_replica_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetReplicateSourceDb">reset_replicate_source_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetRestoreToPointInTime">reset_restore_to_point_in_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetS3Import">reset_s3_import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSecurityGroupNames">reset_security_group_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSkipFinalSnapshot">reset_skip_final_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSnapshotIdentifier">reset_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageEncrypted">reset_storage_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageThroughput">reset_storage_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbInstance.DbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dbInstance.DbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dbInstance.DbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dbInstance.DbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_blue_green_update` <a name="put_blue_green_update" id="@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate"></a>

```python
def put_blue_green_update(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled DbInstance#enabled}.

---

##### `put_restore_to_point_in_time` <a name="put_restore_to_point_in_time" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime"></a>

```python
def put_restore_to_point_in_time(
  restore_time: str = None,
  source_db_instance_automated_backups_arn: str = None,
  source_db_instance_identifier: str = None,
  source_dbi_resource_id: str = None,
  use_latest_restorable_time: typing.Union[bool, IResolvable] = None
) -> None
```

###### `restore_time`<sup>Optional</sup> <a name="restore_time" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime.parameter.restoreTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_time DbInstance#restore_time}.

---

###### `source_db_instance_automated_backups_arn`<sup>Optional</sup> <a name="source_db_instance_automated_backups_arn" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime.parameter.sourceDbInstanceAutomatedBackupsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}.

---

###### `source_db_instance_identifier`<sup>Optional</sup> <a name="source_db_instance_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime.parameter.sourceDbInstanceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}.

---

###### `source_dbi_resource_id`<sup>Optional</sup> <a name="source_dbi_resource_id" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime.parameter.sourceDbiResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}.

---

###### `use_latest_restorable_time`<sup>Optional</sup> <a name="use_latest_restorable_time" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime.parameter.useLatestRestorableTime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}.

---

##### `put_s3_import` <a name="put_s3_import" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import"></a>

```python
def put_s3_import(
  bucket_name: str,
  ingestion_role: str,
  source_engine: str,
  source_engine_version: str,
  bucket_prefix: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_name DbInstance#bucket_name}.

---

###### `ingestion_role`<sup>Required</sup> <a name="ingestion_role" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import.parameter.ingestionRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ingestion_role DbInstance#ingestion_role}.

---

###### `source_engine`<sup>Required</sup> <a name="source_engine" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import.parameter.sourceEngine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine DbInstance#source_engine}.

---

###### `source_engine_version`<sup>Required</sup> <a name="source_engine_version" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import.parameter.sourceEngineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine_version DbInstance#source_engine_version}.

---

###### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import.parameter.bucketPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_prefix DbInstance#bucket_prefix}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#create DbInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete DbInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#update DbInstance#update}.

---

##### `reset_allocated_storage` <a name="reset_allocated_storage" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAllocatedStorage"></a>

```python
def reset_allocated_storage() -> None
```

##### `reset_allow_major_version_upgrade` <a name="reset_allow_major_version_upgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAllowMajorVersionUpgrade"></a>

```python
def reset_allow_major_version_upgrade() -> None
```

##### `reset_apply_immediately` <a name="reset_apply_immediately" id="@cdktf/provider-aws.dbInstance.DbInstance.resetApplyImmediately"></a>

```python
def reset_apply_immediately() -> None
```

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_backup_retention_period` <a name="reset_backup_retention_period" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBackupRetentionPeriod"></a>

```python
def reset_backup_retention_period() -> None
```

##### `reset_backup_window` <a name="reset_backup_window" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBackupWindow"></a>

```python
def reset_backup_window() -> None
```

##### `reset_blue_green_update` <a name="reset_blue_green_update" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBlueGreenUpdate"></a>

```python
def reset_blue_green_update() -> None
```

##### `reset_ca_cert_identifier` <a name="reset_ca_cert_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCaCertIdentifier"></a>

```python
def reset_ca_cert_identifier() -> None
```

##### `reset_character_set_name` <a name="reset_character_set_name" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCharacterSetName"></a>

```python
def reset_character_set_name() -> None
```

##### `reset_copy_tags_to_snapshot` <a name="reset_copy_tags_to_snapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCopyTagsToSnapshot"></a>

```python
def reset_copy_tags_to_snapshot() -> None
```

##### `reset_customer_owned_ip_enabled` <a name="reset_customer_owned_ip_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCustomerOwnedIpEnabled"></a>

```python
def reset_customer_owned_ip_enabled() -> None
```

##### `reset_custom_iam_instance_profile` <a name="reset_custom_iam_instance_profile" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCustomIamInstanceProfile"></a>

```python
def reset_custom_iam_instance_profile() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_db_subnet_group_name` <a name="reset_db_subnet_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDbSubnetGroupName"></a>

```python
def reset_db_subnet_group_name() -> None
```

##### `reset_delete_automated_backups` <a name="reset_delete_automated_backups" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDeleteAutomatedBackups"></a>

```python
def reset_delete_automated_backups() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_domain_iam_role_name` <a name="reset_domain_iam_role_name" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDomainIamRoleName"></a>

```python
def reset_domain_iam_role_name() -> None
```

##### `reset_enabled_cloudwatch_logs_exports` <a name="reset_enabled_cloudwatch_logs_exports" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEnabledCloudwatchLogsExports"></a>

```python
def reset_enabled_cloudwatch_logs_exports() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_final_snapshot_identifier` <a name="reset_final_snapshot_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetFinalSnapshotIdentifier"></a>

```python
def reset_final_snapshot_identifier() -> None
```

##### `reset_iam_database_authentication_enabled` <a name="reset_iam_database_authentication_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIamDatabaseAuthenticationEnabled"></a>

```python
def reset_iam_database_authentication_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dbInstance.DbInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_identifier_prefix` <a name="reset_identifier_prefix" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifierPrefix"></a>

```python
def reset_identifier_prefix() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.dbInstance.DbInstance.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktf/provider-aws.dbInstance.DbInstance.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_max_allocated_storage` <a name="reset_max_allocated_storage" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMaxAllocatedStorage"></a>

```python
def reset_max_allocated_storage() -> None
```

##### `reset_monitoring_interval` <a name="reset_monitoring_interval" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringInterval"></a>

```python
def reset_monitoring_interval() -> None
```

##### `reset_monitoring_role_arn` <a name="reset_monitoring_role_arn" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringRoleArn"></a>

```python
def reset_monitoring_role_arn() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dbInstance.DbInstance.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nchar_character_set_name` <a name="reset_nchar_character_set_name" id="@cdktf/provider-aws.dbInstance.DbInstance.resetNcharCharacterSetName"></a>

```python
def reset_nchar_character_set_name() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktf/provider-aws.dbInstance.DbInstance.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_option_group_name` <a name="reset_option_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.resetOptionGroupName"></a>

```python
def reset_option_group_name() -> None
```

##### `reset_parameter_group_name` <a name="reset_parameter_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.resetParameterGroupName"></a>

```python
def reset_parameter_group_name() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_performance_insights_enabled` <a name="reset_performance_insights_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsEnabled"></a>

```python
def reset_performance_insights_enabled() -> None
```

##### `reset_performance_insights_kms_key_id` <a name="reset_performance_insights_kms_key_id" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsKmsKeyId"></a>

```python
def reset_performance_insights_kms_key_id() -> None
```

##### `reset_performance_insights_retention_period` <a name="reset_performance_insights_retention_period" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsRetentionPeriod"></a>

```python
def reset_performance_insights_retention_period() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_replica_mode` <a name="reset_replica_mode" id="@cdktf/provider-aws.dbInstance.DbInstance.resetReplicaMode"></a>

```python
def reset_replica_mode() -> None
```

##### `reset_replicate_source_db` <a name="reset_replicate_source_db" id="@cdktf/provider-aws.dbInstance.DbInstance.resetReplicateSourceDb"></a>

```python
def reset_replicate_source_db() -> None
```

##### `reset_restore_to_point_in_time` <a name="reset_restore_to_point_in_time" id="@cdktf/provider-aws.dbInstance.DbInstance.resetRestoreToPointInTime"></a>

```python
def reset_restore_to_point_in_time() -> None
```

##### `reset_s3_import` <a name="reset_s3_import" id="@cdktf/provider-aws.dbInstance.DbInstance.resetS3Import"></a>

```python
def reset_s3_import() -> None
```

##### `reset_security_group_names` <a name="reset_security_group_names" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSecurityGroupNames"></a>

```python
def reset_security_group_names() -> None
```

##### `reset_skip_final_snapshot` <a name="reset_skip_final_snapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSkipFinalSnapshot"></a>

```python
def reset_skip_final_snapshot() -> None
```

##### `reset_snapshot_identifier` <a name="reset_snapshot_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSnapshotIdentifier"></a>

```python
def reset_snapshot_identifier() -> None
```

##### `reset_storage_encrypted` <a name="reset_storage_encrypted" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageEncrypted"></a>

```python
def reset_storage_encrypted() -> None
```

##### `reset_storage_throughput` <a name="reset_storage_throughput" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageThroughput"></a>

```python
def reset_storage_throughput() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-aws.dbInstance.DbInstance.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.dbInstance.DbInstance.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dbInstance.DbInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstance.DbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdate">blue_green_update</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference">DbInstanceBlueGreenUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionActual">engine_version_actual</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.latestRestorableTime">latest_restorable_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicas">replicas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTime">restore_to_point_in_time</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference">DbInstanceRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.s3Import">s3_import</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference">DbInstanceS3ImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference">DbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorageInput">allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgradeInput">allow_major_version_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediatelyInput">apply_immediately_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriodInput">backup_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindowInput">backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdateInput">blue_green_update_input</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifierInput">ca_cert_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetNameInput">character_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshotInput">copy_tags_to_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabledInput">customer_owned_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfileInput">custom_iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupNameInput">db_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackupsInput">delete_automated_backups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleNameInput">domain_iam_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExportsInput">enabled_cloudwatch_logs_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifierInput">final_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabledInput">iam_database_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefixInput">identifier_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClassInput">instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorageInput">max_allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringIntervalInput">monitoring_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArnInput">monitoring_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.multiAzInput">multi_az_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetNameInput">nchar_character_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupNameInput">option_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupNameInput">parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabledInput">performance_insights_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyIdInput">performance_insights_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriodInput">performance_insights_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicaModeInput">replica_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDbInput">replicate_source_db_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTimeInput">restore_to_point_in_time_input</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.s3ImportInput">s3_import_input</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNamesInput">security_group_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshotInput">skip_final_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncryptedInput">storage_encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughputInput">storage_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindow">backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifier">ca_cert_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetName">character_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabled">customer_owned_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfile">custom_iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExports">enabled_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabled">iam_database_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefix">identifier_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClass">instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorage">max_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupName">option_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicaMode">replica_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDb">replicate_source_db</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNames">security_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbInstance.DbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dbInstance.DbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dbInstance.DbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstance.DbInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstance.DbInstance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbInstance.DbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstance.DbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstance.DbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstance.DbInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.dbInstance.DbInstance.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `blue_green_update`<sup>Required</sup> <a name="blue_green_update" id="@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdate"></a>

```python
blue_green_update: DbInstanceBlueGreenUpdateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference">DbInstanceBlueGreenUpdateOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dbInstance.DbInstance.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `engine_version_actual`<sup>Required</sup> <a name="engine_version_actual" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionActual"></a>

```python
engine_version_actual: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.dbInstance.DbInstance.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `latest_restorable_time`<sup>Required</sup> <a name="latest_restorable_time" id="@cdktf/provider-aws.dbInstance.DbInstance.property.latestRestorableTime"></a>

```python
latest_restorable_time: str
```

- *Type:* str

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicas"></a>

```python
replicas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.dbInstance.DbInstance.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `restore_to_point_in_time`<sup>Required</sup> <a name="restore_to_point_in_time" id="@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTime"></a>

```python
restore_to_point_in_time: DbInstanceRestoreToPointInTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference">DbInstanceRestoreToPointInTimeOutputReference</a>

---

##### `s3_import`<sup>Required</sup> <a name="s3_import" id="@cdktf/provider-aws.dbInstance.DbInstance.property.s3Import"></a>

```python
s3_import: DbInstanceS3ImportOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference">DbInstanceS3ImportOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dbInstance.DbInstance.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timeouts"></a>

```python
timeouts: DbInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference">DbInstanceTimeoutsOutputReference</a>

---

##### `allocated_storage_input`<sup>Optional</sup> <a name="allocated_storage_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorageInput"></a>

```python
allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_major_version_upgrade_input`<sup>Optional</sup> <a name="allow_major_version_upgrade_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgradeInput"></a>

```python
allow_major_version_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `apply_immediately_input`<sup>Optional</sup> <a name="apply_immediately_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediatelyInput"></a>

```python
apply_immediately_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_retention_period_input`<sup>Optional</sup> <a name="backup_retention_period_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriodInput"></a>

```python
backup_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_window_input`<sup>Optional</sup> <a name="backup_window_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindowInput"></a>

```python
backup_window_input: str
```

- *Type:* str

---

##### `blue_green_update_input`<sup>Optional</sup> <a name="blue_green_update_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdateInput"></a>

```python
blue_green_update_input: DbInstanceBlueGreenUpdate
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

---

##### `ca_cert_identifier_input`<sup>Optional</sup> <a name="ca_cert_identifier_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifierInput"></a>

```python
ca_cert_identifier_input: str
```

- *Type:* str

---

##### `character_set_name_input`<sup>Optional</sup> <a name="character_set_name_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetNameInput"></a>

```python
character_set_name_input: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot_input`<sup>Optional</sup> <a name="copy_tags_to_snapshot_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshotInput"></a>

```python
copy_tags_to_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `customer_owned_ip_enabled_input`<sup>Optional</sup> <a name="customer_owned_ip_enabled_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabledInput"></a>

```python
customer_owned_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_iam_instance_profile_input`<sup>Optional</sup> <a name="custom_iam_instance_profile_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfileInput"></a>

```python
custom_iam_instance_profile_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_subnet_group_name_input`<sup>Optional</sup> <a name="db_subnet_group_name_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupNameInput"></a>

```python
db_subnet_group_name_input: str
```

- *Type:* str

---

##### `delete_automated_backups_input`<sup>Optional</sup> <a name="delete_automated_backups_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackupsInput"></a>

```python
delete_automated_backups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain_iam_role_name_input`<sup>Optional</sup> <a name="domain_iam_role_name_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleNameInput"></a>

```python
domain_iam_role_name_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `enabled_cloudwatch_logs_exports_input`<sup>Optional</sup> <a name="enabled_cloudwatch_logs_exports_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExportsInput"></a>

```python
enabled_cloudwatch_logs_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `final_snapshot_identifier_input`<sup>Optional</sup> <a name="final_snapshot_identifier_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifierInput"></a>

```python
final_snapshot_identifier_input: str
```

- *Type:* str

---

##### `iam_database_authentication_enabled_input`<sup>Optional</sup> <a name="iam_database_authentication_enabled_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabledInput"></a>

```python
iam_database_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `identifier_prefix_input`<sup>Optional</sup> <a name="identifier_prefix_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefixInput"></a>

```python
identifier_prefix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_class_input`<sup>Optional</sup> <a name="instance_class_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClassInput"></a>

```python
instance_class_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: str
```

- *Type:* str

---

##### `max_allocated_storage_input`<sup>Optional</sup> <a name="max_allocated_storage_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorageInput"></a>

```python
max_allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_interval_input`<sup>Optional</sup> <a name="monitoring_interval_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringIntervalInput"></a>

```python
monitoring_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_role_arn_input`<sup>Optional</sup> <a name="monitoring_role_arn_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArnInput"></a>

```python
monitoring_role_arn_input: str
```

- *Type:* str

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.multiAzInput"></a>

```python
multi_az_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nchar_character_set_name_input`<sup>Optional</sup> <a name="nchar_character_set_name_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetNameInput"></a>

```python
nchar_character_set_name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `option_group_name_input`<sup>Optional</sup> <a name="option_group_name_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupNameInput"></a>

```python
option_group_name_input: str
```

- *Type:* str

---

##### `parameter_group_name_input`<sup>Optional</sup> <a name="parameter_group_name_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupNameInput"></a>

```python
parameter_group_name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `performance_insights_enabled_input`<sup>Optional</sup> <a name="performance_insights_enabled_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabledInput"></a>

```python
performance_insights_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_insights_kms_key_id_input`<sup>Optional</sup> <a name="performance_insights_kms_key_id_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyIdInput"></a>

```python
performance_insights_kms_key_id_input: str
```

- *Type:* str

---

##### `performance_insights_retention_period_input`<sup>Optional</sup> <a name="performance_insights_retention_period_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriodInput"></a>

```python
performance_insights_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replica_mode_input`<sup>Optional</sup> <a name="replica_mode_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicaModeInput"></a>

```python
replica_mode_input: str
```

- *Type:* str

---

##### `replicate_source_db_input`<sup>Optional</sup> <a name="replicate_source_db_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDbInput"></a>

```python
replicate_source_db_input: str
```

- *Type:* str

---

##### `restore_to_point_in_time_input`<sup>Optional</sup> <a name="restore_to_point_in_time_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTimeInput"></a>

```python
restore_to_point_in_time_input: DbInstanceRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

---

##### `s3_import_input`<sup>Optional</sup> <a name="s3_import_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.s3ImportInput"></a>

```python
s3_import_input: DbInstanceS3Import
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

---

##### `security_group_names_input`<sup>Optional</sup> <a name="security_group_names_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNamesInput"></a>

```python
security_group_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_final_snapshot_input`<sup>Optional</sup> <a name="skip_final_snapshot_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshotInput"></a>

```python
skip_final_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_identifier_input`<sup>Optional</sup> <a name="snapshot_identifier_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifierInput"></a>

```python
snapshot_identifier_input: str
```

- *Type:* str

---

##### `storage_encrypted_input`<sup>Optional</sup> <a name="storage_encrypted_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncryptedInput"></a>

```python
storage_encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_throughput_input`<sup>Optional</sup> <a name="storage_throughput_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughputInput"></a>

```python
storage_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DbInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>, cdktf.IResolvable]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_major_version_upgrade`<sup>Required</sup> <a name="allow_major_version_upgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgrade"></a>

```python
allow_major_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `apply_immediately`<sup>Required</sup> <a name="apply_immediately" id="@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_retention_period`<sup>Required</sup> <a name="backup_retention_period" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_window`<sup>Required</sup> <a name="backup_window" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindow"></a>

```python
backup_window: str
```

- *Type:* str

---

##### `ca_cert_identifier`<sup>Required</sup> <a name="ca_cert_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifier"></a>

```python
ca_cert_identifier: str
```

- *Type:* str

---

##### `character_set_name`<sup>Required</sup> <a name="character_set_name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetName"></a>

```python
character_set_name: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot`<sup>Required</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `customer_owned_ip_enabled`<sup>Required</sup> <a name="customer_owned_ip_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabled"></a>

```python
customer_owned_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_iam_instance_profile`<sup>Required</sup> <a name="custom_iam_instance_profile" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfile"></a>

```python
custom_iam_instance_profile: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_subnet_group_name`<sup>Required</sup> <a name="db_subnet_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

---

##### `delete_automated_backups`<sup>Required</sup> <a name="delete_automated_backups" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackups"></a>

```python
delete_automated_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domain_iam_role_name`<sup>Required</sup> <a name="domain_iam_role_name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleName"></a>

```python
domain_iam_role_name: str
```

- *Type:* str

---

##### `enabled_cloudwatch_logs_exports`<sup>Required</sup> <a name="enabled_cloudwatch_logs_exports" id="@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExports"></a>

```python
enabled_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `final_snapshot_identifier`<sup>Required</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

---

##### `iam_database_authentication_enabled`<sup>Required</sup> <a name="iam_database_authentication_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabled"></a>

```python
iam_database_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstance.DbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `identifier_prefix`<sup>Required</sup> <a name="identifier_prefix" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefix"></a>

```python
identifier_prefix: str
```

- *Type:* str

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

---

##### `max_allocated_storage`<sup>Required</sup> <a name="max_allocated_storage" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorage"></a>

```python
max_allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_interval`<sup>Required</sup> <a name="monitoring_interval" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringInterval"></a>

```python
monitoring_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_role_arn`<sup>Required</sup> <a name="monitoring_role_arn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArn"></a>

```python
monitoring_role_arn: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.dbInstance.DbInstance.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nchar_character_set_name`<sup>Required</sup> <a name="nchar_character_set_name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetName"></a>

```python
nchar_character_set_name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-aws.dbInstance.DbInstance.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `option_group_name`<sup>Required</sup> <a name="option_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupName"></a>

```python
option_group_name: str
```

- *Type:* str

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.dbInstance.DbInstance.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `performance_insights_enabled`<sup>Required</sup> <a name="performance_insights_enabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabled"></a>

```python
performance_insights_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `performance_insights_kms_key_id`<sup>Required</sup> <a name="performance_insights_kms_key_id" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyId"></a>

```python
performance_insights_kms_key_id: str
```

- *Type:* str

---

##### `performance_insights_retention_period`<sup>Required</sup> <a name="performance_insights_retention_period" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriod"></a>

```python
performance_insights_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dbInstance.DbInstance.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replica_mode`<sup>Required</sup> <a name="replica_mode" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicaMode"></a>

```python
replica_mode: str
```

- *Type:* str

---

##### `replicate_source_db`<sup>Required</sup> <a name="replicate_source_db" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDb"></a>

```python
replicate_source_db: str
```

- *Type:* str

---

##### `security_group_names`<sup>Required</sup> <a name="security_group_names" id="@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNames"></a>

```python
security_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_final_snapshot`<sup>Required</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

---

##### `storage_encrypted`<sup>Required</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncrypted"></a>

```python
storage_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_throughput`<sup>Required</sup> <a name="storage_throughput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughput"></a>

```python
storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.dbInstance.DbInstance.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceBlueGreenUpdate <a name="DbInstanceBlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceBlueGreenUpdate(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled DbInstance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled DbInstance#enabled}.

---

### DbInstanceConfig <a name="DbInstanceConfig" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_class: str,
  allocated_storage: typing.Union[int, float] = None,
  allow_major_version_upgrade: typing.Union[bool, IResolvable] = None,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  auto_minor_version_upgrade: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  backup_retention_period: typing.Union[int, float] = None,
  backup_window: str = None,
  blue_green_update: DbInstanceBlueGreenUpdate = None,
  ca_cert_identifier: str = None,
  character_set_name: str = None,
  copy_tags_to_snapshot: typing.Union[bool, IResolvable] = None,
  customer_owned_ip_enabled: typing.Union[bool, IResolvable] = None,
  custom_iam_instance_profile: str = None,
  db_name: str = None,
  db_subnet_group_name: str = None,
  delete_automated_backups: typing.Union[bool, IResolvable] = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  domain: str = None,
  domain_iam_role_name: str = None,
  enabled_cloudwatch_logs_exports: typing.List[str] = None,
  engine: str = None,
  engine_version: str = None,
  final_snapshot_identifier: str = None,
  iam_database_authentication_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identifier: str = None,
  identifier_prefix: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  license_model: str = None,
  maintenance_window: str = None,
  max_allocated_storage: typing.Union[int, float] = None,
  monitoring_interval: typing.Union[int, float] = None,
  monitoring_role_arn: str = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  name: str = None,
  nchar_character_set_name: str = None,
  network_type: str = None,
  option_group_name: str = None,
  parameter_group_name: str = None,
  password: str = None,
  performance_insights_enabled: typing.Union[bool, IResolvable] = None,
  performance_insights_kms_key_id: str = None,
  performance_insights_retention_period: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  replica_mode: str = None,
  replicate_source_db: str = None,
  restore_to_point_in_time: DbInstanceRestoreToPointInTime = None,
  s3_import: DbInstanceS3Import = None,
  security_group_names: typing.List[str] = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  snapshot_identifier: str = None,
  storage_encrypted: typing.Union[bool, IResolvable] = None,
  storage_throughput: typing.Union[int, float] = None,
  storage_type: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DbInstanceTimeouts = None,
  timezone: str = None,
  username: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.instanceClass">instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupWindow">backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.blueGreenUpdate">blue_green_update</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | blue_green_update block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.caCertIdentifier">ca_cert_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.characterSetName">character_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customerOwnedIpEnabled">customer_owned_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customIamInstanceProfile">custom_iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.enabledCloudwatchLogsExports">enabled_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.finalSnapshotIdentifier">final_snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iamDatabaseAuthenticationEnabled">iam_database_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifierPrefix">identifier_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maxAllocatedStorage">max_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.optionGroupName">option_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicaMode">replica_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicateSourceDb">replicate_source_db</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.restoreToPointInTime">restore_to_point_in_time</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.s3Import">s3_import</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.securityGroupNames">security_group_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageEncrypted">storage_encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}.

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}.

---

##### `allow_major_version_upgrade`<sup>Optional</sup> <a name="allow_major_version_upgrade" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allowMajorVersionUpgrade"></a>

```python
allow_major_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}.

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}.

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}.

---

##### `backup_window`<sup>Optional</sup> <a name="backup_window" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupWindow"></a>

```python
backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}.

---

##### `blue_green_update`<sup>Optional</sup> <a name="blue_green_update" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.blueGreenUpdate"></a>

```python
blue_green_update: DbInstanceBlueGreenUpdate
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

blue_green_update block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#blue_green_update DbInstance#blue_green_update}

---

##### `ca_cert_identifier`<sup>Optional</sup> <a name="ca_cert_identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.caCertIdentifier"></a>

```python
ca_cert_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}.

---

##### `character_set_name`<sup>Optional</sup> <a name="character_set_name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.characterSetName"></a>

```python
character_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}.

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}.

---

##### `customer_owned_ip_enabled`<sup>Optional</sup> <a name="customer_owned_ip_enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customerOwnedIpEnabled"></a>

```python
customer_owned_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}.

---

##### `custom_iam_instance_profile`<sup>Optional</sup> <a name="custom_iam_instance_profile" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customIamInstanceProfile"></a>

```python
custom_iam_instance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}.

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}.

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}.

---

##### `delete_automated_backups`<sup>Optional</sup> <a name="delete_automated_backups" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deleteAutomatedBackups"></a>

```python
delete_automated_backups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}.

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}.

---

##### `domain_iam_role_name`<sup>Optional</sup> <a name="domain_iam_role_name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domainIamRoleName"></a>

```python
domain_iam_role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}.

---

##### `enabled_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enabled_cloudwatch_logs_exports" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.enabledCloudwatchLogsExports"></a>

```python
enabled_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}.

---

##### `final_snapshot_identifier`<sup>Optional</sup> <a name="final_snapshot_identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.finalSnapshotIdentifier"></a>

```python
final_snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}.

---

##### `iam_database_authentication_enabled`<sup>Optional</sup> <a name="iam_database_authentication_enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iamDatabaseAuthenticationEnabled"></a>

```python
iam_database_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}.

---

##### `identifier_prefix`<sup>Optional</sup> <a name="identifier_prefix" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifierPrefix"></a>

```python
identifier_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}.

---

##### `max_allocated_storage`<sup>Optional</sup> <a name="max_allocated_storage" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maxAllocatedStorage"></a>

```python
max_allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}.

---

##### `monitoring_interval`<sup>Optional</sup> <a name="monitoring_interval" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringInterval"></a>

```python
monitoring_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}.

---

##### `monitoring_role_arn`<sup>Optional</sup> <a name="monitoring_role_arn" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringRoleArn"></a>

```python
monitoring_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}.

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}.

---

##### `nchar_character_set_name`<sup>Optional</sup> <a name="nchar_character_set_name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.ncharCharacterSetName"></a>

```python
nchar_character_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}.

---

##### `option_group_name`<sup>Optional</sup> <a name="option_group_name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.optionGroupName"></a>

```python
option_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}.

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}.

---

##### `performance_insights_enabled`<sup>Optional</sup> <a name="performance_insights_enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsEnabled"></a>

```python
performance_insights_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}.

---

##### `performance_insights_kms_key_id`<sup>Optional</sup> <a name="performance_insights_kms_key_id" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```python
performance_insights_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}.

---

##### `performance_insights_retention_period`<sup>Optional</sup> <a name="performance_insights_retention_period" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```python
performance_insights_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}.

---

##### `replica_mode`<sup>Optional</sup> <a name="replica_mode" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicaMode"></a>

```python
replica_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}.

---

##### `replicate_source_db`<sup>Optional</sup> <a name="replicate_source_db" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicateSourceDb"></a>

```python
replicate_source_db: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}.

---

##### `restore_to_point_in_time`<sup>Optional</sup> <a name="restore_to_point_in_time" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.restoreToPointInTime"></a>

```python
restore_to_point_in_time: DbInstanceRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_to_point_in_time DbInstance#restore_to_point_in_time}

---

##### `s3_import`<sup>Optional</sup> <a name="s3_import" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.s3Import"></a>

```python
s3_import: DbInstanceS3Import
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#s3_import DbInstance#s3_import}

---

##### `security_group_names`<sup>Optional</sup> <a name="security_group_names" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.securityGroupNames"></a>

```python
security_group_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}.

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}.

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}.

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageEncrypted"></a>

```python
storage_encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}.

---

##### `storage_throughput`<sup>Optional</sup> <a name="storage_throughput" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageThroughput"></a>

```python
storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timeouts"></a>

```python
timeouts: DbInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timeouts DbInstance#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}.

---

### DbInstanceRestoreToPointInTime <a name="DbInstanceRestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceRestoreToPointInTime(
  restore_time: str = None,
  source_db_instance_automated_backups_arn: str = None,
  source_db_instance_identifier: str = None,
  source_dbi_resource_id: str = None,
  use_latest_restorable_time: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.restoreTime">restore_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_time DbInstance#restore_time}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceAutomatedBackupsArn">source_db_instance_automated_backups_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceIdentifier">source_db_instance_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbiResourceId">source_dbi_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}. |

---

##### `restore_time`<sup>Optional</sup> <a name="restore_time" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.restoreTime"></a>

```python
restore_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_time DbInstance#restore_time}.

---

##### `source_db_instance_automated_backups_arn`<sup>Optional</sup> <a name="source_db_instance_automated_backups_arn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceAutomatedBackupsArn"></a>

```python
source_db_instance_automated_backups_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}.

---

##### `source_db_instance_identifier`<sup>Optional</sup> <a name="source_db_instance_identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceIdentifier"></a>

```python
source_db_instance_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}.

---

##### `source_dbi_resource_id`<sup>Optional</sup> <a name="source_dbi_resource_id" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbiResourceId"></a>

```python
source_dbi_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}.

---

##### `use_latest_restorable_time`<sup>Optional</sup> <a name="use_latest_restorable_time" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.useLatestRestorableTime"></a>

```python
use_latest_restorable_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}.

---

### DbInstanceS3Import <a name="DbInstanceS3Import" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceS3Import(
  bucket_name: str,
  ingestion_role: str,
  source_engine: str,
  source_engine_version: str,
  bucket_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_name DbInstance#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.ingestionRole">ingestion_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ingestion_role DbInstance#ingestion_role}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngine">source_engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine DbInstance#source_engine}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngineVersion">source_engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine_version DbInstance#source_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_prefix DbInstance#bucket_prefix}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_name DbInstance#bucket_name}.

---

##### `ingestion_role`<sup>Required</sup> <a name="ingestion_role" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.ingestionRole"></a>

```python
ingestion_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ingestion_role DbInstance#ingestion_role}.

---

##### `source_engine`<sup>Required</sup> <a name="source_engine" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngine"></a>

```python
source_engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine DbInstance#source_engine}.

---

##### `source_engine_version`<sup>Required</sup> <a name="source_engine_version" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngineVersion"></a>

```python
source_engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine_version DbInstance#source_engine_version}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_prefix DbInstance#bucket_prefix}.

---

### DbInstanceTimeouts <a name="DbInstanceTimeouts" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#create DbInstance#create}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete DbInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#update DbInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#create DbInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete DbInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#update DbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceBlueGreenUpdateOutputReference <a name="DbInstanceBlueGreenUpdateOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceBlueGreenUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.internalValue"></a>

```python
internal_value: DbInstanceBlueGreenUpdate
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

---


### DbInstanceRestoreToPointInTimeOutputReference <a name="DbInstanceRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceRestoreToPointInTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetRestoreTime">reset_restore_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceAutomatedBackupsArn">reset_source_db_instance_automated_backups_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceIdentifier">reset_source_db_instance_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbiResourceId">reset_source_dbi_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime">reset_use_latest_restorable_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_restore_time` <a name="reset_restore_time" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetRestoreTime"></a>

```python
def reset_restore_time() -> None
```

##### `reset_source_db_instance_automated_backups_arn` <a name="reset_source_db_instance_automated_backups_arn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceAutomatedBackupsArn"></a>

```python
def reset_source_db_instance_automated_backups_arn() -> None
```

##### `reset_source_db_instance_identifier` <a name="reset_source_db_instance_identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceIdentifier"></a>

```python
def reset_source_db_instance_identifier() -> None
```

##### `reset_source_dbi_resource_id` <a name="reset_source_dbi_resource_id" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbiResourceId"></a>

```python
def reset_source_dbi_resource_id() -> None
```

##### `reset_use_latest_restorable_time` <a name="reset_use_latest_restorable_time" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```python
def reset_use_latest_restorable_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTimeInput">restore_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArnInput">source_db_instance_automated_backups_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifierInput">source_db_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceIdInput">source_dbi_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">use_latest_restorable_time_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTime">restore_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArn">source_db_instance_automated_backups_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifier">source_db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceId">source_dbi_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restore_time_input`<sup>Optional</sup> <a name="restore_time_input" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTimeInput"></a>

```python
restore_time_input: str
```

- *Type:* str

---

##### `source_db_instance_automated_backups_arn_input`<sup>Optional</sup> <a name="source_db_instance_automated_backups_arn_input" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArnInput"></a>

```python
source_db_instance_automated_backups_arn_input: str
```

- *Type:* str

---

##### `source_db_instance_identifier_input`<sup>Optional</sup> <a name="source_db_instance_identifier_input" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifierInput"></a>

```python
source_db_instance_identifier_input: str
```

- *Type:* str

---

##### `source_dbi_resource_id_input`<sup>Optional</sup> <a name="source_dbi_resource_id_input" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceIdInput"></a>

```python
source_dbi_resource_id_input: str
```

- *Type:* str

---

##### `use_latest_restorable_time_input`<sup>Optional</sup> <a name="use_latest_restorable_time_input" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```python
use_latest_restorable_time_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restore_time`<sup>Required</sup> <a name="restore_time" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTime"></a>

```python
restore_time: str
```

- *Type:* str

---

##### `source_db_instance_automated_backups_arn`<sup>Required</sup> <a name="source_db_instance_automated_backups_arn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArn"></a>

```python
source_db_instance_automated_backups_arn: str
```

- *Type:* str

---

##### `source_db_instance_identifier`<sup>Required</sup> <a name="source_db_instance_identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifier"></a>

```python
source_db_instance_identifier: str
```

- *Type:* str

---

##### `source_dbi_resource_id`<sup>Required</sup> <a name="source_dbi_resource_id" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceId"></a>

```python
source_dbi_resource_id: str
```

- *Type:* str

---

##### `use_latest_restorable_time`<sup>Required</sup> <a name="use_latest_restorable_time" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```python
use_latest_restorable_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.internalValue"></a>

```python
internal_value: DbInstanceRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

---


### DbInstanceS3ImportOutputReference <a name="DbInstanceS3ImportOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceS3ImportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRoleInput">ingestion_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineInput">source_engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersionInput">source_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRole">ingestion_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngine">source_engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersion">source_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `ingestion_role_input`<sup>Optional</sup> <a name="ingestion_role_input" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRoleInput"></a>

```python
ingestion_role_input: str
```

- *Type:* str

---

##### `source_engine_input`<sup>Optional</sup> <a name="source_engine_input" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineInput"></a>

```python
source_engine_input: str
```

- *Type:* str

---

##### `source_engine_version_input`<sup>Optional</sup> <a name="source_engine_version_input" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersionInput"></a>

```python
source_engine_version_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `ingestion_role`<sup>Required</sup> <a name="ingestion_role" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRole"></a>

```python
ingestion_role: str
```

- *Type:* str

---

##### `source_engine`<sup>Required</sup> <a name="source_engine" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngine"></a>

```python
source_engine: str
```

- *Type:* str

---

##### `source_engine_version`<sup>Required</sup> <a name="source_engine_version" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersion"></a>

```python
source_engine_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.internalValue"></a>

```python
internal_value: DbInstanceS3Import
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

---


### DbInstanceTimeoutsOutputReference <a name="DbInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import db_instance

dbInstance.DbInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DbInstanceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>, cdktf.IResolvable]

---



