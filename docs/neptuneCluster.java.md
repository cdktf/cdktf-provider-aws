# `neptuneCluster` Submodule <a name="`neptuneCluster` Submodule" id="@cdktf/provider-aws.neptuneCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneCluster <a name="NeptuneCluster" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster aws_neptune_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneCluster;

NeptuneCluster.Builder.create(Construct scope, java.lang.String id)
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
//  .allowMajorVersionUpgrade(java.lang.Boolean)
//  .allowMajorVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .backupRetentionPeriod(java.lang.Number)
//  .clusterIdentifier(java.lang.String)
//  .clusterIdentifierPrefix(java.lang.String)
//  .copyTagsToSnapshot(java.lang.Boolean)
//  .copyTagsToSnapshot(IResolvable)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .enableCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .globalClusterIdentifier(java.lang.String)
//  .iamDatabaseAuthenticationEnabled(java.lang.Boolean)
//  .iamDatabaseAuthenticationEnabled(IResolvable)
//  .iamRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .neptuneClusterParameterGroupName(java.lang.String)
//  .neptuneInstanceParameterGroupName(java.lang.String)
//  .neptuneSubnetGroupName(java.lang.String)
//  .port(java.lang.Number)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .replicationSourceIdentifier(java.lang.String)
//  .serverlessV2ScalingConfiguration(NeptuneClusterServerlessV2ScalingConfiguration)
//  .skipFinalSnapshot(java.lang.Boolean)
//  .skipFinalSnapshot(IResolvable)
//  .snapshotIdentifier(java.lang.String)
//  .storageEncrypted(java.lang.Boolean)
//  .storageEncrypted(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NeptuneClusterTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneClusterParameterGroupName">neptuneClusterParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneInstanceParameterGroupName">neptuneInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneSubnetGroupName">neptuneSubnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.serverlessV2ScalingConfiguration">serverlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | serverless_v2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.clusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}.

---

##### `clusterIdentifierPrefix`<sup>Optional</sup> <a name="clusterIdentifierPrefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.clusterIdentifierPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}.

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}.

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.enableCloudwatchLogsExports"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}.

---

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.globalClusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}.

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.iamDatabaseAuthenticationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.iamRoles"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}.

---

##### `neptuneClusterParameterGroupName`<sup>Optional</sup> <a name="neptuneClusterParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneClusterParameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}.

---

##### `neptuneInstanceParameterGroupName`<sup>Optional</sup> <a name="neptuneInstanceParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneInstanceParameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}.

---

##### `neptuneSubnetGroupName`<sup>Optional</sup> <a name="neptuneSubnetGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.neptuneSubnetGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}.

---

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="replicationSourceIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.replicationSourceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}.

---

##### `serverlessV2ScalingConfiguration`<sup>Optional</sup> <a name="serverlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.serverlessV2ScalingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

serverless_v2_scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#serverless_v2_scaling_configuration NeptuneCluster#serverless_v2_scaling_configuration}

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}.

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.storageEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#timeouts NeptuneCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration">putServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAllowMajorVersionUpgrade">resetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifier">resetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix">resetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot">resetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports">resetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetGlobalClusterIdentifier">resetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled">resetIamDatabaseAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName">resetNeptuneClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneInstanceParameterGroupName">resetNeptuneInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName">resetNeptuneSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier">resetReplicationSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetServerlessV2ScalingConfiguration">resetServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot">resetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putServerlessV2ScalingConfiguration` <a name="putServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration"></a>

```java
public void putServerlessV2ScalingConfiguration(NeptuneClusterServerlessV2ScalingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts"></a>

```java
public void putTimeouts(NeptuneClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

---

##### `resetAllowMajorVersionUpgrade` <a name="resetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAllowMajorVersionUpgrade"></a>

```java
public void resetAllowMajorVersionUpgrade()
```

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod"></a>

```java
public void resetBackupRetentionPeriod()
```

##### `resetClusterIdentifier` <a name="resetClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifier"></a>

```java
public void resetClusterIdentifier()
```

##### `resetClusterIdentifierPrefix` <a name="resetClusterIdentifierPrefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix"></a>

```java
public void resetClusterIdentifierPrefix()
```

##### `resetCopyTagsToSnapshot` <a name="resetCopyTagsToSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot"></a>

```java
public void resetCopyTagsToSnapshot()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetEnableCloudwatchLogsExports` <a name="resetEnableCloudwatchLogsExports" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports"></a>

```java
public void resetEnableCloudwatchLogsExports()
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier"></a>

```java
public void resetFinalSnapshotIdentifier()
```

##### `resetGlobalClusterIdentifier` <a name="resetGlobalClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetGlobalClusterIdentifier"></a>

```java
public void resetGlobalClusterIdentifier()
```

##### `resetIamDatabaseAuthenticationEnabled` <a name="resetIamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled"></a>

```java
public void resetIamDatabaseAuthenticationEnabled()
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamRoles"></a>

```java
public void resetIamRoles()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetNeptuneClusterParameterGroupName` <a name="resetNeptuneClusterParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName"></a>

```java
public void resetNeptuneClusterParameterGroupName()
```

##### `resetNeptuneInstanceParameterGroupName` <a name="resetNeptuneInstanceParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneInstanceParameterGroupName"></a>

```java
public void resetNeptuneInstanceParameterGroupName()
```

##### `resetNeptuneSubnetGroupName` <a name="resetNeptuneSubnetGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName"></a>

```java
public void resetNeptuneSubnetGroupName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow"></a>

```java
public void resetPreferredBackupWindow()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetReplicationSourceIdentifier` <a name="resetReplicationSourceIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier"></a>

```java
public void resetReplicationSourceIdentifier()
```

##### `resetServerlessV2ScalingConfiguration` <a name="resetServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetServerlessV2ScalingConfiguration"></a>

```java
public void resetServerlessV2ScalingConfiguration()
```

##### `resetSkipFinalSnapshot` <a name="resetSkipFinalSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot"></a>

```java
public void resetSkipFinalSnapshot()
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier"></a>

```java
public void resetSnapshotIdentifier()
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetStorageEncrypted"></a>

```java
public void resetStorageEncrypted()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneCluster;

NeptuneCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneCluster;

NeptuneCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneCluster;

NeptuneCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterMembers">clusterMembers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterResourceId">clusterResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.readerEndpoint">readerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfiguration">serverlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference">NeptuneClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgradeInput">allowMajorVersionUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput">clusterIdentifierPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput">copyTagsToSnapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput">enableCloudwatchLogsExportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifierInput">globalClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput">iamDatabaseAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput">neptuneClusterParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupNameInput">neptuneInstanceParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput">neptuneSubnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput">replicationSourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfigurationInput">serverlessV2ScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput">skipFinalSnapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName">neptuneClusterParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupName">neptuneInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName">neptuneSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusterMembers`<sup>Required</sup> <a name="clusterMembers" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterMembers"></a>

```java
public java.util.List<java.lang.String> getClusterMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterResourceId"></a>

```java
public java.lang.String getClusterResourceId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.readerEndpoint"></a>

```java
public java.lang.String getReaderEndpoint();
```

- *Type:* java.lang.String

---

##### `serverlessV2ScalingConfiguration`<sup>Required</sup> <a name="serverlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfiguration"></a>

```java
public NeptuneClusterServerlessV2ScalingConfigurationOutputReference getServerlessV2ScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference">NeptuneClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeouts"></a>

```java
public NeptuneClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a>

---

##### `allowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="allowMajorVersionUpgradeInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgradeInput"></a>

```java
public java.lang.Object getAllowMajorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput"></a>

```java
public java.lang.Object getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierPrefixInput`<sup>Optional</sup> <a name="clusterIdentifierPrefixInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput"></a>

```java
public java.lang.String getClusterIdentifierPrefixInput();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshotInput`<sup>Optional</sup> <a name="copyTagsToSnapshotInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput"></a>

```java
public java.lang.Object getCopyTagsToSnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enableCloudwatchLogsExportsInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput"></a>

```java
public java.lang.String getFinalSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `globalClusterIdentifierInput`<sup>Optional</sup> <a name="globalClusterIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifierInput"></a>

```java
public java.lang.String getGlobalClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `iamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabledInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRolesInput"></a>

```java
public java.util.List<java.lang.String> getIamRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `neptuneClusterParameterGroupNameInput`<sup>Optional</sup> <a name="neptuneClusterParameterGroupNameInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput"></a>

```java
public java.lang.String getNeptuneClusterParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `neptuneInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="neptuneInstanceParameterGroupNameInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupNameInput"></a>

```java
public java.lang.String getNeptuneInstanceParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `neptuneSubnetGroupNameInput`<sup>Optional</sup> <a name="neptuneSubnetGroupNameInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput"></a>

```java
public java.lang.String getNeptuneSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput"></a>

```java
public java.lang.String getPreferredBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `replicationSourceIdentifierInput`<sup>Optional</sup> <a name="replicationSourceIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput"></a>

```java
public java.lang.String getReplicationSourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `serverlessV2ScalingConfigurationInput`<sup>Optional</sup> <a name="serverlessV2ScalingConfigurationInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfigurationInput"></a>

```java
public NeptuneClusterServerlessV2ScalingConfiguration getServerlessV2ScalingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---

##### `skipFinalSnapshotInput`<sup>Optional</sup> <a name="skipFinalSnapshotInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput"></a>

```java
public java.lang.Object getSkipFinalSnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput"></a>

```java
public java.lang.String getSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncryptedInput"></a>

```java
public java.lang.Object getStorageEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Object getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `clusterIdentifierPrefix`<sup>Required</sup> <a name="clusterIdentifierPrefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix"></a>

```java
public java.lang.String getClusterIdentifierPrefix();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot"></a>

```java
public java.lang.Object getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableCloudwatchLogsExports`<sup>Required</sup> <a name="enableCloudwatchLogsExports" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifier"></a>

```java
public java.lang.String getGlobalClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `neptuneClusterParameterGroupName`<sup>Required</sup> <a name="neptuneClusterParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName"></a>

```java
public java.lang.String getNeptuneClusterParameterGroupName();
```

- *Type:* java.lang.String

---

##### `neptuneInstanceParameterGroupName`<sup>Required</sup> <a name="neptuneInstanceParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupName"></a>

```java
public java.lang.String getNeptuneInstanceParameterGroupName();
```

- *Type:* java.lang.String

---

##### `neptuneSubnetGroupName`<sup>Required</sup> <a name="neptuneSubnetGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName"></a>

```java
public java.lang.String getNeptuneSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="replicationSourceIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier"></a>

```java
public java.lang.String getReplicationSourceIdentifier();
```

- *Type:* java.lang.String

---

##### `skipFinalSnapshot`<sup>Required</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot"></a>

```java
public java.lang.Object getSkipFinalSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncrypted"></a>

```java
public java.lang.Object getStorageEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterConfig <a name="NeptuneClusterConfig" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneClusterConfig;

NeptuneClusterConfig.builder()
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
//  .allowMajorVersionUpgrade(java.lang.Boolean)
//  .allowMajorVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .backupRetentionPeriod(java.lang.Number)
//  .clusterIdentifier(java.lang.String)
//  .clusterIdentifierPrefix(java.lang.String)
//  .copyTagsToSnapshot(java.lang.Boolean)
//  .copyTagsToSnapshot(IResolvable)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .enableCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .globalClusterIdentifier(java.lang.String)
//  .iamDatabaseAuthenticationEnabled(java.lang.Boolean)
//  .iamDatabaseAuthenticationEnabled(IResolvable)
//  .iamRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .neptuneClusterParameterGroupName(java.lang.String)
//  .neptuneInstanceParameterGroupName(java.lang.String)
//  .neptuneSubnetGroupName(java.lang.String)
//  .port(java.lang.Number)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .replicationSourceIdentifier(java.lang.String)
//  .serverlessV2ScalingConfiguration(NeptuneClusterServerlessV2ScalingConfiguration)
//  .skipFinalSnapshot(java.lang.Boolean)
//  .skipFinalSnapshot(IResolvable)
//  .snapshotIdentifier(java.lang.String)
//  .storageEncrypted(java.lang.Boolean)
//  .storageEncrypted(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(NeptuneClusterTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix">clusterIdentifierPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName">neptuneClusterParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneInstanceParameterGroupName">neptuneInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName">neptuneSubnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.serverlessV2ScalingConfiguration">serverlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | serverless_v2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Object getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}.

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}.

---

##### `clusterIdentifierPrefix`<sup>Optional</sup> <a name="clusterIdentifierPrefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix"></a>

```java
public java.lang.String getClusterIdentifierPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}.

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot"></a>

```java
public java.lang.Object getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}.

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}.

---

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.globalClusterIdentifier"></a>

```java
public java.lang.String getGlobalClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}.

---

##### `iamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled"></a>

```java
public java.lang.Object getIamDatabaseAuthenticationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}.

---

##### `neptuneClusterParameterGroupName`<sup>Optional</sup> <a name="neptuneClusterParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName"></a>

```java
public java.lang.String getNeptuneClusterParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}.

---

##### `neptuneInstanceParameterGroupName`<sup>Optional</sup> <a name="neptuneInstanceParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneInstanceParameterGroupName"></a>

```java
public java.lang.String getNeptuneInstanceParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}.

---

##### `neptuneSubnetGroupName`<sup>Optional</sup> <a name="neptuneSubnetGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName"></a>

```java
public java.lang.String getNeptuneSubnetGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}.

---

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="replicationSourceIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier"></a>

```java
public java.lang.String getReplicationSourceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}.

---

##### `serverlessV2ScalingConfiguration`<sup>Optional</sup> <a name="serverlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```java
public NeptuneClusterServerlessV2ScalingConfiguration getServerlessV2ScalingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

serverless_v2_scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#serverless_v2_scaling_configuration NeptuneCluster#serverless_v2_scaling_configuration}

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot"></a>

```java
public java.lang.Object getSkipFinalSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}.

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted"></a>

```java
public java.lang.Object getStorageEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.timeouts"></a>

```java
public NeptuneClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#timeouts NeptuneCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}.

---

### NeptuneClusterServerlessV2ScalingConfiguration <a name="NeptuneClusterServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneClusterServerlessV2ScalingConfiguration;

NeptuneClusterServerlessV2ScalingConfiguration.builder()
//  .maxCapacity(java.lang.Number)
//  .minCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#max_capacity NeptuneCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#min_capacity NeptuneCluster#min_capacity}. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#max_capacity NeptuneCluster#max_capacity}.

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#min_capacity NeptuneCluster#min_capacity}.

---

### NeptuneClusterTimeouts <a name="NeptuneClusterTimeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneClusterTimeouts;

NeptuneClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#create NeptuneCluster#create}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#delete NeptuneCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#update NeptuneCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#create NeptuneCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#delete NeptuneCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#update NeptuneCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneClusterServerlessV2ScalingConfigurationOutputReference <a name="NeptuneClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference;

new NeptuneClusterServerlessV2ScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity"></a>

```java
public void resetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```java
public NeptuneClusterServerlessV2ScalingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---


### NeptuneClusterTimeoutsOutputReference <a name="NeptuneClusterTimeoutsOutputReference" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.neptune_cluster.NeptuneClusterTimeoutsOutputReference;

new NeptuneClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



