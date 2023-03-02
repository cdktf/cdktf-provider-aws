# `elasticacheReplicationGroup` Submodule <a name="`elasticacheReplicationGroup` Submodule" id="@cdktf/provider-aws.elasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReplicationGroup <a name="ElasticacheReplicationGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group aws_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.Builder.create(Construct scope, java.lang.String id)
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
    .replicationGroupId(java.lang.String)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .atRestEncryptionEnabled(java.lang.Boolean)
//  .atRestEncryptionEnabled(IResolvable)
//  .authToken(java.lang.String)
//  .automaticFailoverEnabled(java.lang.Boolean)
//  .automaticFailoverEnabled(IResolvable)
//  .autoMinorVersionUpgrade(java.lang.String)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .clusterMode(ElasticacheReplicationGroupClusterMode)
//  .dataTieringEnabled(java.lang.Boolean)
//  .dataTieringEnabled(IResolvable)
//  .description(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .globalReplicationGroupId(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .logDeliveryConfiguration(IResolvable)
//  .logDeliveryConfiguration(java.util.List<ElasticacheReplicationGroupLogDeliveryConfiguration>)
//  .maintenanceWindow(java.lang.String)
//  .multiAzEnabled(java.lang.Boolean)
//  .multiAzEnabled(IResolvable)
//  .nodeType(java.lang.String)
//  .notificationTopicArn(java.lang.String)
//  .numberCacheClusters(java.lang.Number)
//  .numCacheClusters(java.lang.Number)
//  .numNodeGroups(java.lang.Number)
//  .parameterGroupName(java.lang.String)
//  .port(java.lang.Number)
//  .preferredCacheClusterAzs(java.util.List<java.lang.String>)
//  .replicasPerNodeGroup(java.lang.Number)
//  .replicationGroupDescription(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .securityGroupNames(java.util.List<java.lang.String>)
//  .snapshotArns(java.util.List<java.lang.String>)
//  .snapshotName(java.lang.String)
//  .snapshotRetentionLimit(java.lang.Number)
//  .snapshotWindow(java.lang.String)
//  .subnetGroupName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ElasticacheReplicationGroupTimeouts)
//  .transitEncryptionEnabled(java.lang.Boolean)
//  .transitEncryptionEnabled(IResolvable)
//  .userGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.authToken">authToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.clusterMode">clusterMode</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | cluster_mode block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dataTieringEnabled">dataTieringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#description ElasticacheReplicationGroup#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#id ElasticacheReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>></code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.multiAzEnabled">multiAzEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numberCacheClusters">numberCacheClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numCacheClusters">numCacheClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#port ElasticacheReplicationGroup#port}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredCacheClusterAzs">preferredCacheClusterAzs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#preferred_cache_cluster_azs ElasticacheReplicationGroup#preferred_cache_cluster_azs}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupDescription">replicationGroupDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.userGroupIds">userGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}.

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.atRestEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}.

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.authToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}.

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.automaticFailoverEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}.

---

##### `clusterMode`<sup>Optional</sup> <a name="clusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.clusterMode"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

cluster_mode block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `dataTieringEnabled`<sup>Optional</sup> <a name="dataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dataTieringEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#description ElasticacheReplicationGroup#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.finalSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}.

---

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="globalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.globalReplicationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#id ElasticacheReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}.

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.logDeliveryConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>>

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_delivery_configuration ElasticacheReplicationGroup#log_delivery_configuration}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.maintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}.

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="multiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.multiAzEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.notificationTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}.

---

##### `numberCacheClusters`<sup>Optional</sup> <a name="numberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numberCacheClusters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}.

---

##### `numCacheClusters`<sup>Optional</sup> <a name="numCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numCacheClusters"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}.

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numNodeGroups"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.parameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#port ElasticacheReplicationGroup#port}.

---

##### `preferredCacheClusterAzs`<sup>Optional</sup> <a name="preferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredCacheClusterAzs"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#preferred_cache_cluster_azs ElasticacheReplicationGroup#preferred_cache_cluster_azs}.

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicasPerNodeGroup"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}.

---

##### `replicationGroupDescription`<sup>Optional</sup> <a name="replicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}.

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.securityGroupNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}.

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}.

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.subnetGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#timeouts ElasticacheReplicationGroup#timeouts}

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}.

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.userGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode">putClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration">putLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled">resetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled">resetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode">resetClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled">resetDataTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetFinalSnapshotIdentifier">resetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId">resetGlobalReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfiguration">resetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled">resetMultiAzEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumberCacheClusters">resetNumberCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters">resetNumCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups">resetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAzs">resetPreferredCacheClusterAzs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup">resetReplicasPerNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupDescription">resetReplicationGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupNames">resetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns">resetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow">resetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSubnetGroupName">resetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled">resetTransitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds">resetUserGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putClusterMode` <a name="putClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode"></a>

```java
public void putClusterMode(ElasticacheReplicationGroupClusterMode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---

##### `putLogDeliveryConfiguration` <a name="putLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration"></a>

```java
public void putLogDeliveryConfiguration(IResolvable OR java.util.List<ElasticacheReplicationGroupLogDeliveryConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts"></a>

```java
public void putTimeouts(ElasticacheReplicationGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a>

---

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAtRestEncryptionEnabled` <a name="resetAtRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled"></a>

```java
public void resetAtRestEncryptionEnabled()
```

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken"></a>

```java
public void resetAuthToken()
```

##### `resetAutomaticFailoverEnabled` <a name="resetAutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled"></a>

```java
public void resetAutomaticFailoverEnabled()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetClusterMode` <a name="resetClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode"></a>

```java
public void resetClusterMode()
```

##### `resetDataTieringEnabled` <a name="resetDataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled"></a>

```java
public void resetDataTieringEnabled()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetFinalSnapshotIdentifier` <a name="resetFinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetFinalSnapshotIdentifier"></a>

```java
public void resetFinalSnapshotIdentifier()
```

##### `resetGlobalReplicationGroupId` <a name="resetGlobalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId"></a>

```java
public void resetGlobalReplicationGroupId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLogDeliveryConfiguration` <a name="resetLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfiguration"></a>

```java
public void resetLogDeliveryConfiguration()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetMultiAzEnabled` <a name="resetMultiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled"></a>

```java
public void resetMultiAzEnabled()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn"></a>

```java
public void resetNotificationTopicArn()
```

##### `resetNumberCacheClusters` <a name="resetNumberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumberCacheClusters"></a>

```java
public void resetNumberCacheClusters()
```

##### `resetNumCacheClusters` <a name="resetNumCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters"></a>

```java
public void resetNumCacheClusters()
```

##### `resetNumNodeGroups` <a name="resetNumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups"></a>

```java
public void resetNumNodeGroups()
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetParameterGroupName"></a>

```java
public void resetParameterGroupName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredCacheClusterAzs` <a name="resetPreferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAzs"></a>

```java
public void resetPreferredCacheClusterAzs()
```

##### `resetReplicasPerNodeGroup` <a name="resetReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup"></a>

```java
public void resetReplicasPerNodeGroup()
```

##### `resetReplicationGroupDescription` <a name="resetReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupDescription"></a>

```java
public void resetReplicationGroupDescription()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSecurityGroupNames` <a name="resetSecurityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupNames"></a>

```java
public void resetSecurityGroupNames()
```

##### `resetSnapshotArns` <a name="resetSnapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns"></a>

```java
public void resetSnapshotArns()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit"></a>

```java
public void resetSnapshotRetentionLimit()
```

##### `resetSnapshotWindow` <a name="resetSnapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow"></a>

```java
public void resetSnapshotWindow()
```

##### `resetSubnetGroupName` <a name="resetSubnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSubnetGroupName"></a>

```java
public void resetSubnetGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitEncryptionEnabled` <a name="resetTransitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled"></a>

```java
public void resetTransitEncryptionEnabled()
```

##### `resetUserGroupIds` <a name="resetUserGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds"></a>

```java
public void resetUserGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterEnabled">clusterEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode">clusterMode</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference">ElasticacheReplicationGroupClusterModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndpointAddress">configurationEndpointAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionActual">engineVersionActual</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList">ElasticacheReplicationGroupLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.memberClusters">memberClusters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndpointAddress">primaryEndpointAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndpointAddress">readerEndpointAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference">ElasticacheReplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput">atRestEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput">authTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput">automaticFailoverEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput">clusterModeInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput">dataTieringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifierInput">finalSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput">globalReplicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationInput">logDeliveryConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput">multiAzEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClustersInput">numberCacheClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput">numCacheClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput">numNodeGroupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzsInput">preferredCacheClusterAzsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput">replicasPerNodeGroupInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput">replicationGroupDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNamesInput">securityGroupNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput">snapshotArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput">snapshotWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput">transitEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput">userGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken">authToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled">multiAzEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClusters">numberCacheClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters">numCacheClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzs">preferredCacheClusterAzs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds">userGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusterEnabled`<sup>Required</sup> <a name="clusterEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterEnabled"></a>

```java
public IResolvable getClusterEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clusterMode`<sup>Required</sup> <a name="clusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode"></a>

```java
public ElasticacheReplicationGroupClusterModeOutputReference getClusterMode();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference">ElasticacheReplicationGroupClusterModeOutputReference</a>

---

##### `configurationEndpointAddress`<sup>Required</sup> <a name="configurationEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndpointAddress"></a>

```java
public java.lang.String getConfigurationEndpointAddress();
```

- *Type:* java.lang.String

---

##### `engineVersionActual`<sup>Required</sup> <a name="engineVersionActual" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionActual"></a>

```java
public java.lang.String getEngineVersionActual();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfiguration"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationList getLogDeliveryConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList">ElasticacheReplicationGroupLogDeliveryConfigurationList</a>

---

##### `memberClusters`<sup>Required</sup> <a name="memberClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.memberClusters"></a>

```java
public java.util.List<java.lang.String> getMemberClusters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primaryEndpointAddress`<sup>Required</sup> <a name="primaryEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndpointAddress"></a>

```java
public java.lang.String getPrimaryEndpointAddress();
```

- *Type:* java.lang.String

---

##### `readerEndpointAddress`<sup>Required</sup> <a name="readerEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndpointAddress"></a>

```java
public java.lang.String getReaderEndpointAddress();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeouts"></a>

```java
public ElasticacheReplicationGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference">ElasticacheReplicationGroupTimeoutsOutputReference</a>

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediatelyInput"></a>

```java
public java.lang.Object getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `atRestEncryptionEnabledInput`<sup>Optional</sup> <a name="atRestEncryptionEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput"></a>

```java
public java.lang.Object getAtRestEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput"></a>

```java
public java.lang.String getAuthTokenInput();
```

- *Type:* java.lang.String

---

##### `automaticFailoverEnabledInput`<sup>Optional</sup> <a name="automaticFailoverEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput"></a>

```java
public java.lang.Object getAutomaticFailoverEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.String getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.String

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterModeInput`<sup>Optional</sup> <a name="clusterModeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput"></a>

```java
public ElasticacheReplicationGroupClusterMode getClusterModeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---

##### `dataTieringEnabledInput`<sup>Optional</sup> <a name="dataTieringEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput"></a>

```java
public java.lang.Object getDataTieringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifierInput`<sup>Optional</sup> <a name="finalSnapshotIdentifierInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifierInput"></a>

```java
public java.lang.String getFinalSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `globalReplicationGroupIdInput`<sup>Optional</sup> <a name="globalReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput"></a>

```java
public java.lang.String getGlobalReplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfigurationInput`<sup>Optional</sup> <a name="logDeliveryConfigurationInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationInput"></a>

```java
public java.lang.Object getLogDeliveryConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindowInput"></a>

```java
public java.lang.String getMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `multiAzEnabledInput`<sup>Optional</sup> <a name="multiAzEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput"></a>

```java
public java.lang.Object getMultiAzEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput"></a>

```java
public java.lang.String getNotificationTopicArnInput();
```

- *Type:* java.lang.String

---

##### `numberCacheClustersInput`<sup>Optional</sup> <a name="numberCacheClustersInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClustersInput"></a>

```java
public java.lang.Number getNumberCacheClustersInput();
```

- *Type:* java.lang.Number

---

##### `numCacheClustersInput`<sup>Optional</sup> <a name="numCacheClustersInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput"></a>

```java
public java.lang.Number getNumCacheClustersInput();
```

- *Type:* java.lang.Number

---

##### `numNodeGroupsInput`<sup>Optional</sup> <a name="numNodeGroupsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput"></a>

```java
public java.lang.Number getNumNodeGroupsInput();
```

- *Type:* java.lang.Number

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupNameInput"></a>

```java
public java.lang.String getParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preferredCacheClusterAzsInput`<sup>Optional</sup> <a name="preferredCacheClusterAzsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzsInput"></a>

```java
public java.util.List<java.lang.String> getPreferredCacheClusterAzsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replicasPerNodeGroupInput`<sup>Optional</sup> <a name="replicasPerNodeGroupInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput"></a>

```java
public java.lang.Number getReplicasPerNodeGroupInput();
```

- *Type:* java.lang.Number

---

##### `replicationGroupDescriptionInput`<sup>Optional</sup> <a name="replicationGroupDescriptionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput"></a>

```java
public java.lang.String getReplicationGroupDescriptionInput();
```

- *Type:* java.lang.String

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```java
public java.lang.String getReplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupNamesInput`<sup>Optional</sup> <a name="securityGroupNamesInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNamesInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArnsInput`<sup>Optional</sup> <a name="snapshotArnsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput"></a>

```java
public java.util.List<java.lang.String> getSnapshotArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput"></a>

```java
public java.lang.Number getSnapshotRetentionLimitInput();
```

- *Type:* java.lang.Number

---

##### `snapshotWindowInput`<sup>Optional</sup> <a name="snapshotWindowInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput"></a>

```java
public java.lang.String getSnapshotWindowInput();
```

- *Type:* java.lang.String

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupNameInput"></a>

```java
public java.lang.String getSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `transitEncryptionEnabledInput`<sup>Optional</sup> <a name="transitEncryptionEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput"></a>

```java
public java.lang.Object getTransitEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userGroupIdsInput`<sup>Optional</sup> <a name="userGroupIdsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getUserGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```java
public java.lang.Object getAtRestEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken"></a>

```java
public java.lang.String getAuthToken();
```

- *Type:* java.lang.String

---

##### `automaticFailoverEnabled`<sup>Required</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```java
public java.lang.Object getAutomaticFailoverEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.String getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataTieringEnabled`<sup>Required</sup> <a name="dataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```java
public java.lang.Object getDataTieringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="globalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```java
public java.lang.String getGlobalReplicationGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `multiAzEnabled`<sup>Required</sup> <a name="multiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled"></a>

```java
public java.lang.Object getMultiAzEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn"></a>

```java
public java.lang.String getNotificationTopicArn();
```

- *Type:* java.lang.String

---

##### `numberCacheClusters`<sup>Required</sup> <a name="numberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClusters"></a>

```java
public java.lang.Number getNumberCacheClusters();
```

- *Type:* java.lang.Number

---

##### `numCacheClusters`<sup>Required</sup> <a name="numCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters"></a>

```java
public java.lang.Number getNumCacheClusters();
```

- *Type:* java.lang.Number

---

##### `numNodeGroups`<sup>Required</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups"></a>

```java
public java.lang.Number getNumNodeGroups();
```

- *Type:* java.lang.Number

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredCacheClusterAzs`<sup>Required</sup> <a name="preferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzs"></a>

```java
public java.util.List<java.lang.String> getPreferredCacheClusterAzs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replicasPerNodeGroup`<sup>Required</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```java
public java.lang.Number getReplicasPerNodeGroup();
```

- *Type:* java.lang.Number

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="replicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```java
public java.lang.String getReplicationGroupDescription();
```

- *Type:* java.lang.String

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupNames`<sup>Required</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNames"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns"></a>

```java
public java.util.List<java.lang.String> getSnapshotArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```java
public java.lang.Object getTransitEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userGroupIds`<sup>Required</sup> <a name="userGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds"></a>

```java
public java.util.List<java.lang.String> getUserGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReplicationGroupClusterMode <a name="ElasticacheReplicationGroupClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroupClusterMode;

ElasticacheReplicationGroupClusterMode.builder()
//  .numNodeGroups(java.lang.Number)
//  .replicasPerNodeGroup(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}. |

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.numNodeGroups"></a>

```java
public java.lang.Number getNumNodeGroups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}.

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.replicasPerNodeGroup"></a>

```java
public java.lang.Number getReplicasPerNodeGroup();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}.

---

### ElasticacheReplicationGroupConfig <a name="ElasticacheReplicationGroupConfig" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroupConfig;

ElasticacheReplicationGroupConfig.builder()
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
    .replicationGroupId(java.lang.String)
//  .applyImmediately(java.lang.Boolean)
//  .applyImmediately(IResolvable)
//  .atRestEncryptionEnabled(java.lang.Boolean)
//  .atRestEncryptionEnabled(IResolvable)
//  .authToken(java.lang.String)
//  .automaticFailoverEnabled(java.lang.Boolean)
//  .automaticFailoverEnabled(IResolvable)
//  .autoMinorVersionUpgrade(java.lang.String)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .clusterMode(ElasticacheReplicationGroupClusterMode)
//  .dataTieringEnabled(java.lang.Boolean)
//  .dataTieringEnabled(IResolvable)
//  .description(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .finalSnapshotIdentifier(java.lang.String)
//  .globalReplicationGroupId(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .logDeliveryConfiguration(IResolvable)
//  .logDeliveryConfiguration(java.util.List<ElasticacheReplicationGroupLogDeliveryConfiguration>)
//  .maintenanceWindow(java.lang.String)
//  .multiAzEnabled(java.lang.Boolean)
//  .multiAzEnabled(IResolvable)
//  .nodeType(java.lang.String)
//  .notificationTopicArn(java.lang.String)
//  .numberCacheClusters(java.lang.Number)
//  .numCacheClusters(java.lang.Number)
//  .numNodeGroups(java.lang.Number)
//  .parameterGroupName(java.lang.String)
//  .port(java.lang.Number)
//  .preferredCacheClusterAzs(java.util.List<java.lang.String>)
//  .replicasPerNodeGroup(java.lang.Number)
//  .replicationGroupDescription(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .securityGroupNames(java.util.List<java.lang.String>)
//  .snapshotArns(java.util.List<java.lang.String>)
//  .snapshotName(java.lang.String)
//  .snapshotRetentionLimit(java.lang.Number)
//  .snapshotWindow(java.lang.String)
//  .subnetGroupName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ElasticacheReplicationGroupTimeouts)
//  .transitEncryptionEnabled(java.lang.Boolean)
//  .transitEncryptionEnabled(IResolvable)
//  .userGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken">authToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode">clusterMode</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | cluster_mode block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#description ElasticacheReplicationGroup#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#id ElasticacheReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>></code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled">multiAzEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numberCacheClusters">numberCacheClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters">numCacheClusters</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#port ElasticacheReplicationGroup#port}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAzs">preferredCacheClusterAzs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#preferred_cache_cluster_azs ElasticacheReplicationGroup#preferred_cache_cluster_azs}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds">userGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}.

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.applyImmediately"></a>

```java
public java.lang.Object getApplyImmediately();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}.

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled"></a>

```java
public java.lang.Object getAtRestEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}.

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken"></a>

```java
public java.lang.String getAuthToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}.

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```java
public java.lang.Object getAutomaticFailoverEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.String getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}.

---

##### `clusterMode`<sup>Optional</sup> <a name="clusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode"></a>

```java
public ElasticacheReplicationGroupClusterMode getClusterMode();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

cluster_mode block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `dataTieringEnabled`<sup>Optional</sup> <a name="dataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled"></a>

```java
public java.lang.Object getDataTieringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#description ElasticacheReplicationGroup#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}.

---

##### `finalSnapshotIdentifier`<sup>Optional</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.finalSnapshotIdentifier"></a>

```java
public java.lang.String getFinalSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}.

---

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="globalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId"></a>

```java
public java.lang.String getGlobalReplicationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#id ElasticacheReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}.

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfiguration"></a>

```java
public java.lang.Object getLogDeliveryConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>>

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_delivery_configuration ElasticacheReplicationGroup#log_delivery_configuration}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}.

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="multiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled"></a>

```java
public java.lang.Object getMultiAzEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn"></a>

```java
public java.lang.String getNotificationTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}.

---

##### `numberCacheClusters`<sup>Optional</sup> <a name="numberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numberCacheClusters"></a>

```java
public java.lang.Number getNumberCacheClusters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}.

---

##### `numCacheClusters`<sup>Optional</sup> <a name="numCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters"></a>

```java
public java.lang.Number getNumCacheClusters();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}.

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups"></a>

```java
public java.lang.Number getNumNodeGroups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#port ElasticacheReplicationGroup#port}.

---

##### `preferredCacheClusterAzs`<sup>Optional</sup> <a name="preferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAzs"></a>

```java
public java.util.List<java.lang.String> getPreferredCacheClusterAzs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#preferred_cache_cluster_azs ElasticacheReplicationGroup#preferred_cache_cluster_azs}.

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup"></a>

```java
public java.lang.Number getReplicasPerNodeGroup();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}.

---

##### `replicationGroupDescription`<sup>Optional</sup> <a name="replicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription"></a>

```java
public java.lang.String getReplicationGroupDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}.

---

##### `securityGroupNames`<sup>Optional</sup> <a name="securityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupNames"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}.

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns"></a>

```java
public java.util.List<java.lang.String> getSnapshotArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}.

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}.

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.timeouts"></a>

```java
public ElasticacheReplicationGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#timeouts ElasticacheReplicationGroup#timeouts}

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled"></a>

```java
public java.lang.Object getTransitEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}.

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds"></a>

```java
public java.util.List<java.lang.String> getUserGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}.

---

### ElasticacheReplicationGroupLogDeliveryConfiguration <a name="ElasticacheReplicationGroupLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfiguration;

ElasticacheReplicationGroupLogDeliveryConfiguration.builder()
    .destination(java.lang.String)
    .destinationType(java.lang.String)
    .logFormat(java.lang.String)
    .logType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination ElasticacheReplicationGroup#destination}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logType">logType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination ElasticacheReplicationGroup#destination}.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}.

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}.

---

### ElasticacheReplicationGroupTimeouts <a name="ElasticacheReplicationGroupTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroupTimeouts;

ElasticacheReplicationGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#create ElasticacheReplicationGroup#create}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#delete ElasticacheReplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#update ElasticacheReplicationGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#create ElasticacheReplicationGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#delete ElasticacheReplicationGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#update ElasticacheReplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReplicationGroupClusterModeOutputReference <a name="ElasticacheReplicationGroupClusterModeOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroupClusterModeOutputReference;

new ElasticacheReplicationGroupClusterModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetNumNodeGroups">resetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetReplicasPerNodeGroup">resetReplicasPerNodeGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumNodeGroups` <a name="resetNumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetNumNodeGroups"></a>

```java
public void resetNumNodeGroups()
```

##### `resetReplicasPerNodeGroup` <a name="resetReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetReplicasPerNodeGroup"></a>

```java
public void resetReplicasPerNodeGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroupsInput">numNodeGroupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroupInput">replicasPerNodeGroupInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numNodeGroupsInput`<sup>Optional</sup> <a name="numNodeGroupsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroupsInput"></a>

```java
public java.lang.Number getNumNodeGroupsInput();
```

- *Type:* java.lang.Number

---

##### `replicasPerNodeGroupInput`<sup>Optional</sup> <a name="replicasPerNodeGroupInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroupInput"></a>

```java
public java.lang.Number getReplicasPerNodeGroupInput();
```

- *Type:* java.lang.Number

---

##### `numNodeGroups`<sup>Required</sup> <a name="numNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroups"></a>

```java
public java.lang.Number getNumNodeGroups();
```

- *Type:* java.lang.Number

---

##### `replicasPerNodeGroup`<sup>Required</sup> <a name="replicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroup"></a>

```java
public java.lang.Number getReplicasPerNodeGroup();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.internalValue"></a>

```java
public ElasticacheReplicationGroupClusterMode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationList <a name="ElasticacheReplicationGroupLogDeliveryConfigurationList" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationList;

new ElasticacheReplicationGroupLogDeliveryConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a>>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference;

new ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormatInput"></a>

```java
public java.lang.String getLogFormatInput();
```

- *Type:* java.lang.String

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration">ElasticacheReplicationGroupLogDeliveryConfiguration</a> OR com.hashicorp.cdktf.IResolvable

---


### ElasticacheReplicationGroupTimeoutsOutputReference <a name="ElasticacheReplicationGroupTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticache_replication_group.ElasticacheReplicationGroupTimeoutsOutputReference;

new ElasticacheReplicationGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



