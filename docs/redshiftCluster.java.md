# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktf/provider-aws.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster aws_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftCluster;

RedshiftCluster.Builder.create(Construct scope, java.lang.String id)
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
    .clusterIdentifier(java.lang.String)
    .nodeType(java.lang.String)
//  .allowVersionUpgrade(java.lang.Boolean)
//  .allowVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .aquaConfigurationStatus(java.lang.String)
//  .automatedSnapshotRetentionPeriod(java.lang.Number)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneRelocationEnabled(java.lang.Boolean)
//  .availabilityZoneRelocationEnabled(IResolvable)
//  .clusterParameterGroupName(java.lang.String)
//  .clusterPublicKey(java.lang.String)
//  .clusterRevisionNumber(java.lang.String)
//  .clusterSecurityGroups(java.util.List<java.lang.String>)
//  .clusterSubnetGroupName(java.lang.String)
//  .clusterType(java.lang.String)
//  .clusterVersion(java.lang.String)
//  .databaseName(java.lang.String)
//  .defaultIamRoleArn(java.lang.String)
//  .elasticIp(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .endpoint(java.lang.String)
//  .enhancedVpcRouting(java.lang.Boolean)
//  .enhancedVpcRouting(IResolvable)
//  .finalSnapshotIdentifier(java.lang.String)
//  .iamRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .logging(RedshiftClusterLogging)
//  .maintenanceTrackName(java.lang.String)
//  .manualSnapshotRetentionPeriod(java.lang.Number)
//  .masterPassword(java.lang.String)
//  .masterUsername(java.lang.String)
//  .numberOfNodes(java.lang.Number)
//  .ownerAccount(java.lang.String)
//  .port(java.lang.Number)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .skipFinalSnapshot(java.lang.Boolean)
//  .skipFinalSnapshot(IResolvable)
//  .snapshotClusterIdentifier(java.lang.String)
//  .snapshotCopy(RedshiftClusterSnapshotCopy)
//  .snapshotIdentifier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RedshiftClusterTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationEnabled">availabilityZoneRelocationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterPublicKey">clusterPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterRevisionNumber">clusterRevisionNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp">elasticIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName">maintenanceTrackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPassword">masterPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes">numberOfNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier">snapshotClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopy">snapshotCopy</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | snapshot_copy block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}.

---

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="allowVersionUpgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}.

---

##### `aquaConfigurationStatus`<sup>Optional</sup> <a name="aquaConfigurationStatus" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}.

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}.

---

##### `availabilityZoneRelocationEnabled`<sup>Optional</sup> <a name="availabilityZoneRelocationEnabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}.

---

##### `clusterParameterGroupName`<sup>Optional</sup> <a name="clusterParameterGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}.

---

##### `clusterPublicKey`<sup>Optional</sup> <a name="clusterPublicKey" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterPublicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}.

---

##### `clusterRevisionNumber`<sup>Optional</sup> <a name="clusterRevisionNumber" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterRevisionNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}.

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="clusterSecurityGroups" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}.

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="clusterSubnetGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}.

---

##### `defaultIamRoleArn`<sup>Optional</sup> <a name="defaultIamRoleArn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.defaultIamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}.

---

##### `elasticIp`<sup>Optional</sup> <a name="elasticIp" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="enhancedVpcRouting" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#logging RedshiftCluster#logging}

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="maintenanceTrackName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}.

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}.

---

##### `masterPassword`<sup>Optional</sup> <a name="masterPassword" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}.

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}.

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}.

---

##### `ownerAccount`<sup>Optional</sup> <a name="ownerAccount" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}.

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}.

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="snapshotClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}.

---

##### `snapshotCopy`<sup>Optional</sup> <a name="snapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopy"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

snapshot_copy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_copy RedshiftCluster#snapshot_copy}

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#timeouts RedshiftCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy">putSnapshotCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">resetAllowVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">resetAquaConfigurationStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">resetAutomatedSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationEnabled">resetAvailabilityZoneRelocationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">resetClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterPublicKey">resetClusterPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterRevisionNumber">resetClusterRevisionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups">resetClusterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">resetClusterSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterVersion">resetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDefaultIamRoleArn">resetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetElasticIp">resetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">resetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">resetMaintenanceTrackName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">resetManualSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPassword">resetMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterUsername">resetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetNumberOfNodes">resetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOwnerAccount">resetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSkipFinalSnapshot">resetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">resetSnapshotClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotCopy">resetSnapshotCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging"></a>

```java
public void putLogging(RedshiftClusterLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

---

##### `putSnapshotCopy` <a name="putSnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy"></a>

```java
public void putSnapshotCopy(RedshiftClusterSnapshotCopy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts"></a>

```java
public void putTimeouts(RedshiftClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

---

##### `resetAllowVersionUpgrade` <a name="resetAllowVersionUpgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade"></a>

```java
public void resetAllowVersionUpgrade()
```

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAquaConfigurationStatus` <a name="resetAquaConfigurationStatus" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus"></a>

```java
public void resetAquaConfigurationStatus()
```

##### `resetAutomatedSnapshotRetentionPeriod` <a name="resetAutomatedSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod"></a>

```java
public void resetAutomatedSnapshotRetentionPeriod()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAvailabilityZoneRelocationEnabled` <a name="resetAvailabilityZoneRelocationEnabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationEnabled"></a>

```java
public void resetAvailabilityZoneRelocationEnabled()
```

##### `resetClusterParameterGroupName` <a name="resetClusterParameterGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName"></a>

```java
public void resetClusterParameterGroupName()
```

##### `resetClusterPublicKey` <a name="resetClusterPublicKey" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterPublicKey"></a>

```java
public void resetClusterPublicKey()
```

##### `resetClusterRevisionNumber` <a name="resetClusterRevisionNumber" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterRevisionNumber"></a>

```java
public void resetClusterRevisionNumber()
```

##### `resetClusterSecurityGroups` <a name="resetClusterSecurityGroups" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups"></a>

```java
public void resetClusterSecurityGroups()
```

##### `resetClusterSubnetGroupName` <a name="resetClusterSubnetGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName"></a>

```java
public void resetClusterSubnetGroupName()
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterType"></a>

```java
public void resetClusterType()
```

##### `resetClusterVersion` <a name="resetClusterVersion" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterVersion"></a>

```java
public void resetClusterVersion()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDefaultIamRoleArn` <a name="resetDefaultIamRoleArn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDefaultIamRoleArn"></a>

```java
public void resetDefaultIamRoleArn()
```

##### `resetElasticIp` <a name="resetElasticIp" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetElasticIp"></a>

```java
public void resetElasticIp()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetEnhancedVpcRouting` <a name="resetEnhancedVpcRouting" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting"></a>

```java
public void resetEnhancedVpcRouting()
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetFinalSnapshotIdentifier"></a>

```java
public void resetFinalSnapshotIdentifier()
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetIamRoles"></a>

```java
public void resetIamRoles()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetMaintenanceTrackName` <a name="resetMaintenanceTrackName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```java
public void resetMaintenanceTrackName()
```

##### `resetManualSnapshotRetentionPeriod` <a name="resetManualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```java
public void resetManualSnapshotRetentionPeriod()
```

##### `resetMasterPassword` <a name="resetMasterPassword" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPassword"></a>

```java
public void resetMasterPassword()
```

##### `resetMasterUsername` <a name="resetMasterUsername" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterUsername"></a>

```java
public void resetMasterUsername()
```

##### `resetNumberOfNodes` <a name="resetNumberOfNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetNumberOfNodes"></a>

```java
public void resetNumberOfNodes()
```

##### `resetOwnerAccount` <a name="resetOwnerAccount" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOwnerAccount"></a>

```java
public void resetOwnerAccount()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetSkipFinalSnapshot` <a name="resetSkipFinalSnapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSkipFinalSnapshot"></a>

```java
public void resetSkipFinalSnapshot()
```

##### `resetSnapshotClusterIdentifier` <a name="resetSnapshotClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```java
public void resetSnapshotClusterIdentifier()
```

##### `resetSnapshotCopy` <a name="resetSnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotCopy"></a>

```java
public void resetSnapshotCopy()
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier"></a>

```java
public void resetSnapshotIdentifier()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftCluster;

RedshiftCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftCluster;

RedshiftCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftCluster;

RedshiftCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNodes">clusterNodes</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList">RedshiftClusterClusterNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference">RedshiftClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopy">snapshotCopy</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference">RedshiftClusterSnapshotCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference">RedshiftClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">allowVersionUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">aquaConfigurationStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">automatedSnapshotRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabledInput">availabilityZoneRelocationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">clusterParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKeyInput">clusterPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumberInput">clusterRevisionNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput">clusterSecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">clusterSubnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArnInput">defaultIamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIpInput">elasticIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">enhancedVpcRoutingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">maintenanceTrackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">manualSnapshotRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordInput">masterPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsernameInput">masterUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">numberOfNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccountInput">ownerAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshotInput">skipFinalSnapshotInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">snapshotClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopyInput">snapshotCopyInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabled">availabilityZoneRelocationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKey">clusterPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumber">clusterRevisionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIp">elasticIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">maintenanceTrackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPassword">masterPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodes">numberOfNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier">snapshotClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusterNodes`<sup>Required</sup> <a name="clusterNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNodes"></a>

```java
public RedshiftClusterClusterNodesList getClusterNodes();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList">RedshiftClusterClusterNodesList</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.logging"></a>

```java
public RedshiftClusterLoggingOutputReference getLogging();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference">RedshiftClusterLoggingOutputReference</a>

---

##### `snapshotCopy`<sup>Required</sup> <a name="snapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopy"></a>

```java
public RedshiftClusterSnapshotCopyOutputReference getSnapshotCopy();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference">RedshiftClusterSnapshotCopyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeouts"></a>

```java
public RedshiftClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference">RedshiftClusterTimeoutsOutputReference</a>

---

##### `allowVersionUpgradeInput`<sup>Optional</sup> <a name="allowVersionUpgradeInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput"></a>

```java
public java.lang.Object getAllowVersionUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediatelyInput"></a>

```java
public java.lang.Object getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aquaConfigurationStatusInput`<sup>Optional</sup> <a name="aquaConfigurationStatusInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput"></a>

```java
public java.lang.String getAquaConfigurationStatusInput();
```

- *Type:* java.lang.String

---

##### `automatedSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="automatedSnapshotRetentionPeriodInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput"></a>

```java
public java.lang.Number getAutomatedSnapshotRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneRelocationEnabledInput`<sup>Optional</sup> <a name="availabilityZoneRelocationEnabledInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabledInput"></a>

```java
public java.lang.Object getAvailabilityZoneRelocationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `clusterParameterGroupNameInput`<sup>Optional</sup> <a name="clusterParameterGroupNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput"></a>

```java
public java.lang.String getClusterParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `clusterPublicKeyInput`<sup>Optional</sup> <a name="clusterPublicKeyInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKeyInput"></a>

```java
public java.lang.String getClusterPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `clusterRevisionNumberInput`<sup>Optional</sup> <a name="clusterRevisionNumberInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumberInput"></a>

```java
public java.lang.String getClusterRevisionNumberInput();
```

- *Type:* java.lang.String

---

##### `clusterSecurityGroupsInput`<sup>Optional</sup> <a name="clusterSecurityGroupsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getClusterSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterSubnetGroupNameInput`<sup>Optional</sup> <a name="clusterSubnetGroupNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput"></a>

```java
public java.lang.String getClusterSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterTypeInput"></a>

```java
public java.lang.String getClusterTypeInput();
```

- *Type:* java.lang.String

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersionInput"></a>

```java
public java.lang.String getClusterVersionInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `defaultIamRoleArnInput`<sup>Optional</sup> <a name="defaultIamRoleArnInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArnInput"></a>

```java
public java.lang.String getDefaultIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `elasticIpInput`<sup>Optional</sup> <a name="elasticIpInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIpInput"></a>

```java
public java.lang.String getElasticIpInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `enhancedVpcRoutingInput`<sup>Optional</sup> <a name="enhancedVpcRoutingInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput"></a>

```java
public java.lang.Object getEnhancedVpcRoutingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifierInput"></a>

```java
public java.lang.String getFinalSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRolesInput"></a>

```java
public java.util.List<java.lang.String> getIamRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.loggingInput"></a>

```java
public RedshiftClusterLogging getLoggingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

---

##### `maintenanceTrackNameInput`<sup>Optional</sup> <a name="maintenanceTrackNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```java
public java.lang.String getMaintenanceTrackNameInput();
```

- *Type:* java.lang.String

---

##### `manualSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriodInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput"></a>

```java
public java.lang.Number getManualSnapshotRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `masterPasswordInput`<sup>Optional</sup> <a name="masterPasswordInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordInput"></a>

```java
public java.lang.String getMasterPasswordInput();
```

- *Type:* java.lang.String

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```java
public java.lang.String getMasterUsernameInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `numberOfNodesInput`<sup>Optional</sup> <a name="numberOfNodesInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodesInput"></a>

```java
public java.lang.Number getNumberOfNodesInput();
```

- *Type:* java.lang.Number

---

##### `ownerAccountInput`<sup>Optional</sup> <a name="ownerAccountInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccountInput"></a>

```java
public java.lang.String getOwnerAccountInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput"></a>

```java
public java.lang.Object getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipFinalSnapshotInput`<sup>Optional</sup> <a name="skipFinalSnapshotInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshotInput"></a>

```java
public java.lang.Object getSkipFinalSnapshotInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotClusterIdentifierInput`<sup>Optional</sup> <a name="snapshotClusterIdentifierInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```java
public java.lang.String getSnapshotClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `snapshotCopyInput`<sup>Optional</sup> <a name="snapshotCopyInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopyInput"></a>

```java
public RedshiftClusterSnapshotCopy getSnapshotCopyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput"></a>

```java
public java.lang.String getSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowVersionUpgrade`<sup>Required</sup> <a name="allowVersionUpgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade"></a>

```java
public java.lang.Object getAllowVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `aquaConfigurationStatus`<sup>Required</sup> <a name="aquaConfigurationStatus" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus"></a>

```java
public java.lang.String getAquaConfigurationStatus();
```

- *Type:* java.lang.String

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getAutomatedSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneRelocationEnabled`<sup>Required</sup> <a name="availabilityZoneRelocationEnabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabled"></a>

```java
public java.lang.Object getAvailabilityZoneRelocationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `clusterParameterGroupName`<sup>Required</sup> <a name="clusterParameterGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName"></a>

```java
public java.lang.String getClusterParameterGroupName();
```

- *Type:* java.lang.String

---

##### `clusterPublicKey`<sup>Required</sup> <a name="clusterPublicKey" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKey"></a>

```java
public java.lang.String getClusterPublicKey();
```

- *Type:* java.lang.String

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="clusterRevisionNumber" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumber"></a>

```java
public java.lang.String getClusterRevisionNumber();
```

- *Type:* java.lang.String

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="clusterSecurityGroups" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getClusterSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="clusterSubnetGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName"></a>

```java
public java.lang.String getClusterSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `defaultIamRoleArn`<sup>Required</sup> <a name="defaultIamRoleArn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArn"></a>

```java
public java.lang.String getDefaultIamRoleArn();
```

- *Type:* java.lang.String

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIp"></a>

```java
public java.lang.String getElasticIp();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting"></a>

```java
public java.lang.Object getEnhancedVpcRouting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="maintenanceTrackName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackName"></a>

```java
public java.lang.String getMaintenanceTrackName();
```

- *Type:* java.lang.String

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getManualSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `masterPassword`<sup>Required</sup> <a name="masterPassword" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPassword"></a>

```java
public java.lang.String getMasterPassword();
```

- *Type:* java.lang.String

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodes"></a>

```java
public java.lang.Number getNumberOfNodes();
```

- *Type:* java.lang.Number

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccount"></a>

```java
public java.lang.String getOwnerAccount();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipFinalSnapshot`<sup>Required</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshot"></a>

```java
public java.lang.Object getSkipFinalSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotClusterIdentifier`<sup>Required</sup> <a name="snapshotClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier"></a>

```java
public java.lang.String getSnapshotClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterClusterNodes <a name="RedshiftClusterClusterNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterClusterNodes;

RedshiftClusterClusterNodes.builder()
    .build();
```


### RedshiftClusterConfig <a name="RedshiftClusterConfig" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterConfig;

RedshiftClusterConfig.builder()
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
    .clusterIdentifier(java.lang.String)
    .nodeType(java.lang.String)
//  .allowVersionUpgrade(java.lang.Boolean)
//  .allowVersionUpgrade(IResolvable)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .aquaConfigurationStatus(java.lang.String)
//  .automatedSnapshotRetentionPeriod(java.lang.Number)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneRelocationEnabled(java.lang.Boolean)
//  .availabilityZoneRelocationEnabled(IResolvable)
//  .clusterParameterGroupName(java.lang.String)
//  .clusterPublicKey(java.lang.String)
//  .clusterRevisionNumber(java.lang.String)
//  .clusterSecurityGroups(java.util.List<java.lang.String>)
//  .clusterSubnetGroupName(java.lang.String)
//  .clusterType(java.lang.String)
//  .clusterVersion(java.lang.String)
//  .databaseName(java.lang.String)
//  .defaultIamRoleArn(java.lang.String)
//  .elasticIp(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .endpoint(java.lang.String)
//  .enhancedVpcRouting(java.lang.Boolean)
//  .enhancedVpcRouting(IResolvable)
//  .finalSnapshotIdentifier(java.lang.String)
//  .iamRoles(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .logging(RedshiftClusterLogging)
//  .maintenanceTrackName(java.lang.String)
//  .manualSnapshotRetentionPeriod(java.lang.Number)
//  .masterPassword(java.lang.String)
//  .masterUsername(java.lang.String)
//  .numberOfNodes(java.lang.Number)
//  .ownerAccount(java.lang.String)
//  .port(java.lang.Number)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .skipFinalSnapshot(java.lang.Boolean)
//  .skipFinalSnapshot(IResolvable)
//  .snapshotClusterIdentifier(java.lang.String)
//  .snapshotCopy(RedshiftClusterSnapshotCopy)
//  .snapshotIdentifier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RedshiftClusterTimeouts)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationEnabled">availabilityZoneRelocationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterPublicKey">clusterPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterRevisionNumber">clusterRevisionNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.elasticIp">elasticIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">maintenanceTrackName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPassword">masterPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">numberOfNodes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.skipFinalSnapshot">skipFinalSnapshot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">snapshotClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotCopy">snapshotCopy</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | snapshot_copy block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}.

---

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="allowVersionUpgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```java
public java.lang.Object getAllowVersionUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}.

---

##### `aquaConfigurationStatus`<sup>Optional</sup> <a name="aquaConfigurationStatus" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```java
public java.lang.String getAquaConfigurationStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}.

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getAutomatedSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}.

---

##### `availabilityZoneRelocationEnabled`<sup>Optional</sup> <a name="availabilityZoneRelocationEnabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationEnabled"></a>

```java
public java.lang.Object getAvailabilityZoneRelocationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}.

---

##### `clusterParameterGroupName`<sup>Optional</sup> <a name="clusterParameterGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```java
public java.lang.String getClusterParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}.

---

##### `clusterPublicKey`<sup>Optional</sup> <a name="clusterPublicKey" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterPublicKey"></a>

```java
public java.lang.String getClusterPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}.

---

##### `clusterRevisionNumber`<sup>Optional</sup> <a name="clusterRevisionNumber" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterRevisionNumber"></a>

```java
public java.lang.String getClusterRevisionNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}.

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="clusterSecurityGroups" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getClusterSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}.

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="clusterSubnetGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```java
public java.lang.String getClusterSubnetGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}.

---

##### `defaultIamRoleArn`<sup>Optional</sup> <a name="defaultIamRoleArn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.defaultIamRoleArn"></a>

```java
public java.lang.String getDefaultIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}.

---

##### `elasticIp`<sup>Optional</sup> <a name="elasticIp" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```java
public java.lang.String getElasticIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="enhancedVpcRouting" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```java
public java.lang.Object getEnhancedVpcRouting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.logging"></a>

```java
public RedshiftClusterLogging getLogging();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#logging RedshiftCluster#logging}

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="maintenanceTrackName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```java
public java.lang.String getMaintenanceTrackName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}.

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getManualSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}.

---

##### `masterPassword`<sup>Optional</sup> <a name="masterPassword" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPassword"></a>

```java
public java.lang.String getMasterPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}.

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}.

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```java
public java.lang.Number getNumberOfNodes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}.

---

##### `ownerAccount`<sup>Optional</sup> <a name="ownerAccount" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```java
public java.lang.String getOwnerAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}.

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}.

---

##### `skipFinalSnapshot`<sup>Optional</sup> <a name="skipFinalSnapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.skipFinalSnapshot"></a>

```java
public java.lang.Object getSkipFinalSnapshot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}.

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="snapshotClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```java
public java.lang.String getSnapshotClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}.

---

##### `snapshotCopy`<sup>Optional</sup> <a name="snapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotCopy"></a>

```java
public RedshiftClusterSnapshotCopy getSnapshotCopy();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

snapshot_copy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_copy RedshiftCluster#snapshot_copy}

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.timeouts"></a>

```java
public RedshiftClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#timeouts RedshiftCluster#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}.

---

### RedshiftClusterLogging <a name="RedshiftClusterLogging" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterLogging;

RedshiftClusterLogging.builder()
    .enable(java.lang.Boolean)
    .enable(IResolvable)
//  .bucketName(java.lang.String)
//  .logDestinationType(java.lang.String)
//  .logExports(java.util.List<java.lang.String>)
//  .s3KeyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enable RedshiftCluster#enable}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#bucket_name RedshiftCluster#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logDestinationType">logDestinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logExports">logExports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_exports RedshiftCluster#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enable RedshiftCluster#enable}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

##### `logDestinationType`<sup>Optional</sup> <a name="logDestinationType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logDestinationType"></a>

```java
public java.lang.String getLogDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

##### `logExports`<sup>Optional</sup> <a name="logExports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logExports"></a>

```java
public java.util.List<java.lang.String> getLogExports();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

### RedshiftClusterSnapshotCopy <a name="RedshiftClusterSnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterSnapshotCopy;

RedshiftClusterSnapshotCopy.builder()
    .destinationRegion(java.lang.String)
//  .grantName(java.lang.String)
//  .retentionPeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#destination_region RedshiftCluster#destination_region}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.grantName">grantName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#grant_name RedshiftCluster#grant_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#retention_period RedshiftCluster#retention_period}. |

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#destination_region RedshiftCluster#destination_region}.

---

##### `grantName`<sup>Optional</sup> <a name="grantName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.grantName"></a>

```java
public java.lang.String getGrantName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#grant_name RedshiftCluster#grant_name}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#retention_period RedshiftCluster#retention_period}.

---

### RedshiftClusterTimeouts <a name="RedshiftClusterTimeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterTimeouts;

RedshiftClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#create RedshiftCluster#create}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#delete RedshiftCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#update RedshiftCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#create RedshiftCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#delete RedshiftCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#update RedshiftCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterClusterNodesList <a name="RedshiftClusterClusterNodesList" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterClusterNodesList;

new RedshiftClusterClusterNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get"></a>

```java
public RedshiftClusterClusterNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RedshiftClusterClusterNodesOutputReference <a name="RedshiftClusterClusterNodesOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterClusterNodesOutputReference;

new RedshiftClusterClusterNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.nodeRole">nodeRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes">RedshiftClusterClusterNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeRole`<sup>Required</sup> <a name="nodeRole" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.nodeRole"></a>

```java
public java.lang.String getNodeRole();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.internalValue"></a>

```java
public RedshiftClusterClusterNodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes">RedshiftClusterClusterNodes</a>

---


### RedshiftClusterLoggingOutputReference <a name="RedshiftClusterLoggingOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterLoggingOutputReference;

new RedshiftClusterLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogDestinationType">resetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogExports">resetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetLogDestinationType` <a name="resetLogDestinationType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogDestinationType"></a>

```java
public void resetLogDestinationType()
```

##### `resetLogExports` <a name="resetLogExports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogExports"></a>

```java
public void resetLogExports()
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationTypeInput">logDestinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExportsInput">logExportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationType">logDestinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExports">logExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logDestinationTypeInput`<sup>Optional</sup> <a name="logDestinationTypeInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationTypeInput"></a>

```java
public java.lang.String getLogDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `logExportsInput`<sup>Optional</sup> <a name="logExportsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExportsInput"></a>

```java
public java.util.List<java.lang.String> getLogExportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logDestinationType`<sup>Required</sup> <a name="logDestinationType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationType"></a>

```java
public java.lang.String getLogDestinationType();
```

- *Type:* java.lang.String

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExports"></a>

```java
public java.util.List<java.lang.String> getLogExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.internalValue"></a>

```java
public RedshiftClusterLogging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

---


### RedshiftClusterSnapshotCopyOutputReference <a name="RedshiftClusterSnapshotCopyOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterSnapshotCopyOutputReference;

new RedshiftClusterSnapshotCopyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetGrantName">resetGrantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrantName` <a name="resetGrantName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetGrantName"></a>

```java
public void resetGrantName()
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetRetentionPeriod"></a>

```java
public void resetRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegionInput">destinationRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantNameInput">grantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantName">grantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegionInput"></a>

```java
public java.lang.String getDestinationRegionInput();
```

- *Type:* java.lang.String

---

##### `grantNameInput`<sup>Optional</sup> <a name="grantNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantNameInput"></a>

```java
public java.lang.String getGrantNameInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriodInput"></a>

```java
public java.lang.Number getRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

---

##### `grantName`<sup>Required</sup> <a name="grantName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantName"></a>

```java
public java.lang.String getGrantName();
```

- *Type:* java.lang.String

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.internalValue"></a>

```java
public RedshiftClusterSnapshotCopy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

---


### RedshiftClusterTimeoutsOutputReference <a name="RedshiftClusterTimeoutsOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_cluster.RedshiftClusterTimeoutsOutputReference;

new RedshiftClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



