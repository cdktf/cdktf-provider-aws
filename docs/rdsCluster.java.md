# `rdsCluster` Submodule <a name="`rdsCluster` Submodule" id="@cdktf/provider-aws.rdsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCluster <a name="RdsCluster" id="@cdktf/provider-aws.rdsCluster.RdsCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster aws_rds_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsCluster;

RdsCluster.Builder.create(Construct scope, java.lang.String id)
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
//  .allocatedStorage(java.lang.Number)
//  .allowMajorVersionUpgrade(java.lang.Boolean)
//  .allowMajorVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .backtrackWindow(java.lang.Number)
//  .backupRetentionPeriod(java.lang.Number)
//  .clusterIdentifier(java.lang.String)
//  .clusterIdentifierPrefix(java.lang.String)
//  .clusterMembers(java.util.List<java.lang.String>)
//  .copyTagsToSnapshot(java.lang.Boolean)
//  .copyTagsToSnapshot(IResolvable)
//  .databaseName(java.lang.String)
//  .dbClusterInstanceClass(java.lang.String)
//  .dbClusterParameterGroupName(java.lang.String)
//  .dbInstanceParameterGroupName(java.lang.String)
//  .dbSubnetGroupName(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .enabledCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .enableGlobalWriteForwarding(java.lang.Boolean)
//  .enableGlobalWriteForwarding(IResolvable)
//  .enableHttpEndpoint(java.lang.Boolean)
//  .enableHttpEndpoint(IResolvable)
//  .engine(java.lang.String)
//  .engineMode(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .globalClusterIdentifier(java.lang.String)
//  .iamDatabaseAuthenticationEnabled(java.lang.Boolean)
//  .iamDatabaseAuthenticationEnabled(IResolvable)
//  .iamRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .masterPassword(java.lang.String)
//  .masterUsername(java.lang.String)
//  .networkType(java.lang.String)
//  .port(java.lang.Number)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .replicationSourceIdentifier(java.lang.String)
//  .restoreToPointInTime(RdsClusterRestoreToPointInTime)
//  .s3Import(RdsClusterS3Import)
//  .scalingConfiguration(RdsClusterScalingConfiguration)
//  .serverlessv2ScalingConfiguration(RdsClusterServerlessv2ScalingConfiguration)
//  .skipFinalSnapshot(java.lang.Boolean)
//  .skipFinalSnapshot(IResolvable)
//  .snapshotIdentifier(java.lang.String)
//  .sourceRegion(java.lang.String)
//  .storageEncrypted(java.lang.Boolean)
//  .storageEncrypted(IResolvable)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RdsClusterTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allocated_storage RdsCluster#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#apply_immediately RdsCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#availability_zones RdsCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.backtrackWindow">backtrackWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backtrack_window RdsCluster#backtrack_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.clusterMembers">clusterMembers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_members RdsCluster#cluster_members}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#database_name RdsCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dbClusterInstanceClass">dbClusterInstanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#deletion_protection RdsCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.enableGlobalWriteForwarding">enableGlobalWriteForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.enableHttpEndpoint">enableHttpEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine RdsCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.engineMode">engineMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_mode RdsCluster#engine_mode}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_version RdsCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_roles RdsCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#id RdsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iops RdsCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#kms_key_id RdsCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.masterPassword">masterPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_password RdsCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_username RdsCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#network_type RdsCluster#network_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#port RdsCluster#port}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.restoreToPointInTime">restoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.s3Import">s3Import</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.serverlessv2ScalingConfiguration">serverlessv2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | serverlessv2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_region RdsCluster#source_region}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_type RdsCluster#storage_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags RdsCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags_all RdsCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.allocatedStorage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allocated_storage RdsCluster#allocated_storage}.

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#apply_immediately RdsCluster#apply_immediately}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#availability_zones RdsCluster#availability_zones}.

---

##### `backtrackWindow`<sup>Optional</sup> <a name="backtrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.backtrackWindow"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backtrack_window RdsCluster#backtrack_window}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.clusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}.

---

##### `clusterIdentifierPrefix`<sup>Optional</sup> <a name="clusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.clusterIdentifierPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}.

---

##### `clusterMembers`<sup>Optional</sup> <a name="clusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.clusterMembers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_members RdsCluster#cluster_members}.

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#database_name RdsCluster#database_name}.

---

##### `dbClusterInstanceClass`<sup>Optional</sup> <a name="dbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dbClusterInstanceClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}.

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="dbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dbClusterParameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}.

---

##### `dbInstanceParameterGroupName`<sup>Optional</sup> <a name="dbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dbInstanceParameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}.

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#deletion_protection RdsCluster#deletion_protection}.

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.enabledCloudwatchLogsExports"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}.

---

##### `enableGlobalWriteForwarding`<sup>Optional</sup> <a name="enableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.enableGlobalWriteForwarding"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}.

---

##### `enableHttpEndpoint`<sup>Optional</sup> <a name="enableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.enableHttpEndpoint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine RdsCluster#engine}.

---

##### `engineMode`<sup>Optional</sup> <a name="engineMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.engineMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_mode RdsCluster#engine_mode}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_version RdsCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}.

---

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.globalClusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}.

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.iamDatabaseAuthenticationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.iamRoles"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_roles RdsCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#id RdsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.iops"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iops RdsCluster#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#kms_key_id RdsCluster#kms_key_id}.

---

##### `masterPassword`<sup>Optional</sup> <a name="masterPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.masterPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_password RdsCluster#master_password}.

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.masterUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_username RdsCluster#master_username}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#network_type RdsCluster#network_type}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#port RdsCluster#port}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}.

---

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="replicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.replicationSourceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}.

---

##### `restoreToPointInTime`<sup>Optional</sup> <a name="restoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.restoreToPointInTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_to_point_in_time RdsCluster#restore_to_point_in_time}

---

##### `s3Import`<sup>Optional</sup> <a name="s3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.s3Import"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#s3_import RdsCluster#s3_import}

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.scalingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#scaling_configuration RdsCluster#scaling_configuration}

---

##### `serverlessv2ScalingConfiguration`<sup>Optional</sup> <a name="serverlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.serverlessv2ScalingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

serverlessv2_scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#serverlessv2_scaling_configuration RdsCluster#serverlessv2_scaling_configuration}

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}.

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}.

---

##### `sourceRegion`<sup>Optional</sup> <a name="sourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.sourceRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_region RdsCluster#source_region}.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.storageEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_type RdsCluster#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags RdsCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags_all RdsCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#timeouts RdsCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putRestoreToPointInTime">putRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putS3Import">putS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putScalingConfiguration">putScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putServerlessv2ScalingConfiguration">putServerlessv2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllowMajorVersionUpgrade">resetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetBacktrackWindow">resetBacktrackWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifier">resetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifierPrefix">resetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterMembers">resetClusterMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetCopyTagsToSnapshot">resetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterInstanceClass">resetDbClusterInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterParameterGroupName">resetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbInstanceParameterGroupName">resetDbInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbSubnetGroupName">resetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnabledCloudwatchLogsExports">resetEnabledCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableGlobalWriteForwarding">resetEnableGlobalWriteForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableHttpEndpoint">resetEnableHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineMode">resetEngineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetGlobalClusterIdentifier">resetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamDatabaseAuthenticationEnabled">resetIamDatabaseAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPassword">resetMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUsername">resetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetReplicationSourceIdentifier">resetReplicationSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetRestoreToPointInTime">resetRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetS3Import">resetS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetScalingConfiguration">resetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetServerlessv2ScalingConfiguration">resetServerlessv2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetSkipFinalSnapshot">resetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetSourceRegion">resetSourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRestoreToPointInTime` <a name="putRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putRestoreToPointInTime"></a>

```java
public void putRestoreToPointInTime(RdsClusterRestoreToPointInTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putRestoreToPointInTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---

##### `putS3Import` <a name="putS3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putS3Import"></a>

```java
public void putS3Import(RdsClusterS3Import value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putS3Import.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---

##### `putScalingConfiguration` <a name="putScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putScalingConfiguration"></a>

```java
public void putScalingConfiguration(RdsClusterScalingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---

##### `putServerlessv2ScalingConfiguration` <a name="putServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putServerlessv2ScalingConfiguration"></a>

```java
public void putServerlessv2ScalingConfiguration(RdsClusterServerlessv2ScalingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putServerlessv2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putTimeouts"></a>

```java
public void putTimeouts(RdsClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a>

---

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllocatedStorage"></a>

```java
public void resetAllocatedStorage()
```

##### `resetAllowMajorVersionUpgrade` <a name="resetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllowMajorVersionUpgrade"></a>

```java
public void resetAllowMajorVersionUpgrade()
```

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetBacktrackWindow` <a name="resetBacktrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetBacktrackWindow"></a>

```java
public void resetBacktrackWindow()
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetBackupRetentionPeriod"></a>

```java
public void resetBackupRetentionPeriod()
```

##### `resetClusterIdentifier` <a name="resetClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifier"></a>

```java
public void resetClusterIdentifier()
```

##### `resetClusterIdentifierPrefix` <a name="resetClusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifierPrefix"></a>

```java
public void resetClusterIdentifierPrefix()
```

##### `resetClusterMembers` <a name="resetClusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterMembers"></a>

```java
public void resetClusterMembers()
```

##### `resetCopyTagsToSnapshot` <a name="resetCopyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetCopyTagsToSnapshot"></a>

```java
public void resetCopyTagsToSnapshot()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDbClusterInstanceClass` <a name="resetDbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterInstanceClass"></a>

```java
public void resetDbClusterInstanceClass()
```

##### `resetDbClusterParameterGroupName` <a name="resetDbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterParameterGroupName"></a>

```java
public void resetDbClusterParameterGroupName()
```

##### `resetDbInstanceParameterGroupName` <a name="resetDbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbInstanceParameterGroupName"></a>

```java
public void resetDbInstanceParameterGroupName()
```

##### `resetDbSubnetGroupName` <a name="resetDbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbSubnetGroupName"></a>

```java
public void resetDbSubnetGroupName()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetEnabledCloudwatchLogsExports` <a name="resetEnabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnabledCloudwatchLogsExports"></a>

```java
public void resetEnabledCloudwatchLogsExports()
```

##### `resetEnableGlobalWriteForwarding` <a name="resetEnableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableGlobalWriteForwarding"></a>

```java
public void resetEnableGlobalWriteForwarding()
```

##### `resetEnableHttpEndpoint` <a name="resetEnableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableHttpEndpoint"></a>

```java
public void resetEnableHttpEndpoint()
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineMode` <a name="resetEngineMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineMode"></a>

```java
public void resetEngineMode()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetFinalSnapshotIdentifier"></a>

```java
public void resetFinalSnapshotIdentifier()
```

##### `resetGlobalClusterIdentifier` <a name="resetGlobalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetGlobalClusterIdentifier"></a>

```java
public void resetGlobalClusterIdentifier()
```

##### `resetIamDatabaseAuthenticationEnabled` <a name="resetIamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamDatabaseAuthenticationEnabled"></a>

```java
public void resetIamDatabaseAuthenticationEnabled()
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamRoles"></a>

```java
public void resetIamRoles()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetId"></a>

```java
public void resetId()
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMasterPassword` <a name="resetMasterPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPassword"></a>

```java
public void resetMasterPassword()
```

##### `resetMasterUsername` <a name="resetMasterUsername" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUsername"></a>

```java
public void resetMasterUsername()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredBackupWindow"></a>

```java
public void resetPreferredBackupWindow()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetReplicationSourceIdentifier` <a name="resetReplicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetReplicationSourceIdentifier"></a>

```java
public void resetReplicationSourceIdentifier()
```

##### `resetRestoreToPointInTime` <a name="resetRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetRestoreToPointInTime"></a>

```java
public void resetRestoreToPointInTime()
```

##### `resetS3Import` <a name="resetS3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetS3Import"></a>

```java
public void resetS3Import()
```

##### `resetScalingConfiguration` <a name="resetScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetScalingConfiguration"></a>

```java
public void resetScalingConfiguration()
```

##### `resetServerlessv2ScalingConfiguration` <a name="resetServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetServerlessv2ScalingConfiguration"></a>

```java
public void resetServerlessv2ScalingConfiguration()
```

##### `resetSkipFinalSnapshot` <a name="resetSkipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSkipFinalSnapshot"></a>

```java
public void resetSkipFinalSnapshot()
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSnapshotIdentifier"></a>

```java
public void resetSnapshotIdentifier()
```

##### `resetSourceRegion` <a name="resetSourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSourceRegion"></a>

```java
public void resetSourceRegion()
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageEncrypted"></a>

```java
public void resetStorageEncrypted()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsCluster;

RdsCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsCluster;

RdsCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsCluster;

RdsCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterResourceId">clusterResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionActual">engineVersionActual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.readerEndpoint">readerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTime">restoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference">RdsClusterRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3Import">s3Import</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference">RdsClusterS3ImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference">RdsClusterScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfiguration">serverlessv2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference">RdsClusterServerlessv2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference">RdsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgradeInput">allowMajorVersionUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindowInput">backtrackWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefixInput">clusterIdentifierPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembersInput">clusterMembersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshotInput">copyTagsToSnapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClassInput">dbClusterInstanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupNameInput">dbClusterParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupNameInput">dbInstanceParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupNameInput">dbSubnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExportsInput">enabledCloudwatchLogsExportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwardingInput">enableGlobalWriteForwardingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpointInput">enableHttpEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineModeInput">engineModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifierInput">globalClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabledInput">iamDatabaseAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordInput">masterPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsernameInput">masterUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifierInput">replicationSourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTimeInput">restoreToPointInTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3ImportInput">s3ImportInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfigurationInput">scalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfigurationInput">serverlessv2ScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshotInput">skipFinalSnapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegionInput">sourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindow">backtrackWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembers">clusterMembers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClass">dbClusterInstanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwarding">enableGlobalWriteForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpoint">enableHttpEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineMode">engineMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPassword">masterPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterResourceId"></a>

```java
public java.lang.String getClusterResourceId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `engineVersionActual`<sup>Required</sup> <a name="engineVersionActual" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionActual"></a>

```java
public java.lang.String getEngineVersionActual();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.readerEndpoint"></a>

```java
public java.lang.String getReaderEndpoint();
```

- *Type:* java.lang.String

---

##### `restoreToPointInTime`<sup>Required</sup> <a name="restoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTime"></a>

```java
public RdsClusterRestoreToPointInTimeOutputReference getRestoreToPointInTime();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference">RdsClusterRestoreToPointInTimeOutputReference</a>

---

##### `s3Import`<sup>Required</sup> <a name="s3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3Import"></a>

```java
public RdsClusterS3ImportOutputReference getS3Import();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference">RdsClusterS3ImportOutputReference</a>

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfiguration"></a>

```java
public RdsClusterScalingConfigurationOutputReference getScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference">RdsClusterScalingConfigurationOutputReference</a>

---

##### `serverlessv2ScalingConfiguration`<sup>Required</sup> <a name="serverlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfiguration"></a>

```java
public RdsClusterServerlessv2ScalingConfigurationOutputReference getServerlessv2ScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference">RdsClusterServerlessv2ScalingConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeouts"></a>

```java
public RdsClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference">RdsClusterTimeoutsOutputReference</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorageInput"></a>

```java
public java.lang.Number getAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `allowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="allowMajorVersionUpgradeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgradeInput"></a>

```java
public java.lang.Object getAllowMajorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediatelyInput"></a>

```java
public java.lang.Object getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backtrackWindowInput`<sup>Optional</sup> <a name="backtrackWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindowInput"></a>

```java
public java.lang.Number getBacktrackWindowInput();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriodInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierPrefixInput`<sup>Optional</sup> <a name="clusterIdentifierPrefixInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefixInput"></a>

```java
public java.lang.String getClusterIdentifierPrefixInput();
```

- *Type:* java.lang.String

---

##### `clusterMembersInput`<sup>Optional</sup> <a name="clusterMembersInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembersInput"></a>

```java
public java.util.List<java.lang.String> getClusterMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `copyTagsToSnapshotInput`<sup>Optional</sup> <a name="copyTagsToSnapshotInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshotInput"></a>

```java
public java.lang.Object getCopyTagsToSnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dbClusterInstanceClassInput`<sup>Optional</sup> <a name="dbClusterInstanceClassInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClassInput"></a>

```java
public java.lang.String getDbClusterInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `dbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="dbClusterParameterGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupNameInput"></a>

```java
public java.lang.String getDbClusterParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="dbInstanceParameterGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupNameInput"></a>

```java
public java.lang.String getDbInstanceParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbSubnetGroupNameInput`<sup>Optional</sup> <a name="dbSubnetGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupNameInput"></a>

```java
public java.lang.String getDbSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enabledCloudwatchLogsExportsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExportsInput"></a>

```java
public java.util.List<java.lang.String> getEnabledCloudwatchLogsExportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableGlobalWriteForwardingInput`<sup>Optional</sup> <a name="enableGlobalWriteForwardingInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwardingInput"></a>

```java
public java.lang.Object getEnableGlobalWriteForwardingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttpEndpointInput`<sup>Optional</sup> <a name="enableHttpEndpointInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpointInput"></a>

```java
public java.lang.Object getEnableHttpEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineModeInput`<sup>Optional</sup> <a name="engineModeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineModeInput"></a>

```java
public java.lang.String getEngineModeInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifierInput"></a>

```java
public java.lang.String getFinalSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `globalClusterIdentifierInput`<sup>Optional</sup> <a name="globalClusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifierInput"></a>

```java
public java.lang.String getGlobalClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `iamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabledInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabledInput"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRolesInput"></a>

```java
public java.util.List<java.lang.String> getIamRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `masterPasswordInput`<sup>Optional</sup> <a name="masterPasswordInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordInput"></a>

```java
public java.lang.String getMasterPasswordInput();
```

- *Type:* java.lang.String

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsernameInput"></a>

```java
public java.lang.String getMasterUsernameInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindowInput"></a>

```java
public java.lang.String getPreferredBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `replicationSourceIdentifierInput`<sup>Optional</sup> <a name="replicationSourceIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifierInput"></a>

```java
public java.lang.String getReplicationSourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `restoreToPointInTimeInput`<sup>Optional</sup> <a name="restoreToPointInTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTimeInput"></a>

```java
public RdsClusterRestoreToPointInTime getRestoreToPointInTimeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---

##### `s3ImportInput`<sup>Optional</sup> <a name="s3ImportInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3ImportInput"></a>

```java
public RdsClusterS3Import getS3ImportInput();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---

##### `scalingConfigurationInput`<sup>Optional</sup> <a name="scalingConfigurationInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfigurationInput"></a>

```java
public RdsClusterScalingConfiguration getScalingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---

##### `serverlessv2ScalingConfigurationInput`<sup>Optional</sup> <a name="serverlessv2ScalingConfigurationInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfigurationInput"></a>

```java
public RdsClusterServerlessv2ScalingConfiguration getServerlessv2ScalingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---

##### `skipFinalSnapshotInput`<sup>Optional</sup> <a name="skipFinalSnapshotInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshotInput"></a>

```java
public java.lang.Object getSkipFinalSnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifierInput"></a>

```java
public java.lang.String getSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceRegionInput`<sup>Optional</sup> <a name="sourceRegionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegionInput"></a>

```java
public java.lang.String getSourceRegionInput();
```

- *Type:* java.lang.String

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncryptedInput"></a>

```java
public java.lang.Object getStorageEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Object getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backtrackWindow`<sup>Required</sup> <a name="backtrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindow"></a>

```java
public java.lang.Number getBacktrackWindow();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierPrefix`<sup>Required</sup> <a name="clusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefix"></a>

```java
public java.lang.String getClusterIdentifierPrefix();
```

- *Type:* java.lang.String

---

##### `clusterMembers`<sup>Required</sup> <a name="clusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembers"></a>

```java
public java.util.List<java.lang.String> getClusterMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshot"></a>

```java
public java.lang.Object getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dbClusterInstanceClass`<sup>Required</sup> <a name="dbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClass"></a>

```java
public java.lang.String getDbClusterInstanceClass();
```

- *Type:* java.lang.String

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="dbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupName"></a>

```java
public java.lang.String getDbClusterParameterGroupName();
```

- *Type:* java.lang.String

---

##### `dbInstanceParameterGroupName`<sup>Required</sup> <a name="dbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupName"></a>

```java
public java.lang.String getDbInstanceParameterGroupName();
```

- *Type:* java.lang.String

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnabledCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableGlobalWriteForwarding`<sup>Required</sup> <a name="enableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwarding"></a>

```java
public java.lang.Object getEnableGlobalWriteForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttpEndpoint`<sup>Required</sup> <a name="enableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpoint"></a>

```java
public java.lang.Object getEnableHttpEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineMode`<sup>Required</sup> <a name="engineMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineMode"></a>

```java
public java.lang.String getEngineMode();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifier"></a>

```java
public java.lang.String getGlobalClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabled"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `masterPassword`<sup>Required</sup> <a name="masterPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPassword"></a>

```java
public java.lang.String getMasterPassword();
```

- *Type:* java.lang.String

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="replicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifier"></a>

```java
public java.lang.String getReplicationSourceIdentifier();
```

- *Type:* java.lang.String

---

##### `skipFinalSnapshot`<sup>Required</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshot"></a>

```java
public java.lang.Object getSkipFinalSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncrypted"></a>

```java
public java.lang.Object getStorageEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterConfig <a name="RdsClusterConfig" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterConfig;

RdsClusterConfig.builder()
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
//  .allocatedStorage(java.lang.Number)
//  .allowMajorVersionUpgrade(java.lang.Boolean)
//  .allowMajorVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .backtrackWindow(java.lang.Number)
//  .backupRetentionPeriod(java.lang.Number)
//  .clusterIdentifier(java.lang.String)
//  .clusterIdentifierPrefix(java.lang.String)
//  .clusterMembers(java.util.List<java.lang.String>)
//  .copyTagsToSnapshot(java.lang.Boolean)
//  .copyTagsToSnapshot(IResolvable)
//  .databaseName(java.lang.String)
//  .dbClusterInstanceClass(java.lang.String)
//  .dbClusterParameterGroupName(java.lang.String)
//  .dbInstanceParameterGroupName(java.lang.String)
//  .dbSubnetGroupName(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .enabledCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .enableGlobalWriteForwarding(java.lang.Boolean)
//  .enableGlobalWriteForwarding(IResolvable)
//  .enableHttpEndpoint(java.lang.Boolean)
//  .enableHttpEndpoint(IResolvable)
//  .engine(java.lang.String)
//  .engineMode(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .globalClusterIdentifier(java.lang.String)
//  .iamDatabaseAuthenticationEnabled(java.lang.Boolean)
//  .iamDatabaseAuthenticationEnabled(IResolvable)
//  .iamRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .masterPassword(java.lang.String)
//  .masterUsername(java.lang.String)
//  .networkType(java.lang.String)
//  .port(java.lang.Number)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .replicationSourceIdentifier(java.lang.String)
//  .restoreToPointInTime(RdsClusterRestoreToPointInTime)
//  .s3Import(RdsClusterS3Import)
//  .scalingConfiguration(RdsClusterScalingConfiguration)
//  .serverlessv2ScalingConfiguration(RdsClusterServerlessv2ScalingConfiguration)
//  .skipFinalSnapshot(java.lang.Boolean)
//  .skipFinalSnapshot(IResolvable)
//  .snapshotIdentifier(java.lang.String)
//  .sourceRegion(java.lang.String)
//  .storageEncrypted(java.lang.Boolean)
//  .storageEncrypted(IResolvable)
//  .storageType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RdsClusterTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allocated_storage RdsCluster#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#apply_immediately RdsCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#availability_zones RdsCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backtrackWindow">backtrackWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backtrack_window RdsCluster#backtrack_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterMembers">clusterMembers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_members RdsCluster#cluster_members}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#database_name RdsCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterInstanceClass">dbClusterInstanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#deletion_protection RdsCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableGlobalWriteForwarding">enableGlobalWriteForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableHttpEndpoint">enableHttpEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine RdsCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineMode">engineMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_mode RdsCluster#engine_mode}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_version RdsCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_roles RdsCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#id RdsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iops RdsCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#kms_key_id RdsCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPassword">masterPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_password RdsCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_username RdsCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#network_type RdsCluster#network_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#port RdsCluster#port}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.restoreToPointInTime">restoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.s3Import">s3Import</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.serverlessv2ScalingConfiguration">serverlessv2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | serverlessv2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_region RdsCluster#source_region}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_type RdsCluster#storage_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags RdsCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags_all RdsCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allocated_storage RdsCluster#allocated_storage}.

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Object getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#apply_immediately RdsCluster#apply_immediately}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#availability_zones RdsCluster#availability_zones}.

---

##### `backtrackWindow`<sup>Optional</sup> <a name="backtrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backtrackWindow"></a>

```java
public java.lang.Number getBacktrackWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backtrack_window RdsCluster#backtrack_window}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}.

---

##### `clusterIdentifierPrefix`<sup>Optional</sup> <a name="clusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifierPrefix"></a>

```java
public java.lang.String getClusterIdentifierPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}.

---

##### `clusterMembers`<sup>Optional</sup> <a name="clusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterMembers"></a>

```java
public java.util.List<java.lang.String> getClusterMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_members RdsCluster#cluster_members}.

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.copyTagsToSnapshot"></a>

```java
public java.lang.Object getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#database_name RdsCluster#database_name}.

---

##### `dbClusterInstanceClass`<sup>Optional</sup> <a name="dbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterInstanceClass"></a>

```java
public java.lang.String getDbClusterInstanceClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}.

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="dbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterParameterGroupName"></a>

```java
public java.lang.String getDbClusterParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}.

---

##### `dbInstanceParameterGroupName`<sup>Optional</sup> <a name="dbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbInstanceParameterGroupName"></a>

```java
public java.lang.String getDbInstanceParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}.

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#deletion_protection RdsCluster#deletion_protection}.

---

##### `enabledCloudwatchLogsExports`<sup>Optional</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enabledCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnabledCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}.

---

##### `enableGlobalWriteForwarding`<sup>Optional</sup> <a name="enableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableGlobalWriteForwarding"></a>

```java
public java.lang.Object getEnableGlobalWriteForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}.

---

##### `enableHttpEndpoint`<sup>Optional</sup> <a name="enableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableHttpEndpoint"></a>

```java
public java.lang.Object getEnableHttpEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine RdsCluster#engine}.

---

##### `engineMode`<sup>Optional</sup> <a name="engineMode" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineMode"></a>

```java
public java.lang.String getEngineMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_mode RdsCluster#engine_mode}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_version RdsCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}.

---

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.globalClusterIdentifier"></a>

```java
public java.lang.String getGlobalClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}.

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamDatabaseAuthenticationEnabled"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_roles RdsCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#id RdsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iops RdsCluster#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#kms_key_id RdsCluster#kms_key_id}.

---

##### `masterPassword`<sup>Optional</sup> <a name="masterPassword" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPassword"></a>

```java
public java.lang.String getMasterPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_password RdsCluster#master_password}.

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_username RdsCluster#master_username}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#network_type RdsCluster#network_type}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#port RdsCluster#port}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}.

---

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="replicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.replicationSourceIdentifier"></a>

```java
public java.lang.String getReplicationSourceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}.

---

##### `restoreToPointInTime`<sup>Optional</sup> <a name="restoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.restoreToPointInTime"></a>

```java
public RdsClusterRestoreToPointInTime getRestoreToPointInTime();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_to_point_in_time RdsCluster#restore_to_point_in_time}

---

##### `s3Import`<sup>Optional</sup> <a name="s3Import" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.s3Import"></a>

```java
public RdsClusterS3Import getS3Import();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#s3_import RdsCluster#s3_import}

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.scalingConfiguration"></a>

```java
public RdsClusterScalingConfiguration getScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#scaling_configuration RdsCluster#scaling_configuration}

---

##### `serverlessv2ScalingConfiguration`<sup>Optional</sup> <a name="serverlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.serverlessv2ScalingConfiguration"></a>

```java
public RdsClusterServerlessv2ScalingConfiguration getServerlessv2ScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

serverlessv2_scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#serverlessv2_scaling_configuration RdsCluster#serverlessv2_scaling_configuration}

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.skipFinalSnapshot"></a>

```java
public java.lang.Object getSkipFinalSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}.

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}.

---

##### `sourceRegion`<sup>Optional</sup> <a name="sourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_region RdsCluster#source_region}.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageEncrypted"></a>

```java
public java.lang.Object getStorageEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_type RdsCluster#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags RdsCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags_all RdsCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.timeouts"></a>

```java
public RdsClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#timeouts RdsCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}.

---

### RdsClusterRestoreToPointInTime <a name="RdsClusterRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterRestoreToPointInTime;

RdsClusterRestoreToPointInTime.builder()
    .sourceClusterIdentifier(java.lang.String)
//  .restoreToTime(java.lang.String)
//  .restoreType(java.lang.String)
//  .useLatestRestorableTime(java.lang.Boolean)
//  .useLatestRestorableTime(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.sourceClusterIdentifier">sourceClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_cluster_identifier RdsCluster#source_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreToTime">restoreToTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_to_time RdsCluster#restore_to_time}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreType">restoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_type RdsCluster#restore_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#use_latest_restorable_time RdsCluster#use_latest_restorable_time}. |

---

##### `sourceClusterIdentifier`<sup>Required</sup> <a name="sourceClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.sourceClusterIdentifier"></a>

```java
public java.lang.String getSourceClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_cluster_identifier RdsCluster#source_cluster_identifier}.

---

##### `restoreToTime`<sup>Optional</sup> <a name="restoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreToTime"></a>

```java
public java.lang.String getRestoreToTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_to_time RdsCluster#restore_to_time}.

---

##### `restoreType`<sup>Optional</sup> <a name="restoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreType"></a>

```java
public java.lang.String getRestoreType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_type RdsCluster#restore_type}.

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.useLatestRestorableTime"></a>

```java
public java.lang.Object getUseLatestRestorableTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#use_latest_restorable_time RdsCluster#use_latest_restorable_time}.

---

### RdsClusterS3Import <a name="RdsClusterS3Import" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterS3Import;

RdsClusterS3Import.builder()
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
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#bucket_name RdsCluster#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.ingestionRole">ingestionRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#ingestion_role RdsCluster#ingestion_role}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngine">sourceEngine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_engine RdsCluster#source_engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngineVersion">sourceEngineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_engine_version RdsCluster#source_engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#bucket_prefix RdsCluster#bucket_prefix}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#bucket_name RdsCluster#bucket_name}.

---

##### `ingestionRole`<sup>Required</sup> <a name="ingestionRole" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.ingestionRole"></a>

```java
public java.lang.String getIngestionRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#ingestion_role RdsCluster#ingestion_role}.

---

##### `sourceEngine`<sup>Required</sup> <a name="sourceEngine" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngine"></a>

```java
public java.lang.String getSourceEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_engine RdsCluster#source_engine}.

---

##### `sourceEngineVersion`<sup>Required</sup> <a name="sourceEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngineVersion"></a>

```java
public java.lang.String getSourceEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_engine_version RdsCluster#source_engine_version}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#bucket_prefix RdsCluster#bucket_prefix}.

---

### RdsClusterScalingConfiguration <a name="RdsClusterScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterScalingConfiguration;

RdsClusterScalingConfiguration.builder()
//  .autoPause(java.lang.Boolean)
//  .autoPause(IResolvable)
//  .maxCapacity(java.lang.Number)
//  .minCapacity(java.lang.Number)
//  .secondsUntilAutoPause(java.lang.Number)
//  .timeoutAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.autoPause">autoPause</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#auto_pause RdsCluster#auto_pause}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#max_capacity RdsCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#min_capacity RdsCluster#min_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.secondsUntilAutoPause">secondsUntilAutoPause</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#timeout_action RdsCluster#timeout_action}. |

---

##### `autoPause`<sup>Optional</sup> <a name="autoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.autoPause"></a>

```java
public java.lang.Object getAutoPause();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#auto_pause RdsCluster#auto_pause}.

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#max_capacity RdsCluster#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#min_capacity RdsCluster#min_capacity}.

---

##### `secondsUntilAutoPause`<sup>Optional</sup> <a name="secondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.secondsUntilAutoPause"></a>

```java
public java.lang.Number getSecondsUntilAutoPause();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}.

---

##### `timeoutAction`<sup>Optional</sup> <a name="timeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#timeout_action RdsCluster#timeout_action}.

---

### RdsClusterServerlessv2ScalingConfiguration <a name="RdsClusterServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterServerlessv2ScalingConfiguration;

RdsClusterServerlessv2ScalingConfiguration.builder()
    .maxCapacity(java.lang.Number)
    .minCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#max_capacity RdsCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#min_capacity RdsCluster#min_capacity}. |

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#max_capacity RdsCluster#max_capacity}.

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#min_capacity RdsCluster#min_capacity}.

---

### RdsClusterTimeouts <a name="RdsClusterTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterTimeouts;

RdsClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#create RdsCluster#create}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#delete RdsCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#update RdsCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#create RdsCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#delete RdsCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#update RdsCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterRestoreToPointInTimeOutputReference <a name="RdsClusterRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterRestoreToPointInTimeOutputReference;

new RdsClusterRestoreToPointInTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreToTime">resetRestoreToTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreType">resetRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime">resetUseLatestRestorableTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRestoreToTime` <a name="resetRestoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreToTime"></a>

```java
public void resetRestoreToTime()
```

##### `resetRestoreType` <a name="resetRestoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreType"></a>

```java
public void resetRestoreType()
```

##### `resetUseLatestRestorableTime` <a name="resetUseLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```java
public void resetUseLatestRestorableTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput">restoreToTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput">restoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput">sourceClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">useLatestRestorableTimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTime">restoreToTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreType">restoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier">sourceClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restoreToTimeInput`<sup>Optional</sup> <a name="restoreToTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput"></a>

```java
public java.lang.String getRestoreToTimeInput();
```

- *Type:* java.lang.String

---

##### `restoreTypeInput`<sup>Optional</sup> <a name="restoreTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput"></a>

```java
public java.lang.String getRestoreTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceClusterIdentifierInput`<sup>Optional</sup> <a name="sourceClusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput"></a>

```java
public java.lang.String getSourceClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `useLatestRestorableTimeInput`<sup>Optional</sup> <a name="useLatestRestorableTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```java
public java.lang.Object getUseLatestRestorableTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restoreToTime`<sup>Required</sup> <a name="restoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTime"></a>

```java
public java.lang.String getRestoreToTime();
```

- *Type:* java.lang.String

---

##### `restoreType`<sup>Required</sup> <a name="restoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreType"></a>

```java
public java.lang.String getRestoreType();
```

- *Type:* java.lang.String

---

##### `sourceClusterIdentifier`<sup>Required</sup> <a name="sourceClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier"></a>

```java
public java.lang.String getSourceClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```java
public java.lang.Object getUseLatestRestorableTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.internalValue"></a>

```java
public RdsClusterRestoreToPointInTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---


### RdsClusterS3ImportOutputReference <a name="RdsClusterS3ImportOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterS3ImportOutputReference;

new RdsClusterS3ImportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resetBucketPrefix"></a>

```java
public void resetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRoleInput">ingestionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineInput">sourceEngineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersionInput">sourceEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRole">ingestionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngine">sourceEngine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersion">sourceEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefixInput"></a>

```java
public java.lang.String getBucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `ingestionRoleInput`<sup>Optional</sup> <a name="ingestionRoleInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRoleInput"></a>

```java
public java.lang.String getIngestionRoleInput();
```

- *Type:* java.lang.String

---

##### `sourceEngineInput`<sup>Optional</sup> <a name="sourceEngineInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineInput"></a>

```java
public java.lang.String getSourceEngineInput();
```

- *Type:* java.lang.String

---

##### `sourceEngineVersionInput`<sup>Optional</sup> <a name="sourceEngineVersionInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersionInput"></a>

```java
public java.lang.String getSourceEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

---

##### `ingestionRole`<sup>Required</sup> <a name="ingestionRole" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRole"></a>

```java
public java.lang.String getIngestionRole();
```

- *Type:* java.lang.String

---

##### `sourceEngine`<sup>Required</sup> <a name="sourceEngine" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngine"></a>

```java
public java.lang.String getSourceEngine();
```

- *Type:* java.lang.String

---

##### `sourceEngineVersion`<sup>Required</sup> <a name="sourceEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersion"></a>

```java
public java.lang.String getSourceEngineVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.internalValue"></a>

```java
public RdsClusterS3Import getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---


### RdsClusterScalingConfigurationOutputReference <a name="RdsClusterScalingConfigurationOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterScalingConfigurationOutputReference;

new RdsClusterScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetAutoPause">resetAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause">resetSecondsUntilAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetTimeoutAction">resetTimeoutAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoPause` <a name="resetAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetAutoPause"></a>

```java
public void resetAutoPause()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMinCapacity"></a>

```java
public void resetMinCapacity()
```

##### `resetSecondsUntilAutoPause` <a name="resetSecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```java
public void resetSecondsUntilAutoPause()
```

##### `resetTimeoutAction` <a name="resetTimeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetTimeoutAction"></a>

```java
public void resetTimeoutAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPauseInput">autoPauseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">secondsUntilAutoPauseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPause">autoPause</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause">secondsUntilAutoPause</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoPauseInput`<sup>Optional</sup> <a name="autoPauseInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPauseInput"></a>

```java
public java.lang.Object getAutoPauseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `secondsUntilAutoPauseInput`<sup>Optional</sup> <a name="secondsUntilAutoPauseInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```java
public java.lang.Number getSecondsUntilAutoPauseInput();
```

- *Type:* java.lang.Number

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutActionInput"></a>

```java
public java.lang.String getTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `autoPause`<sup>Required</sup> <a name="autoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPause"></a>

```java
public java.lang.Object getAutoPause();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `secondsUntilAutoPause`<sup>Required</sup> <a name="secondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```java
public java.lang.Number getSecondsUntilAutoPause();
```

- *Type:* java.lang.Number

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.internalValue"></a>

```java
public RdsClusterScalingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---


### RdsClusterServerlessv2ScalingConfigurationOutputReference <a name="RdsClusterServerlessv2ScalingConfigurationOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterServerlessv2ScalingConfigurationOutputReference;

new RdsClusterServerlessv2ScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.internalValue"></a>

```java
public RdsClusterServerlessv2ScalingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---


### RdsClusterTimeoutsOutputReference <a name="RdsClusterTimeoutsOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_cluster.RdsClusterTimeoutsOutputReference;

new RdsClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



