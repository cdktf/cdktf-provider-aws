# `dbInstance` Submodule <a name="`dbInstance` Submodule" id="@cdktf/provider-aws.dbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstance <a name="DbInstance" id="@cdktf/provider-aws.dbInstance.DbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance aws_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstance;

DbInstance.Builder.create(Construct scope, java.lang.String id)
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
    .instanceClass(java.lang.String)
//  .allocatedStorage(java.lang.Number)
//  .allowMajorVersionUpgrade(java.lang.Boolean)
//  .allowMajorVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .autoMinorVersionUpgrade(java.lang.Boolean)
//  .autoMinorVersionUpgrade(IResolvable)
//  .availabilityZone(java.lang.String)
//  .backupRetentionPeriod(java.lang.Number)
//  .backupWindow(java.lang.String)
//  .blueGreenUpdate(DbInstanceBlueGreenUpdate)
//  .caCertIdentifier(java.lang.String)
//  .characterSetName(java.lang.String)
//  .copyTagsToSnapshot(java.lang.Boolean)
//  .copyTagsToSnapshot(IResolvable)
//  .customerOwnedIpEnabled(java.lang.Boolean)
//  .customerOwnedIpEnabled(IResolvable)
//  .customIamInstanceProfile(java.lang.String)
//  .dbName(java.lang.String)
//  .dbSubnetGroupName(java.lang.String)
//  .deleteAutomatedBackups(java.lang.Boolean)
//  .deleteAutomatedBackups(IResolvable)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .domain(java.lang.String)
//  .domainIamRoleName(java.lang.String)
//  .enabledCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .iamDatabaseAuthenticationEnabled(java.lang.Boolean)
//  .iamDatabaseAuthenticationEnabled(IResolvable)
//  .id(java.lang.String)
//  .identifier(java.lang.String)
//  .identifierPrefix(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .maintenanceWindow(java.lang.String)
//  .maxAllocatedStorage(java.lang.Number)
//  .monitoringInterval(java.lang.Number)
//  .monitoringRoleArn(java.lang.String)
//  .multiAz(java.lang.Boolean)
//  .multiAz(IResolvable)
//  .name(java.lang.String)
//  .ncharCharacterSetName(java.lang.String)
//  .networkType(java.lang.String)
//  .optionGroupName(java.lang.String)
//  .parameterGroupName(java.lang.String)
//  .password(java.lang.String)
//  .performanceInsightsEnabled(java.lang.Boolean)
//  .performanceInsightsEnabled(IResolvable)
//  .performanceInsightsKmsKeyId(java.lang.String)
//  .performanceInsightsRetentionPeriod(java.lang.Number)
//  .port(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .replicaMode(java.lang.String)
//  .replicateSourceDb(java.lang.String)
//  .restoreToPointInTime(DbInstanceRestoreToPointInTime)
//  .s3Import(DbInstanceS3Import)
//  .securityGroupNames(java.util.List<java.lang.String>)
//  .skipFinalSnapshot(java.lang.Boolean)
//  .skipFinalSnapshot(IResolvable)
//  .snapshotIdentifier(java.lang.String)
//  .storageEncrypted(java.lang.Boolean)
//  .storageEncrypted(IResolvable)
//  .storageThroughput(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DbInstanceTimeouts)
//  .timezone(java.lang.String)
//  .username(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.backupWindow">backupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.blueGreenUpdate">blueGreenUpdate</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | blue_green_update block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.caCertIdentifier">caCertIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.characterSetName">characterSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.customerOwnedIpEnabled">customerOwnedIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.customIamInstanceProfile">customIamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.identifierPrefix">identifierPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsEnabled">performanceInsightsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.replicaMode">replicaMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.replicateSourceDb">replicateSourceDb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.restoreToPointInTime">restoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.s3Import">s3Import</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.instanceClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}.

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}.

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}.

---

##### `backupWindow`<sup>Optional</sup> <a name="backupWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.backupWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}.

---

##### `blueGreenUpdate`<sup>Optional</sup> <a name="blueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.blueGreenUpdate"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

blue_green_update block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#blue_green_update DbInstance#blue_green_update}

---

##### `caCertIdentifier`<sup>Optional</sup> <a name="caCertIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.caCertIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}.

---

##### `characterSetName`<sup>Optional</sup> <a name="characterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.characterSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}.

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}.

---

##### `customerOwnedIpEnabled`<sup>Optional</sup> <a name="customerOwnedIpEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.customerOwnedIpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}.

---

##### `customIamInstanceProfile`<sup>Optional</sup> <a name="customIamInstanceProfile" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.customIamInstanceProfile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}.

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}.

---

##### `deleteAutomatedBackups`<sup>Optional</sup> <a name="deleteAutomatedBackups" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.deleteAutomatedBackups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}.

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="domainIamRoleName" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.domainIamRoleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}.

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.enabledCloudwatchLogsExports"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}.

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.iamDatabaseAuthenticationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.identifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}.

---

##### `identifierPrefix`<sup>Optional</sup> <a name="identifierPrefix" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.identifierPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.iops"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.maintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}.

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="maxAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.maxAllocatedStorage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}.

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.monitoringInterval"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}.

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="monitoringRoleArn" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.monitoringRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.multiAz"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}.

---

##### `ncharCharacterSetName`<sup>Optional</sup> <a name="ncharCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.ncharCharacterSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}.

---

##### `optionGroupName`<sup>Optional</sup> <a name="optionGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.optionGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.parameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}.

---

##### `performanceInsightsEnabled`<sup>Optional</sup> <a name="performanceInsightsEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}.

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="performanceInsightsKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}.

---

##### `performanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.performanceInsightsRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}.

---

##### `replicaMode`<sup>Optional</sup> <a name="replicaMode" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.replicaMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}.

---

##### `replicateSourceDb`<sup>Optional</sup> <a name="replicateSourceDb" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.replicateSourceDb"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}.

---

##### `restoreToPointInTime`<sup>Optional</sup> <a name="restoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.restoreToPointInTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_to_point_in_time DbInstance#restore_to_point_in_time}

---

##### `s3Import`<sup>Optional</sup> <a name="s3Import" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.s3Import"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#s3_import DbInstance#s3_import}

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.securityGroupNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}.

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}.

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}.

---

##### `storageThroughput`<sup>Optional</sup> <a name="storageThroughput" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageThroughput"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timeouts DbInstance#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate">putBlueGreenUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime">putRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putS3Import">putS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAllowMajorVersionUpgrade">resetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBackupWindow">resetBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBlueGreenUpdate">resetBlueGreenUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCaCertIdentifier">resetCaCertIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCharacterSetName">resetCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCopyTagsToSnapshot">resetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCustomerOwnedIpEnabled">resetCustomerOwnedIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCustomIamInstanceProfile">resetCustomIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDbSubnetGroupName">resetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDeleteAutomatedBackups">resetDeleteAutomatedBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDomainIamRoleName">resetDomainIamRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEnabledCloudwatchLogsExports">resetEnabledCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIamDatabaseAuthenticationEnabled">resetIamDatabaseAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifierPrefix">resetIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMaxAllocatedStorage">resetMaxAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringInterval">resetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringRoleArn">resetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetNcharCharacterSetName">resetNcharCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetOptionGroupName">resetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsEnabled">resetPerformanceInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsKmsKeyId">resetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsRetentionPeriod">resetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetReplicaMode">resetReplicaMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetReplicateSourceDb">resetReplicateSourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetRestoreToPointInTime">resetRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetS3Import">resetS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSecurityGroupNames">resetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSkipFinalSnapshot">resetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageThroughput">resetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstance.DbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dbInstance.DbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dbInstance.DbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dbInstance.DbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBlueGreenUpdate` <a name="putBlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate"></a>

```java
public void putBlueGreenUpdate(DbInstanceBlueGreenUpdate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

---

##### `putRestoreToPointInTime` <a name="putRestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime"></a>

```java
public void putRestoreToPointInTime(DbInstanceRestoreToPointInTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

---

##### `putS3Import` <a name="putS3Import" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import"></a>

```java
public void putS3Import(DbInstanceS3Import value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts"></a>

```java
public void putTimeouts(DbInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>

---

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAllocatedStorage"></a>

```java
public void resetAllocatedStorage()
```

##### `resetAllowMajorVersionUpgrade` <a name="resetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAllowMajorVersionUpgrade"></a>

```java
public void resetAllowMajorVersionUpgrade()
```

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.dbInstance.DbInstance.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBackupRetentionPeriod"></a>

```java
public void resetBackupRetentionPeriod()
```

##### `resetBackupWindow` <a name="resetBackupWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBackupWindow"></a>

```java
public void resetBackupWindow()
```

##### `resetBlueGreenUpdate` <a name="resetBlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBlueGreenUpdate"></a>

```java
public void resetBlueGreenUpdate()
```

##### `resetCaCertIdentifier` <a name="resetCaCertIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCaCertIdentifier"></a>

```java
public void resetCaCertIdentifier()
```

##### `resetCharacterSetName` <a name="resetCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCharacterSetName"></a>

```java
public void resetCharacterSetName()
```

##### `resetCopyTagsToSnapshot` <a name="resetCopyTagsToSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCopyTagsToSnapshot"></a>

```java
public void resetCopyTagsToSnapshot()
```

##### `resetCustomerOwnedIpEnabled` <a name="resetCustomerOwnedIpEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCustomerOwnedIpEnabled"></a>

```java
public void resetCustomerOwnedIpEnabled()
```

##### `resetCustomIamInstanceProfile` <a name="resetCustomIamInstanceProfile" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCustomIamInstanceProfile"></a>

```java
public void resetCustomIamInstanceProfile()
```

##### `resetDbName` <a name="resetDbName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDbSubnetGroupName` <a name="resetDbSubnetGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDbSubnetGroupName"></a>

```java
public void resetDbSubnetGroupName()
```

##### `resetDeleteAutomatedBackups` <a name="resetDeleteAutomatedBackups" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDeleteAutomatedBackups"></a>

```java
public void resetDeleteAutomatedBackups()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetDomainIamRoleName` <a name="resetDomainIamRoleName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDomainIamRoleName"></a>

```java
public void resetDomainIamRoleName()
```

##### `resetEnabledCloudwatchLogsExports` <a name="resetEnabledCloudwatchLogsExports" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEnabledCloudwatchLogsExports"></a>

```java
public void resetEnabledCloudwatchLogsExports()
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetFinalSnapshotIdentifier"></a>

```java
public void resetFinalSnapshotIdentifier()
```

##### `resetIamDatabaseAuthenticationEnabled` <a name="resetIamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIamDatabaseAuthenticationEnabled"></a>

```java
public void resetIamDatabaseAuthenticationEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dbInstance.DbInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifier"></a>

```java
public void resetIdentifier()
```

##### `resetIdentifierPrefix` <a name="resetIdentifierPrefix" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifierPrefix"></a>

```java
public void resetIdentifierPrefix()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktf/provider-aws.dbInstance.DbInstance.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetMaxAllocatedStorage` <a name="resetMaxAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMaxAllocatedStorage"></a>

```java
public void resetMaxAllocatedStorage()
```

##### `resetMonitoringInterval` <a name="resetMonitoringInterval" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringInterval"></a>

```java
public void resetMonitoringInterval()
```

##### `resetMonitoringRoleArn` <a name="resetMonitoringRoleArn" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringRoleArn"></a>

```java
public void resetMonitoringRoleArn()
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMultiAz"></a>

```java
public void resetMultiAz()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetName"></a>

```java
public void resetName()
```

##### `resetNcharCharacterSetName` <a name="resetNcharCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetNcharCharacterSetName"></a>

```java
public void resetNcharCharacterSetName()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-aws.dbInstance.DbInstance.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetOptionGroupName` <a name="resetOptionGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetOptionGroupName"></a>

```java
public void resetOptionGroupName()
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetParameterGroupName"></a>

```java
public void resetParameterGroupName()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPerformanceInsightsEnabled` <a name="resetPerformanceInsightsEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsEnabled"></a>

```java
public void resetPerformanceInsightsEnabled()
```

##### `resetPerformanceInsightsKmsKeyId` <a name="resetPerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsKmsKeyId"></a>

```java
public void resetPerformanceInsightsKmsKeyId()
```

##### `resetPerformanceInsightsRetentionPeriod` <a name="resetPerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsRetentionPeriod"></a>

```java
public void resetPerformanceInsightsRetentionPeriod()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPort"></a>

```java
public void resetPort()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetReplicaMode` <a name="resetReplicaMode" id="@cdktf/provider-aws.dbInstance.DbInstance.resetReplicaMode"></a>

```java
public void resetReplicaMode()
```

##### `resetReplicateSourceDb` <a name="resetReplicateSourceDb" id="@cdktf/provider-aws.dbInstance.DbInstance.resetReplicateSourceDb"></a>

```java
public void resetReplicateSourceDb()
```

##### `resetRestoreToPointInTime` <a name="resetRestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstance.resetRestoreToPointInTime"></a>

```java
public void resetRestoreToPointInTime()
```

##### `resetS3Import` <a name="resetS3Import" id="@cdktf/provider-aws.dbInstance.DbInstance.resetS3Import"></a>

```java
public void resetS3Import()
```

##### `resetSecurityGroupNames` <a name="resetSecurityGroupNames" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSecurityGroupNames"></a>

```java
public void resetSecurityGroupNames()
```

##### `resetSkipFinalSnapshot` <a name="resetSkipFinalSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSkipFinalSnapshot"></a>

```java
public void resetSkipFinalSnapshot()
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSnapshotIdentifier"></a>

```java
public void resetSnapshotIdentifier()
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageEncrypted"></a>

```java
public void resetStorageEncrypted()
```

##### `resetStorageThroughput` <a name="resetStorageThroughput" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageThroughput"></a>

```java
public void resetStorageThroughput()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-aws.dbInstance.DbInstance.resetUsername"></a>

```java
public void resetUsername()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.dbInstance.DbInstance.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dbInstance.DbInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstance;

DbInstance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstance;

DbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstance;

DbInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdate">blueGreenUpdate</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference">DbInstanceBlueGreenUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionActual">engineVersionActual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.latestRestorableTime">latestRestorableTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicas">replicas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTime">restoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference">DbInstanceRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.s3Import">s3Import</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference">DbInstanceS3ImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference">DbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgradeInput">allowMajorVersionUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindowInput">backupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdateInput">blueGreenUpdateInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifierInput">caCertIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetNameInput">characterSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshotInput">copyTagsToSnapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabledInput">customerOwnedIpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfileInput">customIamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupNameInput">dbSubnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackupsInput">deleteAutomatedBackupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleNameInput">domainIamRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExportsInput">enabledCloudwatchLogsExportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabledInput">iamDatabaseAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefixInput">identifierPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClassInput">instanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorageInput">maxAllocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringIntervalInput">monitoringIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArnInput">monitoringRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.multiAzInput">multiAzInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetNameInput">ncharCharacterSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupNameInput">optionGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabledInput">performanceInsightsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyIdInput">performanceInsightsKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriodInput">performanceInsightsRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicaModeInput">replicaModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDbInput">replicateSourceDbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTimeInput">restoreToPointInTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.s3ImportInput">s3ImportInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNamesInput">securityGroupNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshotInput">skipFinalSnapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughputInput">storageThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindow">backupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifier">caCertIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetName">characterSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabled">customerOwnedIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfile">customIamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefix">identifierPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabled">performanceInsightsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicaMode">replicaMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDb">replicateSourceDb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbInstance.DbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dbInstance.DbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstance.DbInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstance.DbInstance.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstance.DbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstance.DbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstance.DbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstance.DbInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.dbInstance.DbInstance.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `blueGreenUpdate`<sup>Required</sup> <a name="blueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdate"></a>

```java
public DbInstanceBlueGreenUpdateOutputReference getBlueGreenUpdate();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference">DbInstanceBlueGreenUpdateOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dbInstance.DbInstance.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `engineVersionActual`<sup>Required</sup> <a name="engineVersionActual" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionActual"></a>

```java
public java.lang.String getEngineVersionActual();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `latestRestorableTime`<sup>Required</sup> <a name="latestRestorableTime" id="@cdktf/provider-aws.dbInstance.DbInstance.property.latestRestorableTime"></a>

```java
public java.lang.String getLatestRestorableTime();
```

- *Type:* java.lang.String

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicas"></a>

```java
public java.util.List<java.lang.String> getReplicas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `restoreToPointInTime`<sup>Required</sup> <a name="restoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTime"></a>

```java
public DbInstanceRestoreToPointInTimeOutputReference getRestoreToPointInTime();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference">DbInstanceRestoreToPointInTimeOutputReference</a>

---

##### `s3Import`<sup>Required</sup> <a name="s3Import" id="@cdktf/provider-aws.dbInstance.DbInstance.property.s3Import"></a>

```java
public DbInstanceS3ImportOutputReference getS3Import();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference">DbInstanceS3ImportOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dbInstance.DbInstance.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timeouts"></a>

```java
public DbInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference">DbInstanceTimeoutsOutputReference</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorageInput"></a>

```java
public java.lang.Number getAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `allowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="allowMajorVersionUpgradeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgradeInput"></a>

```java
public java.lang.Object getAllowMajorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediatelyInput"></a>

```java
public java.lang.Object getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Object getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriodInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `backupWindowInput`<sup>Optional</sup> <a name="backupWindowInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindowInput"></a>

```java
public java.lang.String getBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `blueGreenUpdateInput`<sup>Optional</sup> <a name="blueGreenUpdateInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdateInput"></a>

```java
public DbInstanceBlueGreenUpdate getBlueGreenUpdateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

---

##### `caCertIdentifierInput`<sup>Optional</sup> <a name="caCertIdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifierInput"></a>

```java
public java.lang.String getCaCertIdentifierInput();
```

- *Type:* java.lang.String

---

##### `characterSetNameInput`<sup>Optional</sup> <a name="characterSetNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetNameInput"></a>

```java
public java.lang.String getCharacterSetNameInput();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshotInput`<sup>Optional</sup> <a name="copyTagsToSnapshotInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshotInput"></a>

```java
public java.lang.Object getCopyTagsToSnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customerOwnedIpEnabledInput`<sup>Optional</sup> <a name="customerOwnedIpEnabledInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabledInput"></a>

```java
public java.lang.Object getCustomerOwnedIpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customIamInstanceProfileInput`<sup>Optional</sup> <a name="customIamInstanceProfileInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfileInput"></a>

```java
public java.lang.String getCustomIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `dbSubnetGroupNameInput`<sup>Optional</sup> <a name="dbSubnetGroupNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupNameInput"></a>

```java
public java.lang.String getDbSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `deleteAutomatedBackupsInput`<sup>Optional</sup> <a name="deleteAutomatedBackupsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackupsInput"></a>

```java
public java.lang.Object getDeleteAutomatedBackupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainIamRoleNameInput`<sup>Optional</sup> <a name="domainIamRoleNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleNameInput"></a>

```java
public java.lang.String getDomainIamRoleNameInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `enabledCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enabledCloudwatchLogsExportsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExportsInput"></a>

```java
public java.util.List<java.lang.String> getEnabledCloudwatchLogsExportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifierInput"></a>

```java
public java.lang.String getFinalSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `iamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabledInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabledInput"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `identifierPrefixInput`<sup>Optional</sup> <a name="identifierPrefixInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefixInput"></a>

```java
public java.lang.String getIdentifierPrefixInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClassInput"></a>

```java
public java.lang.String getInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindowInput"></a>

```java
public java.lang.String getMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `maxAllocatedStorageInput`<sup>Optional</sup> <a name="maxAllocatedStorageInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorageInput"></a>

```java
public java.lang.Number getMaxAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `monitoringIntervalInput`<sup>Optional</sup> <a name="monitoringIntervalInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringIntervalInput"></a>

```java
public java.lang.Number getMonitoringIntervalInput();
```

- *Type:* java.lang.Number

---

##### `monitoringRoleArnInput`<sup>Optional</sup> <a name="monitoringRoleArnInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArnInput"></a>

```java
public java.lang.String getMonitoringRoleArnInput();
```

- *Type:* java.lang.String

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.multiAzInput"></a>

```java
public java.lang.Object getMultiAzInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ncharCharacterSetNameInput`<sup>Optional</sup> <a name="ncharCharacterSetNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetNameInput"></a>

```java
public java.lang.String getNcharCharacterSetNameInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `optionGroupNameInput`<sup>Optional</sup> <a name="optionGroupNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupNameInput"></a>

```java
public java.lang.String getOptionGroupNameInput();
```

- *Type:* java.lang.String

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupNameInput"></a>

```java
public java.lang.String getParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `performanceInsightsEnabledInput`<sup>Optional</sup> <a name="performanceInsightsEnabledInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabledInput"></a>

```java
public java.lang.Object getPerformanceInsightsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `performanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="performanceInsightsKmsKeyIdInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyIdInput"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `performanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriodInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriodInput"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessibleInput"></a>

```java
public java.lang.Object getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicaModeInput`<sup>Optional</sup> <a name="replicaModeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicaModeInput"></a>

```java
public java.lang.String getReplicaModeInput();
```

- *Type:* java.lang.String

---

##### `replicateSourceDbInput`<sup>Optional</sup> <a name="replicateSourceDbInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDbInput"></a>

```java
public java.lang.String getReplicateSourceDbInput();
```

- *Type:* java.lang.String

---

##### `restoreToPointInTimeInput`<sup>Optional</sup> <a name="restoreToPointInTimeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTimeInput"></a>

```java
public DbInstanceRestoreToPointInTime getRestoreToPointInTimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

---

##### `s3ImportInput`<sup>Optional</sup> <a name="s3ImportInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.s3ImportInput"></a>

```java
public DbInstanceS3Import getS3ImportInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

---

##### `securityGroupNamesInput`<sup>Optional</sup> <a name="securityGroupNamesInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNamesInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipFinalSnapshotInput`<sup>Optional</sup> <a name="skipFinalSnapshotInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshotInput"></a>

```java
public java.lang.Object getSkipFinalSnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifierInput"></a>

```java
public java.lang.String getSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncryptedInput"></a>

```java
public java.lang.Object getStorageEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageThroughputInput`<sup>Optional</sup> <a name="storageThroughputInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughputInput"></a>

```java
public java.lang.Number getStorageThroughputInput();
```

- *Type:* java.lang.Number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Object getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Object getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `backupWindow`<sup>Required</sup> <a name="backupWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindow"></a>

```java
public java.lang.String getBackupWindow();
```

- *Type:* java.lang.String

---

##### `caCertIdentifier`<sup>Required</sup> <a name="caCertIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifier"></a>

```java
public java.lang.String getCaCertIdentifier();
```

- *Type:* java.lang.String

---

##### `characterSetName`<sup>Required</sup> <a name="characterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetName"></a>

```java
public java.lang.String getCharacterSetName();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshot"></a>

```java
public java.lang.Object getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customerOwnedIpEnabled`<sup>Required</sup> <a name="customerOwnedIpEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabled"></a>

```java
public java.lang.Object getCustomerOwnedIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customIamInstanceProfile`<sup>Required</sup> <a name="customIamInstanceProfile" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfile"></a>

```java
public java.lang.String getCustomIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `deleteAutomatedBackups`<sup>Required</sup> <a name="deleteAutomatedBackups" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackups"></a>

```java
public java.lang.Object getDeleteAutomatedBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainIamRoleName`<sup>Required</sup> <a name="domainIamRoleName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleName"></a>

```java
public java.lang.String getDomainIamRoleName();
```

- *Type:* java.lang.String

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnabledCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabled"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstance.DbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `identifierPrefix`<sup>Required</sup> <a name="identifierPrefix" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefix"></a>

```java
public java.lang.String getIdentifierPrefix();
```

- *Type:* java.lang.String

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClass"></a>

```java
public java.lang.String getInstanceClass();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `maxAllocatedStorage`<sup>Required</sup> <a name="maxAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorage"></a>

```java
public java.lang.Number getMaxAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `monitoringInterval`<sup>Required</sup> <a name="monitoringInterval" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringInterval"></a>

```java
public java.lang.Number getMonitoringInterval();
```

- *Type:* java.lang.Number

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="monitoringRoleArn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArn"></a>

```java
public java.lang.String getMonitoringRoleArn();
```

- *Type:* java.lang.String

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dbInstance.DbInstance.property.multiAz"></a>

```java
public java.lang.Object getMultiAz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ncharCharacterSetName`<sup>Required</sup> <a name="ncharCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetName"></a>

```java
public java.lang.String getNcharCharacterSetName();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupName"></a>

```java
public java.lang.String getOptionGroupName();
```

- *Type:* java.lang.String

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.dbInstance.DbInstance.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `performanceInsightsEnabled`<sup>Required</sup> <a name="performanceInsightsEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabled"></a>

```java
public java.lang.Object getPerformanceInsightsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `performanceInsightsKmsKeyId`<sup>Required</sup> <a name="performanceInsightsKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyId"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyId();
```

- *Type:* java.lang.String

---

##### `performanceInsightsRetentionPeriod`<sup>Required</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriod"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dbInstance.DbInstance.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicaMode`<sup>Required</sup> <a name="replicaMode" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicaMode"></a>

```java
public java.lang.String getReplicaMode();
```

- *Type:* java.lang.String

---

##### `replicateSourceDb`<sup>Required</sup> <a name="replicateSourceDb" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDb"></a>

```java
public java.lang.String getReplicateSourceDb();
```

- *Type:* java.lang.String

---

##### `securityGroupNames`<sup>Required</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNames"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipFinalSnapshot`<sup>Required</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshot"></a>

```java
public java.lang.Object getSkipFinalSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncrypted"></a>

```java
public java.lang.Object getStorageEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageThroughput`<sup>Required</sup> <a name="storageThroughput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughput"></a>

```java
public java.lang.Number getStorageThroughput();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.dbInstance.DbInstance.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceBlueGreenUpdate <a name="DbInstanceBlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceBlueGreenUpdate;

DbInstanceBlueGreenUpdate.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled DbInstance#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled DbInstance#enabled}.

---

### DbInstanceConfig <a name="DbInstanceConfig" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceConfig;

DbInstanceConfig.builder()
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
    .instanceClass(java.lang.String)
//  .allocatedStorage(java.lang.Number)
//  .allowMajorVersionUpgrade(java.lang.Boolean)
//  .allowMajorVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .autoMinorVersionUpgrade(java.lang.Boolean)
//  .autoMinorVersionUpgrade(IResolvable)
//  .availabilityZone(java.lang.String)
//  .backupRetentionPeriod(java.lang.Number)
//  .backupWindow(java.lang.String)
//  .blueGreenUpdate(DbInstanceBlueGreenUpdate)
//  .caCertIdentifier(java.lang.String)
//  .characterSetName(java.lang.String)
//  .copyTagsToSnapshot(java.lang.Boolean)
//  .copyTagsToSnapshot(IResolvable)
//  .customerOwnedIpEnabled(java.lang.Boolean)
//  .customerOwnedIpEnabled(IResolvable)
//  .customIamInstanceProfile(java.lang.String)
//  .dbName(java.lang.String)
//  .dbSubnetGroupName(java.lang.String)
//  .deleteAutomatedBackups(java.lang.Boolean)
//  .deleteAutomatedBackups(IResolvable)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .domain(java.lang.String)
//  .domainIamRoleName(java.lang.String)
//  .enabledCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .iamDatabaseAuthenticationEnabled(java.lang.Boolean)
//  .iamDatabaseAuthenticationEnabled(IResolvable)
//  .id(java.lang.String)
//  .identifier(java.lang.String)
//  .identifierPrefix(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .maintenanceWindow(java.lang.String)
//  .maxAllocatedStorage(java.lang.Number)
//  .monitoringInterval(java.lang.Number)
//  .monitoringRoleArn(java.lang.String)
//  .multiAz(java.lang.Boolean)
//  .multiAz(IResolvable)
//  .name(java.lang.String)
//  .ncharCharacterSetName(java.lang.String)
//  .networkType(java.lang.String)
//  .optionGroupName(java.lang.String)
//  .parameterGroupName(java.lang.String)
//  .password(java.lang.String)
//  .performanceInsightsEnabled(java.lang.Boolean)
//  .performanceInsightsEnabled(IResolvable)
//  .performanceInsightsKmsKeyId(java.lang.String)
//  .performanceInsightsRetentionPeriod(java.lang.Number)
//  .port(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .replicaMode(java.lang.String)
//  .replicateSourceDb(java.lang.String)
//  .restoreToPointInTime(DbInstanceRestoreToPointInTime)
//  .s3Import(DbInstanceS3Import)
//  .securityGroupNames(java.util.List<java.lang.String>)
//  .skipFinalSnapshot(java.lang.Boolean)
//  .skipFinalSnapshot(IResolvable)
//  .snapshotIdentifier(java.lang.String)
//  .storageEncrypted(java.lang.Boolean)
//  .storageEncrypted(IResolvable)
//  .storageThroughput(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DbInstanceTimeouts)
//  .timezone(java.lang.String)
//  .username(java.lang.String)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupWindow">backupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.blueGreenUpdate">blueGreenUpdate</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | blue_green_update block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.caCertIdentifier">caCertIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.characterSetName">characterSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customerOwnedIpEnabled">customerOwnedIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customIamInstanceProfile">customIamInstanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifierPrefix">identifierPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsEnabled">performanceInsightsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicaMode">replicaMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicateSourceDb">replicateSourceDb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.restoreToPointInTime">restoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.s3Import">s3Import</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.instanceClass"></a>

```java
public java.lang.String getInstanceClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}.

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}.

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Object getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Object getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}.

---

##### `backupWindow`<sup>Optional</sup> <a name="backupWindow" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupWindow"></a>

```java
public java.lang.String getBackupWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}.

---

##### `blueGreenUpdate`<sup>Optional</sup> <a name="blueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.blueGreenUpdate"></a>

```java
public DbInstanceBlueGreenUpdate getBlueGreenUpdate();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

blue_green_update block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#blue_green_update DbInstance#blue_green_update}

---

##### `caCertIdentifier`<sup>Optional</sup> <a name="caCertIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.caCertIdentifier"></a>

```java
public java.lang.String getCaCertIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}.

---

##### `characterSetName`<sup>Optional</sup> <a name="characterSetName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.characterSetName"></a>

```java
public java.lang.String getCharacterSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}.

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.copyTagsToSnapshot"></a>

```java
public java.lang.Object getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}.

---

##### `customerOwnedIpEnabled`<sup>Optional</sup> <a name="customerOwnedIpEnabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customerOwnedIpEnabled"></a>

```java
public java.lang.Object getCustomerOwnedIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}.

---

##### `customIamInstanceProfile`<sup>Optional</sup> <a name="customIamInstanceProfile" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customIamInstanceProfile"></a>

```java
public java.lang.String getCustomIamInstanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}.

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}.

---

##### `deleteAutomatedBackups`<sup>Optional</sup> <a name="deleteAutomatedBackups" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deleteAutomatedBackups"></a>

```java
public java.lang.Object getDeleteAutomatedBackups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}.

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="domainIamRoleName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domainIamRoleName"></a>

```java
public java.lang.String getDomainIamRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}.

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.enabledCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnabledCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}.

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iamDatabaseAuthenticationEnabled"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}.

---

##### `identifierPrefix`<sup>Optional</sup> <a name="identifierPrefix" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifierPrefix"></a>

```java
public java.lang.String getIdentifierPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}.

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="maxAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maxAllocatedStorage"></a>

```java
public java.lang.Number getMaxAllocatedStorage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}.

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringInterval"></a>

```java
public java.lang.Number getMonitoringInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}.

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="monitoringRoleArn" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringRoleArn"></a>

```java
public java.lang.String getMonitoringRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.multiAz"></a>

```java
public java.lang.Object getMultiAz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}.

---

##### `ncharCharacterSetName`<sup>Optional</sup> <a name="ncharCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.ncharCharacterSetName"></a>

```java
public java.lang.String getNcharCharacterSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}.

---

##### `optionGroupName`<sup>Optional</sup> <a name="optionGroupName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.optionGroupName"></a>

```java
public java.lang.String getOptionGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}.

---

##### `performanceInsightsEnabled`<sup>Optional</sup> <a name="performanceInsightsEnabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsEnabled"></a>

```java
public java.lang.Object getPerformanceInsightsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}.

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="performanceInsightsKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}.

---

##### `performanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}.

---

##### `replicaMode`<sup>Optional</sup> <a name="replicaMode" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicaMode"></a>

```java
public java.lang.String getReplicaMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}.

---

##### `replicateSourceDb`<sup>Optional</sup> <a name="replicateSourceDb" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicateSourceDb"></a>

```java
public java.lang.String getReplicateSourceDb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}.

---

##### `restoreToPointInTime`<sup>Optional</sup> <a name="restoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.restoreToPointInTime"></a>

```java
public DbInstanceRestoreToPointInTime getRestoreToPointInTime();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_to_point_in_time DbInstance#restore_to_point_in_time}

---

##### `s3Import`<sup>Optional</sup> <a name="s3Import" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.s3Import"></a>

```java
public DbInstanceS3Import getS3Import();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#s3_import DbInstance#s3_import}

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.securityGroupNames"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}.

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.skipFinalSnapshot"></a>

```java
public java.lang.Object getSkipFinalSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}.

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageEncrypted"></a>

```java
public java.lang.Object getStorageEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}.

---

##### `storageThroughput`<sup>Optional</sup> <a name="storageThroughput" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageThroughput"></a>

```java
public java.lang.Number getStorageThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timeouts"></a>

```java
public DbInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timeouts DbInstance#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}.

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}.

---

### DbInstanceRestoreToPointInTime <a name="DbInstanceRestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceRestoreToPointInTime;

DbInstanceRestoreToPointInTime.builder()
//  .restoreTime(java.lang.String)
//  .sourceDbInstanceAutomatedBackupsArn(java.lang.String)
//  .sourceDbInstanceIdentifier(java.lang.String)
//  .sourceDbiResourceId(java.lang.String)
//  .useLatestRestorableTime(java.lang.Boolean)
//  .useLatestRestorableTime(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.restoreTime">restoreTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_time DbInstance#restore_time}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceAutomatedBackupsArn">sourceDbInstanceAutomatedBackupsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceIdentifier">sourceDbInstanceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbiResourceId">sourceDbiResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}. |

---

##### `restoreTime`<sup>Optional</sup> <a name="restoreTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.restoreTime"></a>

```java
public java.lang.String getRestoreTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_time DbInstance#restore_time}.

---

##### `sourceDbInstanceAutomatedBackupsArn`<sup>Optional</sup> <a name="sourceDbInstanceAutomatedBackupsArn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceAutomatedBackupsArn"></a>

```java
public java.lang.String getSourceDbInstanceAutomatedBackupsArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}.

---

##### `sourceDbInstanceIdentifier`<sup>Optional</sup> <a name="sourceDbInstanceIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceIdentifier"></a>

```java
public java.lang.String getSourceDbInstanceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}.

---

##### `sourceDbiResourceId`<sup>Optional</sup> <a name="sourceDbiResourceId" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbiResourceId"></a>

```java
public java.lang.String getSourceDbiResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}.

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.useLatestRestorableTime"></a>

```java
public java.lang.Object getUseLatestRestorableTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}.

---

### DbInstanceS3Import <a name="DbInstanceS3Import" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceS3Import;

DbInstanceS3Import.builder()
    .bucketName(java.lang.String)
    .ingestionRole(java.lang.String)
    .sourceEngine(java.lang.String)
    .sourceEngineVersion(java.lang.String)
//  .bucketPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_name DbInstance#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.ingestionRole">ingestionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ingestion_role DbInstance#ingestion_role}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngine">sourceEngine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine DbInstance#source_engine}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngineVersion">sourceEngineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine_version DbInstance#source_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_prefix DbInstance#bucket_prefix}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_name DbInstance#bucket_name}.

---

##### `ingestionRole`<sup>Required</sup> <a name="ingestionRole" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.ingestionRole"></a>

```java
public java.lang.String getIngestionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ingestion_role DbInstance#ingestion_role}.

---

##### `sourceEngine`<sup>Required</sup> <a name="sourceEngine" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngine"></a>

```java
public java.lang.String getSourceEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine DbInstance#source_engine}.

---

##### `sourceEngineVersion`<sup>Required</sup> <a name="sourceEngineVersion" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngineVersion"></a>

```java
public java.lang.String getSourceEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine_version DbInstance#source_engine_version}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_prefix DbInstance#bucket_prefix}.

---

### DbInstanceTimeouts <a name="DbInstanceTimeouts" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceTimeouts;

DbInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#create DbInstance#create}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete DbInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#update DbInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#create DbInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete DbInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#update DbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceBlueGreenUpdateOutputReference <a name="DbInstanceBlueGreenUpdateOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceBlueGreenUpdateOutputReference;

new DbInstanceBlueGreenUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.internalValue"></a>

```java
public DbInstanceBlueGreenUpdate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

---


### DbInstanceRestoreToPointInTimeOutputReference <a name="DbInstanceRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceRestoreToPointInTimeOutputReference;

new DbInstanceRestoreToPointInTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetRestoreTime">resetRestoreTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceAutomatedBackupsArn">resetSourceDbInstanceAutomatedBackupsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceIdentifier">resetSourceDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbiResourceId">resetSourceDbiResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime">resetUseLatestRestorableTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRestoreTime` <a name="resetRestoreTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetRestoreTime"></a>

```java
public void resetRestoreTime()
```

##### `resetSourceDbInstanceAutomatedBackupsArn` <a name="resetSourceDbInstanceAutomatedBackupsArn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceAutomatedBackupsArn"></a>

```java
public void resetSourceDbInstanceAutomatedBackupsArn()
```

##### `resetSourceDbInstanceIdentifier` <a name="resetSourceDbInstanceIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceIdentifier"></a>

```java
public void resetSourceDbInstanceIdentifier()
```

##### `resetSourceDbiResourceId` <a name="resetSourceDbiResourceId" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbiResourceId"></a>

```java
public void resetSourceDbiResourceId()
```

##### `resetUseLatestRestorableTime` <a name="resetUseLatestRestorableTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```java
public void resetUseLatestRestorableTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTimeInput">restoreTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArnInput">sourceDbInstanceAutomatedBackupsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifierInput">sourceDbInstanceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceIdInput">sourceDbiResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">useLatestRestorableTimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTime">restoreTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArn">sourceDbInstanceAutomatedBackupsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifier">sourceDbInstanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceId">sourceDbiResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restoreTimeInput`<sup>Optional</sup> <a name="restoreTimeInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTimeInput"></a>

```java
public java.lang.String getRestoreTimeInput();
```

- *Type:* java.lang.String

---

##### `sourceDbInstanceAutomatedBackupsArnInput`<sup>Optional</sup> <a name="sourceDbInstanceAutomatedBackupsArnInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArnInput"></a>

```java
public java.lang.String getSourceDbInstanceAutomatedBackupsArnInput();
```

- *Type:* java.lang.String

---

##### `sourceDbInstanceIdentifierInput`<sup>Optional</sup> <a name="sourceDbInstanceIdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifierInput"></a>

```java
public java.lang.String getSourceDbInstanceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceDbiResourceIdInput`<sup>Optional</sup> <a name="sourceDbiResourceIdInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceIdInput"></a>

```java
public java.lang.String getSourceDbiResourceIdInput();
```

- *Type:* java.lang.String

---

##### `useLatestRestorableTimeInput`<sup>Optional</sup> <a name="useLatestRestorableTimeInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```java
public java.lang.Object getUseLatestRestorableTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restoreTime`<sup>Required</sup> <a name="restoreTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTime"></a>

```java
public java.lang.String getRestoreTime();
```

- *Type:* java.lang.String

---

##### `sourceDbInstanceAutomatedBackupsArn`<sup>Required</sup> <a name="sourceDbInstanceAutomatedBackupsArn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArn"></a>

```java
public java.lang.String getSourceDbInstanceAutomatedBackupsArn();
```

- *Type:* java.lang.String

---

##### `sourceDbInstanceIdentifier`<sup>Required</sup> <a name="sourceDbInstanceIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifier"></a>

```java
public java.lang.String getSourceDbInstanceIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceDbiResourceId`<sup>Required</sup> <a name="sourceDbiResourceId" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceId"></a>

```java
public java.lang.String getSourceDbiResourceId();
```

- *Type:* java.lang.String

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```java
public java.lang.Object getUseLatestRestorableTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.internalValue"></a>

```java
public DbInstanceRestoreToPointInTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

---


### DbInstanceS3ImportOutputReference <a name="DbInstanceS3ImportOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceS3ImportOutputReference;

new DbInstanceS3ImportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resetBucketPrefix"></a>

```java
public void resetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRoleInput">ingestionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineInput">sourceEngineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersionInput">sourceEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRole">ingestionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngine">sourceEngine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersion">sourceEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefixInput"></a>

```java
public java.lang.String getBucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `ingestionRoleInput`<sup>Optional</sup> <a name="ingestionRoleInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRoleInput"></a>

```java
public java.lang.String getIngestionRoleInput();
```

- *Type:* java.lang.String

---

##### `sourceEngineInput`<sup>Optional</sup> <a name="sourceEngineInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineInput"></a>

```java
public java.lang.String getSourceEngineInput();
```

- *Type:* java.lang.String

---

##### `sourceEngineVersionInput`<sup>Optional</sup> <a name="sourceEngineVersionInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersionInput"></a>

```java
public java.lang.String getSourceEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

---

##### `ingestionRole`<sup>Required</sup> <a name="ingestionRole" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRole"></a>

```java
public java.lang.String getIngestionRole();
```

- *Type:* java.lang.String

---

##### `sourceEngine`<sup>Required</sup> <a name="sourceEngine" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngine"></a>

```java
public java.lang.String getSourceEngine();
```

- *Type:* java.lang.String

---

##### `sourceEngineVersion`<sup>Required</sup> <a name="sourceEngineVersion" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersion"></a>

```java
public java.lang.String getSourceEngineVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.internalValue"></a>

```java
public DbInstanceS3Import getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

---


### DbInstanceTimeoutsOutputReference <a name="DbInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.db_instance.DbInstanceTimeoutsOutputReference;

new DbInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



